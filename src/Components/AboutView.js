import React from 'react';
import Hero from './Hero';

const AboutView = () => {
  return (
    <div>
      <Hero text="What's the Deal with Us?" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontFamily: 'cursive', color: '#3f51b5' }}>Welcome to Your Movie Wonderland!</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Ahoy there, fellow movie buff! We're not just another boring movie site; we're your ticket to cinematic paradise! 🎬✨
            </p>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'cursive', color: '#3f51b5' }}>Why We're Cooler Than the Fonz:</h3>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              <li>Our Movie Database is Bigger Than Kanye's Ego</li>
              <li>We've Got More Movie Info Than a Spy's Dossier</li>
              <li>Our Interface is as Smooth as a Movie Star's Lines</li>
              <li>Personalized Recommendations? We've Got Your Back Like a Trusty Sidekick</li>
              <li>Engaging Movie Details That Even Hitchcock Would Approve Of</li>
              <li>Our Support Team is So Responsive, They Make Speedy Gonzales Look Like a Sloth</li>
            </ul>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Ready to embark on a cinematic adventure like no other? Don your popcorn, grab your beverage of choice, and let's dive into the reel deal together! 🍿🎥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
