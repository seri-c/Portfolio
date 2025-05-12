import type { GenericInterface } from "../interfaces/GenericInterface";
import type { Project } from "../interfaces/ProjectInterface";
import ProjectCard from "./ProjectCard";

import ReactLogo from "./Logos/ReactLogo";
import TailwindLogo from "./Logos/TailwindLogo";
import ViteLogo from "./Logos/ViteLogo";
import PortfolioImage from "../assets/Portfolio.jpg"

const FooterGradient: React.FC<GenericInterface> = ({ id }) => {
    const PortfolioProject: Project = {
        title: "Portfolio",
        subtitle: "You're on this site! Built by me, using TailwindCSS, ReactJS, and Vite. This website showcases a collection of my work and experience.",
        link: "https://github.com/seri-c/Portfolio",
        imageSrc: PortfolioImage,
        children: undefined
    }

    return (
        <div id={id} className="w-screen h-fit bg-linear-to-b p-8 from-offwhite from-20% to-pink-100">
            <p className="text-3xl pb-4  text-black/60">Projects</p>
            <ProjectCard {...PortfolioProject}>
                <div className="mt-4 flex flex-row">
                    <ReactLogo></ReactLogo>
                    <TailwindLogo></TailwindLogo>
                    <ViteLogo></ViteLogo>

                </div>
            </ProjectCard>
        </div>
    );

}


export default FooterGradient