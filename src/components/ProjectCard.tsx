
import type { Project } from "../interfaces/ProjectInterface";


const ProjectCard: React.FC<Project> = ({ title, subtitle, link, imageSrc, children }) => {

  

    return (

        <div className=" bg-white hover:shadow-lg overflow-clip hover:shadow-rose-300/60 rounded-md w-fit mt-4  h-fit m-auto ">

            <a href={link} target="_blank">
                <div style={{ backgroundImage: `url(${imageSrc})`}} className="flex-none relative h-40 md:h-90 m-auto w-full bg-cover">


                    <div className="bg-black/30 text-center text-white font-light hover:bg-black/0 hover:cursor-pointer absolute inset-0 w-full h-full">

                    </div>


                </div>
            </a>

            <div className="p-4 font-light text-slate-500">
                <p className='text-2xl'>{title}</p>
                <p className="text-lg">{subtitle}</p>
                {children}
            </div>

        </div>

    );

}
export default ProjectCard;