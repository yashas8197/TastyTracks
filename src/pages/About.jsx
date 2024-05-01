import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { Code2Icon, Github, MapPin, CircleUser } from "lucide-react";
import useAboutDetails from "../utils/useAboutDetails";

const About = () => {
  let githubProfile = null;

  githubProfile = useAboutDetails();
  if (githubProfile === null) {
    return <Shimmer />;
  }

  const { avatar_url, name, login, location } = githubProfile;

  return (
    <div className="my-4 container">
      <div className="d-flex justify-content-center">
        <div className="col-md-7">
          <h1 className="display-6 text-center ">
            <strong>About Me</strong>
          </h1>
          <div className="card bg-dark">
            <div className="card-body ">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <img src={avatar_url} className="img-fluid rounded-circle" />
                </div>
                <div className="text-light container">
                  <h1>{name}</h1>
                  <p className="">
                    <CircleUser /> {login}
                  </p>
                  <p>
                    <MapPin />
                    {location}
                  </p>
                  <p>
                    ❤️Frontend developer 💕I Have been enjoying web development
                    in MERN Stack for almost 1 years.
                  </p>
                  <div>
                    <Link
                      to="https:github.com/yashas8197/"
                      className="btn btn-outline-light m-2"
                    >
                      <Github /> {login}
                    </Link>
                    <Link
                      to="https://github.com/yashas8197/TastyTracks"
                      className="btn btn-outline-light m-2"
                    >
                      <Code2Icon /> Tasty Tracks
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 my-4 text-center">
            <h1 className="display-6">
              <strong>About Project</strong>
            </h1>
            <p className="fs-5 text-secondary">
              Welcome to TastyTracks, your ultimate destination for delicious
              food delivered straight to your door. With an extensive selection
              of top-notch restaurants offering a variety of cuisines,
              TastyTracks aims to make food ordering a seamless and enjoyable
              experience. Our commitment to quality, reliability, and customer
              satisfaction ensures that every meal you order is a delightful
              culinary adventure. Whether you're craving comfort food or seeking
              new culinary delights, TastyTracks has you covered – join us and
              explore the world of flavors, one tasty track at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
