import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Confirmation from "./Confirmation";
import CalendlyWidget from "@/components/calendlyWidget";

const Book = () => {
  const [step, setStep] = useState(1);
  return (
    <div
      style={{ height: '100vh' }}
      id="book"
      className="flex w-full justify-center items-center bg-white relative min-h-[650px]  md:py-0 py-2 md:h-screen z-20 sm:px-2 md:px-10"
    >
      {/* {step === 3 && <Confirmation setStep={setStep} />} */}
      <CalendlyWidget />
    </div>
  );
};

export default Book;
