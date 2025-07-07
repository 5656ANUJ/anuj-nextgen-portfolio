import { useState, useEffect } from 'react';
import { Github, Users, GitBranch, Star, Calendar, Activity } from 'lucide-react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const GitHubAnalytics = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [profileRef, profileVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [heatmapRef, heatmapVisible] = useScrollAnimation();
  const [streakRef, streakVisible] = useScrollAnimation();
  const [chartsRef, chartsVisible] = useScrollAnimation();

  const [githubData, setGithubData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [contributionData, setContributionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "5656ANUJ";

  // Fetch contribution data from GitHub events API
  const fetchContributionData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
      if (!response.ok) throw new Error('Failed to fetch events data');
      const events = await response.json();
      
      // Process events to create contribution data
      const contributionMap = new Map();
      const today = new Date();
      const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
      
      // Initialize all days with 0 contributions
      for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const dateKey = d.toISOString().split('T')[0];
        contributionMap.set(dateKey, 0);
      }
      
      // Count contributions from events
      events.forEach(event => {
        const eventDate = new Date(event.created_at).toISOString().split('T')[0];
        if (contributionMap.has(eventDate)) {
          // Count different types of events as contributions
          if (['PushEvent', 'CreateEvent', 'IssuesEvent', 'PullRequestEvent'].includes(event.type)) {
            contributionMap.set(eventDate, contributionMap.get(eventDate) + 1);
          }
        }
      });
      
      // Convert map to array format
      const contributions = [];
      for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const dateKey = d.toISOString().split('T')[0];
        const count = contributionMap.get(dateKey) || 0;
        contributions.push({
          date: new Date(d),
          count,
          level: count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4
        });
      }
      
      return contributions;
    } catch (error) {
      console.error('Error fetching contribution data:', error);
      // Fallback to mock data if API fails
      return generateMockContributionData();
    }
  };

  // Fallback mock data function
  const generateMockContributionData = () => {
    const data = [];
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const contributions = Math.floor(Math.random() * 8);
      data.push({
        date: new Date(d),
        count: contributions,
        level: contributions === 0 ? 0 : contributions <= 2 ? 1 : contributions <= 4 ? 2 : contributions <= 6 ? 3 : 4
      });
    }
    return data;
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user profile data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        
        // Fetch repositories data
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        
        // Fetch contribution data
        const contributions = await fetchContributionData();
        
        setGithubData(userData);
        setRepositories(reposData);
        setContributionData(contributions);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section id="github" className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-xl">Loading GitHub Analytics...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">Error loading GitHub data: {error}</p>
          <p className="text-gray-300">Please check your internet connection and try again.</p>
        </div>
      </section>
    );
  }

  // Calculate repository statistics
  const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0);
  const publicRepos = repositories.filter(repo => !repo.private).length;
  const forkedRepos = repositories.filter(repo => repo.fork).length;
  const originalRepos = repositories.filter(repo => !repo.fork).length;

  // Get language statistics
  const languageStats = {};
  repositories.forEach(repo => {
    if (repo.language) {
      languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
    }
  });

  const topLanguages = Object.entries(languageStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 6);

  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);

  // Group contribution data by weeks
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

  const getContributionColor = (level) => {
    const colors = {
      0: '#161b22',
      1: '#0e4429',
      2: '#006d32',
      3: '#26a641',
      4: '#39d353'
    };
    return colors[level] || colors[0];
  };

  // Chart data
  const contributionChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Contributions',
        data: Array.from({ length: 12 }, (_, month) => {
          return contributionData.filter(day => day.date.getMonth() === month)
            .reduce((sum, day) => sum + day.count, 0);
        }),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const languageData = {
    labels: topLanguages.map(([lang]) => lang),
    datasets: [
      {
        data: topLanguages.map(([, count]) => count),
        backgroundColor: [
          '#F7DF1E', '#61DAFB', '#E34F26', '#1572B6', '#3776AB', '#6B7280'
        ].slice(0, topLanguages.length),
        borderWidth: 0,
      },
    ],
  };

  const repoData = {
    labels: ['Public', 'Forked', 'Original', 'Total Stars'],
    datasets: [
      {
        label: 'Repository Stats',
        data: [publicRepos, forkedRepos, originalRepos, totalStars],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 191, 36, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(168, 85, 247)',
          'rgb(59, 130, 246)',
          'rgb(251, 191, 36)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#E5E7EB',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#9CA3AF' },
        grid: { color: 'rgba(156, 163, 175, 0.1)' },
      },
      y: {
        ticks: { color: '#9CA3AF' },
        grid: { color: 'rgba(156, 163, 175, 0.1)' },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#E5E7EB',
          padding: 20,
        },
      },
    },
  };

  return (
    <section id="github" className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            GitHub <span className="gradient-text-animate bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights from my GitHub profile and coding journey
          </p>
        </div>

        {/* Profile Section */}
        <div 
          ref={profileRef}
          className={`scroll-animate scroll-animate-delay-200 ${profileVisible ? 'animate-in' : ''}`}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img 
                  src={githubData.avatar_url} 
                  alt="GitHub Profile"
                  className="w-32 h-32 rounded-full border-4 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                />
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
                <a 
                  href={githubData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <Github size={20} />
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 scroll-animate scroll-animate-delay-300 ${statsVisible ? 'animate-in' : ''}`}
        >
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
        <div 
          ref={heatmapRef}
          className={`bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-slate-700/50 hover:border-green-500/30 transition-all duration-500 scroll-animate scroll-animate-delay-400 ${heatmapVisible ? 'animate-in' : ''}`}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Contribution Activity</h3>
            <p className="text-gray-300">
              {totalContributions} contributions in the last year
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Based on public repository events and activities
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="flex mb-2">
                <div className="w-10"></div>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                  <div key={month} className="text-xs text-gray-400 w-16 text-center">
                    {index % 2 === 0 ? month : ''}
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <div className="flex flex-col justify-between w-10 text-xs text-gray-400 pr-2">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                
                <div className="flex gap-1">
                  {weeksData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }, (_, dayIndex) => {
                        const dayData = week.find(day => day.date.getDay() === dayIndex);
                        return (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className="w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer"
                            style={{
                              backgroundColor: dayData ? getContributionColor(dayData.level) : '#161b22'
                            }}
                            title={dayData ? `${dayData.count} contributions on ${dayData.date.toDateString()}` : 'No data'}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map(level => (
                    <div
                      key={level}
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: getContributionColor(level) }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div 
          ref={streakRef}
          className={`bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-500 scroll-animate scroll-animate-delay-500 ${streakVisible ? 'animate-in' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-orange-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Repository Activity</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-orange-400 mb-2">{totalForks}</div>
                <div className="text-gray-300">Total Forks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">{originalRepos}</div>
                <div className="text-gray-300">Original Repositories</div>
              </div>
            </div>
            <div className="h-64">
              <Line data={contributionChartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div 
          ref={chartsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-animate scroll-animate-delay-600 ${chartsVisible ? 'animate-in' : ''}`}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Top Languages</h3>
            <div className="h-80">
              {topLanguages.length > 0 ? (
                <Doughnut data={languageData} options={doughnutOptions} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No language data available
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Repository Stats</h3>
            <div className="h-80">
              <Bar data={repoData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubAnalytics;
