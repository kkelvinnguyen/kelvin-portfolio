import { useState } from 'react';
import stack1 from '../../assets/profile/stack1.png';
import stack2 from '../../assets/profile/stack2.png';
import stack3 from '../../assets/profile/stack3.png';
import logo from '../../assets/logo.png';

export const Landing = () => {
    const [stack, setStack] = useState([stack1, stack2, stack3]);

    const handleClick = () => {
        const newStack = [...stack];
        const top = newStack.shift();
        newStack.push(top);
        setStack(newStack);
    };

    return (
        <section id="home" className="flex justify-center px-6 sm:px-10 md:px-16 lg:px-20 pt-10 pb-40 relative">

            <div className="absolute top-7 right-7">
                <img src={logo} alt="Logo" className="w-4 lg:w-8 md:w-6 sm:w-4 h-auto" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl mt-10 gap-y-10">

                <div className="flex-1 text-left">
                    <h1 data-aos="fade-down" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans text-[#1a2c70] leading-snug">
                        a full-stack developer fixing his frontend and backend bugs. hi, i'm
                    </h1>

                    <div className="flex space-x-2 mt-4">
                        <div style={{ transform: "rotate(-5deg)" }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] float-a">k</span>
                        </div>
                        <div style={{ transform: "rotate(4deg)" }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] float-b">e</span>
                        </div>
                        <div style={{ transform: "rotate(2deg)" }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] float-a">l</span>
                        </div>
                        <div style={{ transform: "rotate(-6deg)" }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] float-b">v</span>
                        </div>
                        <div style={{ transform: "rotate(-2deg)" }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] float-a">i</span>
                        </div>
                        <div style={{ transform: "rotate(5deg)" }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] float-b">n</span>
                        </div>
                        <div style={{ transform: "rotate(-4deg)" }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] float-a">!</span>
                        </div>
                    </div>

                    <div className="border-2 border-[#1a2c70] px-6 py-3 inline-block rounded-lg mt-6">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1a2c70]">
                            Computer Science @ Queen's University
                        </p>
                    </div>
                </div>

                <div onClick={handleClick} data-aos="fade-left" className="hidden lg:flex flex-1 items-center justify-center mt-5 relative h-[410px] cursor-pointer transition-transform duration-700 ease-in-out">
                    <div className="relative w-[250px] h-[410px]">
                        {stack.map((src, index) => (
                            <img key={index} src={src} alt={`Polaroid ${index}`} className={`absolute transition-all duration-500 ease-in-out w-[250px] h-auto rounded-xl shadow-xl ${index === 0 ? 'z-30 scale-105 hover:scale-110 rotate-3' : index === 1 ? 'z-20 rotate-10' : 'z-10 -rotate-4'}`} style={{ top: `${index * 5}px`, left: `${index * 5}px` }} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};