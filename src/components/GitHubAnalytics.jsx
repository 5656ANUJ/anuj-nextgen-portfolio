import { useState, useEffect } from 'react';
import { Github, Users, GitBranch, Star, Calendar, Activity, Code } from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);
const GitHubAnalytics = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [profileRef, profileVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [heatmapRef, heatmapVisible] = useScrollAnimation();
  const [streakRef, streakVisible] = useScrollAnimation();
  const [chartsRef, chartsVisible] = useScrollAnimation();
  const [languagesRef, languagesVisible] = useScrollAnimation();
  const [githubData, setGithubData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [repoLanguages, setRepoLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contributionData, setContributionData] = useState([]);
  const username = "5656ANUJ";
  const githubToken = "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";
  const fetchContributionData = async () => {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;
    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
          variables: {
            username
          }
        })
      });
      if (!response.ok) {
        throw new Error(`GraphQL request failed: ${response.status}`);
      }
      const data = await response.json();
      if (data.errors) {
        throw new Error(`GraphQL errors: ${data.errors.map(e => e.message).join(', ')}`);
      }
      const calendar = data.data.user.contributionsCollection.contributionCalendar;
      const contributions = [];
      calendar.weeks.forEach(week => {
        week.contributionDays.forEach(day => {
          contributions.push({
            date: new Date(day.date),
            count: day.contributionCount,
            level: day.contributionCount === 0 ? 0 : day.contributionCount <= 3 ? 1 : day.contributionCount <= 6 ? 2 : day.contributionCount <= 9 ? 3 : 4
          });
        });
      });
      return contributions;
    } catch (error) {
      console.error('Error fetching contribution data:', error);
      // Fallback to empty array if GraphQL fails
      return [];
    }
  };
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user profile data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Fetch repositories data
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();

        // Fetch language data for each repository
        const languagePromises = reposData.map(async repo => {
          try {
            const langResponse = await fetch(repo.languages_url);
            if (langResponse.ok) {
              const langData = await langResponse.json();
              return {
                repo: repo.name,
                languages: langData
              };
            }
            return {
              repo: repo.name,
              languages: {}
            };
          } catch (err) {
            console.log(`Failed to fetch languages for ${repo.name}`);
            return {
              repo: repo.name,
              languages: {}
            };
          }
        });
        const languageResults = await Promise.all(languagePromises);

        // Process language data
        const allLanguages = {};
        languageResults.forEach(({
          languages
        }) => {
          Object.entries(languages).forEach(([lang, bytes]) => {
            allLanguages[lang] = (allLanguages[lang] || 0) + bytes;
          });
        });
        const sortedLanguages = Object.entries(allLanguages).sort(([, a], [, b]) => b - a).slice(0, 8).map(([lang, bytes]) => ({
          name: lang,
          bytes,
          percentage: Math.round(bytes / Object.values(allLanguages).reduce((a, b) => a + b, 0) * 100)
        }));

        // Fetch real contribution data
        const contributions = await fetchContributionData();
        setGithubData(userData);
        setRepositories(reposData);
        setRepoLanguages(sortedLanguages);
        setContributionData(contributions);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);
  if (loading) {
    return <section id="github" className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-xl">Loading GitHub Analytics...</p>
        </div>
      </section>;
  }
  if (error) {
    return <section id="github" className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">Error loading GitHub data: {error}</p>
          <p className="text-gray-300">Please check your internet connection and try again.</p>
        </div>
      </section>;
  }

  // Calculate repository statistics
  const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0);
  const publicRepos = repositories.filter(repo => !repo.private).length;
  const forkedRepos = repositories.filter(repo => repo.fork).length;
  const originalRepos = repositories.filter(repo => !repo.fork).length;
  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);

  // Group contribution data by weeks for heatmap
  const getWeeksData = () => {
    const weeks = [];
    let currentWeek = [];
    contributionData.forEach((day, index) => {
      const dayOfWeek = day.date.getDay();
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
      currentWeek.push(day);
      if (index === contributionData.length - 1) {
        weeks.push(currentWeek);
      }
    });
    return weeks;
  };
  const weeksData = getWeeksData();
  const getContributionColor = level => {
    const colors = {
      0: '#161b22',
      1: '#0e4429',
      2: '#006d32',
      3: '#26a641',
      4: '#39d353'
    };
    return colors[level] || colors[0];
  };
  const getLanguageColor = index => {
    const colors = ['#F7DF1E',
    // JavaScript
    '#61DAFB',
    // React/TypeScript
    '#E34F26',
    // HTML
    '#1572B6',
    // CSS
    '#3776AB',
    // Python
    '#6B7280',
    // Other
    '#10B981',
    // Green
    '#8B5CF6' // Purple
    ];
    return colors[index % colors.length];
  };

  // Chart data
  const contributionChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Activity',
      data: Array.from({
        length: 12
      }, (_, month) => {
        const monthContributions = contributionData.filter(day => day.date.getMonth() === month).reduce((sum, day) => sum + day.count, 0);
        return monthContributions;
      }),
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };
  const repoData = {
    labels: ['Public', 'Forked', 'Original', 'Total Stars'],
    datasets: [{
      label: 'Repository Stats',
      data: [publicRepos, forkedRepos, originalRepos, totalStars],
      backgroundColor: ['rgba(34, 197, 94, 0.8)', 'rgba(168, 85, 247, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(251, 191, 36, 0.8)'],
      borderColor: ['rgb(34, 197, 94)', 'rgb(168, 85, 247)', 'rgb(59, 130, 246)', 'rgb(251, 191, 36)'],
      borderWidth: 2
    }]
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#E5E7EB'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#9CA3AF'
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.1)'
        }
      },
      y: {
        ticks: {
          color: '#9CA3AF'
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.1)'
        }
      }
    }
  };
  return <section id="github" className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            GitHub <span className="gradient-text-animate bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights from my GitHub profile and coding journey
          </p>
        </div>

        {/* Profile Section */}
        <div ref={profileRef} className={`scroll-animate scroll-animate-delay-200 ${profileVisible ? 'animate-in' : ''}`}>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img src={githubData.avatar_url} alt="GitHub Profile" className="w-32 h-32 rounded-full border-4 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105" />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <Activity size={16} className="text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">@{githubData.login}</h3>
                <p className="text-gray-300 mb-2">{githubData.name}</p>
                {githubData.bio && <p className="text-gray-400 mb-4">{githubData.bio}</p>}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                  {githubData.location && <span>📍 {githubData.location}</span>}
                  {githubData.company && <span>🏢 {githubData.company}</span>}
                  <span>📅 Joined {new Date(githubData.created_at).toLocaleDateString()}</span>
                </div>
                <a href={githubData.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                  <Github size={20} />
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 scroll-animate scroll-animate-delay-300 ${statsVisible ? 'animate-in' : ''}`}>
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-blue-400" size={24} />
              <span className="text-gray-300">Followers</span>
            </div>
            <div className="text-3xl font-bold text-white">{githubData.followers}</div>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="text-green-400" size={24} />
              <span className="text-gray-300">Repositories</span>
            </div>
            <div className="text-3xl font-bold text-white">{githubData.public_repos}</div>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <Star className="text-yellow-400" size={24} />
              <span className="text-gray-300">Total Stars</span>
            </div>
            <div className="text-3xl font-bold text-white">{totalStars}</div>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="text-purple-400" size={24} />
              <span className="text-gray-300">Following</span>
            </div>
            <div className="text-3xl font-bold text-white">{githubData.following}</div>
          </div>
        </div>

        {/* GitHub Style Contribution Heatmap */}
        

        {/* Repository Languages */}
        <div ref={languagesRef} className={`bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 scroll-animate scroll-animate-delay-500 ${languagesVisible ? 'animate-in' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-blue-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Languages Used in Repositories</h3>
          </div>
          
          {repoLanguages.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {repoLanguages.map((lang, index) => <div key={lang.name} className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 rounded-full" style={{
                backgroundColor: getLanguageColor(index)
              }} />
                    <span className="text-white font-semibold">{lang.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {lang.percentage}%
                  </div>
                  <div className="text-sm text-gray-400">
                    {(lang.bytes / 1024).toFixed(1)} KB
                  </div>
                  <div className="w-full bg-slate-600/30 rounded-full h-2 mt-3">
                    <div className="h-2 rounded-full transition-all duration-500" style={{
                width: `${lang.percentage}%`,
                backgroundColor: getLanguageColor(index)
              }} />
                  </div>
                </div>)}
            </div> : <div className="text-center text-gray-400 py-8">
              <Code size={48} className="mx-auto mb-4 opacity-50" />
              <p>No language data available</p>
            </div>}
        </div>

        {/* Activity Timeline */}
        

        {/* Repository Stats Chart */}
        
      </div>
    </section>;
};
export default GitHubAnalytics;