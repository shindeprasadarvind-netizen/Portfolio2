import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Backend Development",
      description:
        "Core technologies and frameworks I use for backend application development.",
      skills: [
        "Java",
        "J2EE",
        "Spring Boot",
        "Servlets",
        "JSP",
        "REST APIs",
      ],
    },
    {
      number: "02",
      title: "Programming Concepts",
      description:
        "Fundamentals used to design clean, maintainable and efficient solutions.",
      skills: [
        "OOPS",
        "SOLID",
        "Design Patterns",
        "Multithreading",
        "Data Structures",
      ],
    },
    {
      number: "03",
      title: "Database",
      description:
        "Technologies used for database connectivity and backend data management.",
      skills: [
        "MySQL",
        "JPA",
        "JDBC",
      ],
    },
    {
      number: "04",
      title: "Tools & Technologies",
      description:
        "Development tools and technologies used throughout my projects and work.",
      skills: [
        "Eclipse",
        "VS Code",
        "GitHub",
        "ServiceNow",
        "HTML5",
        "CSS3",
        "Basic Python",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="skills-heading">
          <span>Technical Skills</span>

          <h2>
            My <span>Toolkit</span>
          </h2>

          <p>
            Technologies, programming concepts and tools I use
            to build and maintain backend applications.
          </p>
        </div>

        {/* =========================
            SKILL GRID
        ========================= */}

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div
              className="skill-card"
              key={group.number}
            >

              <div className="skill-card-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>

              </div>

              <div className="skill-icon">
                &lt;/&gt;
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-list">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* =========================
            CORE STACK
        ========================= */}

        <div className="core-stack">

          <div className="core-stack-heading">
            <span>CORE STACK</span>
            <p>Primary backend technologies</p>
          </div>

          <div className="core-stack-items">

            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST APIs</span>
            <span>MySQL</span>
            <span>JPA</span>
            <span>JDBC</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;