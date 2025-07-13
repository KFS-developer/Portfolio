import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import user from "../assets/ketul img1.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
    return (
        <section id="about" className="section min-h-screen py-20 bg-[#0a0a14]" data-scroll-section>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div className="text-center mb-16"
                    variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                    <h2 className="heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">About <span className="gradient-text">Me</span></h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center">
                    <motion.div className="md:w-1/5 mb-10 md:mb-0 relative w-full flex items-center justify-center"
                        variants={fadeIn('right', 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                        <div className="relative group w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-[3px] border-violet-500 shadow-xl shadow-purple-900 transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-700">
                            <img src={user} alt="Ketul Patel"
                                className="w-full h-45 object-cover rounded-full" />
                        </div>
                    </motion.div>

                    <motion.div className="md:w-4/5 md:pl-12"
                        variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                        <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>

                        <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                            Hi, I’m <strong>Ketul Patel</strong>, a passionate and detail-oriented Full Stack Developer with a strong foundation in both
                            front-end and back-end technologies. I specialize in building robust, scalable, and responsive
                            web applications that not only perform flawlessly but also deliver seamless user experiences.
                        </p>

                        <div className="text-gray-300 mb-6 leading-relaxed">
                            <p className="mb-2">Over the past few years, I’ve worked on various projects involving technologies like:</p>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap</li>
                                <li><strong>Back-end:</strong> Node.js, Express.js, MongoDB</li>
                                <li><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Figma, Vercel</li>
                            </ul>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                            What drives me is a constant desire to learn and build meaningful solutions that solve real-world problems.
                            I enjoy turning complex requirements into clean, efficient code and collaborating with teams to bring ideas to life.
                        </p>

                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                                    <FaCode className="text-indigo-400" />
                                </div>
                                <span className="text-gray-200">Clean Code</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                                    <FaMobileAlt className="text-indigo-400" />
                                </div>
                                <span className="text-gray-200">Responsive Design</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                                    <FaRocket className="text-indigo-400" />
                                </div>
                                <span className="text-gray-200">Performance</span>
                            </div>
                        </div>

                        <button onClick={() => window.open('https://drive.google.com/file/d/1Gs2v8ARxsM31dtWIlZqkTQMGQr5JI-rF/view?usp=sharing', '_blank')}
                            className="btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center">
                            View Resume
                        </button>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default About;