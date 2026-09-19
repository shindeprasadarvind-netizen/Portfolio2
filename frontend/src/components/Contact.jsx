import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear error when user starts typing again
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
		const response = await fetch(
		  `${import.meta.env.VITE_API_URL}/api/contact`,
		  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Message sent successfully
      setSubmitted(true);

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Error sending message:", error);

      setError(
        "Unable to send your message right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="contact-heading">
          <span>Contact Me</span>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Have a project, opportunity or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}

        <div className="contact-content">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}

          <div className="contact-info">

            <div className="contact-intro">
              <span className="contact-label">
                GET IN TOUCH
              </span>

              <h3>
                Let's work
                <br />
                together.
              </h3>

              <p>
                I'm interested in Java backend development,
                software engineering opportunities and
                interesting technical projects.
              </p>
            </div>

            {/* Email */}

            <a
              href="mailto:shindeprasadarvind@gmail.com"
              className="contact-info-item"
            >
              <div className="contact-info-icon">
                ✉
              </div>

              <div>
                <span>Email</span>

                <strong>
                  shindeprasadarvind@gmail.com
                </strong>
              </div>
            </a>

			<a
			  href="tel:+919372660127"
			  className="contact-info-item"
			>
			  <div className="contact-info-icon">☎</div>

			  <div>
			    <span>Phone</span>
			    <strong>+91 9372660127</strong>
			  </div>
			</a>
            {/* GitHub */}

			<a
			  href="https://github.com/shindeprasadarvind-netizen"
			  target="_blank"
			  rel="noopener noreferrer"
			  className="contact-info-item"
			>
              <div className="contact-info-icon">
                ◉
              </div>

              <div>
                <span>GitHub</span>

                <strong>
                  View my repositories
                </strong>
              </div>
            </a>

            {/* LinkedIn */}

			<a
			  href="https://linkedin.com/in/shindeprasadarvind"
			  target="_blank"
			  rel="noopener noreferrer"
			  className="contact-info-item"
			>
              <div className="contact-info-icon">
                in
              </div>

              <div>
                <span>LinkedIn</span>

                <strong>
                  Connect with me
                </strong>
              </div>
            </a>

          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Name + Email */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              {/* Subject */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Message */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                <span>
                  {loading ? "Sending..." : "Send Message"}
                </span>

                <span>
                  {loading ? "..." : "→"}
                </span>
              </button>

              {/* Success Message */}

              {submitted && (
                <div className="success-message">
                  ✓ Message sent successfully.
                </div>
              )}

              {/* Error Message */}

              {error && (
                <div className="error-message">
                  ✕ {error}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;