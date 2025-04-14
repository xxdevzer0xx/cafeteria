import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl text-green text-center mb-16 font-bold">Contacto</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl text-brown mb-8 font-bold">Encuéntranos</h2>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-green mt-1" />
              <div>
                <h3 className="font-bold text-brown mb-1">Dirección</h3>
                <p className="text-gray-600">Calle del Café 123<br />28001 Madrid, España</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-green mt-1" />
              <div>
                <h3 className="font-bold text-brown mb-1">Teléfono</h3>
                <p className="text-gray-600">+34 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-green mt-1" />
              <div>
                <h3 className="font-bold text-brown mb-1">Email</h3>
                <p className="text-gray-600">info@greenbrew.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-green mt-1" />
              <div>
                <h3 className="font-bold text-brown mb-1">Horario</h3>
                <p className="text-gray-600">
                  Lunes - Viernes: 7:00 - 20:00<br />
                  Sábado - Domingo: 8:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-card">
            <h2 className="text-2xl text-brown mb-6 font-bold">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;