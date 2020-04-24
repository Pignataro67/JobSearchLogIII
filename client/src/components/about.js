import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container about-section">
      <h2>About Job Search Task Tracker</h2>
      <p>An exciting piece of Flatiron's Full-Stack Web Development Program is that thy help you find a job.
      This means that, after completion of the program you start your job search with a career coach
      </p>

      <p>Flatiron grads are responsible to engage in a rigorous job search.
      The job search includes correspondences with prospective employers, networking with members of the 
      programming community, weekly GitHub commits and blog posts.
      </p>

      <p>
      This app was built for fellow students to track the progress of their job search.
      <Link to='/types'>Click here</Link> for a detailed explanation of the job search task types.
      Happy job searching!!!
      </p>
    </div>
  );
}

export default About;