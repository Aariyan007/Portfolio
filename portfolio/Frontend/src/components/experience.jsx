import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Code, Users, Zap } from 'lucide-react';

const ExperiencePage = () => {
    const [selectedExp, setSelectedExp] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const experiences = [
        {
            id: 1,
            title: "SDE Intern",
            company: "OpenQQuantify",
            location: "Remote",
            duration: "May 2025 – Present",
            type: "Internship",
            description: "Working at the intersection of web development and AI integration, contributing to tools that combine large language models with electronics simulation platforms. Actively learning and applying AI/LLM-based workflows in a real-world SaaS environment.",
            achievements: [
                "Contributed to AI-powered UI features for schematic generation and simulation tools",
                "Integrated APIs and helped build components interacting with LLMs like GPT-4 and Mistral",
                "Learning advanced AI workflows including prompt engineering, AI tooling, and deployment"
            ],
            skills: ["JavaScript", "React", "Node.js", "Tailwind CSS", "LLMs", "API Integration", "Git"],
            color: "from-blue-600 to-blue-800"
        },
        {
            id: 2,
            title: "Software Engineer Intern",
            company: "Bluestock Fintech",
            location: "Pune, India (Remote)",
            duration: "January 2025 – March 2025",
            type: "Internship",
            description: "Developed a responsive stock analytics platform using the PERN stack. Integrated real-time stock data APIs and implemented interactive dashboards for IPO and market insights.",
            achievements: [
                "Built a full-stack stock analytics website with PostgreSQL, Express.js, React, and Node.js",
                "Integrated real-time APIs and visualized market data using Math.js and charting libraries",
                "Implemented bot detection logic to secure API endpoints and ensure data integrity"
            ],
            skills: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Math.js"],
            color: "from-blue-500 to-blue-700"
        },
        {
            id: 3,
            title: "Machine Learning Intern",
            company: "Corizo Edutech Pvt. Ltd.",
            location: "Remote",
            duration: "June 2024 – August 2024",
            type: "Internship",
            description: "Worked on building a network traffic anomaly detection system using unsupervised machine learning models. Contributed to the full data pipeline from preprocessing to evaluation and visualization.",
            achievements: [
                "Developed end-to-end anomaly detection pipeline using Python and scikit-learn",
                "Applied KNN, Isolation Forest, and Autoencoder models for identifying network anomalies",
                "Achieved improved detection accuracy through ROC/AUC-based model selection"
            ],
            skills: ["Python", "TensorFlow", "Pandas", "NumPy", "Jupyter Notebook", "Scikit-learn"],
            color: "from-blue-400 to-blue-600"
        }
    ];

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
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 60,
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
                damping: 15,
                mass: 1
            }
        }
    };

    const cardVariants = {
        hover: {
            y: -5,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
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
                    className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
                    className="text-center mb-16"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent"
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
                        Experience
                    </motion.h1>
                    <motion.p
                        className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    >
                        My journey through internships and real-world projects, building skills in AI, web development, and fintech solutions.
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                >
                    {/* Timeline Line */}
                    <motion.div
                        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                    ></motion.div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className="relative mb-12"
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 1.2 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                                whileHover={{ scale: 1.5 }}
                            />

                            {/* Experience Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover="hover"
                                className="ml-20 cursor-pointer"
                                onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                            >
                                <div className={`bg-gradient-to-r ${exp.color} p-6 rounded-2xl shadow-2xl border border-blue-500/20 backdrop-blur-sm`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <Briefcase className="w-6 h-6 text-blue-200" />
                                            <motion.div>
                                                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                                <p className="text-blue-200 font-medium">{exp.company}</p>
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: selectedExp === exp.id ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronRight className="w-6 h-6 text-blue-200" />
                                        </motion.div>
                                    </div>

                                    <div className="flex items-center space-x-6 mb-4 text-blue-200">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">
                                            {exp.type}
                                        </span>
                                    </div>

                                    <p className="text-blue-100 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {/* Skills Preview */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.slice(0, 3).map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm text-blue-100">
                                                {skill}
                                            </span>
                                        ))}
                                        {exp.skills.length > 3 && (
                                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-blue-100">
                                                +{exp.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {selectedExp === exp.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-6 pt-6 border-t border-blue-400/30">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        {/* Achievements */}
                                                        <div>
                                                            <h4 className="text-lg font-semibold mb-3 flex items-center">
                                                                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                                                                Key Achievements
                                                            </h4>
                                                            <ul className="space-y-2">
                                                                {exp.achievements.map((achievement, i) => (
                                                                    <motion.li
                                                                        key={i}
                                                                        initial={{ x: -20, opacity: 0 }}
                                                                        animate={{ x: 0, opacity: 1 }}
                                                                        transition={{ delay: i * 0.1 }}
                                                                        className="text-blue-100 flex items-start"
                                                                    >
                                                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                                        {achievement}
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* All Skills */}
                                                        <div>
                                                            <h4 className="text-lg font-semibold mb-3 flex items-center">
                                                                <Code className="w-5 h-5 mr-2 text-green-400" />
                                                                Technologies Used
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {exp.skills.map((skill, i) => (
                                                                    <motion.span
                                                                        key={i}
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: 1 }}
                                                                        transition={{ delay: i * 0.05 }}
                                                                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-blue-100"
                                                                    >
                                                                        {skill}
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
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        delay: 2,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 60,
                        damping: 15
                    }}
                    className="mt-20 grid md:grid-cols-3 gap-8"
                >
                    {[
                        { label: "Months of Experience", value: "8+", icon: Calendar },
                        { label: "Projects Completed", value: "25+", icon: Briefcase },
                        { label: "Technologies Mastered", value: "15+", icon: Code }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateY: -90 }}
                            animate={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{
                                delay: 2.2 + (index * 0.2),
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                z: 50
                            }}
                            className="text-center p-6 bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: 2.4 + (index * 0.2),
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            </motion.div>
                            <motion.div
                                className="text-3xl font-bold text-white mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 2.6 + (index * 0.2),
                                    type: "spring",
                                    stiffness: 150
                                }}
                            >
                                {stat.value}
                            </motion.div>
                            <motion.div
                                className="text-blue-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 2.8 + (index * 0.2),
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

export default ExperiencePage;