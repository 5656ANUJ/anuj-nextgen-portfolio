const FloatingElements = () => {
  return (
    <>
      {/* Floating circles */}
      <div className="fixed top-20 left-10 w-4 h-4 bg-purple-400/20 rounded-full float-animation pointer-events-none z-0" />
      <div className="fixed top-40 right-20 w-6 h-6 bg-blue-400/20 rounded-full float-animation-delayed pointer-events-none z-0" />
      <div className="fixed top-80 left-1/4 w-3 h-3 bg-pink-400/20 rounded-full float-animation pointer-events-none z-0" />
      
      {/* Floating squares */}
      <div className="fixed top-60 right-1/3 w-5 h-5 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rotate-45 float-animation-delayed pointer-events-none z-0" />
      <div className="fixed top-96 left-1/3 w-4 h-4 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rotate-45 float-animation pointer-events-none z-0" />
      
      {/* Floating triangles */}
      <div className="fixed top-32 right-1/4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-purple-400/20 float-animation pointer-events-none z-0" />
      <div className="fixed top-72 left-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-400/20 float-animation-delayed pointer-events-none z-0" />
      
      {/* Gradient orbs */}
      <div className="fixed top-48 left-1/6 w-8 h-8 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-sm float-animation pointer-events-none z-0" />
      <div className="fixed top-64 right-1/6 w-6 h-6 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-sm float-animation-delayed pointer-events-none z-0" />
    </>
  );
};

export default FloatingElements; 