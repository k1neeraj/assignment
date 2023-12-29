import React from "react";
import "./BrowseByCategory.css";
const cardData = [
  {
    id: 1,
    title: "Language",
    imageSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhbmd1YWdlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Cooking",
    imageSrc: "https://images.unsplash.com/photo-1518291344630-4857135fb581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fENvb2tpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Music",
    imageSrc: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TXVzaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Arts & Craft",
    imageSrc: "https://images.unsplash.com/photo-1616706161242-f1d591350d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0cyUyMGFuZCUyMGNyYWZ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Yoga",
    imageSrc: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Academics",
    imageSrc: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNhZGVtaWNzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Back to Roots",
    imageSrc: "https://images.unsplash.com/photo-1501643454230-e590702f0951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFjayUyMHRvJTIwcm9vdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Funteresting",
    imageSrc: "https://images.unsplash.com/photo-1703796970924-7d50bcde828e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
];

const BrowseByCategory = () => {
  return (
    <div className="cards-container">
      <h2 className="blue">Browse by category</h2>
      <div className="cards-row">
        {cardData.map((card) => (
          <div key={card.id} className="cards">
            <img src={card.imageSrc} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
