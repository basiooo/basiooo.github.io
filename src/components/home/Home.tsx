
const Home = () => {
    return (
        <section id="home" className="hero min-h-screen justify-start relative overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse items-start relative z-10">
                <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent/30"></div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Hello <span className="wave md:text-8xl">👋</span>, I'm <span className="text-accent relative">
                            Bagas Julianto
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent/30"></span>
                        </span>
                    </h1>
                    <div className="py-6">
                        <div className="flex items-center gap-2">
                            <span className="text-accent/30 text-2xl font-mono">{'{'}</span>
                            <p className="text-lg">
                                Full Stack Web Developer
                            </p>
                            <span className="text-accent/30 text-2xl font-mono">{'}'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
