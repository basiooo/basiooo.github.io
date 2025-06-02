import type { FC } from 'react';

interface LeftSectionProps {
    scrollY: number;
}

const LeftSection: FC<LeftSectionProps> = ({ scrollY }) => {
    return (
        <div className="fixed left-0 top-0 h-full w-1/4 pointer-events-none overflow-hidden">
            {/* Decorative image container */}
            <div 
                className="absolute top-1/4 left-1/2 w-48 h-48 rounded-full overflow-hidden border-2 border-accent/20 dark:border-accent/10"
                style={{
                    transform: `translate(-50%, -50%) rotate(${scrollY * 0.02}deg)`
                }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                    alt="Generic coding image"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Floating elements */}
            <div 
                className="absolute top-1/3 left-1/4 w-24 h-24 bg-accent/20 dark:bg-accent/10 rounded-lg"
                style={{
                    transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.03}px) rotate(${scrollY * 0.04}deg)`
                }}
            />
            <div 
                className="absolute top-2/3 left-1/3 w-16 h-16 bg-accent/20 dark:bg-accent/10 rounded-full"
                style={{
                    transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.02}px) rotate(${scrollY * -0.03}deg)`
                }}
            />
        </div>
    );
};

export default LeftSection; 