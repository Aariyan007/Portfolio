import { motion } from 'framer-motion';
import { Code, Github, Mail, Twitter, User, Award, Zap, Cpu, Database, Download, Linkedin, Globe } from 'lucide-react';

const AboutPage = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const skills = [
        // Frontend
        { name: "HTML", icon: <Code className="w-5 h-5" />, level: 95 },
        { name: "CSS", icon: <Code className="w-5 h-5" />, level: 90 },
        { name: "JavaScript", icon: <Code className="w-5 h-5" />, level: 95 },
        { name: "React/Next.js", icon: <Code className="w-5 h-5" />, level: 90 },
        { name: "Tailwind CSS", icon: <Code className="w-5 h-5" />, level: 95 },
        { name: "Framer Motion", icon: <Code className="w-5 h-5" />, level: 85 },

        // Backend
        { name: "Node.js", icon: <Database className="w-5 h-5" />, level: 85 },
        { name: "Express.js", icon: <Database className="w-5 h-5" />, level: 85 },
        { name: "Python", icon: <Cpu className="w-5 h-5" />, level: 80 },
        { name: "REST APIs", icon: <Cpu className="w-5 h-5" />, level: 90 },
        { name: "WebSockets", icon: <Cpu className="w-5 h-5" />, level: 75 },

        // Database
        { name: "MongoDB", icon: <Database className="w-5 h-5" />, level: 80 },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, level: 75 },
        { name: "Firebase", icon: <Database className="w-5 h-5" />, level: 70 },

        // DevOps & Deployment
        { name: "Git/GitHub", icon: <Code className="w-5 h-5" />, level: 95 },
        { name: "Vercel/Netlify", icon: <Cpu className="w-5 h-5" />, level: 90 },
        { name: "Render/Railway", icon: <Cpu className="w-5 h-5" />, level: 85 },
        { name: "Docker", icon: <Cpu className="w-5 h-5" />, level: 65 },

        // Tools & Others
        { name: "OpenAI API", icon: <Zap className="w-5 h-5" />, level: 85 },
        { name: "Figma/UI Design", icon: <Code className="w-5 h-5" />, level: 75 },
        { name: "Jupyter Notebook", icon: <Cpu className="w-5 h-5" />, level: 90 },
        { name: "Linux", icon: <Cpu className="w-5 h-5" />, level: 80 },
        { name: "Postman", icon: <Cpu className="w-5 h-5" />, level: 90 },
        { name: "Redux/Zustand", icon: <Code className="w-5 h-5" />, level: 75 }
    ];


    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden py-20 px-6 "
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            {/* Background Animation Elements */}
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5
                }}
            />

            <div className="relative z-10 container mx-auto">
                {/* Header Section */}
                <motion.div className="text-center mb-16" variants={slideUp}>
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed"
                        variants={slideUp}
                    >
                        Just a guy running on 8GB RAM with 98 Chrome tabs worth of dreams — and not a single one crashing.
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bio Section */}
                    <motion.div
                        className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
                        variants={slideUp}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/20 rounded-full">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Personal Profile</h2>
                        </div>

                        <p className="text-blue-100 mb-6 leading-relaxed">
                            I am a passionate and results-driven Software Developer with a strong foundation in Full Stack Development, Machine Learning, and AI-powered applications. I thrive on building intelligent, user-centric solutions that blend technical depth with seamless user experience.
                        </p>

                        <p className="text-blue-100 mb-6 leading-relaxed">
                            With hands-on experience across a wide range of technologies—from real-time AI assistants and object detection systems to stunning UI clones and analytics tools—I translate ideas into impactful digital products using tools like React, Node.js, OpenAI API, Tailwind CSS, Python, and more.
                        </p>

                        <p className="text-blue-100 mb-6 leading-relaxed">
                            As a solo contributor to several end-to-end applications, I bring a self-starter mindset, attention to detail, and a continuous drive to learn and improve. I'm especially excited by work at the intersection of AI, automation, and user experience.
                        </p>

                        {/* Extra Info */}
                        <div className="text-blue-200 mb-6">
                            <p><strong>📍 Location:</strong> India (Open to remote work)</p>
                            <p><strong>💼 Availability:</strong> Currently open for internships or freelance opportunities</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <motion.a
                                href="https://github.com/Aariyan007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg text-white hover:bg-gray-700/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </motion.a>

                            <motion.a
                                href="mailto:aariyansunu28@gmail.com"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600/50 rounded-lg text-white hover:bg-blue-500/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Mail className="w-5 h-5" />
                                Contact
                            </motion.a>

                            <motion.a
                                href="/Best_resume.pdf" // Make sure this file exists in your public folder
                                download
                                className="flex items-center gap-2 px-4 py-2 bg-green-600/50 rounded-lg text-white hover:bg-green-500/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Download className="w-5 h-5" />
                                Resume
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/aariyan-s" // Update with your LinkedIn
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-800/50 rounded-lg text-white hover:bg-blue-700/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </motion.a>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-blue-100 mt-6">
                            <div><strong>💻 Role:</strong> Full Stack Developer</div>
                            <div><strong>🧠 Experience:</strong> 2+ years (self-driven projects)</div>
                            <div><strong>🎓 Education:</strong> Computer Science Major</div>
                            <div><strong>📍 Based In:</strong> India</div>
                            <div><strong>🕒 Availability:</strong> Open to internships/freelance</div>
                            <div><strong>☕ Fun Fact:</strong> Running on 8GB RAM + caffeine</div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Core Values</h3>
                            <ul className="list-disc list-inside text-blue-100 space-y-1">
                                <li>🚀 Consistent learner with a growth mindset</li>
                                <li>🧩 Problem-solver who loves debugging</li>
                                <li>🎯 Detail-oriented and user-focused</li>
                                <li>🧘 Calm under pressure and loves a good challenge</li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Currently Learning</h3>
                            <p className="text-blue-100">
                                I'm deepening my knowledge of <strong>Three.js</strong> for interactive 3D web experiences, exploring <strong>LangChain</strong> for AI agent workflows, and practicing advanced <strong>backend scaling strategies</strong> with microservices and Docker.
                            </p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Tools I Love</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-white">
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">VS Code</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Postman</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">GitHub Copilot</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Notion</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Figma</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Git</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Docker</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Firebase</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">MongoDB Compass</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Slack</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Trello</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Render</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Vercel</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Netlify</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Insomnia</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Jira</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">Linux</span>
                                <span className="bg-blue-800/40 px-3 py-1 rounded-full">ChatGPT</span>
                            </div>

                        </div>
                        <div className="mt-10 text-blue-300 italic text-sm text-center">
                            "Just a guy running on 8GB RAM and 98 Chrome tabs worth of dreams."
                        </div>




                    </motion.div>


                    {/* Skills Section */}
                    <motion.div
                        className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
                        variants={slideUp}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-full">
                                <Award className="w-8 h-8 text-purple-300" />
                            </div>
                            <h2 className="text-2xl font-bold">Skills & Expertise</h2>
                        </div>

                        <motion.div
                            className="space-y-6"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {skills.map((skill, index) => (
                                <motion.div key={index} variants={slideUp}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 text-blue-100">
                                            {skill.icon}
                                            <span>{skill.name}</span>
                                        </div>
                                        <span className="text-sm text-blue-300">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-blue-900/30 rounded-full h-2.5">
                                        <motion.div
                                            className="bg-gradient-to-r from-blue-400 to-purple-400 h-2.5 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5 + index * 0.1,
                                                type: "spring"
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 mt-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        { value: "25+", label: "Projects Completed", icon: Code },
                        { value: "5+", label: "Open Source Contributions", icon: Github },
                        { value: "30+", label: "Technologies Mastered", icon: Zap }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm text-center"
                            variants={slideUp}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-200 flex items-center justify-center gap-2">
                                <stat.icon className="w-5 h-5" />
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutPage;