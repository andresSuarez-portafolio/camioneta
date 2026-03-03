const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D32F2F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
<div className="inline-block bg-primary-red/10 text-primary-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Servicios de Transporte en Neiva - Andrés Suárez
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray leading-tight mb-6">
              El Pony Express -
              <span className="text-primary-red"> Transporte Seguro</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Brindamos servicios de transporte de carga y pasajeros en Neiva, Huila. 
              Compromiso, puntualidad y seguridad en cada viaje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Solicitar Cotización
              </a>
              <a
                href="#services"
                className="border-2 border-dark-gray text-dark-gray px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gray hover:text-white transition-all duration-200"
              >
                Ver Servicios
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red">10+</div>
                <div className="text-sm text-gray-600">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red">500+</div>
                <div className="text-sm text-gray-600">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red">100%</div>
                <div className="text-sm text-gray-600">Seguro</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative hidden md:block">
            <div className="relative bg-gradient-to-br from-primary-red to-red-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <svg
                  className="w-full h-64 text-primary-red"
                  viewBox="0 0 400 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Truck Body */}
                  <rect x="50" y="80" width="280" height="120" rx="10" fill="#D32F2F"/>
                  <rect x="60" y="90" width="260" height="100" rx="8" fill="#EF4444"/>
                  
                  {/* Cabin */}
                  <rect x="330" y="100" width="70" height="100" rx="8" fill="#1F2937"/>
                  <rect x="340" y="110" width="50" height="40" rx="4" fill="#60A5FA"/>
                  <rect x="340" y="160" width="50" height="30" rx="4" fill="#374151"/>
                  
                  {/* Wheels */}
                  <circle cx="100" cy="200" r="30" fill="#1F2937"/>
                  <circle cx="100" cy="200" r="20" fill="#4B5563"/>
                  <circle cx="100" cy="200" r="8" fill="#9CA3AF"/>
                  
                  <circle cx="300" cy="200" r="30" fill="#1F2937"/>
                  <circle cx="300" cy="200" r="20" fill="#4B5563"/>
                  <circle cx="300" cy="200" r="8" fill="#9CA3AF"/>
                  
                  {/* Cargo Area Details */}
                  <rect x="70" y="100" width="60" height="20" rx="4" fill="#B91C1C"/>
                  <rect x="140" y="100" width="60" height="20" rx="4" fill="#B91C1C"/>
                  <rect x="210" y="100" width="60" height="20" rx="4" fill="#B91C1C"/>
                  
                  {/* Headlight */}
                  <circle cx="390" cy="140" r="5" fill="#FCD34D"/>
                </svg>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-gray">Puntualidad</div>
                  <div className="text-xs text-gray-500">Siempre a tiempo</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-red/10 p-2 rounded-full">
                  <svg className="w-6 h-6 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-gray">5 Estrellas</div>
                  <div className="text-xs text-gray-500">Calificación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

