import React from 'react';

const data = [
  {
    id: 0,
    title: "Static Interactive Resume",
    desc: "A typescript-based Interactive Resume built with HTML and CSS allowing users to showcase their skills dynamically.",
    img: "",
    tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"]
  },
  {
    id: 1,
    title: "Dynamic Interactive Resume",
    desc: "A typescript-based Interactive Resume built with HTML and CSS allowing users to showcase their skills dynamically.",
    img: "",
    tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"]
  },
  {
    id: 2,
    title: "Counter",
    desc: "A next-js based counter using typescript.",
    img: "project-3.jpg",
    tags: ["HTML", "counter", "CSS", "TYPESCRIPT"]
  },
  {
    id: 3,
    title: "Todo List",
    desc: "A next-js and typescript-based project.",
    img: "project-1.jpg",
    tags: ["HTML", "counter", "CSS", "TYPESCRIPT"]
  },
  {
    id: 4,
    title: "Weather Widget",
    desc: "A typescript-based project.",
    img: "project-1.jpg",
    tags: ["HTML", "counter", "CSS", "TYPESCRIPT"]
  }
];

const Projects = () => {
  return (
    <div>
      {data.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <img src={project.img} alt={project.title} />
          <ul>
            {project.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
