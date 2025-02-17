interface GameCardSkeletonProps {
  showOnline?: boolean;
}

const GameCardSkeleton = ({ showOnline }: GameCardSkeletonProps) => {
  return (
    <div className="px-1">
      <div className="h-48 w-36 animate-pulse rounded bg-gray-200"></div>
      {showOnline && (
        <div className="mt-1 h-3 animate-pulse rounded-full bg-gray-200"></div>
      )}
    </div>
  );
};

export default GameCardSkeleton;
