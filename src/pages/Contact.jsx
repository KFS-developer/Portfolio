import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { fadeIn } from "../variants";
import { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yytrsfu', 'template_8zarmhz', form.current, {
                publicKey: 'rldGmn1b-9K7YgkmQ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setShowPopup(true);
                    setTimeout(() => setShowPopup(false), 3000);
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section id="contact" className="section min-h-screen py-20 bg-dots bg-[#0b0b17]" data-scroll-section>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div className="text-center mb-16"
                    variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                    <span className="bg-indigo-500/10 text-indigo-400 px-4 py-1 rounded-full text-sm font-medium">
                        Contact Me
                    </span>
                    <h2 className="heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Get <span className="gradient-text">In Touch</span></h2>
                </motion.div>

                <div className="flex flex-col md:flex-row">
                    <motion.div className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
                        variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                        <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
                        <p className="text-gray-300 mb-6">
                            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>

                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4">
                                <FaMapMarkerAlt className="text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="text-gray-200 font-medium">Location</h4>
                                <p className="text-gray-400">Surat, Gujarat</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4">
                                <FaEnvelope className="text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="text-gray-200 font-medium">Email</h4>
                                <p className="text-gray-400">ketul3168@gmail.com</p>
                            </div>
                        </div>

                        <div className="mt-8 flex space-x-4">
                            <a href="https://github.com/KFS-developer" className="social-icon w-10 h-10 rounded-full bg-[#151525] flex items-center justify-center text-gray-400">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/patel-ketul-0654b0266/" className="social-icon w-10 h-10 rounded-full bg-[#151525] flex items-center justify-center text-gray-400">
                                <FaLinkedinIn className="text-xl" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div className="md:w-1/2"
                        variants={fadeIn('left', 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
                        <div className="glass-card rounded-xl p-8">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" name="user_name" required
                                        className="w-full px-4 py-3 rounded-lg input-field text-gray-200 focus:outline-none" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                                    <input type="email" id="email" placeholder="Your Email" name="user_email" required
                                        className="w-full px-4 py-3 rounded-lg input-field text-gray-200 focus:outline-none" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                                    <input type="text" id="subject" placeholder="Subject" name="user_subject"
                                        className="w-full px-4 py-3 rounded-lg input-field text-gray-200 focus:outline-none" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                                    <textarea id="message" rows="4" placeholder="Your Message" name="message" required
                                        className="w-full px-4 py-3 rounded-lg input-field text-gray-200 focus:outline-none"
                                    ></textarea>
                                </div>

                                <button type="submit" value="Send"
                                    className="btn-primary w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-[#1f1f2e] text-white rounded-lg p-8 w-80 shadow-xl animate-fade-in">
                            <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
                            <p>Your message has been submitted successfully.</p>
                            <button onClick={() => setShowPopup(false)}
                                className="mt-6 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium">
                                Close
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Contact;