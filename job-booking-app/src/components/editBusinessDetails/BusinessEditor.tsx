import { useEffect, useState, type ChangeEvent } from "react";
import DropdownMenu from "../global/DropdownMenu";
import { useIsInputNumber } from "../customHooks/useIsInputNumber";
import Service from "./Service";
import NewService from "./NewService";

interface BusinessData {
  name: string;
  location: string;
  description: string;
  category: string;
  phone_number: string;
  website_link: string;
}

interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
  duration: string;
}

const BusinessEditor = ({
  operation,
  businessId,
}: {
  operation: string;
  businessId?: number;
}) => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const token = localStorage.getItem("token");
  const isInputNumber = useIsInputNumber;
  const [businessData, setBusinessData] = useState<BusinessData>({
    name: "",
    location: "",
    description: "",
    category: "",
    phone_number: "",
    website_link: "",
  });
  const [savedServices, setSavedServices] = useState<Service[]>([]);
  const [businessNameInput, setBusinessNameInput] = useState("");
  const [businessLocationInput, setBusinessLocationInput] = useState("");
  const [businessDescriptionInput, setBusinessDescriptionInput] = useState("");
  const [businessCategoryInput, setBusinessCategoryInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [websiteLinkInput, setWebsiteLinkInput] = useState("");

  async function createBusiness() {
    try {
      const response = await fetch(`${apiBase}/businesses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || "",
        },
        body: JSON.stringify({
          name: businessNameInput,
          location: businessLocationInput,
          description: businessDescriptionInput,
          category: businessCategoryInput,
          phoneNumber: phoneNumberInput,
          websiteLink: websiteLinkInput,
        }),
      });

      if (response.ok) {
        const apiData = await response.json();
        alert(apiData.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function editBusiness() {
    try {
      const response = await fetch(`${apiBase}/businesses`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || "",
        },
        body: JSON.stringify({
          name: businessNameInput,
          location: businessLocationInput,
          description: businessDescriptionInput,
          category: businessCategoryInput,
          phoneNumber: phoneNumberInput,
          websiteLink: websiteLinkInput,
        }),
      });

      if (response.ok) {
        const apiData = await response.json();
        // Placeholder alert
        alert(apiData.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handlePhoneInput(event: ChangeEvent<HTMLInputElement>) {
    if (isInputNumber(event)) {
      setPhoneNumberInput(event.target.value);
    }
  }

  useEffect(() => {
    if (operation === "Edit") {
      async function fetchBusinessInfo() {
        try {
          const response = await fetch(`${apiBase}/businesses/${businessId}`, {
            method: "GET",
            headers: {
              Authorization: token || "",
            },
          });

          if (response.ok) {
            const apiData = await response.json();
            setBusinessData(apiData);
          }
        } catch (err) {
          console.error(err);
        }
      }

      fetchBusinessInfo();
    }
  }, [operation, businessId, apiBase, token]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch(`${apiBase}/services/${businessId}`, {
          method: "GET",
          headers: {
            Authorization: token || "",
          },
        });

        if (response.ok) {
          const apiData = await response.json();
          setSavedServices(apiData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchServices();
  }, [token, apiBase, businessId]);

  return (
    <div className="flex justify-center items-center w-full min-h-[45rem] py-5 overflow-y-auto text-sm">
      <form className="w-full max-w-[45rem] p-5 border-2 border-neutral-200">
        <h2 className="text-xl font-bold">Business Information</h2>
        <div className="flex flex-col gap-2 w-full mt-5">
          <label className="block">Business Name *</label>
          <input
            className="w-full py-1 px-3 border-2 border-neutral-200 rounded-md outline-none"
            type="text"
            placeholder="Enter your business name"
            required
            defaultValue={businessData.name}
            onChange={(e) => {
              setBusinessNameInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col gap-2 w-full mt-5">
          <label className="block">Business Location *</label>
          <input
            className="w-full py-1 px-3 border-2 border-neutral-200 rounded-md outline-none"
            type="text"
            placeholder="Enter the location of your business"
            required
            defaultValue={businessData.location}
            onChange={(e) => {
              setBusinessLocationInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col gap-2 w-full mt-5">
          <label className="block">Business Description</label>
          <textarea
            className="w-full h-20 py-1 px-3 border-2 border-neutral-200 rounded-md outline-none resize-none"
            placeholder="Describe what your business does"
            defaultValue={businessData.description}
            onChange={(e) => {
              setBusinessDescriptionInput(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label className="block mt-5 text-sm">Category</label>
          <DropdownMenu
            width={"w-full"}
            placeholder={
              businessData.category
                ? businessData.category
                : "Select a category"
            }
            options={["Towing", "IT Support", "Mechanic"]}
            setterFunction={setBusinessCategoryInput}
          ></DropdownMenu>
        </div>
        <label className="block mt-7 text-xl font-bold">Services Offered</label>
        {savedServices.map((service, index) => (
          <Service
            key={index}
            defaultName={service.name}
            defaultPrice={service.price}
            defaultDescription={service.description}
            defaultDuration={service.duration}
            serviceId={service.id}
          ></Service>
        ))}
        <NewService businessId={businessId}></NewService>
        <div className="w-full h-[1px] mt-7 bg-neutral-200"></div>
        <h2 className="mt-7 text-xl font-bold">Contact Information</h2>
        <div className="flex gap-2 items-center w-full mt-5">
          <div className="flex flex-1 flex-col gap-2">
            <label>Phone Number</label>
            <input
              className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md outline-none"
              type="tel"
              placeholder="123-456-7890"
              maxLength={10}
              required
              defaultValue={businessData.phone_number}
              onChange={(e) => {
                handlePhoneInput(e);
              }}
            ></input>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label>Website</label>
            <input
              className="w-full py-1 px-2 border-2 border-neutral-200 rounded-md outline-none"
              type="tel"
              placeholder="http://website.com"
              maxLength={40}
              defaultValue={businessData.website_link}
              onChange={(e) => {
                setWebsiteLinkInput(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <div className="flex items-center gap-3">
            <button
              className="py-2 px-4 border-2 bg-white border-neutral-200 rounded-md font-bold cursor-pointer"
              type="button"
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 bg-black border-2 border-neutral-200 rounded-md font-bold text-white cursor-pointer"
              type="button"
              onClick={() => {
                if (operation === "Create") {
                  createBusiness();
                } else {
                  editBusiness();
                }
              }}
            >
              Complete Setup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessEditor;
