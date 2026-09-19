import "./Experience.css";

function Experience() {
  const responsibilities = [
    {
      number: "01",
      title: "Backend Development",
      description:
        "Developed and maintained scalable backend applications using Java, J2EE and Spring Boot.",
    },
    {
      number: "02",
      title: "REST API Development",
      description:
        "Designed and implemented RESTful APIs and contributed to microservices architecture.",
    },
    {
      number: "03",
      title: "Database Integration",
      description:
        "Worked with JPA and MySQL for database integration and backend data management.",
    },
    {
      number: "04",
      title: "Software Design",
      description:
        "Applied OOPS, SOLID principles and design patterns while developing backend solutions.",
    },
    {
      number: "05",
      title: "Multithreading",
      description:
        "Worked with multithreading and concurrency concepts in Java applications.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="experience-heading">

          <span>My Experience</span>

          <h2>
            Professional <span>Journey</span>
          </h2>

          <p>
            My professional experience and the technologies I have
            worked with throughout my career.
          </p>

        </div>

        {/* =========================
            TIMELINE
        ========================= */}

        <div className="experience-timeline">

          <div className="experience-item">

            {/* Timeline */}

            <div className="timeline-marker">
              <span></span>
            </div>

            {/* Experience Card */}

            <div className="experience-card">

              <div className="experience-card-header">

                <div>

                  <span className="experience-company-label">
                    HCLTECH
                  </span>

                  <h3>
                    Software Engineer
                  </h3>

                </div>

                <span className="experience-date">
                  Sep 2022 – Present
                </span>

              </div>

              <div className="experience-divider"></div>

              <p className="experience-intro">
                Working as a Software Engineer developing and
                maintaining backend applications using Java,
                J2EE and Spring Boot. Contributing to scalable,
                secure and reliable software solutions.
              </p>

              {/* Responsibilities */}

              <div className="experience-responsibilities">

                {responsibilities.map((item) => (
                  <div
                    className="responsibility-item"
                    key={item.number}
                  >

                    <span className="responsibility-number">
                      {item.number}
                    </span>

                    <div>

                      <h4>
                        {item.title}
                      </h4>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              {/* Technologies */}

              <div className="experience-bottom">

                <span className="experience-tech-label">
                  TECHNOLOGIES
                </span>

                <div className="experience-skills">

                  <span>Java</span>
                  <span>J2EE</span>
                  <span>Spring Boot</span>
                  <span>REST APIs</span>
                  <span>Microservices</span>
                  <span>JPA</span>
                  <span>MySQL</span>

                </div>

              </div>

            </div>

          </div>

          {/* =========================
              CURRENT FOCUS
          ========================= */}

          <div className="experience-item career-goal">

            <div className="timeline-marker">
              <span></span>
            </div>

            <div className="experience-card goal-card">

              <span className="goal-label">
                CURRENT FOCUS
              </span>

              <h3>
                Java Backend Development
              </h3>

              <p>
                Continuously strengthening backend development
                expertise with Java, Spring Boot, REST APIs,
                databases and microservices architecture.
              </p>

              <div className="goal-tech">

                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST API</span>
                <span>MySQL</span>
                <span>Microservices</span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;