import React from 'react';
import { Link } from 'react-router-dom';
import { BrandingIcon, UixIcon, MarketingIcon, ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4 } from '../components/Icons';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center items-center mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  const clientLogos = [<ClientLogo1 />, <ClientLogo2 />, <ClientLogo3 />, <ClientLogo4 />];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center relative pt-20">
        <div className="absolute inset-0 bg-grid-gray-900/40 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
        <div className="container mx-auto px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4">
            Мы превращаем бренды в <span className="text-cyan-400 neon-glow">цифровые истории</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Создаём сайты, которые продают. Развиваем бренды, которые вдохновляют.
          </p>
          <Link
            to="/portfolio"
            className="inline-block bg-cyan-500 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
          >
            Наши услуги
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<BrandingIcon />}
            title="Брендинг"
            description="Создание уникального стиля и голоса для вашего бренда, от логотипа до брендбука."
          />
          <ServiceCard
            icon={<UixIcon />}
            title="UX/UI Дизайн"
            description="Проектирование интуитивно понятных и эстетически привлекательных интерфейсов для сайтов и приложений."
          />
          <ServiceCard
            icon={<MarketingIcon />}
            title="Маркетинг"
            description="Комплексное продвижение вашего бизнеса в онлайне для привлечения целевой аудитории."
          />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Наши клиенты</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((Logo, index) => (
            <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              {Logo}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать проект?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Давайте обсудим ваши идеи и найдем лучшее решение для вашего бизнеса.
        </p>
        <Link
          to="/contacts"
          className="inline-block border-2 border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-md text-lg hover:bg-cyan-500 hover:text-black transform hover:scale-105 transition-all duration-300"
        >
          Связаться с нами
        </Link>
      </section>
    </div>
  );
};

export default HomePage;