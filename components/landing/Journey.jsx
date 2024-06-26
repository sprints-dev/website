import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Journey = () => {
  return (
    <div
      data-name="Your Journey"
      id="journey"
      className="bg-white wrapper py-14 md:pt-[160px] sm:mt-[90px] xl:mt-[180px]"
    >
      <div className="contain flex-col justify-center items-center xl:gap-[70px]">
        <div className="text-center flex justify-center items-center flex-col">
          <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] leading-[1.2] font-black text-blue">
           12 Weeks
          </h2>
          <p className="text-base sm:text-xl  text-blue font-medium">
            Your Journey
          </p>
        </div>
        <div className="w-full journey-slide block xl:hidden">
          <Splide
            options={{
              width: "100%",
              pagination: true,
              arrows: true,
              perPage: 1,
              perMove: 1,
              type: "loop",
              gap: "1rem",
              drag: true,
            }}
          >
            {/* Visit our website */}
            {/* <SplideSlide>
              <div className="flex xl:m-0 mb-5 justify-start items-center flex-col w-full gap-5 text-center">
                <div className="w-full h-auto sm:h-[386px] flex justify-center items-start">
                  <Image
                    style={{ width: "80%" }}
                    src={"/dev1.png"}
                    alt="...dev"
                    width={346}
                    height={346}
                  />
                </div>
                <div>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-bold">
                    Visit our website
                  </p>
                  <p className="text-blue text-lg -mb-6 sm:text-[1.2rem] font-normal">
                    You are here
                  </p>
                </div>
              </div>
            </SplideSlide> */}
            <SplideSlide>
              <div className="flex xl:m-0 justify-start items-center flex-col w-full gap-5 text-center">
                <div className="w-full h-auto flex justify-center items-start mt-8">
                  <Image
                    style={{ width: "40%" }}
                    src={"/dev2.png"}
                    alt="...dev"
                    width={190}
                    height={330}
                  />
                </div>
                <div className="mt-5">
                  <p className="text-blue text-lg sm:text-[1.2rem] font-bold">
                    Book initial call
                  </p>
                  <p className="text-blue text-lg -mb-6 sm:text-[1.2rem] font-normal">
                    Our first meeting
                  </p>
                </div>
              </div>
            </SplideSlide>
            {/* Technical call */}
            {/* <SplideSlide>
              <div className="flex justify-start items-center flex-col w-full gap-5 text-center mb-10">
                <div className="w-full h-auto sm:h-[386px] flex justify-center items-start">
                  <Image
                    style={{ width: "80%" }}
                    src={"/dev3.png"}
                    alt="...dev"
                    width={330}
                    height={336}
                  />
                </div>
                <div>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-bold">
                    Technical call (2hr)
                  </p>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-normal">
                    Polishing your product{"'"}s features
                  </p>
                </div>
              </div>
            </SplideSlide> */}
            <SplideSlide>
              <div className="flex justify-start items-center flex-col w-full gap-5 text-center mb-10">
                <div className="w-full h-auto sm:h-[386px] flex justify-center items-start">
                  <Image
                    style={{ width: "80%" }}
                    src={"/dev4.png"}
                    alt="...dev"
                    width={340}
                    height={340}
                  />
                </div>
                <div>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-bold">
                    Recieve Roadmap
                  </p>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-normal">
                    Time & budget for the project
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex justify-start items-center flex-col w-full gap-5 text-center mb-10">
                <div className="w-full h-auto sm:h-[386px] flex justify-center items-start">
                  <Image
                    style={{ width: "80%" }}
                    src={"/dev5.png"}
                    alt="...dev"
                    width={340}
                    height={340}
                  />
                </div>
                <div>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-bold">
                    Sprints Reviews
                  </p>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-normal">
                    Monthly progress calls
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex justify-start items-center flex-col w-full gap-5 text-center mb-10">
                <div className="w-full h-auto sm:h-[386px] flex justify-center items-start">
                  <Image
                    style={{ width: "80%" }}
                    src={"/dev6.png"}
                    alt="...dev"
                    width={340}
                    height={340}
                  />
                </div>
                <div>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-bold">
                    Project delivery
                  </p>
                  <p className="text-blue text-lg sm:text-[1.2rem] font-normal">
                    Final product
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="hidden xl:grid grid-cols-1 xl:grid-cols-4 items-start grid-rows-[auto__auto__auto__auto__auto__auto] xl:grid-rows-[auto__1fr__auto__1fr] w-full gap-y-7 sm:gap-y-16 gap-x-3">
          {/* Visit our website */}
          {/* <div className="flex xl:m-0 mb-5 justify-start items-center flex-col w-full gap-5 text-center">
            <div className="w-full h-auto  flex justify-center items-start">
              <Image
                style={{ maxWidth: "60%" }}
                src={"/dev1.png"}
                alt="...dev"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className="text-blue text-lg sm:text-[1.2rem] font-bold">
                Visit our website
              </p>
              <p className="text-blue text-lg -mb-6 sm:text-[1.2rem] font-normal">
                You are here
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#263254"
              className="w-10 h-10 self-center justify-self-center xl:hidden block"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div> */}
          <div className="flex justify-start items-center flex-col w-full gap-10 text-center">
            <div className="w-full h-auto  flex justify-center items-start">
              <Image
                style={{ maxWidth: "35%" }}
                src={"/dev2.png"}
                alt="...dev"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className="text-blue text-md sm:text-[1.1rem] font-bold">
                Book initial call (30min)
              </p>
              <p className="text-blue text-md sm:text-[1.1rem]">
                Understanding your goals
              </p>
            </div>
          </div>
          {/* Technical call */}
          {/* <div className="flex justify-start items-center flex-col w-full gap-5 text-center">
            <div className="w-full h-auto  flex justify-center items-start">
              <Image
                style={{ maxWidth: "60%" }}
                src={"/dev3.png"}
                alt="...dev"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className="text-blue text-lg sm:text-[1.2rem] font-bold ">
                Technical call (2hr)
              </p>
              <p className="text-blue text-lg sm:text-[1.2rem] font-normal">
                Polishing your product{"'"}s features
              </p>
            </div>
          </div> */}
          {/* Roadmap */}
          <div className="flex justify-start items-center flex-col w-full gap-5 text-center">
            <div className="w-full h-auto  flex justify-center items-start">
              <Image
                style={{ maxWidth: "65%" }}
                src={"/dev4.png"}
                alt="...dev"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className="text-blue text-md sm:text-[1.1rem] font-bold">
                Recieve The Roadmap
              </p>
              <p className="text-blue text-md sm:text-[1.1rem]">
                Time & Budget for the project
              </p>
            </div>
          </div>
          {/* Reviews */}
          <div className="flex justify-start items-center flex-col w-full gap-5 text-center">
            <div className="w-full h-auto  flex justify-center items-start">
              <Image
                style={{ maxWidth: "65%" }}
                src={"/dev5.png"}
                alt="...dev"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className="text-blue text-md sm:text-[1.1rem] font-bold">
                Sprints Reviews
              </p>
              <p className="text-blue text-md sm:text-[1.1rem]">
                Monthly progress calls
              </p>
            </div>
          </div>
          {/* Line divider */}
          {/* <div
            style={{ width: "85%", justifySelf: "center" }}
            className="bg-[#172651] w-full h-[1px] xl:block hidden mb-[50px] mt-[80px] col-span-3"
          ></div> */}
          <div className="flex justify-start items-center flex-col w-full gap-5 text-center">
            <div className="w-full h-auto  flex justify-center items-start">
              <Image
                style={{ maxWidth: "65%" }}
                src={"/dev6.png"}
                alt="...dev"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className="text-blue text-md sm:text-[1.1rem] font-bold">
                Project delivery
              </p>
              <p className="text-blue text-md sm:text-[1.1rem] font-normal">
                Final product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
