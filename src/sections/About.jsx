import Globe from "react-globe.gl";
import grid1 from "../../public/assets/grid1.png";
import image from "../../public/assets/image.png";
import grid3 from "../../public/assets/grid3.png";
import grid4 from "../../public/assets/grid4.png";
import tick from "../../public/assets/tick.svg";
import copy from "../../public/assets/copy.svg";
import Button from "../components/Button";
import { useState } from "react";

function About() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("vincentanjiri12@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid1}
              alt="grid i"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Vincent</p>
              <p className="grid-subtext">
                With 3+ years of experience, I have honed my skills in frontend
                and backend development, with a focus on animated 3D websites
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={image}
              alt="grid 2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus on React and
                Nextjs ecosystems
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 1.3193073,
                    lng: 36.8899051,
                    text: "Nairobi, Kenya",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div className="">
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I&apos;m Based in Nairobi,Kenya with remote work available
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid3}
              alt="grid 3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving propblem and building things through code. Coding
                isn&apos;t just my proffession it is my passion
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid 4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium teaxt-gray_gradient text-white">
                  vincentanjiri12@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
