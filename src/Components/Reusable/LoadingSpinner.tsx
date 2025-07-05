const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-40 min-h-screen">
      <div className="relative w-16 h-16">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full border-4
         border-t-transparent border-[#1B3C53] animate-spin"
        />
        <div
          className="absolute top-2 left-2 w-12 h-12 rounded-full border-4 
        border-t-transparent border-[#748873] animate-spin"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
