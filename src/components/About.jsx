import React from "react";
import { FaArrowRight } from "react-icons/fa";
import pasta from "../assets/pasta.png";
import chef from "../assets/chef.jpg";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Best food in town awaits you
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In veniam
            explicabo impedit necessitatibus illum placeat excepturi natus unde
            numquam! Natus soluta aperiam necessitatibus maiores perferendis, a
            illo voluptates fugit nulla!
          </p>
          <div className="btn">
            <a href="#" className="text-white text-[0.85rem]">
              Explore more
            </a>
            <FaArrowRight className="text-white" />
          </div>
        </div>
        <div className="md:row-start-1">
          <img src={pasta} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Our team of registered nursees and skilled healthcare professionals
            provide in-home nursing
          </div>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            praesentium fugit vero dicta et nam illo autem est inventore.
            Possimus atque, explicabo nulla nam quas modi quisquam in ratione.
            Voluptates?
          </p>
        </div>
        <div className="">
          <img src={chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
