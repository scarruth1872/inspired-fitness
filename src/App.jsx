import './App.css'
import PersonalTraining from './components/PersonalTraining'

function App() {
  return (
    <div className="app">
      <div className="matrix-rain"></div>
      
      <header className="header">
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#training">Training</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <h1 className="glitch" data-text="INSPIRED FITNESS">INSPIRED FITNESS</h1>
        <h2>Transform Your Health, Transform Your Life</h2>
        <p className="matrix-text">Personal Training &bull; Nutrition Counseling &bull; Group Classes</p>
        <div className="cta-button">
          <a href="#contact" className="button">Start Your Journey</a>
        </div>
      </section>

      <section id="services" className="programs">
        <h2 className="glitch" data-text="Our Services">Our Services</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Personal Training</h3>
            <p>Customized one-on-one training programs designed to help you achieve your fitness goals</p>
            <ul>
              <li>Personalized Workout Plans</li>
              <li>Form Correction</li>
              <li>Progress Tracking</li>
              <li>Motivation & Support</li>
            </ul>
          </div>
          <div className="program-card">
            <h3>Nutrition Counseling</h3>
            <p>Expert guidance on creating sustainable and healthy eating habits</p>
            <ul>
              <li>Meal Planning</li>
              <li>Dietary Analysis</li>
              <li>Nutritional Education</li>
              <li>Lifestyle Coaching</li>
            </ul>
          </div>
          <div className="program-card">
            <h3>Group Classes</h3>
            <p>Energetic group fitness sessions for all levels</p>
            <ul>
              <li>High-Intensity Training</li>
              <li>Strength Building</li>
              <li>Cardio Workouts</li>
              <li>Community Support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="training">
        <PersonalTraining />
      </section>

      <section id="about" className="transformation">
        <h2 className="glitch" data-text="About Us">About Us</h2>
        <div className="transformation-grid">
          <div className="transformation-card">
            <div className="before-after">
              <h3>Our Mission</h3>
              <p>At Inspired Fitness, we're dedicated to helping people achieve their fitness and health goals through expert guidance and support. Our comprehensive approach combines personal training, nutrition counseling, and life skills coaching.</p>
            </div>
          </div>
          <div className="transformation-card">
            <div className="before-after">
              <h3>Location</h3>
              <p>4306 Grand Reserve Ct<br/>Kernersville, NC</p>
              <p>Serving clients with dedication and expertise in a welcoming environment.</p>
            </div>
          </div>
          <div className="transformation-card">
            <div className="before-after">
              <h3>Hours</h3>
              <p>Monday-Friday: 5:00 AM - 6:00 PM<br/>Saturday: 6:00 AM - 12:00 PM<br/>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="glitch" data-text="Get Started">Get Started</h2>
        <div className="contact-form">
          <p className="matrix-text">Take the first step towards your fitness goals today.</p>
          <div className="contact-info">
            <a href="tel:336-310-6799" className="button">Call: 336-310-6799</a>
            <a href="mailto:shawncarruth@gmail.com" className="button">Email Us</a>
            <a href="#" className="button">Schedule Consultation</a>
          </div>
        </div>
      </section>

      <footer>
        <p className="matrix-text">© 2024 Inspired Fitness LLC. Transform Your Future.</p>
      </footer>
    </div>
  )
}

export default App
