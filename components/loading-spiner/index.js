const LoadingSpinner = () => {
  return (
    <div className="loader bg-white p-5 rounded-full flex space-x-3">
      <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingSpinner;
