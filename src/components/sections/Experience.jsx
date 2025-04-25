import qtma from "../../assets/experiences/qtma.png";
import compsa from "../../assets/experiences/compsa.png";
import ht6 from "../../assets/experiences/ht6.png";

export const Experience = () => {

    const Logo = ({ src, link, role, company, date }) => (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div data-aos="fade-right" className=" flex mb-10 ml-20">
                <img src={src} alt="experience" className="w-[100px] rounded transition-transform duration-300 ease-in-out hover:scale-90 cursor-pointer" />
                <div>
                    <h1 className="ml-5 text-[1.4rem]">{role}</h1>
                    <h1 className="ml-5 text-[#1a2c70] text-[1.2rem]">{company}</h1>
                    <h1 className="ml-5 text-[1rem]">{date}</h1>
                </div>
            </div>
        </a>
    );

    return (
        <section>
            <div className="pb-2">
                <h1 className="ml-20 mt-5 text-3xl md:text-4xl font-semibold font-sans mb-10 text-[#1a2c70]" >Experience 💼</h1>
                <Logo src={qtma} link="https://www.qtma.ca/" role="Software Developer" company="QTMA" date="March 2025 - Present" />
                <Logo src={ht6} link="https://hackthe6ix.com/" role="Co-Director of Operations" company="Hack the 6ix" date="November 2023 - Present" />
                <Logo src={compsa} link="https://compsa.ca/" role="Executive Intern" company="COMPSA" date="September 2024 - April 2025" />
            </div>
        </section>
    );
};