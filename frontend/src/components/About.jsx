import "./About.css";

function About() {
  const highlights = [
    {
      number: "01",
      title: "Java",
      description: "Core Java and object-oriented backend development.",
    },
    {
      number: "02",
      title: "Spring Boot",
      description: "Building structured and maintainable backend applications.",
    },
    {
      number: "03",
      title: "REST APIs",
      description: "Designing backend APIs for application communication.",
    },
    {
      number: "04",
      title: "MySQL",
      description: "Working with relational databases and backend data.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="about-heading">
          <span>About Me</span>

          <h2>
            Building Backend
            <br />
            <span>Solutions That Matter</span>
          </h2>

          <p>
            A Java Backend Developer focused on building reliable,
            maintainable and scalable software solutions.
          </p>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="about-content">

          {/* LEFT */}

          <div className="about-text">

            <p className="about-main-text">
              I'm a Software Engineer with 3+ years of experience
              working with Java, J2EE and Spring Boot. My focus is
              backend development, API design and database
              integration.
            </p>

            <p>
              I enjoy solving technical problems and applying
              object-oriented programming, SOLID principles and
              design patterns to create clean and maintainable
              backend applications.
            </p>

            <p>
              My experience also includes working with REST APIs,
              microservices architecture, JPA and MySQL while
              contributing to reliable software solutions.
            </p>

          </div>

          {/* RIGHT CODE CARD */}

          <div className="about-code-wrapper">

            <div className="about-code-card">

              <div className="about-code-header">

                <div className="about-code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>AboutMe.java</span>

              </div>

              <div className="about-code">

                <div>
                  <span className="about-keyword">
                    public class
                  </span>{" "}

                  <span className="about-class">
                    Developer
                  </span>{" "}
                  {"{"}
                </div>

                <br />

                <div className="about-indent">
                  <span className="about-keyword">
                    String
                  </span>{" "}

                  role ={" "}

                  <span className="about-string">
                    "Backend Developer"
                  </span>
                  ;
                </div>

                <div className="about-indent">
                  <span className="about-keyword">
                    String
                  </span>{" "}

                  language ={" "}

                  <span className="about-string">
                    "Java"
                  </span>
                  ;
                </div>

                <div className="about-indent">
                  <span className="about-keyword">
                    String
                  </span>{" "}

                  framework ={" "}

                  <span className="about-string">
                    "Spring Boot"
                  </span>
                  ;
                </div>

                <div className="about-indent">
                  <span className="about-keyword">
                    String
                  </span>{" "}

                  database ={" "}

                  <span className="about-string">
                    "MySQL"
                  </span>
                  ;
                </div>

                <br />

                <div className="about-indent">
                  <span className="about-keyword">
                    boolean
                  </span>{" "}

                  problemSolver ={" "}

                  <span className="about-boolean">
                    true
                  </span>
                  ;
                </div>

                <div className="about-indent">
                  <span className="about-keyword">
                    boolean
                  </span>{" "}

                  continuousLearning ={" "}

                  <span className="about-boolean">
                    true
                  </span>
                  ;
                </div>

                <br />

                <div className="about-indent">
                  {"}"}
                </div>

                <div>
                  {"}"}
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            HIGHLIGHTS
        ========================= */}

        <div className="about-highlights">

          {highlights.map((item) => (
            <div
              className="about-highlight-card"
              key={item.number}
            >

              <div className="about-highlight-top">

                <span>{item.number}</span>

                <span className="about-highlight-arrow">
                  ↗
                </span>

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;