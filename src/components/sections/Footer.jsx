import linkedin from "../../assets/contacts/linkedin.png";
import github from "../../assets/contacts/github.png";
import gmail from "../../assets/contacts/gmail.png";

export const Footer = () => {
    return (
        <section className="bg-white w-full py-16">
            <div className="pl-20 mx-auto">
                <h1 data-aos="fade-right" className="text-4xl font-semibold text-[#1a2c70]">let's sync!</h1>
                <p data-aos="fade-right" className="text-lg pt-2 text-[#1a2c70]">thanks for visiting, let's connect!</p>
                <div className="flex space-x-8 mt-10">
                    <a href="https://github.com/kkelvinnguyen" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <img src={github} className="w-[100px] h-auto hover:scale-105 transition-transform" />
                    </a>

                    <a href="https://www.linkedin.com/in/nguyen-kelvin/n" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <img src={linkedin} className="w-[100px] h-auto hover:scale-105 transition-transform" />
                    </a>

                    <a href="mailto:nguyenkelvin021@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <img src={gmail} className="w-[100px] h-auto hover:scale-105 transition-transform" />
                    </a>

                </div>
            </div>
        </section>
    );
};