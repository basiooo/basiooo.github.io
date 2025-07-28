import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaGitlab } from 'react-icons/fa';

interface Skill {
    name: string;
    category: 'language' | 'framework' | 'database' | 'devops' | 'other';
}

const About: React.FC = () => {
    const skills: Skill[] = [
        { name: 'Python', category: 'language' },
        { name: 'PHP', category: 'language' },
        { name: 'Javascript', category: 'language' },
        { name: 'Typescript', category: 'language' },
        { name: 'Golang', category: 'language' },
        { name: 'HTML', category: 'language' },
        { name: 'CSS', category: 'language' },
        { name: 'SCSS', category: 'language' },

        { name: 'Django', category: 'framework' },
        { name: 'Django REST Framework', category: 'framework' },
        { name: 'Celery', category: 'framework' },
        { name: 'Fast API', category: 'framework' },
        { name: 'Starlette', category: 'framework' },
        { name: 'Flask', category: 'framework' },
        { name: 'SQLAlchemy', category: 'framework' },
        { name: 'Alembic', category: 'framework' },
        { name: 'Laravel', category: 'framework' },
        { name: 'Go-Chi', category: 'framework' },
        { name: 'Go Fiber', category: 'framework' },
        { name: 'Hapi', category: 'framework' },
        { name: 'ExpressJS', category: 'framework' },
        { name: 'ReactJS', category: 'framework' }, 
        { name: 'Redux', category: 'framework' }, 
        { name: 'Zustand', category: 'framework' }, 
        { name: 'SWR', category: 'framework' }, 
        { name: 'TailwindCSS', category: 'framework' }, 
        { name: 'Bootstrap', category: 'framework' }, 
        { name: 'Daisy UI', category: 'framework' }, 
        { name: 'NextJS', category: 'framework' },
        { name: 'VueJS', category: 'framework' },
        { name: 'Jquery', category: 'framework' },

        { name: 'PostgreSQL', category: 'database' },
        { name: 'MySQL', category: 'database' },
        { name: 'SQLite', category: 'database' },
        { name: 'MongoDB', category: 'database' },

        { name: 'Docker', category: 'other' },
        { name: 'Docker Compose', category: 'other' },
        { name: 'CI/CD', category: 'other' },
        { name: 'Nginx', category: 'other' },

        { name: 'Git', category: 'other' }
    ];

    const getBadgeColor = (category: Skill['category']) => {
        switch (category) {
            case 'language':
                return 'badge-primary';
            case 'framework':
                return 'badge-secondary';
            case 'database':
                return 'badge-accent';
            case 'other':
                return 'badge-info';
            default:
                return 'badge-ghost';
        }
    };

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-center mb-12 pb-4 border-b-2 border-accent inline-block">
                        About
                    </h2>
                </div>
                <div className="mx-auto">
                    <div className="card bg-base-200 shadow-xl ">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"></div>
                        <div className="card-body">
                            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                                <div className="avatar relative">
                                    <div className="w-48 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img
                                            src="/image/profile.jpg"
                                            alt="Profile"
                                        />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold ">Bagas Julianto</h3>
                                    <p className="font-medium mb-4">Full Stack Web Developer</p>
                                    <div className="flex justify-center md:justify-start space-x-6">
                                        <a
                                            href="https://github.com/basiooo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-ghost btn-circle hover:bg-accent hover:text-accent-content transition-all duration-300"
                                        >
                                            <FaGithub size={28} />
                                        </a>
                                        <a
                                            href="https://gitlab.com/basiooo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-ghost btn-circle hover:bg-accent hover:text-accent-content transition-all duration-300"
                                        >
                                            <FaGitlab size={28} />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/bagas-julianto-278868288/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-ghost btn-circle hover:bg-accent hover:text-accent-content transition-all duration-300"
                                        >
                                            <FaLinkedin size={28} />
                                        </a>
                                        <a
                                            href="mailto:bagasjulianto212@gmail.com"
                                            className="btn btn-ghost btn-circle hover:bg-accent hover:text-accent-content transition-all duration-300"
                                        >
                                            <FaEnvelope size={28} />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/_basiooo/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-ghost btn-circle hover:bg-accent hover:text-accent-content transition-all duration-300"
                                        >
                                            <FaInstagram size={28} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Summary</h3>
                                <p className="text-base-content/80 leading-relaxed mb-8">
                                Full Stack Developer with expertise in building scalable web applications and RESTful APIs.
                                Proficient in Python, JavaScript, PHP, and Go, with experience in frameworks such as Django, FastAPI, Flask, Laravel, React, and Express.
                                Skilled in database design and optimization using both SQL and NoSQL solutions.
                                Experienced in implementing CI/CD pipelines and containerized deployments using Docker.
                                Enjoys tackling new challenges, passionate about writing clean, maintainable code, and continuously learning new technologies to enhance development efficiency.
                                </p>
                                <div className="mt-8 relative">
                                    <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="text-sm font-medium text-base-content/70 mb-2">Programming Languages</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.filter(skill => skill.category === 'language').map((skill) => (
                                                    <div key={skill.name} className={`badge ${getBadgeColor(skill.category)} badge-lg`}>
                                                        {skill.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-medium text-base-content/70 mb-2">Frameworks & Libraries</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.filter(skill => skill.category === 'framework').map((skill) => (
                                                    <div key={skill.name} className={`badge ${getBadgeColor(skill.category)} badge-lg`}>
                                                        {skill.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-medium text-base-content/70 mb-2">Database</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.filter(skill => skill.category === 'database').map((skill) => (
                                                    <div key={skill.name} className={`badge ${getBadgeColor(skill.category)} badge-lg`}>
                                                        {skill.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-medium text-base-content/70 mb-2">Tools</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.filter(skill => skill.category === 'other').map((skill) => (
                                                    <div key={skill.name} className={`badge ${getBadgeColor(skill.category)} badge-lg`}>
                                                        {skill.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
