import type { FC } from 'react';

interface BackgroundElementsProps {
    scrollY: number;
}

const BackgroundElements: FC<BackgroundElementsProps> = ({ scrollY }) => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent dark:from-accent/5"></div>
            
            {/* Large dynamic dots */}
            <div 
                className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/30 dark:bg-accent/5 rounded-full blur-3xl"
                style={{ 
                    transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px) rotate(${scrollY * 0.02}deg)`
                }}
            ></div>
            <div 
                className="absolute bottom-1/4 -left-20 w-64 h-64 bg-accent/30 dark:bg-accent/5 rounded-full blur-3xl"
                style={{ 
                    transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.05}px) rotate(${scrollY * -0.02}deg)`
                }}
            ></div>
            
            {/* Medium dynamic dots */}
            <div 
                className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/30 dark:bg-accent/5 rounded-full blur-2xl"
                style={{ 
                    transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.03}px) rotate(${scrollY * 0.03}deg)`
                }}
            ></div>
            <div 
                className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/30 dark:bg-accent/5 rounded-full blur-2xl"
                style={{ 
                    transform: `translate(${scrollY * -0.03}px, ${scrollY * -0.03}px) rotate(${scrollY * -0.03}deg)`
                }}
            ></div>

            {/* Small floating dots */}
            <div 
                className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/30 dark:bg-accent/5 rounded-full blur-xl"
                style={{ 
                    transform: `translate(${scrollY * 0.02}px, ${scrollY * -0.02}px) rotate(${scrollY * 0.04}deg)`
                }}
            ></div>
            <div 
                className="absolute bottom-1/2 right-1/3 w-16 h-16 bg-accent/30 dark:bg-accent/5 rounded-full blur-xl"
                style={{ 
                    transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.02}px) rotate(${scrollY * -0.04}deg)`
                }}
            ></div>

            {/* Static grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a625_1px,transparent_1px),linear-gradient(to_bottom,#14b8a625_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#14b8a608_1px,transparent_1px),linear-gradient(to_bottom,#14b8a608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
    );
};

export default BackgroundElements; 