import ThemeToggle from "./ThemeToggle";
import useScrollShadow from "../../hooks/useScrollShadow";
import useActiveSection from "../../hooks/useActiveSection";

const Header = () => {
    const hasShadow = useScrollShadow();
    const activeSection = useActiveSection();

    const isActive = (id: string) => activeSection === id;

    const MENU_ITEMS = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experiences', href: '#experiences' },
        { name: 'Educations', href: '#educations' },
        { name: 'Certificates', href: '#certificates' }
    ];
    return (
        <div className={`navbar fixed top-0 w-full z-50 bg-base-100/80 backdrop-blur-sm transition-all duration-300 ${hasShadow ? 'shadow-lg bg-base-200' : 'shadow-none'}`}>
            <div className="container flex mx-auto">
                <div className="flex-1 flex flex-wrap items-center">
                    <a href="/" className={`text-3xl text-accent font-bold transition-all duration-300 hover:text-accent-focus relative group ${hasShadow ? 'text-4xl' : ''}`}>
                        <span className="relative z-10">Bagas Julianto</span>
                    </a>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {MENU_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`text-base transition-all duration-300 hover:text-accent relative group ${hasShadow ? 'md:text-lg' : ''} ${isActive(item.href.substring(1)) ? 'text-accent' : ''}`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    <span className="absolute -inset-1 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </a>
                            </li>
                        ))}
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
                <div className="show md:hidden">
                    <details className="dropdown dropdown-end">
                        <summary className="btn btn-ghost hover:bg-accent/10 relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <span className="absolute -inset-1 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100/95 backdrop-blur-sm rounded-box w-52 border border-accent/20">
                            <li>
                                <ThemeToggle />
                            </li>
                            {MENU_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="hover:text-accent hover:bg-accent/10 relative group"
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <span className="absolute -inset-1 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
}
export default Header;