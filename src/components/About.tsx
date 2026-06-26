
import ProfileImage from '../assets/profile.jpg'
import type { GenericInterface } from '../interfaces/GenericInterface';
import RTOCPdf from "../assets/RTOC.pdf"

const About: React.FC<GenericInterface> = ({id})=> {

    return (
        <div id={id} className="h-fit bg-white border-y-1 pt-8 border-solid border-copper/20 ">

            <div className="p-7">


                <div className="flex flex-col md:flex-row">

                    <div >
                        <p className="text-3xl pb-2 text-blush">About</p>
                        <span className="text-lg/9 font-extralight  ">Welcome! I'm Christelle, a full-stack software engineer with 3 years of experience specializing in backend development. I build Java applications, REST APIs, and database-driven systems while also developing user-facing features when needed.
                        I earned a Bachelor's degree in Electrical Engineering from the University of Illinois Urbana-Champaign in May 2023 and a Master's degree in Data Science from UT Austin in May 2026.
                           
                            <br/>
                            <br/>
                            Since joining ERCOT in July 2023, I've been developing software that supports the Texas power grid. I'm the primary developer for the <a className="text-blue-500" href={RTOCPdf} target="_blank">Real-Time Operator Communications Tool</a>, where I design and develop backend services, APIs, and database solutions.
                        </span>
                        
                    </div>
                    <div className='flex-none pl-2 h-60 w-60 '>
                        <img className="rounded-full m-auto" src={ProfileImage} alt="Profile Image" />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;