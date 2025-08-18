import DropdownMenu from "../global/DropdownMenu";
import FilterSm from "./FilterSm";
import Service from "./Service";

interface Service {
  business_id: string;
  service_id: string;
  service_name: string;
  price: string;
  description: string;
  duration: string;
  business_name: string;
  location: string;
}

const JobDisplay = ({
  setCategoryFilter,
  setOrderBy,
  services,
}: {
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  services: Service[];
}) => {
  return (
    <div className="flex flex-1 flex-col h-fit">
      <div className="flex md:flex-row flex-col justify-between gap-2 w-full">
        <h1 className="text-xl font-semibold">Frontend Developer Jobs</h1>
        <div className="flex items-center gap-2">
          <p className="shrink-0 text-sm">Order By:</p>
          <DropdownMenu
            width="w-[8.5rem]"
            placeholder="Most Relevant"
            options={["Most Relevant", "Price"]}
            setterFunction={setOrderBy}
          ></DropdownMenu>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="md:mt-0 mt-2 text-sm">{services.length} Services Found</p>
        <div className="lg:hidden block">
          <FilterSm setCategoryFilter={setCategoryFilter}></FilterSm>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full max-h-[70vh] min-h-[20rem] mt-5 overflow-y-auto">
        {services.map((service, index) => (
          <Service
            key={index}
            business_id={parseInt(service.business_id)}
            service_id={parseInt(service.service_id)}
            service_name={service.service_name}
            price={service.price}
            description={service.description}
            duration={service.duration}
            business_name={service.business_name}
            location={service.location}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default JobDisplay;
