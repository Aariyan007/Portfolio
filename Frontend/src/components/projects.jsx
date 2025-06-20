import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, Github, Calendar, Users, ChevronRight, Zap, Globe, Database, Cpu } from 'lucide-react';

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Trav-Mov: Movie-Based Travel Itinerary Generator",
            category: "Full Stack / AI",
            description: "A full MERN stack web app that converts your favorite movies into personalized travel itineraries based on your input and schedule, powered by AI.",
            longDescription: "Trav-Mov is a unique project built by two passionate students that transforms movie inspirations into real-world travel plans. Users input a movie and their availability, and the system — using a Gemini AI backend — creates a detailed itinerary matching scenes, themes, and locations from the film. Designed with fun, minimalism, and performance in mind, the app features lazy loading, clean UI/UX, and MongoDB integration.",
            technologies: ["MongoDB", "Express.js", "React", "Node.js", "Google Gemini API", "Tailwind CSS"],
            features: [
                "AI-generated movie-themed travel itineraries",
                "User input customization for time and style",
                "Responsive and clean UI with Tailwind CSS",
                "Lazy loading for enhanced performance",
                "Real-time AI content generation using Gemini API"
            ],
            github: "https://github.com/Aariyan007/Travel-Mov",
            live: 'https://travel-mov-static.onrender.com',
            image: "🎬",
            status: "Completed",
            duration: "2 months",
            teamSize: "2 (Aariyan & Mathew MK)",
            color: "from-cyan-700 to-blue-900",
            accent: "blue"
        },

        {
            "id": 2,
            "title": "Gemini AI Clone",
            "category": "AI/ML + Full Stack",
            "description": "A conversational AI clone inspired by Google Gemini, built with modern web technologies and OpenAI API for natural language interaction.",
            "longDescription": "This project replicates the core functionality of the Gemini AI assistant, offering an intuitive UI and seamless communication with OpenAI's GPT models. It features a sleek chat interface, animated typing, voice input, and persistent conversation history using local storage. Designed to mimic real-time chatbot interaction, it demonstrates frontend-backend integration and AI-driven responses.",
            "technologies": ["React", "Tailwind CSS", "JavaScript", "OpenAI API", "Vite"],
            "features": [
                "Real-time AI conversations powered by OpenAI",
                "Chat UI with animated typing effect and loader",
                "Voice-to-text input support using Web Speech API",
                "Conversation history saved in browser localStorage",
                "Responsive and mobile-friendly design"
            ],
            "github": "https://github.com/Aariyan007/Gemini-Clone",

            "image": "🤖",
            "status": "Completed",
            "duration": "1.5 months",
            "teamSize": "Solo Project",
            "color": "from-cyan-700 to-blue-900",
            "accent": "blue"
        },

        {
            "id": 3,
            "title": "Pluto – AI Virtual Assistant",
            "category": "AI/ML + Full Stack",
            "description": "A JARVIS-inspired voice-based AI assistant built for desktop interaction, combining voice recognition, speech synthesis, and smart automation.",
            "longDescription": "Pluto is a powerful desktop-based AI virtual assistant inspired by Marvel's JARVIS. It integrates voice recognition and speech synthesis to create natural human-like interactions. Users can talk to Pluto to perform tasks like opening apps, fetching real-time information, reporting the weather, and more. It mimics human conversation using advanced sound technology via the Web Speech API, making it feel like you're talking to a real assistant.",
            "technologies": [
                "JavaScript",
                "HTML/CSS",
                "Web Speech API",
                "Node.js",
                "OpenAI API (optional)",
                "Shell Commands"
            ],
            "features": [
                "Voice command recognition using Speech Recognition API",
                "Human-like voice responses via Speech Synthesis",
                "Real-time interaction and execution of desktop tasks",
                "Weather reporting, time-telling, and basic assistant features",
                "Expandable with custom commands and automation",
                "Lightweight UI with assistant avatar or feedback interface"
            ],
            "github": "https://github.com/Aariyan007/Pluto",  // If hosted, else remove
            "image": "🧠",
            "status": "Completed",
            "duration": "2 months",
            "teamSize": "Solo Project",
            "color": "from-cyan-700 to-blue-900",
            "accent": "blue"
        }

        ,
        {
            "id": 4,
            "title": "Network Traffic Anomaly Detection",
            "category": "AI/ML + Cybersecurity",
            "description": "A machine learning-powered system for detecting anomalies in network traffic using supervised and unsupervised learning models.",
            "longDescription": "This project focuses on detecting abnormal patterns in network traffic that could indicate potential threats such as intrusions, DDoS attacks, or data breaches. It leverages multiple ML algorithms to analyze network flow data and distinguish between normal and anomalous behavior. The dataset used is preprocessed for training, testing, and performance evaluation of models like Random Forest, KNN, and Isolation Forest. This project demonstrates how ML can enhance cybersecurity by providing proactive network monitoring and threat detection.",
            "technologies": [
                "Python",
                "Scikit-learn",
                "Pandas",
                "Matplotlib",
                "NumPy",
                "Jupyter Notebook"
            ],
            "features": [
                "Data preprocessing and feature selection from network traffic logs",
                "Implementation of supervised models (e.g., Random Forest, KNN)",
                "Unsupervised anomaly detection using Isolation Forest",
                "Visualization of model performance and confusion matrices",
                "Custom evaluation metrics: accuracy, precision, recall, F1-score"
            ],
            "github": "https://github.com/Aariyan007/NetworkTrafficAnomalyDetection",
            "live": "",
            "image": "🛡️",
            "status": "Completed",
            "duration": "3 weeks",
            "teamSize": "Solo Project",
            "color": "from-cyan-700 to-blue-900",
            "accent": "blue"
        }
        ,
        {
            "id": 5,
            "title": "Stock Price Predictor",
            "category": "AI/ML + Data Science",
            "description": "A machine learning model that predicts future stock prices using historical data and time-series forecasting techniques.",
            "longDescription": "Stock Price Predictor is a data-driven project that uses machine learning models to forecast future stock prices based on historical market data. It includes data preprocessing, visualization, and the application of regression models such as Linear Regression and LSTM (Long Short-Term Memory). The project visualizes trends and evaluates model accuracy, providing insights into stock price movements. It serves as a foundational tool for financial data modeling and predictive analysis.",
            "technologies": [
                "Python",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Scikit-learn",
                "TensorFlow/Keras (optional if LSTM used)",
                "Jupyter Notebook"
            ],
            "features": [
                "Historical stock data fetching and cleaning",
                "Exploratory Data Analysis and trend visualization",
                "Machine Learning model training (e.g., Linear Regression)",
                "LSTM-based time-series prediction (if included)",
                "Prediction plots comparing real vs predicted stock prices"
            ],
            "github": "https://github.com/Aariyan007/Stock-price-predictor",
            "live": "",
            "image": "📊",
            "status": "Completed",
            "duration": "2 weeks",
            "teamSize": "Group Project",
            "color": "from-cyan-700 to-blue-900",
            "accent": "blue"
        }
        ,
        {
            "id": 6,
            "title": "Real-Time Object Detection System",
            "category": "AI/ML + Computer Vision",
            "description": "A real-time object detection system using deep learning models to identify and classify objects in video streams.",
            "longDescription": "This project implements a deep learning-based object detection pipeline capable of identifying and localizing multiple objects in images and real-time video. Built using OpenCV and pre-trained models like YOLO (You Only Look Once) or SSD (Single Shot Detector), it processes camera feeds or video files to draw bounding boxes around detected items. The system is lightweight, fast, and accurate—making it suitable for practical applications like surveillance, robotics, and smart vision systems.",
            "technologies": [
                "Python",
                "OpenCV",
                "YOLOv3 / YOLOv5 / SSD",
                "NumPy",
                "Matplotlib",
                "Jupyter Notebook"
            ],
            "features": [
                "Real-time object detection via webcam or video input",
                "Pre-trained model integration (e.g., YOLO)",
                "Bounding box visualization with class labels and confidence",
                "Frame-by-frame processing and live FPS display",
                "Custom object classes support (if trained on a custom dataset)"
            ],
            "github": "https://github.com/Aariyan007/Object-detection",
            "live": "",
            "image": "🎯",
            "status": "Completed",
            "duration": "3 weeks",
            "teamSize": "Solo Project",
            "color": "from-cyan-700 to-blue-900",
            "accent": "blue"
        },
        {
            "id": 7,
            "title": "Apple Vision Pro UI Clone",
            "category": "Frontend + UI/UX",
            "description": "A visually stunning clone of the Apple Vision Pro interface, focusing on smooth animations and immersive user experience using modern frontend technologies.",
            "longDescription": "This project is a frontend clone inspired by the Apple Vision Pro website, rebuilt with smooth transitions, 3D-like interactions, and clean component-based design. It focuses on mimicking Apple's signature aesthetics, including glassmorphism, motion-based UI, and responsive layouts. The goal is to explore advanced frontend capabilities like scroll-based animations, interactive elements, and seamless UX—all while maintaining pixel-perfect fidelity to Apple’s design.",
            "technologies": [
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "Vite",
                "GSAP","ScrollTrigger"
            ],
            "features": [
                "Apple Vision Pro-like landing page UI",
                "Scroll-based animations and transitions",
                "Framer Motion-driven motion UI and interactions",
                "Responsive design across screen sizes",
                "Component-based structure for modularity"
            ],
            "github": "https://github.com/Aariyan007/revamped-apple-vision",
            "image": "🧿",
            "status": "Completed",
            "duration": "1 week",
            "teamSize": "Solo Project",
            "color": "from-cyan-700 to-blue-900",
            "accent": "blue"
        }


    ];

    const categories = ['all', 'AI/ML', 'Full Stack', 'BlockChain', 'Random'];

    const filteredProjects = filterCategory === 'all'
        ? projects
        : projects.filter(project => {

            const projectCat = project.category.toLowerCase();
            const filterCat = filterCategory.toLowerCase();

            return projectCat.includes(filterCat) ||
                filterCat.includes(projectCat.split(' ')[0]) ||
                projectCat.split('+')[0].trim().includes(filterCat);
        });

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.8,
            y: 100
        },
        in: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        out: {
            opacity: 0,
            scale: 1.2,
            y: -100
        }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.8
    };

    const backgroundVariants = {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    const slideInVariants = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                mass: 1
            }
        }
    };

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 50,
            opacity: 0,
            scale: 0.9
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        }
    };

    const cardVariants = {
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'AI/ML': return <Cpu className="w-5 h-5" />;
            case 'Full Stack': return <Globe className="w-5 h-5" />;
            case 'Machine Learning': return <Database className="w-5 h-5" />;
            case 'Blockchain': return <Zap className="w-5 h-5" />;
            default: return <Code className="w-5 h-5" />;
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden py-7"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
        >
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
            >
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.2,
                        scale: 1,
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        opacity: { duration: 1, delay: 0.5 },
                        scale: { duration: 1, delay: 0.5 },
                        x: { duration: 20, repeat: Infinity, repeatType: "reverse", delay: 1 },
                        y: { duration: 20, repeat: Infinity, repeatType: "reverse", delay: 1 }
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.2,
                        scale: 1,
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        opacity: { duration: 1, delay: 0.7 },
                        scale: { duration: 1, delay: 0.7 },
                        x: { duration: 25, repeat: Infinity, repeatType: "reverse", delay: 1.5 },
                        y: { duration: 25, repeat: Infinity, repeatType: "reverse", delay: 1.5 }
                    }}
                />
            </motion.div>

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Header */}
                <motion.div
                    variants={slideInVariants}
                    initial="initial"
                    animate="animate"
                    className="text-center mb-16 pb-4"
                >
                    <motion.h1
                        className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
                        style={{
                            paddingBottom: '0.2em',
                            display: 'inline-block' 
                        }}
                        initial={{ scale: 0, opacity: 0, rotateX: -90 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 10
                        }}
                    >
                        Projects
                    </motion.h1>
                    <motion.p
                        className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed m-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    >
                        A showcase of innovative solutions spanning AI, full-stack development, machine learning, and blockchain technologies.
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setFilterCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${filterCategory === category
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/50'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category !== 'all' && getCategoryIcon(category)}
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ delay: index * 0.1 }}
                                className="h-fit"
                            >
                                <motion.div
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="cursor-pointer h-full"
                                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                                >
                                    <div className={`bg-gradient-to-br ${project.color} p-6 rounded-2xl shadow-2xl border border-blue-500/20 backdrop-blur-sm h-full flex flex-col`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-4xl">{project.image}</div>
                                            <motion.div
                                                animate={{ rotate: selectedProject === project.id ? 90 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronRight className="w-6 h-6 text-blue-200" />
                                            </motion.div>
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                                            <div className="flex items-center gap-2 mb-3">
                                                <span className={`px-3 py-1 bg-${project.accent}-500/30 rounded-full text-sm text-white flex items-center gap-1`}>
                                                    {getCategoryIcon(project.category)}
                                                    {project.category}
                                                </span>
                                                <span className={`px-3 py-1 ${project.status === 'Completed' ? 'bg-green-500/30' : 'bg-yellow-500/30'} rounded-full text-sm text-white`}>
                                                    {project.status}
                                                </span>
                                            </div>

                                            <p className="text-blue-100 mb-4 leading-relaxed text-sm">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Preview */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.slice(0, 3).map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-white/20 rounded text-xs text-blue-100">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="px-2 py-1 bg-white/20 rounded text-xs text-blue-100">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 mt-4">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg text-white text-sm hover:bg-gray-700/50 transition-colors"
                                                    whileHover={{ scale: 1.05 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Code
                                                </motion.a>
                                            )}
                                            {project.live && (
                                                <motion.a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-3 py-2 bg-blue-600/50 rounded-lg text-white text-sm hover:bg-blue-500/50 transition-colors"
                                                    whileHover={{ scale: 1.05 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live
                                                </motion.a>
                                            )}
                                        </div>

                                        {/* Expanded Content */}
                                        <AnimatePresence>
                                            {selectedProject === project.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-6 pt-6 border-t border-blue-400/30">
                                                        <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                                                            {project.longDescription}
                                                        </p>

                                                        <div className="grid gap-4">
                                                            {/* Project Details */}
                                                            <div className="flex items-center gap-4 text-sm text-blue-200">
                                                                <div className="flex items-center gap-1">
                                                                    <Calendar className="w-4 h-4" />
                                                                    {project.duration}
                                                                </div>
                                                                <div className="flex items-center gap-1">
                                                                    <Users className="w-4 h-4" />
                                                                    {project.teamSize}
                                                                </div>
                                                            </div>

                                                            {/* Key Features */}
                                                            <div>
                                                                <h4 className="text-sm font-semibold mb-2 flex items-center text-white">
                                                                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                                                                    Key Features
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {project.features.slice(0, 3).map((feature, i) => (
                                                                        <motion.li
                                                                            key={i}
                                                                            initial={{ x: -20, opacity: 0 }}
                                                                            animate={{ x: 0, opacity: 1 }}
                                                                            transition={{ delay: i * 0.1 }}
                                                                            className="text-blue-100 flex items-start text-sm"
                                                                        >
                                                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                                                                            {feature}
                                                                        </motion.li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* All Technologies */}
                                                            <div>
                                                                <h4 className="text-sm font-semibold mb-2 flex items-center text-white">
                                                                    <Code className="w-4 h-4 mr-2 text-green-400" />
                                                                    Technologies
                                                                </h4>
                                                                <div className="flex flex-wrap gap-1">
                                                                    {project.technologies.map((tech, i) => (
                                                                        <motion.span
                                                                            key={i}
                                                                            initial={{ scale: 0 }}
                                                                            animate={{ scale: 1 }}
                                                                            transition={{ delay: i * 0.05 }}
                                                                            className="px-2 py-1 bg-white/20 rounded text-xs text-blue-100"
                                                                        >
                                                                            {tech}
                                                                        </motion.span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        delay: 1.5,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 60,
                        damping: 15
                    }}
                    className="grid md:grid-cols-4 gap-6"
                >
                    {[
                        { label: "Projects Completed", value: "25+", icon: Code, color: "blue" },
                        { label: "Technologies Used", value: "30+", icon: Zap, color: "purple" },
                        { label: "Lines of Code", value: "10K+", icon: Database, color: "green" },
                        { label: "Open Source Contributions", value: "5+", icon: Github, color: "yellow" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateY: -90 }}
                            animate={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{
                                delay: 1.7 + (index * 0.1),
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                z: 50
                            }}
                            className={`text-center p-6 bg-gradient-to-br from-${stat.color}-800/50 to-${stat.color}-900/50 rounded-2xl border border-${stat.color}-500/20 backdrop-blur-sm`}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: 1.9 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                <stat.icon className={`w-10 h-10 text-${stat.color}-400 mx-auto mb-3`} />
                            </motion.div>
                            <motion.div
                                className="text-2xl font-bold text-white mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 2.1 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 150
                                }}
                            >
                                {stat.value}
                            </motion.div>
                            <motion.div
                                className="text-blue-200 text-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 2.3 + (index * 0.1),
                                    duration: 0.4
                                }}
                            >
                                {stat.label}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;