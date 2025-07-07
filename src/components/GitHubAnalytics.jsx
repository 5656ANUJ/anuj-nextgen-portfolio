
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
  const [streakRef, streakVisible] = useScrollAnimation();
  const [chartsRef, chartsVisible] = useScrollAnimation();

  // GitHub stats data (you can replace with real API data)
  const githubStats = {
    username: "5656ANUJ",
    followers: 12,
    following: 25,
    publicRepos: 18,
    totalStars: 45,
    totalCommits: 234,
    currentStreak: 7,
    longestStreak: 15,
    profileImage: "https://github.com/5656ANUJ.png"
  };

  // Contribution data for streak graph
  const contributionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Contributions',
        data: [12, 19, 3, 5, 2, 15, 25, 30, 22, 18, 28, 35],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Language distribution data
  const languageData = {
    labels: ['JavaScript', 'React', 'HTML', 'CSS', 'Python', 'Other'],
    datasets: [
      {
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
          '#F7DF1E',
          '#61DAFB',
          '#E34F26',
          '#1572B6',
          '#3776AB',
          '#6B7280',
        ],
        borderWidth: 0,
      },
    ],
  };

  // Repository stats
  const repoData = {
    labels: ['Public', 'Private', 'Forked', 'Original'],
    datasets: [
      {
        label: 'Repositories',
        data: [18, 5, 8, 15],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(59, 130, 246, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
          'rgb(168, 85, 247)',
          'rgb(59, 130, 246)',
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
            Dive into my coding journey with detailed GitHub statistics and insights
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
                  src={githubStats.profileImage} 
                  alt="GitHub Profile"
                  className="w-32 h-32 rounded-full border-4 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <Activity size={16} className="text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">@{githubStats.username}</h3>
                <p className="text-gray-300 mb-4">Full Stack Developer & Open Source Contributor</p>
                <a 
                  href={`https://github.com/${githubStats.username}`}
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
            <div className="text-3xl font-bold text-white">{githubStats.followers}</div>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="text-green-400" size={24} />
              <span className="text-gray-300">Repositories</span>
            </div>
            <div className="text-3xl font-bold text-white">{githubStats.publicRepos}</div>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <Star className="text-yellow-400" size={24} />
              <span className="text-gray-300">Total Stars</span>
            </div>
            <div className="text-3xl font-bold text-white">{githubStats.totalStars}</div>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="text-purple-400" size={24} />
              <span className="text-gray-300">Commits</span>
            </div>
            <div className="text-3xl font-bold text-white">{githubStats.totalCommits}</div>
          </div>
        </div>

        {/* Streak Section */}
        <div 
          ref={streakRef}
          className={`bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-500 scroll-animate scroll-animate-delay-400 ${streakVisible ? 'animate-in' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-orange-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Contribution Streak</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-orange-400 mb-2">{githubStats.currentStreak}</div>
                <div className="text-gray-300">Current Streak (days)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">{githubStats.longestStreak}</div>
                <div className="text-gray-300">Longest Streak (days)</div>
              </div>
            </div>
            <div className="h-64">
              <Line data={contributionData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div 
          ref={chartsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-animate scroll-animate-delay-500 ${chartsVisible ? 'animate-in' : ''}`}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Language Distribution</h3>
            <div className="h-80">
              <Doughnut data={languageData} options={doughnutOptions} />
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
