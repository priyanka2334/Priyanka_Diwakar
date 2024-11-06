// import React from 'react';
// import './projects.css';

// const projectsData = [
//   {
//     name: "Food-Website",
//     description: "A dynamic website showcasing various food recipes and cooking tips, designed for culinary enthusiasts.",
//     image: "../images/Menu.png",
//     link: "https://food-resturant-tau.vercel.app/",
//     tags: ["JavaScript", "HTML", "CSS"]
//   },
//   {
//     name: "E-Commerce-Website",
//     description: "This online platform is designed for selling books and includes wishlist and add-to-cart functionality.",
//     image: "/home/navgurukul/Pictures/Screenshots/Screenshot from 2024-10-24 18-28-31.png",
//     link: "https://hachathon-project.vercel.app/",
//     tags: ["React js", "CSS", "API"]
//   },
//   {
//     name: "Tic Tac Toe",
//     description: "A simple and engaging Tic Tac Toe game that allows two players to compete on a 3x3 grid",
//     image: "/home/navgurukul/Pictures/Screenshots/Screenshot from 2024-10-24 18-30-53.png",
//     link: "https://react-game-project-psi.vercel.app/",
//     tags: ["React js", "HTML","CSS" ]
//   },
//   {
//     name: "Calculator",
//     description: "A user-friendly calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
//     image: "/home/navgurukul/Pictures/Screenshots/Screenshot from 2024-10-24 18-34-35.png",
//     link: "https://food-resturant-m5lg.vercel.app/",
//     tags: ["HTML", "CSS", "JavaScript"]
//   },
 
// ];


import React from 'react';
import './projects.css';
import menuImage from '../images/Menu.png'; // Update path as needed
import eCommerceImage from '../images/book.png'
import ticTacToeImage from '../images/tic_tac_toe.png';
import calculatorImage from '../images/caculator.png';
import Movie from '../images/movie.png';
import Country from '../images/country.png';
 
const projectsData = [
  {
    name: "Food-Website",
    description: "A dynamic website showcasing various food recipes and cooking tips, designed for culinary enthusiasts.",
    image: menuImage,
    link: "https://food-resturant-tau.vercel.app/",
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "E-Commerce-Website",
    description: "This online platform is designed for selling books and includes wishlist and add-to-cart functionality.",
    image: eCommerceImage,
    link: "https://hachathon-project.vercel.app/",
    tags: ["React js", "CSS", "API"]
  },
  {
    name: "Tic Tac Toe",
    description: "A simple and engaging Tic Tac Toe game that allows two players to compete on a 3x3 grid",
    image: ticTacToeImage,
    link: "https://react-game-project-psi.vercel.app/",
    tags: ["React js", "HTML", "CSS"]
  },
  {
    name: "Calculator",
    description: "A user-friendly calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
    image: calculatorImage,
    link: "https://food-resturant-m5lg.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Movie-Website",
    description: "In a movie website, there is a wishlist functionality and a search bar. If I search for 'horror,' it will show horror movies, and if I search for 'comedy,' it will show comedy movies. In one search, it will display only 20 movies.",
    image: Movie,
    link: "https://movie-app-gray-ten.vercel.app/apipage",
    tags: ["HTML", "CSS", "ReactJS"]
  },
  {
    name: "Country-Website",
    description: "country website allows users to search for countries by name or category and add their favorite countries to a wishlist. It uses HTML for structure, CSS for styling, and JavaScript for interactive search and wishlist functionality.",
    image: Country,
    link: "https://country-project-psi.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  
];


const List = () => {
  return (
    <div>
      <h1 className="list-title">Our Projects</h1>
      <br />
      <hr />
      <h3>🌟 Explore my projects to see how I've enhanced my skills.🌟</h3>
      <br />
      <br />
      <div className="list-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;