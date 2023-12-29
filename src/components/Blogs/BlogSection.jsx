import React from "react"
import "./BlogSection.css";

const blogData = [
  {
    id: 1,
    title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
    imageSrc: "https://plus.unsplash.com/premium_photo-1664382465607-420346d391bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
  },
  {
    id: 2,
    title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
    imageSrc: "https://images.unsplash.com/photo-1610352328296-4443ba82e1f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
  },
  {
    id: 3,
    title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
    imageSrc: "https://images.unsplash.com/photo-1703607980028-54323dab4040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2>Our Blogs</h2>
      <div className="blog-cards">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imageSrc} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
