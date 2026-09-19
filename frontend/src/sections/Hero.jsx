import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* =========================
            HERO CONTENT
        ========================= */}

        <div className="hero-content">

          <span className="hero-label">
            JAVA BACKEND DEVELOPER
          </span>

          <h1>
            Building Scalable
            <br />
            <span>Backend Systems</span>
          </h1>

          <p className="hero-description">
            Java Backend Developer focused on building scalable backend
            applications using Java, Spring Boot, REST APIs, MySQL,
            PostgreSQL, and modern backend development practices.
          </p>

          {/* =========================
              BUTTONS
          ========================= */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-primary-button"
            >
              <span>View My Projects</span>
              <span>&rarr;</span>
            </a>

            <a
              href="/resume.pdf"
              download="Prasad_Shinde_Java_Backend_Developer_Resume.pdf"
              className="hero-secondary-button"
            >
              <span>Download Resume</span>
              <span>&darr;</span>
            </a>

          </div>

          {/* =========================
              SOCIAL LINKS
          ========================= */}

          <div className="hero-socials">

            <a
              href="https://github.com/shindeprasadarvind-netizen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/shindeprasadarvind"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

          {/* =========================
              HERO STATS
          ========================= */}

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>Java</strong>
              <span>Backend Development</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>Spring Boot</strong>
              <span>Backend Framework</span>
            </div>

          </div>

        </div>

        {/* =========================
            CODE CARD
        ========================= */}

        <div className="hero-code-wrapper">

          <div className="hero-code-card">

            {/* =========================
                CODE HEADER
            ========================= */}

            <div className="code-header">

              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="code-file">
                BackendDeveloper.java
              </span>

            </div>

            {/* =========================
                CODE
            ========================= */}

            <div className="hero-code">

              <div>
                <span className="code-keyword">
                  public class
                </span>{" "}

                <span className="code-class">
                  BackendDeveloper
                </span>{" "}

                {"{"}
              </div>

              <br />

              <div className="code-indent">
                <span className="code-keyword">
                  private
                </span>{" "}

                <span className="code-type">
                  String
                </span>{" "}

                name ={" "}

                <span className="code-string">
                  "Prasad"
                </span>
                ;
              </div>

              <div className="code-indent">
                <span className="code-keyword">
                  private
                </span>{" "}

                <span className="code-type">
                  String
                </span>{" "}

                role ={" "}

                <span className="code-string">
                  "Java Backend Developer"
                </span>
                ;
              </div>

              <div className="code-indent">
                <span className="code-keyword">
                  private
                </span>{" "}

                <span className="code-type">
                  String
                </span>{" "}

                framework ={" "}

                <span className="code-string">
                  "Spring Boot"
                </span>
                ;
              </div>

              <div className="code-indent">
                <span className="code-keyword">
                  private
                </span>{" "}

                <span className="code-type">
                  String
                </span>{" "}

                database ={" "}

                <span className="code-string">
                  "MySQL & PostgreSQL"
                </span>
                ;
              </div>

              <br />

              <div className="code-indent">
                <span className="code-keyword">
                  public
                </span>{" "}

                <span className="code-type">
                  void
                </span>{" "}

                build() {"{"}
              </div>

              <div className="code-double-indent">
                <span className="code-comment">
                  // Building scalable systems
                </span>
              </div>

              <div className="code-double-indent">
                <span className="code-comment">
                  // Designing reliable APIs
                </span>
              </div>

              <div className="code-double-indent">
                <span className="code-comment">
                  // Solving backend problems
                </span>
              </div>

              <div className="code-indent">
                {"}"}
              </div>

              <div>
                {"}"}
              </div>

            </div>

            {/* =========================
                CODE FOOTER
            ========================= */}

            <div className="code-status">

              <span className="status-dot"></span>

              <span>
                Open to backend opportunities
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;