import React from "react";
import MenImage from "../../images/image-hero-desktop.png";
import MenImageMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import Button from "../button";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <section className="mt-10 flex w-full flex-col justify-center xl:flex-row">
      <div className="relative order-2 mt-6 text-center xl:order-1 xl:mt-60 xl:w-2/4 xl:text-left">
        <h1 className="text-3xl font-black xl:mt-6 xl:whitespace-pre-line xl:text-8xl">{`Make\n remote work`}</h1>
        <p className="my-6 px-5 pb-6 text-medium-gray sm:whitespace-pre-line  xl:my-12 xl:px-0 xl:text-xl">
          {`Get your team in sync, no matter your location.\n Streamline processes, create team rituals, and\n watch productivity soar.`}
        </p>
        <Link to="/more">
          <Button isFilled={true}>Learn More</Button>
        </Link>
        <div className="xl:jus bottom-2 mt-12 flex flex-wrap justify-around gap-x-20 gap-y-10 sm:px-0 md:justify-around xl:absolute xl:mt-20 xl:justify-around xl:gap-x-0 xl:space-x-20">
          <Databiz />
          <Meet />
          <Maker />
          <Audiophile />
        </div>
      </div>
      <div className="mt-10 hidden w-2/4 xl:order-2 xl:mt-20 xl:flex">
        <img src={MenImage} alt="hero" />
      </div>
      <div className="order-1 mb-8 flex w-full justify-center xl:hidden">
        <img src={MenImageMobile} alt="hero" />
      </div>
    </section>
  );
};

export default MainSection;
