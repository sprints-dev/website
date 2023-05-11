import Image from "next/image";

const Idea = () => {
  return (
    <div
      data-name="Idea to Product"
      id="idea"
      className="wrapper  sm:mt-[90px] xl:mt-[150px]"
    >
      <div className="contain flex-col justify-center items-center gap-[50px] xl:gap-[100px] mt-10 px-5">
        <div className="text-center">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px]  leading-[1.2] font-black text-white">
            Idea to product
          </h2>
          <p className="text-base sm:text-xl  text-white font-medium mt-4">
            Great ideas deserve to become great products
          </p>
        </div>
        <div className="flex justify-center xl:justify-between items-center gap-1 w-90">
          <div className="lg:block hidden">
            <Image style={{ maxWidth: '80%' }} src={"/idea-img.png"} width={350} height={340} alt="...." />
          </div>
          <div className="lg:block hidden">
            <Image style={{ maxWidth: '80%' }} src={"/light-bulb.svg"} width={350} height={340} alt="...." />
          </div>
          <div className="lg:block hidden">
            <Image style={{ maxWidth: '80%' }} src={"/idea-img.png"} width={350} height={340} alt="...." />
          </div>
          <div className="lg:hidden block">
            <Image src={"/light-bulb.svg"} width={350} height={340} alt="...." />
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-5 md:px-20 lg:px-44">
          <p className="text-base sm:text-lg text-center font-medium text-white">
            Creating a <strong>startup</strong> is challenging. <br /><br />You have this amazing <strong>idea</strong>, and you need someone to build it.
            <br /><br/>
            That{"'"}s why we created <strong>Sprints</strong>.
            <br /><br />We became experts at building <strong>solid</strong>, <strong>scalable</strong>, and <strong>reliable</strong> applications.
            <br /><br/>This way you can do the <strong>thinking</strong>, and we can do the <strong>work</strong>.
          </p>
          {/* <p className="text-base sm:text-lg  font-medium text-white">
            We{"'"}ve seen firsthand the impact that a <strong>well-executed MVP</strong> can
            have on a business, and our team is committed to helping you achieve
            that <strong>same success.</strong>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Idea;

