import Image from "next/image";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    document.getElementById('hero-video').play();
    document.getElementById('hero-video').removeAttribute("controls");
  }, []);

  return (
    <div className="wrapper relative isolate z-20">
      <div className=" min-h-[650px] overflow-hidden w-full flex justify-center items-center relative isolate">
        <video
          id="hero-video"
          src="/hero_video.mp4"
          // preload
          autoPlay
          playsInline
          muted
          loop
          className="hidden lg:block w-full h-full absolute left-0 top-0 -z-10 object-cover"
        ></video>
        <Image src={"/hero-img.jpg"} width={2000} height={2000} className="block lg:hidden w-full h-full absolute left-0 top-0 -z-10 object-cover" />
        <div className="contain h-auto sm:h-screen min-h-[650px] gap-5 py-14 justify-center items-center flex-col text-center">
          <h1 style={styles.textShadowBold} className="text-white text-[35px] sm:text-[40px] lg:text-[50px] leading-[1.2] font-black text-shadow-lg">
            Software MVP Development <br />
            for your startup
          </h1>
          <p style={styles.textShadowBold} className="text-white font-semibold leading-[1.3] text-base max-w-[250px] text-shadow-lg">
            We build custom software applications to turn your startup ideas into a reality.
          </p>
          <a href="#book" className="bookBtn">
            Book a call
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const styles = {
  textShadow: {
    textShadow: '0px 2px 3px rgba(40,40,40,.65)'
  },
  textShadowBold: {
    textShadow: '0px 2px 1px rgba(40,40,40,.95)'
  }
}

