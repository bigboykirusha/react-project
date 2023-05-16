import React from "react";
import MenImage from "../../images/image-hero-desktop.png";
import MenImageMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import Button from "../button";

const Index = () => {
  return (
    <section className="mt-6 flex w-full flex-col justify-center xl:flex-row">
      <div className="relative order-2 mt-12 text-center xl:order-1 xl:mt-60 xl:w-2/4 xl:text-left">
        <h1 className="mt-6 text-3xl font-black xl:whitespace-pre-line xl:text-8xl">{`Make\n remote work`}</h1>
        <p className="my-12 whitespace-pre-line text-lg text-medium-gray">
          {`Get your team in sync, no matter your location.\n Streamline processes, create team rituals, and\n watch productivity soar.`}
        </p>
        <Button isFilled={true}>Learn More</Button>
        <div className="bottom-2 mt-20 flex justify-around xl:absolute xl:mt-0 xl:space-x-20">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="mt-20 hidden w-2/4 xl:order-2 xl:flex">
        <img src={MenImage} alt="hero" />
      </div>
      <div className="order-1 mb-8 flex w-full justify-center xl:hidden">
        <img src={MenImageMobile} alt="hero" />
      </div>
    </section>
  );
};

export default Index;
