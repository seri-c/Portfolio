
import ExperienceCard from "./ExperienceCard";
import { type Experience } from "../interfaces/ExperienceInterface";

import SpringBootLogo from "./Logos/SpringBootLogo";
import JavaLogo from "./Logos/JavaLogo";
import ReactLogo from "./Logos/ReactLogo";
import SqlLogo from "./Logos/SqlLogo";
import DockerLogo from "./Logos/DockerLogo";
import RedisLogo from "./Logos/RedisLogo";
import MongoLogo from "./Logos/MongoLogo";
import AngularLogo from "./Logos/AngularLogo";

import CherryBlossom from "./Logos/CherryBlossom";
import type { GenericInterface } from "../interfaces/GenericInterface";

const ExperienceTimeline: React.FC<GenericInterface> = ({ id }) => {

    const ErcotExperience: Experience = {
        title: "Application Developer",
        timeframe: "July 2023 - Present",
        company: "ERCOT",
        experienceItems: [
            { text: "Primary developer for a $2M power grid communications project owning end-to-end backend architecture and database design" },
            { text: "Led backend performance optimization efforts  by tuning database queries to improve response times and implementing pagination and indexing strategies to reduce CPU saturation during load testing" },
            { text: "Added automated unit and integration tests covering messaging success and error scenarios" },
            { text: "Developed OpenAPI specifications for core messaging APIs" },
            { text: <><strong>POC:</strong> Rebuilt the legacy Servlet and JDBC-based system using Spring Boot and Hibernate to improve scalability and maintainability</>}
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

            <p className="text-3xl px-4 pt-11 pb-4 text-blue-400/75">Experience</p>



            <ExperienceCard {...ErcotExperience}>

                <div className="mt-4 flex flex-wrap flex-row">
                    <JavaLogo></JavaLogo>
                    <SqlLogo></SqlLogo>
                    <SpringBootLogo></SpringBootLogo>
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