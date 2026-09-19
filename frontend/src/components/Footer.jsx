import "./Footer.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-top">
					<div className="footer-brand">
						<div className="footer-logo">PS.</div>

						<h3>Java Backend Developer</h3>

						<p>
							Building reliable, scalable and maintainable backend
							applications using Java and Spring Boot.
						</p>
					</div>

					<div className="footer-links">
						<h4>Quick Links</h4>

						<a href="#home">Home</a>
						<a href="#about">About</a>
						<a href="#skills">Skills</a>
						<a href="#projects">Projects</a>
						<a href="#experience">Experience</a>
						<a href="#education">Education</a>
						<a href="#certifications">Certifications</a>
						<a href="#contact">Contact</a>
					</div>

					<div className="footer-connect">
						<h4>Let's Connect</h4>

						<a href="mailto:shindeprasadarvind@gmail.com">
							shindeprasadarvind@gmail.com
						</a>

						<div className="footer-socials">
							<a
								href="https://github.com/shindeprasadarvind-netizen"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							<a
							  href="https://linkedin.com/in/shindeprasadarvind"
							  target="_blank"
							  rel="noopener noreferrer"
							>
							  LinkedIn
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>
						© {new Date().getFullYear()} Prasad Shinde. All rights reserved.
					</p>

					<a href="#home" className="back-to-top">
						Back to top ↑
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;