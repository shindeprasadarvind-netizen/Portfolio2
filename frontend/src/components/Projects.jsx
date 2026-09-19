import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      type: "BACKEND PROJECT",
      title: "E-Commerce Website",
      description:
        "Backend application for an e-commerce platform with user authentication, product management and order processing.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "MySQL",
        "REST API",
      ],
      features: [
        "User registration and login",
        "Product and category management",
        "RESTful backend APIs",
        "Database integration",
      ],
    },
    {
      number: "02",
      type: "BACKEND PROJECT",
      title: "E-Notes",
      description:
        "Backend application for managing personal notes with authentication, CRUD operations and persistent database storage.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "MySQL",
        "REST API",
      ],
      features: [
        "User authentication",
        "Create, update and delete notes",
        "MySQL database integration",
        "Validation and exception handling",
      ],
    },
    {
      number: "03",
      type: "JAVA PROJECT",
      title: "Tic Tac Toe",
      description:
        "Java-based console game designed using object-oriented programming principles with board management and game-state handling.",
      technologies: [
        "Java",
        "OOP",
        "Collections",
        "Game Logic",
      ],
      features: [
        "Human vs Bot gameplay",
        "Board and player management",
        "Move validation",
        "Winner and game-state detection",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="projects-heading">

          <span>My Projects</span>

          <h2>
            Things I've <span>Built</span>
          </h2>

          <p>
            A collection of backend and Java projects demonstrating
            my approach to application development, API design and
            problem solving.
          </p>

        </div>

        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              {/* Top */}

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              {/* Project Icon */}

              <div className="project-icon">
                <span>&lt;/&gt;</span>
              </div>

              {/* Content */}

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {/* Features */}

              <div className="project-features">

                {project.features.map((feature) => (
                  <div
                    className="project-feature"
                    key={feature}
                  >
                    <span>✓</span>
                    <p>{feature}</p>
                  </div>
                ))}

              </div>

              {/* Technologies */}

              <div className="project-technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              {/* Bottom */}

              <div className="project-footer">

                <span>
                  Java Backend
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;