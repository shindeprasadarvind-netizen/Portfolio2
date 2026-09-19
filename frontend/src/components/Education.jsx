import "./Education.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="education-heading">
          <span>My Education</span>

          <h2>
            Academic <span>Journey</span>
          </h2>

          <p>
            My academic background and foundation in computer
            engineering.
          </p>
        </div>

        {/* =========================
            ACADEMIC TIMELINE
        ========================= */}

        <div className="education-timeline">

          {/* Timeline line */}
          <div className="education-line"></div>

          {/* Timeline item */}
          <div className="education-item">

            {/* Marker */}
            <div className="education-marker">
              <span></span>
            </div>

            {/* Education Card */}
            <div className="education-card">

              {/* Card Header */}
              <div className="education-card-header">

                <div>
                  <span className="education-level">
                    BACHELOR'S DEGREE
                  </span>

                  <h3>
                    B.E. Computer Engineering
                  </h3>

                  <h4>
                    University of Mumbai
                  </h4>
                </div>

                <span className="education-date">
                  Jul 2018 – Jun 2022
                </span>

              </div>

              <div className="education-divider"></div>

              {/* Card Body */}
              <div className="education-card-body">

                <div className="education-info">

                  <span className="education-info-label">
                    UNIVERSITY
                  </span>

                  <strong>
                    University of Mumbai
                  </strong>

                </div>

                <div className="education-info">

                  <span className="education-info-label">
                    DEGREE
                  </span>

                  <strong>
                    B.E. Computer Engineering
                  </strong>

                </div>

                <div className="education-info cgpa-info">

                  <span className="education-info-label">
                    CGPA
                  </span>

                  <strong>
                    8.43
                  </strong>

                </div>

              </div>

              {/* Footer */}
              <div className="education-footer">

                <span>
                  Computer Engineering
                </span>

                <span className="education-status">
                  ✓ Completed
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            EDUCATION NOTE
        ========================= */}

        <div className="education-note">

          <div className="education-note-icon">
            &lt;/&gt;
          </div>

          <div>
            <span>ACADEMIC FOUNDATION</span>

            <p>
              Built a strong foundation in computer engineering
              concepts that supports my current backend development
              career.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;