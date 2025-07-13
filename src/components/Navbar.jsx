import logo from '../assets/KP.png'

const Navbar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
    return (
        <nav className="fixed w-full bg-[#0a0a14] bg-opacity-80 backdrop-blur-lg z-50 py-4 border-b border-indigo-900/30">
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold flex items-center space-x-2">
                    <img src={logo} alt="" className="w-11 h-11" />
                    <span className="text-white">Patel</span>
                    <span className="gradient-text">Ketul</span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                        <a
                            key={section} href={`#${section}`} onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                            className={`nav-link text-gray-300 hover:text-white ${activeSection === section ? 'text-white active-nav' : ''}`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#0a0a14] bg-opacity-95 backdrop-blur-lg absolute w-full border-b border-indigo-900/30">
                    <div className="flex flex-col px-4 py-2">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                                className={`py-3 ${activeSection === section ? 'text-indigo-400' : 'text-gray-300'}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;