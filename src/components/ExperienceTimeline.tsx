
import ExperienceCard from "./ExperienceCard";
import { type Experience } from "../interfaces/ExperienceInterface";

import BootstrapLogo from "./Logos/BootstrapLogo";
import JavaLogo from "./Logos/JavaLogo";
import ReactLogo from "./Logos/ReactLogo";
import SqlLogo from "./Logos/SqlLogo";
import DockerLogo from "./Logos/DockerLogo";
import RedisLogo from "./Logos/RedisLogo";
import MongoLogo from "./Logos/MongoLogo";
import AngularLogo from "./Logos/AngularLogo";

import CherryBlossom from "./Logos/CherryBlossom";
import type { GenericInterface } from "../interfaces/GenericInterface";

const ExperienceTimeline: React.FC<GenericInterface> = ({id})=> {

    const ErcotExperience: Experience = {
        title: "GDP Engineer",
        timeframe: "July 2023 - Present",
        company: "ERCOT",
        experienceItems: [
            { text: "Leading full stack development for a $2M power grid communications project" },
            { text: "Contributed to GridGeo, an application used to visualize the Texas power grid in real time" },
            { text: "Automated a verification process crucial for maintaining reliability for ERCOT’s 25M customers" }
        ],
        children: undefined
    }

    const NPExperience1: Experience = {
        title: "Software Developer Intern",
        timeframe: "June - December 2021",
        company: "Network Perception",
        experienceItems: [
            { text: "Upgraded the network vulnerability view's tables to UI Tables" },
            { text: "Added new entries to the database to store additional user information and credentials" },
        ],
        children: undefined
    }

    const NPExperience2: Experience = {
        title: "Software Developer Intern",
        timeframe: "June - August 2020",
        company: "Network Perception",
        experienceItems: [
            { text: "Created a website to host various developer tools" },
            { text: "Developed a tool to parse error logs into tables and allow for increased interactivity " },
        ],
        children: undefined
    }

    return (
        <div className="w-screen h-fit p-3 bg-offwhite" id={id}>
            
            <p className="text-3xl px-4 pt-11 pb-4 text-red-300/75">Experience</p>

        

            <ExperienceCard {...ErcotExperience}>

                <div className="mt-4 flex flex-wrap flex-row">
                    <ReactLogo></ReactLogo>
                    <JavaLogo></JavaLogo>
                    <BootstrapLogo></BootstrapLogo>
                    <SqlLogo></SqlLogo>
                </div>

            </ExperienceCard>

            <CherryBlossom height="20pt"></CherryBlossom>

            <ExperienceCard {...NPExperience1}>
                <div className="mt-4 flex flex-wrap flex-row">
                    <DockerLogo></DockerLogo>
                    <RedisLogo></RedisLogo>
                </div>

            </ExperienceCard>

            <CherryBlossom height="20pt"></CherryBlossom>

            <ExperienceCard {...NPExperience2}>
                <div className="mt-4 flex flex-wrap flex-row">
                    <MongoLogo></MongoLogo>
                    <AngularLogo></AngularLogo>
                </div>
            </ExperienceCard>

        </div>


    );

}

export default ExperienceTimeline;