import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    title: 'Flota de Camiones',
    description: 'Vehículos modernos y bien mantenidos',
    gradient: 'from-red-600 to-red-800',
  },
  {
    id: 2,
    title: 'Transporte de Carga',
    description: 'Carga segura y puntual',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    id: 3,
    title: 'Servicio de Pasajeros',
    description: 'Comodidad y seguridad',
    gradient: 'from-red-500 to-red-700',
  },
  {
    id: 4,
    title: 'Mantenimiento',
    description: 'Servicio técnico especializado',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    id: 5,
    title: 'Entregas Locales',
    description: 'Cobertura en Neiva y región',
    gradient: 'from-red-400 to-red-600',
  },
  {
    id: 6,
    title: 'Equipo Profesional',
    description: 'Conductores certificados',
    gradient: 'from-gray-500 to-gray-700',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-red font-semibold text-sm uppercase tracking-wider">
            Nuestra Flota
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-dark-gray">
            Galería de Servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce nuestra flota de vehículos y los servicios que brindamos en Neiva y toda la región.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Placeholder with Gradient */}
              <div className={`aspect-square md:aspect-auto min-h-[200px] bg-gradient-to-br ${image.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                {/* Truck Icon SVG */}
                <svg
                  className={`w-24 h-24 text-white/30 ${index === 0 ? 'md:w-40 md:h-40' : ''}`}
                  viewBox="0 0 200 120"
                  fill="currentColor"
                >
                  <rect x="20" y="30" width="140" height="60" rx="8" />
                  <rect x="160" y="40" width="35" height="50" rx="6" />
                  <circle cx="50" cy="90" r="15" fill="currentColor" opacity="0.5" />
                  <circle cx="150" cy="90" r="15" fill="currentColor" opacity="0.5" />
                  <rect x="25" y="35" width="30" height="10" rx="2" fill="currentColor" opacity="0.3" />
                  <rect x="60" y="35" width="30" height="10" rx="2" fill="currentColor" opacity="0.3" />
                  <rect x="95" y="35" width="30" height="10" rx="2" fill="currentColor" opacity="0.3" />
                </svg>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  <p className="text-white/80 mt-1">{image.description}</p>
                </div>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-red transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-dark-gray mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-600">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-dark-gray text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center mx-auto gap-2">
            <span>Ver Más Imágenes</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

