import { useState } from 'react';
import './PersonalTraining.css';
import MatrixRain from './MatrixRain';

function PersonalTraining() {
  const [showPrograms, setShowPrograms] = useState(true);

  return (
    <div className="personal-training">
      <MatrixRain />

      <header className="pt-header">
        <h1 className="glitch" data-text="Personal Training">Personal Training</h1>
        <p className="matrix-text">Unlock Your Potential with Expert Guidance</p>
        <p className="matrix-text">Transform Your Body. Elevate Your Mind. Achieve Your Goals.</p>
      </header>

      <section className="pt-intro">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Expert Personal Training">Expert Personal Training</h2>
          <p>At Inspired Fitness, we provide personalized one-on-one training programs designed to help you achieve your unique fitness goals. Our certified trainers bring years of experience and a passion for helping you succeed.</p>
          <p>They work with you to create a customized plan that fits your lifestyle and pushes you towards success.</p>
        </div>
      </section>

      <section className="pt-services">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Our Training Programs">Our Training Programs</h2>
          <button onClick={() => setShowPrograms(!showPrograms)}>
            {showPrograms ? 'Hide Programs' : 'View Programs'}
          </button>
          {showPrograms && (
            <div className="services-grid">
              <div className="service-card">
                <h3>One-on-One Training</h3>
                <p>Our flagship program, offering completely personalized attention and customized workout plans designed to meet your unique fitness goals and aspirations.</p>
                <ul>
                  <li>Individual Assessment</li>
                  <li>Custom Workout Plans</li>
                  <li>Nutrition Guidance</li>
                  <li>Progress Tracking</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Strength Training</h3>
                <p>Build muscle, increase strength, and improve overall body composition.</p>
                <ul>
                  <li>Proper Form Instruction</li>
                  <li>Progressive Overload</li>
                  <li>Compound Movements</li>
                  <li>Muscle Building Focus</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Weight Loss</h3>
                <p>Effective programs combining exercise and nutrition for sustainable weight loss.</p>
                <ul>
                  <li>Cardio Programming</li>
                  <li>HIIT Workouts</li>
                  <li>Nutritional Support</li>
                  <li>Body Composition Analysis</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="pt-process">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Training Process">Training Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <h3>1. Initial Consultation</h3>
              <p>We begin with a comprehensive consultation to understand your goals, assess your current fitness level, and discuss any limitations or concerns.</p>
            </div>

            <div className="process-step">
              <h3>2. Custom Program Design</h3>
              <p>Based on your consultation, we create a personalized training program that aligns with your goals and fits your schedule.</p>
            </div>

            <div className="process-step">
              <h3>3. Training Sessions</h3>
              <p>Regular training sessions with expert guidance, form correction, and progressive challenges to keep you moving forward.</p>
            </div>

            <div className="process-step">
              <h3>4. Progress Tracking</h3>
              <p>Continuous monitoring of your progress with regular assessments and adjustments to your program as needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-pricing">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Training Packages">Training Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter Package</h3>
              <p className="price">$299/month</p>
              <ul>
                <li>4 Sessions Per Month</li>
                <li>Initial Assessment</li>
                <li>Basic Nutrition Guide</li>
                <li>Progress Tracking</li>
              </ul>
              <a href="#contact" className="button">Get Started</a>
            </div>

            <div className="pricing-card featured">
              <h3>Transformation Package</h3>
              <p className="price">$549/month</p>
              <div className="save-badge">Save 10%</div>
              <ul>
                <li>8 Sessions Per Month</li>
                <li>Comprehensive Assessment</li>
                <li>Detailed Nutrition Plan</li>
                <li>Weekly Progress Check-ins</li>
                <li>Mobile App Access</li>
              </ul>
              <a href="#contact" className="button">Most Popular</a>
            </div>

            <div className="pricing-card">
              <h3>Elite Package</h3>
              <p className="price">$799/month</p>
              <div className="save-badge">Save 15%</div>
              <ul>
                <li>12 Sessions Per Month</li>
                <li>Advanced Assessment</li>
                <li>Custom Meal Planning</li>
                <li>24/7 Support Access</li>
                <li>Mobile App Access</li>
                <li>Monthly Body Analysis</li>
              </ul>
              <a href="#contact" className="button">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-tracking">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Smart Fitness Tracking">Smart Fitness Tracking</h2>
          <div className="tracking-grid">
            <div className="tracking-card">
              <h3>Real-Time Progress</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="matrix-icon">📊</span>
                  <p>Track workouts, sets, reps, and weights</p>
                </div>
                <div className="feature-item">
                  <span className="matrix-icon">📈</span>
                  <p>View progress graphs and trends</p>
                </div>
                <div className="feature-item">
                  <span className="matrix-icon">🎯</span>
                  <p>Set and monitor fitness goals</p>
                </div>
              </div>
            </div>

            <div className="tracking-card">
              <h3>Nutrition Analysis</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="matrix-icon">🍎</span>
                  <p>Log meals and track calories</p>
                </div>
                <div className="feature-item">
                  <span className="matrix-icon">⚖️</span>
                  <p>Monitor macro and micronutrients</p>
                </div>
                <div className="feature-item">
                  <span className="matrix-icon">📱</span>
                  <p>Barcode scanner for easy logging</p>
                </div>
              </div>
            </div>

            <div className="tracking-card">
              <h3>Body Metrics</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="matrix-icon">📏</span>
                  <p>Track measurements and body fat</p>
                </div>
                <div className="feature-item">
                  <span className="matrix-icon">💪</span>
                  <p>Progress photos and comparisons</p>
                </div>
                <div className="feature-item">
                  <span className="matrix-icon">📊</span>
                  <p>BMI and body composition analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-dashboard">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Digital Training Hub">Digital Training Hub</h2>
          <div className="dashboard-preview">
            <div className="dashboard-card">
              <h3>Mobile App Features</h3>
              <ul className="feature-grid">
                <li>
                  <span className="matrix-icon">📱</span>
                  <span>Workout Tracking</span>
                </li>
                <li>
                  <span className="matrix-icon">🔔</span>
                  <span>Workout Reminders</span>
                </li>
                <li>
                  <span className="matrix-icon">💬</span>
                  <span>Trainer Chat</span>
                </li>
                <li>
                  <span className="matrix-icon">📅</span>
                  <span>Schedule Sessions</span>
                </li>
                <li>
                  <span className="matrix-icon">📹</span>
                  <span>Exercise Videos</span>
                </li>
                <li>
                  <span className="matrix-icon">🎯</span>
                  <span>Goal Setting</span>
                </li>
              </ul>
            </div>

            <div className="dashboard-card">
              <h3>Integration Features</h3>
              <div className="integration-list">
                <div className="integration-item">
                  <span className="matrix-icon">⌚</span>
                  <div className="integration-details">
                    <h4>Fitbit Integration</h4>
                    <p>Sync with Fitbit for activity tracking</p>
                  </div>
                </div>
                <div className="integration-item">
                  <span className="matrix-icon">🍏</span>
                  <div className="integration-details">
                    <h4>MyFitnessPal Integration</h4>
                    <p>Connect with MyFitnessPal for nutrition</p>
                  </div>
                </div>
                <div className="integration-item">
                  <span className="matrix-icon">🏃</span>
                  <div className="integration-details">
                    <h4>Strava Integration</h4>
                    <p>Link with Strava for cardio tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-testimonials">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Success Stories">Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote">"I&apos;ve been training here for 6 months and the results are incredible. Lost 30 pounds and gained so much confidence!"</div>
              <div className="author">- Sarah M.</div>
              <div className="achievement">Weight Loss Journey</div>
            </div>
            
            <div className="testimonial-card">
              <div className="quote">"The trainers here really know their stuff. My strength has doubled and my form has never been better."</div>
              <div className="author">- Mike R.</div>
              <div className="achievement">Strength Training</div>
            </div>
            
            <div className="testimonial-card">
              <div className="quote">"The personalized attention and custom program design made all the difference. Finally achieving my fitness goals!"</div>
              <div className="author">- Jennifer K.</div>
              <div className="achievement">Transformation Program</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-cta">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Start Your Journey">Start Your Journey</h2>
          <p className="matrix-text">Take the first step towards your fitness goals with expert guidance and support.</p>
          <div className="cta-buttons">
            <a href="tel:336-310-6799" className="button">Call: 336-310-6799</a>
            <a href="mailto:shawncarruth@gmail.com" className="button">Email Us</a>
          </div>
        </div>
      </section>

      <section className="pt-location">
        <div className="content-wrapper">
          <h2 className="glitch" data-text="Training Location">Training Location</h2>
          <div className="location-info">
            <p>4306 Grand Reserve Ct<br />Kernersville, NC</p>
            <div className="hours">
              <h3>Training Hours</h3>
              <p>Monday-Friday: 5:00 AM - 6:00 PM<br />
                Saturday: 6:00 AM - 12:00 PM<br />
                Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonalTraining;
