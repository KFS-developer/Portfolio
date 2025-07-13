import logo from '../assets/KP.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#080811] text-white py-8" data-scroll-section>
            <motion.div
                variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.3 }}>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0" >
                            <a href="#" className="text-2xl font-bold flex items-center space-x-2">
                                <img src={logo} alt="" className="w-11 h-11" />
                                <span className="text-white">Patel</span>
                                <span className="gradient-text">Ketul</span>
                            </a>
                        </div>

                        <div className="flex items-center space-x-4" >
                            <p className="text-gray-400">Feel free to reach out for collaborations</p>
                            <a href="https://github.com/KFS-developer"
                                className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center text-white border border-indigo-500/30 hover:border-indigo-500 transition-all">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/patel-ketul-0654b0266/"
                                className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center text-white border border-indigo-500/30 hover:border-indigo-500 transition-all">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-4 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Patel Ketul. All rights reserved.</p>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
