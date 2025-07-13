import { useEffect, useState } from "react";
import { FaCode, FaGithub, FaLinkedinIn, FaMobileAlt } from "react-icons/fa"
import user from "../assets/avatar.png"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = ({ scrollToSection }) => {

    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const roles = ['Frontend Developer', 'Full Stack Developer'];
        let index = 0, current = 0, typing = true;

        const interval = setInterval(() => {
            if (typing) {
                setTypedText(roles[index].slice(0, current + 1));
                current++;
                if (current === roles[index].length) {
                    typing = false;
                    setTimeout(() => { }, 1000);
                }
            } else {
                setTypedText(roles[index].slice(0, current - 1));
                current--;
                if (current === 0) {
                    typing = true;
                    index = (index + 1) % roles.length;
                }
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="section bg-[#0b0b17] min-h-screen flex items-center pt-20 pb-10"
            data-scroll-section
        >
            <motion.div
                className="w-full max-w-screen-xl mx-auto px-4 md:px-8"
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        className="md:w-1/2 mb-10 md:mb-0"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                            Hi, I'm <span className="gradient-text2">Patel Ketul</span>
                        </h1>

                        <div className="h-12 mb-4">
                            <h2 className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                                {typedText}
                                <span className="typing-cursor"></span>
                            </h2>
                        </div>

                        <p className="text-xl text-gray-300 mb-8 max-w-lg">
                            I build full-stack web solutions that are clean, responsive, and optimized for real-world use.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn-primary border-2 border-indigo-500 text-indigo-400 hover:text-white font-medium py-3 px-8 rounded-lg"
                            >
                                Contact Me
                            </button>
                        </div>

                        <div className="mt-12 flex items-center space-x-4">
                            <p className="text-gray-400">Find me on</p>
                            <a href="https://github.com/KFS-developer" className="social-icon text-gray-400 hover:text-white">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/patel-ketul-0654b0266/" className="social-icon text-gray-400 hover:text-white">
                                <FaLinkedinIn className="text-xl" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            <svg className="absolute w-full h-full" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#0f0f1a" stopOpacity="0" />
                                    </radialGradient>
                                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#ec4899" />
                                    </linearGradient>
                                </defs>

                                <circle cx="160" cy="160" r="150" fill="url(#glow)" />

                                <g className="animate-spin-slow origin-center">
                                    <circle cx="160" cy="160" r="155" stroke="url(#ringGradient)" strokeWidth="3" strokeDasharray="10,6" fill="none" />
                                </g>

                                <circle cx="160" cy="160" r="120" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.2" fill="none" />
                            </svg>

                            <img src={user} alt="Avatar"
                                className="z-10 w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-xl" />

                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 floating">
                                <FaCode />
                            </div>

                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 floating"
                                style={{ animationDelay: "-1s" }} >
                                <FaMobileAlt />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-down">
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                        className="text-gray-400 hover:text-white" >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;