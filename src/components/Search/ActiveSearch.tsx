import Image from "next/image";

const ActiveSearch = () => {
  const mockResultGames = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Game ${i + 1}`,
  }));

  return (
    <div className="absolute z-10 mt-4 w-full rounded-lg bg-white ring-2 ring-gray-300">
      <div className="m-3 md:m-5">
        <h3 className="my-4 text-lg font-bold opacity-80">Search Results</h3>
        <div className="lg:grid</div>-cols-6 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
          {mockResultGames.map((game) => (
            <div key={game.id} className="w-full">
              <Image
                src={`https://placehold.co/600x800.png?text=${encodeURIComponent(game.name)}&font=montserrat`}
                alt={game.name}
                width={150}
                height={200}
                priority={game.id === 0}
                className="rounded object-contain duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
              />
              <p className="mb-2 mt-1 text-sm opacity-80">{game.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveSearch;
