

import { type Experience } from "../interfaces/ExperienceInterface";


const ExperienceCard: React.FC<Experience> = ({ title, timeframe, company, experienceItems, children }) => {
    return (

        <div className=" bg-white shadow-lg shadow-rose-300/20 hover:shadow-rose-300/60 rounded-md w-fit mt-4  h-auto m-auto ">

            <div className="p-4 text-black/60 ">

                <div className="flex">

                    <span className="text-2xl text-black font-medium flex-1 ">{title}</span>
                    <span className="text-xl">{timeframe}</span>
                </div>

                <p className="text-xl font-medium text-rose-400/80">{company}</p>

                <ul className="px-4 pt-2  font-extralight list-disc marker:text-rose-400 text-lg">

                    {experienceItems.map((item, idx) => (
                        <li key={idx}>
                            {item.text}
                        </li>
                    ))}
                  
                </ul>

                {children}

            </div>
        </div>
    )
}

export default ExperienceCard;