const SubpageLoaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="h-8 flex-1 animate-pulse rounded bg-card"></div>
        <div className="h-8 flex-1 animate-pulse rounded bg-card"></div>
        <div className="h-8 flex-1 animate-pulse rounded bg-card"></div>
      </div>
      <div className="h-64 w-full animate-pulse rounded bg-card"></div>
      <div className="h-12 w-full animate-pulse rounded bg-card"></div>
    </div>
  );
};

export default SubpageLoaderSkeleton;
