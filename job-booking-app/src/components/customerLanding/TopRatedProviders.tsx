import { useEffect, useState } from "react";
import ProviderBox from "./ProviderBox";
import genericUser1 from "../../assets/genericUser1.svg";

interface ServiceProvider {
  image: string;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  pricing: string;
}

const TopRatedProviders = () => {
  const [topRatedProviders, setTopRatedProviders] = useState<
    ServiceProvider[] | null
  >(null);

  useEffect(() => {
    async function getTopRatedProviders() {
      const response = await fetch("/", {
        method: "GET",
      });

      const apiData: ServiceProvider[] = await response.json();

      setTopRatedProviders(apiData);
    }

    getTopRatedProviders();
  }, []);

  return (
    <div className="flex justify-center w-full bg-neutral-100">
      <div className="flex flex-col justify-center items-center w-full max-w-[75rem] min-h-[30rem] py-10 px-4">
        <h2 className="text-2xl font-semibold">Top Rated Providers</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-3 mt-5">
          {[
            {
              image: genericUser1,
              name: "Jessica Burns",
              title: "Software Developer",
              rating: 4.8,
              reviewCount: 173,
              description: "15+ years experience in Web Development.",
              pricing: "80",
            },
            {
              image: genericUser1,
              name: "Jessica Burns",
              title: "Software Developer",
              rating: 4.8,
              reviewCount: 173,
              description: "15+ years experience in Web Development.",
              pricing: "80",
            },
            {
              image: genericUser1,
              name: "Jessica Burns",
              title: "Software Developer",
              rating: 4.8,
              reviewCount: 173,
              description: "15+ years experience in Web Development.",
              pricing: "80",
            },
            {
              image: genericUser1,
              name: "Jessica Burns",
              title: "Software Developer",
              rating: 4.8,
              reviewCount: 173,
              description: "15+ years experience in Web Development.",
              pricing: "80",
            },
            {
              image: genericUser1,
              name: "Jessica Burns",
              title: "Software Developer",
              rating: 4.8,
              reviewCount: 173,
              description: "15+ years experience in Web Development.",
              pricing: "80",
            },
            {
              image: genericUser1,
              name: "Jessica Burns",
              title: "Software Developer",
              rating: 4.8,
              reviewCount: 173,
              description: "15+ years experience in Web Development.",
              pricing: "80",
            },
          ]?.map((provider, index) => (
            <ProviderBox
              key={index}
              image={provider.image}
              name={provider.name}
              title={provider.title}
              rating={provider.rating}
              reviewCount={provider.reviewCount}
              description={provider.description}
              pricing={provider.pricing}
            ></ProviderBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
