import { motion } from "framer-motion";
import { fadeIn, fadeInSpring } from "../variants";

const skillsGrouped1 = [
    {
        category: "Programming Languages",
        items: [
            { name: "C", icon: "fa-solid fa-code text-blue-300" },
            { name: "C++", icon: "fa-solid fa-code text-blue-400" },
            { name: "Python", icon: "fa-brands fa-python text-yellow-400" },
            { name: "JavaScript", icon: "fa-brands fa-js text-yellow-500" },
        ],
    },
    {
        category: "Databases",
        items: [
            { name: "MongoDB", icon: "fa-solid fa-database text-green-500" }
        ],
    },
    {
        category: "Design & UI Tools",
        items: [
            { name: "Figma", icon: "fab fa-figma text-orange-500" },
        ],
    },
];

const skillsGrouped2 = [
    {
        category: "Frontend Libraries/Frameworks",
        items: [
            { name: "HTML", icon: "fa-brands fa-html5 text-orange-500" },
            { name: "CSS", icon: "fa-brands fa-css3-alt text-blue-500" },
            { name: "Bootstrap", icon: "fa-brands fa-bootstrap text-purple-500" },
            { name: "Tailwind CSS", icon: "fa-solid fa-wind text-cyan-500" },
            { name: "React", icon: "fa-brands fa-react text-blue-400" },
        ],
    },
    {
        category: "Version Control",
        items: [
            { name: "Git", icon: "fab fa-git-alt text-orange-600" },
            { name: "GitHub", icon: "fa-brands fa-github text-white" }
        ],
    },
];

const skillsGrouped3 = [
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "fa-brands fa-node-js text-green-600" },
            { name: "Express.js", icon: "fa-solid fa-server text-gray-400" },
        ],
    },
    {
        category: "Tools & IDEs",
        items: [
            { name: "Visual Studio Code", icon: "fa-solid fa-code text-blue-400" },
            { name: "Android Studio", icon: "fa-brands fa-android text-green-500" },
            { name: "Replit", icon: "fa-solid fa-laptop-code text-indigo-400" },
            { name: "CodeSandbox", icon: "fa-solid fa-cube text-purple-400" },
            { name: "Vite.js", icon: "fa-solid fa-bolt text-violet-500" },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section min-h-screen bg-[#0b0b17] py-20 bg-dots" data-scroll-section>
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
                <motion.div className="text-center mb-16"
                    variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                    <span className="bg-indigo-500/10 text-indigo-400 px-4 py-1 rounded-full text-sm font-medium">
                        My Skills
                    </span>
                    <h2 className="heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
                        Technologies <span className="gradient-text">I Work With</span>
                    </h2>
                </motion.div>

                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    {[skillsGrouped1, skillsGrouped2, skillsGrouped3].map((groupList, colIndex) => (
                        <motion.div key={colIndex} className="flex flex-col gap-y-1 w-full lg:w-1/3"
                            variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} >
                            {groupList.map((group, idx) => (
                                <div key={idx} className="m-1">
                                    <div className="rounded-xl p-4 border-2 border-dashed border-white/30">
                                        <motion.h3 className="text-xl font-medium text-center mb-4 text-white"
                                            variants={fadeInSpring('up', 0.8)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                                            {group.category}
                                        </motion.h3>

                                        <motion.div className="grid grid-cols-2 gap-2 ps-6 pe-6"
                                            variants={fadeInSpring('up', 0.8)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} >
                                            {group.items.map((item, index) => (
                                                <div key={index} className="inline-block">
                                                    <div title={item.name} className="flex items-center gap-4 p-1 w-fit cursor-pointer"
                                                        style={{ animationDelay: `${index * 0.1}s` }} >
                                                        <i className={`${item.icon} text-2xl`}></i>
                                                        <span className="text-gray-200 text-base">{item.name}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Skills;