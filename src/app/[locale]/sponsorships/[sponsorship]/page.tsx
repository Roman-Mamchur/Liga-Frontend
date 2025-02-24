import HeroBanner from "@/components/Layout/HeroBanner";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface Params {
  locale: string;
}

export async function generateMetadata({ locale }: Params) {
  const t = await getTranslations({
    locale,
    namespace: "Metadata.SponsorshipsPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const SponsorshipsPage = () => {
  return (
    <div>
      <HeroBanner title="Example Sponsor" />

      <div className="container my-8">
        <Image
          src="https://placehold.co/600x800.png?text=Sponsorship+Image&font=montserrat"
          alt="Sponsorship Image"
          width={0}
          height={0}
          priority={true}
          sizes="100vw"
          className="float-right mb-2 ml-4 h-80 w-full rounded object-cover md:w-1/2"
        />
        <div className="text-justify">
          <h2 className="mb-4 font-bold">Title text</h2>
          <div className="space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              cum voluptate saepe atque. Enim, sit tempore pariatur
              reprehenderit vel nulla et hic. Repellendus iste laboriosam
              aliquid deleniti voluptatibus quas cum.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, ut dolor. Ut ratione ducimus quo, in nulla illum
              necessitatibus expedita voluptas veniam, eligendi nisi fuga autem
              recusandae, numquam vero possimus?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              accusamus iste cumque dolorum, corrupti dolorem placeat
              consectetur amet. Dignissimos error non voluptatem ab, cupiditate
              tempora quisquam nesciunt quam excepturi reiciendis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse et,
              exercitationem repudiandae cupiditate accusantium placeat cum
              tenetur dignissimos culpa qui libero totam illo nihil
              reprehenderit aperiam dolorem quidem voluptatem voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              placeat corrupti est, ipsum molestias atque numquam voluptas
              dolores, iusto error animi possimus excepturi fugit quasi!
              Pariatur hic esse debitis quo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipsPage;
