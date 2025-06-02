import type { FC } from 'react';
import { useState } from 'react';
import certificates from '../../data/certificates.json';

interface Certificate {
  name: string;
  provider: string;
  date: string;
  url: string;
  image: string;
}

const Certificates: FC = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageUrl]: true
    }));
  };

  const formatDate = (dateStr: string) => {
    const [month, year] = dateStr.split('-');
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center mb-12 pb-4 border-b-2 border-accent inline-block">
            Certificates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((certificate: Certificate, index: number) => (
            <div 
              key={index} 
              className="card bg-base-200 shadow-xl hover:scale-105 transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"></div>
              <figure className="px-6 pt-6 bg-base-100/50 relative">
                {!loadedImages[certificate.image] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="loading loading-spinner loading-md text-accent"></span>
                  </div>
                )}
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className={`rounded-xl h-40 object-contain p-2 transition-opacity duration-300 ${
                    loadedImages[certificate.image] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(certificate.image)}
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <div className="badge badge-primary badge-lg">{certificate.provider}</div>
                  <div className="badge badge-outline badge-lg text-sm">{formatDate(certificate.date)}</div>
                </div>
                <h2 className="card-title text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
                  {certificate.name}
                </h2>
                <div className="card-actions mt-4">
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent btn-sm gap-2 hover:bg-accent-focus w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
