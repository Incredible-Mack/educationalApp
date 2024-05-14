import React from "react";
import HomeGridComponent from "../component/HomeGridComponent";
import * as utilities  from "./HomeUtilities/data_home_content";
import  Accordion from "../component/Accordion";
import * as accordionutili from "./HomeUtilities/data_accordion";


export const Home = () => {
      
  return (
    <>
    
      <div className="h-screen ">
        <div className="absolute z-[-2]  top-0 h-screen w-screen bgHome">
        <div className="filter">&nbsp;</div>
          <div className="flex items-center justify-center h-screen flex-col">
            
            <img src="https://islt.oceoonline.org/assets/logo-2b9fb765.png" alt="ISLT" />
            {/* <h1 className="text-white font-bold text-6xl md:text-[116px] text-center">
              Welcome To <br />
              ISLT
            </h1> */}
            <p className="w-3/6 text-center text-base text-slate-300">
            An Apex Training Centre For The Loveworld Nation Raising Strategic Leaders....Developing your skills and Maximizing your global impact
            </p>
          </div>
        </div>
      </div>
      <section >
        <HomeGridComponent items={utilities.achivements} moreItems={utilities.moreAchievements} bgcolor={'bg-white'}  />
        <HomeGridComponent items={utilities.meetDirector} moreItems={utilities.members} headingTexts={utilities.headingTexts} bgcolor={'bg-purple-900'} />
        <Accordion accordionheading={accordionutili.accordionHeading}  bodyText={accordionutili.accordionBody} />
        <HomeGridComponent items={utilities.meetTheStudent} moreItems={utilities.studentmembers} headingTexts={utilities.headingTextsStudent} bgcolor={'bg-purple-900'} />
       
        <HomeGridComponent items={utilities.theNews} headingTexts={utilities.whatNew} bgcolor={'bg-white'} />
    
      </section>
    </>
  );
};
