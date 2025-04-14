import React from 'react';

function Menu() {
  const menuItems = [
    {
      category: "Café de Especialidad",
      items: [
        { name: "Espresso Orgánico", price: "2.50€", description: "Intenso y aromático" },
        { name: "Cappuccino Artesanal", price: "3.50€", description: "Con leche de almendras opcional" },
        { name: "Flat White", price: "3.00€", description: "Suave y cremoso" },
        { name: "Pour Over", price: "4.00€", description: "Método de filtrado manual" }
      ]
    },
    {
      category: "Smoothies Naturales",
      items: [
        { name: "Verde Vital", price: "5.50€", description: "Espinacas, manzana, jengibre" },
        { name: "Tropical", price: "5.50€", description: "Mango, piña, maracuyá" },
        { name: "Antioxidante", price: "5.50€", description: "Frutos rojos, plátano, chía" }
      ]
    },
    {
      category: "Snacks Saludables",
      items: [
        { name: "Bowl de Açaí", price: "7.50€", description: "Con granola y frutas frescas" },
        { name: "Tostada de Aguacate", price: "6.50€", description: "Pan artesanal integral" },
        { name: "Cookies Veganas", price: "3.00€", description: "Sin azúcares refinados" }
      ]
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl text-green text-center mb-16 font-bold">Nuestro Menú</h1>
        
        {menuItems.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl text-brown mb-8 font-bold">{category.category}</h2>
            <div className="grid gap-6">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brown">{item.name}</h3>
                    <span className="text-green font-semibold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;