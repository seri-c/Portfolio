import ProfileImage from "../assets/profile.jpg"
import BootstrapLogo from "./BootstrapLogo";
import IconButton from "./IconButton";
import JavaLogo from "./JavaLogo";
import ReactLogo from "./ReactLogo";
export default function Box() {

    return (
        <div className="w-screen h-100 bg-offwhite ">

            <div className=" bg-white shadow-lg shadow-rose-300/10 hover:shadow-rose-300/60 rounded-md w-4xl h-80 m-auto ">

                <div className="p-4 text-black/60 ">
                    <div className=" flex">
                        <span className="text-2xl text-black font-medium flex-1 ">GDP Engineer</span>

                        <span className="text-xl">July 2023 - Present</span>
                    </div>
                    <p className="text-xl font-medium text-rose-400/80">ERCOT</p>

                    <ul className="px-4 pt-2  font-extralight list-disc marker:text-rose-400 text-lg">
                        <li>Leading full stack development for an operator communications application with a projected $1M impact</li>
                        <li>Supported GridGeo, an application displaying the Texas Grid Map and interconnections</li>
                        <li>Automated a verification process crucial for maintaining reliability for ERCOT’s 25 million customers</li>

                    </ul>

                    <div className="mt-4 flex flex-row">
                        <ReactLogo></ReactLogo>
                        <JavaLogo></JavaLogo>
                        <BootstrapLogo></BootstrapLogo>
                    </div>

                </div>

            </div>
        </div>
    );

}