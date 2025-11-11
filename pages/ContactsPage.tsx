
import React, { useState } from 'react';

const YandexMap: React.FC = () => (
  <div className="relative w-full h-64 md:h-full overflow-hidden rounded-lg border border-gray-800">
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d3049103986a117d84878a706509f63567d163f9055447a16bd555776d4948c&amp;source=constructor"
      width="100%"
      height="100%"
      frameBorder="0"
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  </div>
);

const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Свяжитесь с нами</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Есть идея? Давайте воплотим её в жизнь вместе.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Контактная информация</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-6 mr-4 text-cyan-400">📞</span>
                  <a href="tel:+375295554422" className="hover:text-white">+375 (29) 555-44-22</a>
                </li>
                <li className="flex items-center">
                  <span className="w-6 mr-4 text-cyan-400">✉️</span>
                  <a href="mailto:hello@lumecreative.by" className="hover:text-white">hello@lumecreative.by</a>
                </li>
                <li className="flex items-start">
                  <span className="w-6 mr-4 text-cyan-400 mt-1">📍</span>
                  <span>г. Минск, ул. К. Маркса, 15, офис 3</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 mr-4 text-cyan-400">🕒</span>
                  <span>Пн–Пт 10:00–19:00</span>
                </li>
              </ul>
            </div>
            <YandexMap />
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Отправьте нам сообщение</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Имя</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Сообщение</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-black font-bold py-3 px-6 rounded-md hover:bg-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                >
                  Отправить
                </button>
              </div>
              {submitted && (
                <p className="text-green-400 text-center">Спасибо! Ваше сообщение отправлено.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
