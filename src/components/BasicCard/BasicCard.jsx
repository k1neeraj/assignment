import React from "react";
import Card from "./Card.jsx";
import "./BasicCard.css";

const BasicCard = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnR8ZW58MHx8MHx8fDA%3D",
      title: "Learn something new",
      description:
        "Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography.",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNraWxsJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Skilled & Passionate Teachers",
      description:
        "We offers Interactive classes by experts who are qualified and trusted.",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNraWxsJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Take classes anytime, anywhere",
      description:
        "Join sessions at your own convenience and pace, from the comforts of your home.",
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBheSUyMGFzJTIweW91JTIwZ298ZW58MHx8MHx8fDA%3D",
      title: "Pay as you go",
      description:
        "No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us.",
    },
  ];

  return (
    <>
    <h1>Explore. Enroll. Have Fun. Repeat - here hobby meets happiness</h1>
      <div className="card-container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default BasicCard;
