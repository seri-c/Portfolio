
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
                        <span className="text-lg/9 font-extralight  ">Welcome! I'm Christelle, a full stack developer with 2 years of experience focusing on developing beautiful and performant features for web applications.
                            I graduated from the University of Illinois at Urbana-Champaign with a Bachelors degree in Electrical Engineering in May 2023 and I've been working at ERCOT for the last 2 years after graduation. I've had a great time developing features to help ERCOT support the Texas Power Grid.
                            I am currently leading full stack development for the <a className="text-blue-500" href={RTOCPdf} target="_blank">Real-Time Operator Communications Tool</a>  there!
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