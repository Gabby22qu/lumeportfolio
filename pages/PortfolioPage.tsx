import React from 'react';
import { Link } from 'react-router-dom';
import { BrandingIcon, UixIcon, MarketingIcon } from '../components/Icons';

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const services: ServiceDetail[] = [
  {
    icon: <BrandingIcon />,
    title: 'Брендинг',
    description: 'Мы создаем сильные бренды, которые выделяются на рынке и находят отклик у аудитории. Наш подход основан на глубоком анализе и креативных решениях.',
    details: [
      'Разработка логотипа и фирменного стиля',
      'Создание брендбука и гайдлайнов',
      'Нейминг и разработка слоганов',
      'Дизайн корпоративной полиграфии и упаковки'
    ],
  },
  {
    icon: <UixIcon />,
    title: 'UX/UI Дизайн',
    description: 'Проектируем интуитивно понятные и эстетически привлекательные интерфейсы, которые обеспечивают лучший пользовательский опыт и повышают конверсию.',
    details: [
        'Исследование пользовательского опыта (UX)',
        'Проектирование пользовательских интерфейсов (UI)',
        'Создание интерактивных прототипов',
        'Адаптивный дизайн для всех устройств'
    ],
  },
  {
    icon: <MarketingIcon />,
    title: 'Интернет-маркетинг',
    description: 'Разрабатываем и реализуем комплексные маркетинговые стратегии для привлечения целевой аудитории, увеличения продаж и повышения узнаваемости бренда.',
    details: [
        'SEO-оптимизация и поисковое продвижение',
        'Контекстная и таргетированная реклама',
        'SMM-продвижение в социальных сетях',
        'Email-маркетинг и контент-стратегии'
    ],
  },
];

const ServiceDetailCard: React.FC<{ service: ServiceDetail }> = ({ service }) => (
  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center mb-6">
      <div className="text-cyan-400">{service.icon}</div>
      <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
    </div>
    <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
    <ul className="space-y-3 text-gray-300">
        {service.details.map((detail, index) => (
            <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>{detail}</span>
            </li>
        ))}
    </ul>
  </div>
);


const PortfolioPage: React.FC = () => {
  return (
    <div className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Наши услуги</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Мы предлагаем полный спектр цифровых услуг для роста вашего бизнеса.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceDetailCard key={index} service={service} />
          ))}
        </div>
        <div className="text-center mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы вывести ваш бизнес на новый уровень?</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Свяжитесь с нами, чтобы обсудить ваш проект и начать сотрудничество.
            </p>
            <Link
                to="/contacts"
                className="inline-block bg-cyan-500 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            >
                Начать проект
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;