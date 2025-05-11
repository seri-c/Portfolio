
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

export default function ExperienceTimeline() {

    const ErcotExperience: Experience = {
        title: "GDP Engineer",
        timeframe: "July 2023 - Present",
        company: "ERCOT",
        experienceItems: [
            { text: "Leading full stack development for an operator communications application with a projected $1M impact" },
            { text: "Supported GridGeo, an application displaying the Texas Grid Map and interconnections" },
            { text: "Automated a verification process crucial for maintaining reliability for ERCOT’s 25 million customers" }
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
        <div className="w-screen h-fit p-2 bg-offwhite">


        

            <ExperienceCard {...ErcotExperience}>

                <div className="mt-4 flex flex-row">
                    <ReactLogo></ReactLogo>
                    <JavaLogo></JavaLogo>
                    <BootstrapLogo></BootstrapLogo>
                    <SqlLogo></SqlLogo>
                </div>

            </ExperienceCard>

            <ExperienceCard {...NPExperience1}>
                <div className="mt-4 flex flex-row">
                    <DockerLogo></DockerLogo>
                    <RedisLogo></RedisLogo>
                </div>

            </ExperienceCard>
            <ExperienceCard {...NPExperience2}>
                <div className="mt-4 flex flex-row">
                    <MongoLogo></MongoLogo>
                    <AngularLogo></AngularLogo>
                </div>
            </ExperienceCard>

        </div>


    );

}