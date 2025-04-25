import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub, FaFigma, FaJava } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaFigma />, name: "Figma" }
];

export const TechnicalSkills = () => {
    return (
        <section className="w-full py-16 px-6 lg:px-20 ml-13">
            <div className="max-w-6xl mx-auto flex flex-col items-start">
                <h2 className="text-3xl md:text-4xl font-semibold font-sans mb-10 text-[#1a2c70]">Technical Skills 🛠️</h2>
                <div data-aos="fade-left" className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-left">
                    {skills.map((skill, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col items-center">
                            <div className="text-4xl text-[#234DCE] transition-all duration-300 group-hover:scale-110 group-hover:text-[#1a2c70]">
                                {skill.icon}
                            </div>
                            <p className="text-sm mt-2 text-[#1a2c70] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
