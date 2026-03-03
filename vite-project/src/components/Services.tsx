const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
    title: 'Transporte de Carga',
    description: 'Servicios de transporte de carga pesada y ligera con vehículos equipados y seguros.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-2.981 2.982l3.147 3.147m0 0a2.981 2.981 0 002.981-2.981m0 0a3 3 0 01-2.981-2.981m0 0v.001m0 0a3 3 0 01-2.982-2.981m0 0h.001m9.914 9.914a3 3 0 01-2.982-2.981m0 0a3 3 0 002.981 2.981m0 0a3 3 0 012.982 2.981m-2.982-2.981a3 3 0 00-2.982-2.981m-2.981 2.981a3 3 0 002.981-2.981m-2.981-2.981a3 3 0 00-2.981 2.981m0 0v.001m0 0a3 3 0 002.981 2.981m0 0h.001M12 12.75a3 3 0 01-2.981-2.981m2.981 2.981a3 3 0 002.981 2.981m-2.981-2.981a3 3 0 00-2.981-2.981m-2.981 2.981a3 3 0 002.981-2.981m-2.981-2.981a3 3 0 00-2.981 2.981m0 0v.001m0 0a3 3 0 002.981 2.981M6.75 15.75a3 3 0 01-3-3m3 3a3 3 0 100-6 3 3 0 000 6z"/>
      </svg>
    ),
    title: 'Transporte de Pasajeros',
    description: 'Viajes cómodos y seguros para grupos, empresas y eventos especiales.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
      </svg>
    ),
    title: 'Mantenimiento',
    description: 'Servicio de mantenimiento y reparación de vehículos para garantizar seguridad.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
      </svg>
    ),
    title: 'Seguro Integral',
    description: 'Todos nuestros servicios cuentan con seguro completo para tu tranquilidad.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Puntualidad',
    description: 'Compromiso con los tiempos de entrega y recogida programados.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    title: 'Cobertura Regional',
    description: 'Servicio de transporte en Neiva y toda la región del Huila.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-red font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-dark-gray">
            Soluciones de Transporte
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de transporte adaptados a tus necesidades.
            Calidad, seguridad y confianza en cada servicio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-red hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary-red mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-primary-red font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Leer más</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-red to-red-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesitas un servicio personalizado?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contáctanos y te ofreceremos una solución adaptée a tus necesidades específicas.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

