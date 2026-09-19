import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      number: "01",
      category: "MICROSOFT AZURE",
      title: "Azure Fundamentals",
      subtitle: "Microsoft Certified: Azure Fundamentals",
      code: "AZ-900",
      description:
        "Fundamental knowledge of cloud concepts, Azure services and core Microsoft Azure technologies.",
    },
    {
      number: "02",
      category: "GOOGLE CLOUD",
      title: "Associate Cloud Engineer",
      subtitle: "GCP Associate Cloud Engineer",
      code: "GCP",
      description:
        "Training and certification focused on Google Cloud infrastructure, deployment and cloud management.",
    },
    {
      number: "03",
      category: "JAVA",
      title: "Core Java Training Program",
      subtitle: "FUEL – Capgemini",
      code: "JAVA",
      description:
        "Core Java training program focused on strengthening Java programming fundamentals and concepts.",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        {/* Section Heading */}

        <div className="certifications-heading">
          <span>My Certifications</span>

          <h2>
            Certifications & <span>Training</span>
          </h2>

          <p>
            Certifications and training programs that have
            strengthened my technical knowledge and cloud
            fundamentals.
          </p>
        </div>

        {/* Certification Cards */}

        <div className="certifications-grid">

          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.number}
            >

              <div className="certification-top">

                <span className="certification-number">
                  {certification.number}
                </span>

                <span className="certification-category">
                  {certification.category}
                </span>

              </div>

              <div className="certificate-icon">
                ✓
              </div>

              <h3>
                {certification.title}
              </h3>

              <h4>
                {certification.subtitle}
              </h4>

              <p>
                {certification.description}
              </p>

              <div className="certification-divider"></div>

              <div className="certification-bottom">

                <span className="certification-code">
                  {certification.code}
                </span>

                <span className="certification-status">
                  ✓ Completed
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;