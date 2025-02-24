import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

const SearchResults = ({ query }: { query: string }) => {
  const t = useTranslations("SearchBar");

  const mockResultGames =
    query.length >= 3
      ? Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `Game ${i + 1}`,
        }))
      : [];

  return (
    <div className="z-10 mt-4 w-full rounded-lg bg-white p-1 ring-2 ring-gray-300 md:absolute md:p-0">
      <div className="m-3 md:m-5">
        {mockResultGames.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
            {mockResultGames.map((game) => (
              <div key={game.id} className="w-full">
                <Image
                  src={`https://placehold.co/600x800.png?text=${encodeURIComponent(
                    game.name,
                  )}&font=montserrat`}
                  alt={game.name}
                  width={150}
                  height={200}
                  priority={game.id === 0}
                  className="mb-3 rounded object-contain duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-sm font-medium">
            <p className="text-center">{t("notice")}</p>
            <div className="flex items-center justify-between">
              <p>{t("recentSearch")}</p>
              <p className="cursor-pointer">{t("clearSearch")} (2)</p>
            </div>
            <div className="flex gap-1 text-xs font-normal">
              <p className="flex cursor-pointer items-center gap-1 rounded-full bg-primary px-2 py-1 text-white opacity-80 duration-200 hover:opacity-100">
                Monopoly
                <FaXmark />
              </p>
              <p className="flex cursor-pointer items-center gap-1 rounded-full bg-primary px-2 py-1 text-white opacity-80 duration-200 hover:opacity-100">
                Crazy Time
                <FaXmark />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
