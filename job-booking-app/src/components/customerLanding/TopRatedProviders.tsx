import { useEffect, useState } from "react";
import ProviderBox from "./ProviderBox";
import genericUser1 from "../../assets/genericUser1.svg";

interface ServiceProvider {
  id: number;
  name: string;
  category: string;
  description: string;
  avg_rating: string;
  total_reviews: string;
}

const TopRatedProviders = () => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  const [topRatedProviders, setTopRatedProviders] = useState<ServiceProvider[]>(
    []
  );

  useEffect(() => {
    async function getTopRatedProviders() {
      const response = await fetch(`${apiBase}/businesses/top`, {
        method: "GET",
        headers: {
          Authorization: token || "",
        },
      });

      const apiData: ServiceProvider[] = await response.json();

      setTopRatedProviders(apiData);
    }

    getTopRatedProviders();
  }, [apiBase, token]);

  return (
    <div className="flex justify-center w-full bg-neutral-100">
      <div className="flex flex-col justify-center items-center w-full max-w-[75rem] min-h-[30rem] py-10 px-4">
        <h2 className="text-2xl font-semibold">Top Rated Providers</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-3 mt-5">
          {topRatedProviders.map((provider, index) => (
            <ProviderBox
              key={index}
              image={genericUser1}
              name={provider.name}
              rating={provider.avg_rating}
              reviewCount={provider.total_reviews}
              description={provider.description}
            ></ProviderBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
