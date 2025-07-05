import type { ReactNode } from "react";
import { GoDotFill } from "react-icons/go";

export const BusinessCard = ({
  icon,
  status,
  name,
  description,
  services,
  bookings,
  revenue,
}: {
  icon: ReactNode;
  status: string;
  name: string;
  description: string;
  services: number;
  bookings: number;
  revenue: number;
}) => {
  
  // Converts a number to USD
  function convertToCurrency(numberToConvert: number) {
    if (!numberToConvert) {
      return "$0";
    }
    let convertedCurrency = "$";
    const stringifiedNumber = numberToConvert.toString();
    const n = stringifiedNumber.length;

    for (let i = 0; i < n; i++) {
      const j = n - i - 1;
      convertedCurrency += stringifiedNumber[i];
      if (j !== 0 && i !== n && j % 3 === 0) {
        convertedCurrency += ",";
      }
    }

    return convertedCurrency;
  }

  return (
    <div className="flex flex-col col-span-1 p-5 bg-white border-2 border-neutral-200 rounded-md">
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-md bg-neutral-600">{icon}</div>
        <div className="flex items-center gap-2">
          <GoDotFill fill="green"></GoDotFill>
          <p className="text-sm text-neutral-700 font-semibold">{status}</p>
        </div>
      </div>
      <h2 className="mt-5 text-lg font-bold">{name}</h2>
      <p className="mt-2">{description}</p>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-neutral-600">Services</p>
          <p>{services}</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-neutral-600">Bookings</p>
          <p>{bookings}</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-neutral-600">Revenue</p>
          <p>{convertToCurrency(revenue)}</p>
        </div>
      </div>
    </div>
  );
};
