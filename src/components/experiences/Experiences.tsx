import experiences from '../../data/experiences.json';
const Experiences = () => {

    const getBadgeClass = (type: string) => {
        switch (type.toLowerCase()) {
            case 'internship':
                return 'badge-info';
            case 'freelance':
                return 'badge-primary';
            case 'full time':
                return 'badge-accent';
            default:
                return 'badge-accent';
        }
    };

    return (
        <section id="experiences" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-center mb-12 pb-4 border-b-2 border-accent inline-block">
                        Experiences
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index}
                            className="group relative bg-base-200 rounded-xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full"></div>
                            
                            <div className="relative p-6">
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold">
                                            {exp.title}
                                        </h3>
                                        <span className={`badge ${getBadgeClass(exp.type)}`}>
                                            {exp.type}
                                        </span>
                                    </div>
                                    <p className="text-accent font-semibold">{exp.company}</p>
                                    <span className="text-sm text-accent/70">{exp.period}</span>
                                    <div className="mt-2 flex items-center text-sm text-base-content/70">
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        {exp.location}
                                    </div>
                                </div>

                                <p className="text-base-content/80 mb-4">{exp.description}</p>

                                <div className="space-y-2">
                                    <ul className="space-y-2">
                                        {exp.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-accent mr-2">•</span>
                                                <span className="text-base-content/70">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;