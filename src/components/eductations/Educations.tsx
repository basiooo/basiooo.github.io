import type { FC } from 'react';
import educations from '../../data/educations.json';

const Educations: FC = () => {
  return (
    <section id="educations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center mb-12 pb-4 border-b-2 border-accent inline-block">
            Educations
          </h2>
        </div>
        <div className="mx-auto">
          <div className="card bg-base-200 shadow-xl hover:scale-105 transition-transform duration-300 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"></div>
            <div className="card-body">
              <div className="mx-auto max-w-3xl">
                <ul className="timeline timeline-vertical timeline-lg">
                  {educations.map((education, index) => (
                    <li key={index}>
                      <div className="timeline-start timeline-box md:timeline-box-lg">
                        <div className="font-bold text-sm md:text-lg">{education.year}</div>
                      </div>
                      <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                          <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box timeline-box-lg">
                        <div className="font-bold text-sm md:text-lg">{education.school}</div>
                        <div className="text-sm md:text-base opacity-70">{education.degree}</div>
                        {education.gpa && (
                          <div className="text-sm md:text-base opacity-70">GPA: {education.gpa}</div>
                        )}
                      </div>
                      <hr className="timeline-line-lg" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;
