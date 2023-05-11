import Image from "next/image";
import { useEffect } from "react";

const Confirmation = ({ setStep }) => {
  // Return to booking
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setStep(1);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <div style={{height: '100vh'}} className=" gap-5 bg-white left-0 w-full text-center h-full flex justify-center items-center flex-col">
      <div className="relative w-[140px] sm:w-[182px] aspect-square">
        <Image src={"/check.png"} alt="...." fill />
      </div>
      <h3 className="text-[1.2rem] font-bold text-blue">Booking Confirmed!</h3>
    </div>
  );
};

export default Confirmation;
