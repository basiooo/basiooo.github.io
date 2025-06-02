import { useState, useEffect } from 'react';

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let currentSection = 'home';

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionId = section.getAttribute('id');

                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentSection = sectionId || 'home';
                }
            });

            setActiveSection(currentSection);
        };

        let timeoutId: number;
        const debouncedScroll = () => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(handleScroll, 10);
        };

        window.addEventListener('scroll', debouncedScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            window.clearTimeout(timeoutId);
        };
    }, []);

    return activeSection;
};

export default useActiveSection; 