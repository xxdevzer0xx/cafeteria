import React, { useEffect } from 'react';
import { Coffee, Leaf, Recycle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Energía ancestral en cada sorbo"
  },
  {
    url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Sabores artesanales"
  },
  {
    url: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Momentos únicos"
  }
];

function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="min-h-screen relative overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-screen"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="h-screen bg-cover bg-center relative"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-green/40 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-cream z-10 px-4">
                    <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-5xl md:text-7xl font-bold mb-6"
                    >
                      {image.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                      Descubre el sabor de la sostenibilidad en cada taza
                    </motion.p>
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="btn btn-primary hover:scale-105 transform transition-all duration-300"
                    >
                      Descubre nuestro menú
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Philosophy Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl text-green text-center mb-16 font-bold"
          >
            Nuestra Filosofía
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Coffee size={48} className="text-brown" />,
                title: "Café Artesanal",
                description: "Seleccionamos los mejores granos orgánicos para crear experiencias únicas."
              },
              {
                icon: <Leaf size={48} className="text-brown" />,
                title: "100% Orgánico",
                description: "Comprometidos con ingredientes naturales y sostenibles."
              },
              {
                icon: <Recycle size={48} className="text-brown" />,
                title: "Eco-friendly",
                description: "Cuidamos el planeta con prácticas sostenibles y envases biodegradables."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="transform transition-all duration-300 group-hover:rotate-12">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl text-brown mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-green/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl text-green text-center mb-16 font-bold"
          >
            Nuestros Productos
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Café Artesanal",
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Descubre nuestra selección de cafés de especialidad."
              },
              {
                title: "Smoothies Naturales",
                image:  "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Bebidas refrescantes hechas con frutas orgánicas."
              },
              {
                title: "Snacks Saludables",
                image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Opciones nutritivas para acompañar tu café."
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-card group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-brown mb-2 font-bold group-hover:text-green transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-green relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl text-cream mb-6 font-bold"
          >
            Únete a nuestra comunidad
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-cream/90 mb-8"
          >
            Recibe nuestras novedades y promociones exclusivas
          </motion.p>
          <motion.form 
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
            />
            <button className="btn bg-brown text-cream hover:bg-brown-light hover:shadow-lg whitespace-nowrap transition-all duration-300">
              Suscribirse
            </button>
          </motion.form>
        </div>
      </motion.section>
    </>
  );
}

export default Home;