import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Your Movie Search Hub" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
              Lights, camera, action! 🎬 Welcome to Your Movie Search Hub, where
              the magic of cinema comes to life! Whether you're in the mood for
              a heartwarming drama, an adrenaline-pumping action flick, or a
              side-splitting comedy, we've got you covered.
            </p>
            <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
              Dive into our extensive movie database, discover hidden gems, and
              embark on a cinematic journey like no other. Our user-friendly
              interface makes it a breeze to find your next favorite movie. So
              grab your popcorn, sit back, and let the movie magic begin!
            </p>
            <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
              Ready to get started? Simply type in the title of the movie you're
              looking for in the search bar above, hit enter, and let the
              adventure unfold!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
