import proj1 from "../../assets/projects/project1img.png";
import proj2 from "../../assets/projects/project2img.png";
import proj3 from "../../assets/projects/project3img.png";
import proj4 from "../../assets/projects/project4img.png";
import proj5 from "../../assets/projects/project5img.png";

const ImageBox = ({ src, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-[300px] h-[200px] flex items-center justify-center mt-4 lg:mt-0">
            <img data-aos="zoom-in" src={src} alt="project" className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
        </div>
    </a>
);

export const Projects = () => {
    return (
        <section>
            <h1 className="ml-20 mt-20 text-3xl md:text-4xl font-semibold font-sans mb-10 text-[#1a2c70]">
                Projects 👨🏻‍💻
            </h1>

            <div data-aos="zoom-in" data-aos-offset="200" className="flex flex-col md:flex-row items-start justify-between mx-20 mb-20 gap-y-10">
                <div className="max-w-[780px] lg:mr-10">
                    <h1 className="text-3xl font-semibold">Bartering for goats can have serious consequences. 🐐</h1>
                    <h1 className="mt-7 text-[1.3rem] text-[#1a2c70]">
                        <span className="font-bold">🥇 Best Overall National Bank of Canada Challenge Project @ QHacks 2025.</span>
                    </h1>
                    <h1 className="mt-7 text-[1.3rem] text-[#1a2c70]">
                        <span className="font-bold">Evolution of Trade</span> is an interactive narrative choice game where players explore the history of finance and trade, unlocking different paths and endings which allows for a dynamic storyline where choice is critical.
                    </h1>
                </div>
                <div className="lg:self-start self-center">
                    <ImageBox src={proj5} link="https://devpost.com/software/the-evolution-of-trade" />
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-offset="200" className="flex flex-col md:flex-row items-start justify-between mx-20 mb-20 gap-y-10">
                <div className="max-w-[780px] lg:mr-10">
                    <h1 className="text-3xl font-semibold">Welcome to my portfolio... is this deja vu? 🤔</h1>
                    <h1 className="mt-7 text-[1.3rem] text-[#1a2c70]">
                        My first <span className="font-bold">Personal Website</span> created in 2023 using HTML, CSS, and Figma to showcase my projects.
                    </h1>
                </div>
                <div className="lg:self-start self-center">
                    <ImageBox src={proj4} link="https://personal-website-v1-coral.vercel.app/" />
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-offset="200" className="flex flex-col md:flex-row items-start justify-between mx-20 mb-20 gap-y-10">
                <div className="max-w-[780px] lg:mr-10">
                    <h1 className="text-3xl font-semibold">Hunt for treasure in an ever-changing maze. 🔎</h1>
                    <h1 className="mt-7 text-[1.3rem] text-[#1a2c70]">
                        Coding a remake of the classic board game <span className="font-bold">Labyrinth</span>, I worked on inserting the tiles into the board, adding animations, sound effects, and designing and integrating the GUI.
                    </h1>
                </div>
                <div className="lg:self-start self-center">
                    <ImageBox src={proj3} link="https://github.com/kkelvinnguyen/labyrinth" />
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-offset="200" className="flex flex-col md:flex-row items-start justify-between mx-20 mb-20 gap-y-10">
                <div className="max-w-[780px] lg:mr-10">
                    <h1 className="text-3xl font-semibold">Leveraging AI to predict future wildfires. 🌥</h1>
                    <h1 className="mt-7 text-[1.3rem] text-[#1a2c70]">
                        Placing 4th overall in Hack The 6ix, <span className="font-bold">FIREcast</span> integrates geo-coding and weather data APIs to aid experts in identifying high-risk zones while allowing participation on a global scale.
                    </h1>
                </div>
                <div className="lg:self-start self-center">
                    <ImageBox src={proj2} link="https://github.com/kkelvinnguyen/Java-Crash-Course-Methods" />
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-offset="200" className="flex flex-col md:flex-row items-start justify-between mx-20 mb-20 gap-y-10">
                <div className="max-w-[780px] lg:mr-10">
                    <h1 className="text-3xl font-semibold">Learning Java isn't easy, I get it. 😤</h1>
                    <h1 className="mt-7 text-[1.3rem] text-[#1a2c70]">
                        In my mini-series called <span className="font-bold">Java Crash Course</span>, I help new Java programmers understand the concept of methods (which can be complicated) by teaching them in a simple manner.
                    </h1>
                </div>
                <div className="lg:self-start self-center">
                    <ImageBox src={proj1} link="https://github.com/kkelvinnguyen/Java-Crash-Course-Methods" />
                </div>
            </div>
        </section>
    );
};
