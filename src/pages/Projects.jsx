import { useState } from 'react';
import Calculator from "../assets/Calculator.png"
import TaskNest from "../assets/TaskNest.png"
import Jiomart_clone from "../assets/Jiomart_clone.png"
import Unit_con from "../assets/Unit-con.png"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const basicProjects = [
    {
        id: 1,
        title: "Calculator",
        description: "A basic calculator built using HTML, CSS, and JavaScript. This project features a clean and responsive design with a simple user interface.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        image: <img src={Calculator} alt="Calculator" className="w-full h-full" />,
        github: "https://github.com/KFS-developer/Calculator.git",
        live: "https://kfs-developer.github.io/Calculator/"
    },
    {
        id: 2,
        title: "TaskNest - Todo List Web App",
        description: "TaskNest helps you stay organized with a simple yet elegant UI for managing daily tasks—add, edit, complete, and delete with ease.",
        tags: ["React", "CSS", "Responsive"],
        image: <img src={TaskNest} alt="TaskNest" className="object-cover w-full h-full" />,
        github: "https://github.com/KFS-developer/todo_list.git",
        live: "https://todo-list-ketuls-projects-f6da0a39.vercel.app/"
    }
    ,
    {
        id: 3,
        title: "UnitEase - Unit Converter Web App",
        description: "UnitEase allows you to seamlessly convert between common Length and Weight units with an intuitive UI.",
        tags: ["React", "Tailwind CSS", "Responsive"],
        image: <img src={Unit_con} alt="Unit Converter" className="object-cover w-full h-full" />,
        github: "https://github.com/KFS-developer/unit-converter.git",
        live: "https://unit-converter-kfs.vercel.app/"
    }
]

const frontendProjects = [
    {
        id: 4,
        title: "Jiomart Clone",
        description: "This clone replicates key features of the JioMart shopping experience including category-based navigation, dynamic product search, cart, and integrated PayPal Checkout.",
        tags: ["React", "Tailwind CSS", "Redux", "Paypal", "Responsive"],
        image: <img src={Jiomart_clone} alt="Jiomart Clone" className="object-cover w-full h-full" />,
        github: "https://github.com/KFS-developer/Jiomart_Clone.git",
        live: "https://jiomart-clone-kp.vercel.app/"
    },
];

const fullstackProjects = [];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('basic');

    const displayedProjects = activeTab === 'basic' ? basicProjects : activeTab === 'frontend' ? frontendProjects : fullstackProjects;

    return (
        <section id="projects" className="section min-h-screen py-20 bg-[#0a0a14]" data-scroll-section>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div className="text-center mb-16"
                    variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                    <span className="bg-indigo-500/10 text-indigo-400 px-4 py-1 rounded-full text-sm font-medium">
                        My Projects
                    </span>
                    <h2 className="heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Recent <span className="gradient-text">Work</span></h2>
                </motion.div>

                <motion.div className="flex justify-center mb-12"
                    variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                    <div className="inline-flex rounded-lg overflow-hidden p-1 bg-[#151525]">
                        <button onClick={() => setActiveTab('basic')}
                            className={`tab-btn px-6 py-3 text-base font-medium rounded-lg ${activeTab === 'basic' ? 'active text-white' : 'text-gray-300'}`} >
                            Starter Projects
                        </button>
                        <button onClick={() => setActiveTab('frontend')}
                            className={`tab-btn px-6 py-3 text-base font-medium rounded-lg ${activeTab === 'frontend' ? 'active text-white' : 'text-gray-300'}`} >
                            Frontend Projects
                        </button>
                        <button onClick={() => setActiveTab('fullstack')}
                            className={`tab-btn px-6 py-3 text-base font-medium rounded-lg ${activeTab === 'fullstack' ? 'active text-white' : 'text-gray-300'}`} >
                            Fullstack Projects
                        </button>
                    </div>
                </motion.div>

                {displayedProjects.length === 0 ? (
                    <div className="text-center  text-gray-400 text-lg py-10 italic">
                        Projects in this category are currently under development. Stay tuned!
                    </div>
                ) : (
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={fadeIn('up', 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                        {displayedProjects.map((project) => (
                            <div key={project.id} className="project-card rounded-xl overflow-hidden">
                                <motion.div className="h-48 bg-[#151525] flex items-center justify-center overflow-hidden"
                                    variants={fadeIn('up', 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                                    <div className="project-image w-full h-full flex items-center justify-center">
                                        {project.image}
                                    </div>
                                </motion.div>

                                <motion.div className="p-6"
                                    variants={fadeIn('up', 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-justify mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="bg-indigo-500/10 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded" >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <a href={project.live}
                                            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center transition-all duration-300 hover:translate-x-1" >
                                            Live Demo <FaExternalLinkAlt className="ml-1" />
                                        </a>
                                        <a href={project.github}
                                            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center transition-all duration-300 hover:translate-x-1" >
                                            Source Code <FaGithub className="ml-1" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;