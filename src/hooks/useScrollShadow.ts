import { useState, useEffect } from 'react';

const useScrollShadow = () => {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const onScroll = () => setHasShadow(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return hasShadow;
};

export default useScrollShadow; 