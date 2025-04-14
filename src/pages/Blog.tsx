import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: "El arte del café de especialidad",
      date: "15 de marzo, 2024",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Descubre los secretos detrás de la preparación del café de especialidad y por qué marca la diferencia en cada taza.",
      category: "Café"
    },
    {
      title: "Sostenibilidad en la industria del café",
      date: "10 de marzo, 2024",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Cómo nuestras prácticas sostenibles están ayudando a proteger el medio ambiente y apoyar a las comunidades productoras.",
      category: "Sostenibilidad"
    },
    {
      title: "Smoothies saludables para el verano",
      date: "5 de marzo, 2024",
      image: "https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Recetas refrescantes y nutritivas para mantener la energía durante los días calurosos.",
      category: "Recetas"
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl text-green text-center mb-16 font-bold">Blog</h1>
        
        <div className="grid gap-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-green font-semibold">{post.category}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-brown mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <button className="text-green font-semibold hover:text-green-light transition-colors">
                    Leer más →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;