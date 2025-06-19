import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [contactOpen, setConactOpen] = useState(false);
    const OpenContact = () => setConactOpen(true);
    const CloseContact = () => setConactOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        axios.post('http://localhost:3000/contact', { name, email, message })
            .then(result => {
                console.log('Message sent successfully:', result);
                alert('Message sent successfully!');

                // Clear form fields
                setName('');
                setEmail('');
                setMessage('');

                // Close the modal
                CloseContact();
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('Failed to send message. Please try again.');
            });
    }

    return (
        <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="w-full px-12 flex items-center justify-between h-16 md:h-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.8 }}
                    className="flex items-center"
                >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-700 to-blue-300 flex items-center justify-center text-white font-bold text-xl mr-3">
                        A
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                        Aariyan
                    </span>
                </motion.div>


                {/* Desktop Navigation */}
                <motion.nav
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.8 }}
                    className="lg:flex hidden space-x-12 h-10 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md shadow-md">
                    {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 25,
                                delay: 0.8 + index * 0.2,
                            }}
                            className="relative text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 group"
                            href="#"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                </motion.nav>


                {/* Icons */}
                <div className='md:flex hidden items-center space-x-4'>
                    <div className='md:flex hidden items-center space-x-4'>
                        <motion.a
                            href="https://github.com/Aariyan007"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.3 }}
                            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                        >
                            <FaGithub className='w-5 h-5' />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/aariyan-s/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.3 }}
                            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                        >
                            <FaLinkedin className='w-5 h-5' />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/x_aaryan_x7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.3 }}
                            className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                        >
                            <FaInstagram className='w-5 h-5' />
                        </motion.a>
                    </div>

                    {/* Contact Me Button */}
                    <motion.button
                        onClick={OpenContact}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{
                            backgroundColor: "#2563eb", // Tailwind's blue-600
                            backgroundImage: "none",
                            color: "#ffffff",
                            transition: { duration: 0.1 }
                        }}
                        transition={{
                            delay: 1.0,
                            duration: 0.4,
                            ease: "easeOut",
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100
                            }
                        }}
                        className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-400 to-blue-100 text-blue-700 font-bold'
                    >
                        Contact Me
                    </motion.button>

                </div>

                {/* Mobile Navigation Button */}
                <div className='md:hidden flex items-center'>
                    <motion.button
                        whileTap={{ scale: 0.85 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={toggleMenu}
                        className='text-gray-300'
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode='wait' initial={false}>
                            {isOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <FiX className='h-6 w-6' />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <FiMenu className='h-6 w-6' />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white dark:bg-gray-800 shadow-lg px-4 py-5"
                    >
                        <nav className='flex flex-col space-y-3  '>
                            {["Home", "About", "Projects", "Experience"].map((item, index) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={toggleMenu}
                                    className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors duration-300'
                                    href="#"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Contact Me Button */}
                        <button
                            onClick={() => {
                                toggleMenu();
                                OpenContact();
                            }}
                            className='mt-6 w-full px-4 py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300'
                        >
                            Contact Me
                        </button>

                        {/* Mobile Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className='flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700'
                        >
                            <a
                                href="https://github.com/Aariyan007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                            >
                                <FaGithub className='w-5 h-5' />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aariyan-s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                            >
                                <FaLinkedin className='w-5 h-5' />
                            </a>
                            <a
                                href="https://www.instagram.com/x_aaryan_x7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                            >
                                <FaInstagram className='w-5 h-5' />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/*CONATCT FORM*/}
            {/* Contact Modal */}
            <AnimatePresence>
                {contactOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.2, ease: "easeOut" }}
                        className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                                mass: 1
                            }}
                            className='bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-md p-6 relative'
                        >
                            {/* Close Button */}
                            <button
                                onClick={CloseContact}
                                className='absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition'
                            >
                                <FiX className='h-5 w-5' />
                            </button>

                            <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-white'>Contact Me</h2>

                            <form onSubmit={handleSubmit} className="space-y-4" >
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder='Enter Name here...'
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder='Email here...'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Type your message here..."
                                        name='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                                >
                                    Send Message
                                </button>
                            </form>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Header;