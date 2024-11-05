import "../styles/Main.css";
import React from 'react';
const Main = () => (
    <main style={{ backgroundColor: '#f9e79f', padding: '50px 0' }}>
        <div className="container">
            <section id="quienes-somos" className="mb-5">
                <h2 className="text-center mb-4">Quiénes Somos?</h2>
                <p>
                    Somos una gestora fundada con el propósito de brindar un servicio transparente y accesible para 
                    todas aquellas personas que desean obtener su ciudadanía italiana. Nos motiva ofrecer una alternativa 
                    en la que los clientes puedan confiar, con el compromiso de cuidar tanto su tiempo como su inversión.
                </p>    
                <p>
                    Nuestra misión es hacer que el proceso sea lo más accesible posible, sin gastos ocultos ni intereses 
                    ajenos, para que cada persona pueda cumplir su objetivo con tranquilidad. Entendemos el esfuerzo y la 
                    perseverancia que representa este camino y nos enorgullece acompañar a quienes buscan una nueva oportunidad 
                    en Italia, facilitando su proceso de ciudadanía con honestidad y respeto.
                </p>
            </section>
            <section id="que-hacemos" className="mb-5">
                <h2 className="text-center mb-4">Qué Hacemos?</h2>
                <p>
                    En nuestra gestora, ofrecemos una amplia gama de servicios para acompañarte en cada etapa del proceso 
                    de ciudadanía italiana y facilitar tu transición a la vida en Italia. Nos especializamos en:
                </p>
                <ul className="list-unstyled">
                    <li><strong>Armado y verificación de carpetas:</strong> Nos aseguramos de que toda la documentación esté completa y en orden para el proceso de ciudadanía.</li>
                    <li><strong>Traducciones y aseveraciones:</strong> Gestionamos traducciones oficiales y aseveraciones de los documentos necesarios.</li>
                    <li><strong>Búsqueda de partidas argentinas e italianas:</strong> Nos encargamos de encontrar partidas de nacimiento, matrimonio u otros documentos.</li>
                    <li><strong>Búsqueda de alquileres para fijar residencia:</strong> Te ayudamos a encontrar opciones de alojamiento en Italia.</li>
                    <li><strong>Asesoramiento integral:</strong> Ofrecemos orientación personalizada sobre todos los aspectos relacionados con la ciudadanía italiana.</li>
                </ul>
                <p>
                    Nuestro objetivo es que cada paso sea lo más simple posible, brindándote el respaldo necesario para 
                    que puedas cumplir tu meta de obtener la ciudadanía y asentarte en Italia con confianza.
                </p>
            </section>
            <section id="donde-estamos" className="mb-5">
                <h2 className="text-center mb-4">Dónde Estamos?</h2>
                <p>
                    Nos encontramos en la provincia de Cosenza, en los alrededores de los comunes de Guardia Piemontese, 
                    Fagnano Castello, Paola, y San Marco Argentano. Aquí te ofrecemos opciones de departamentos amoblados 
                    con contrato registrado para que puedas fijar residencia de manera segura y cumpliendo con todos los 
                    requisitos legales.
                </p>
                <p>
                    Nuestra ubicación estratégica facilita el acceso a los servicios y trámites necesarios para el proceso 
                    de ciudadanía, brindándote el respaldo y el entorno adecuado para establecerte cómodamente en Italia.
                </p>
            </section>
        </div>
    </main>
);

export default Main;
/*import React from 'react';

const Main = () => (
    <main style={{ backgroundColor: '#f9e79f', padding: '50px 0' }}>
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center" style={{ color: '#ca6f1e' }}>Quiénes Somos?</h2>
                            <p>
                                Somos una gestora fundada con el propósito de brindar un servicio transparente y accesible para 
                                todas aquellas personas que desean obtener su ciudadanía italiana. Nos motiva ofrecer una alternativa 
                                en la que los clientes puedan confiar, con el compromiso de cuidar tanto su tiempo como su inversión.
                            </p>    
                            <p>
                                Nuestra misión es hacer que el proceso sea lo más accesible posible, sin gastos ocultos ni intereses 
                                ajenos, para que cada persona pueda cumplir su objetivo con tranquilidad. Entendemos el esfuerzo y la 
                                perseverancia que representa este camino y nos enorgullece acompañar a quienes buscan una nueva oportunidad 
                                en Italia, facilitando su proceso de ciudadanía con honestidad y respeto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center" style={{ color: '#ca6f1e' }}>Qué Hacemos?</h2>
                            <p>
                                En nuestra gestora, ofrecemos una amplia gama de servicios para acompañarte en cada etapa del proceso 
                                de ciudadanía italiana y facilitar tu transición a la vida en Italia. Nos especializamos en:
                            </p>
                            <ul className="list-unstyled">
                                <li><strong>Armado y verificación de carpetas:</strong> Nos aseguramos de que toda la documentación esté completa y en orden para el proceso de ciudadanía.</li>
                                <li><strong>Traducciones y aseveraciones:</strong> Gestionamos traducciones oficiales y aseveraciones de los documentos necesarios.</li>
                                <li><strong>Búsqueda de partidas argentinas e italianas:</strong> Nos encargamos de encontrar partidas de nacimiento, matrimonio u otros documentos.</li>
                                <li><strong>Búsqueda de alquileres para fijar residencia:</strong> Te ayudamos a encontrar opciones de alojamiento en Italia.</li>
                                <li><strong>Asesoramiento integral:</strong> Ofrecemos orientación personalizada sobre todos los aspectos relacionados con la ciudadanía italiana.</li>
                            </ul>
                            <p>
                                Nuestro objetivo es que cada paso sea lo más simple posible, brindándote el respaldo necesario para 
                                que puedas cumplir tu meta de obtener la ciudadanía y asentarte en Italia con confianza.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center" style={{ color: '#ca6f1e' }}>Dónde Estamos?</h2>
                            <p>
                                Nos encontramos en la provincia de Cosenza, en los alrededores de los comunes de Guardia Piemontese, 
                                Fagnano Castello, Paola, y San Marco Argentano. Aquí te ofrecemos opciones de departamentos amoblados 
                                con contrato registrado para que puedas fijar residencia de manera segura y cumpliendo con todos los 
                                requisitos legales.
                            </p>
                            <p>
                                Nuestra ubicación estratégica facilita el acceso a los servicios y trámites necesarios para el proceso 
                                de ciudadanía, brindándote el respaldo y el entorno adecuado para establecerte cómodamente en Italia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default Main;*/


