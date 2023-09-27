import React from "react";
import { Link } from "react-router-dom";
import nehaImage from "../Images/neha.png";
import gordenImage from "../Images/gorden.png";
import persisImage from "../Images/persis1.png";
import julianImage from "../Images/julian.png";
import "./About.css";

const allMembers = [
  {
    name: "Neha",
    lastname: "Mehta",
    role: "frontend developer",
    image: nehaImage,
    like: "I enjoy crafting solid and scalable frontend products, ensuring a seamless user experience.",
    url: "/about/neha",
    github: "https://github.com/login",
    linkedin: "hhttps://www.linkedin.com/login",
    twitter: "https://twitter.com/login",
    whatsapp: "https://wa.me/1234567890",
  },
  {
    name: "Gorden",
    lastname: "Zöller",
    role: "frontend developer",
    image: gordenImage,
    like:"Crafting solid and scalable frontend products with a focus on delivering exceptional user experiences is my passion.",
    url: "/about/gorden",
    github: "https://github.com/login",
    linkedin: "hhttps://www.linkedin.com/login",
    twitter: "https://twitter.com/login",
    whatsapp: "https://wa.me/1234567890",
  },
  {
    name: "Persis",
    lastname: "Davis",
    role: "frontend developer",
    image: persisImage,
    like:"My goal is to craft frontend products that are solid, scalable, and provide an excellent user experience.",
    url: "/about/persis",
    github: "https://github.com/login",
    linkedin: "hhttps://www.linkedin.com/login",
    twitter: "https://twitter.com/login",
    whatsapp: "https://wa.me/1234567890",
  },
  {
    name: "Julian",
    lastname: "Hentzen",
    role: "frontend developer",
    image: julianImage,
    like:"Creating frontend products that are both solid and scalable, while prioritizing a great user experience, drives my work.",
    url: "/about/julian",
    github: "https://github.com/login",
    linkedin: "hhttps://www.linkedin.com/login",
    twitter: "https://twitter.com/login",
    whatsapp: "https://wa.me/1234567890",
  },
];
export default function About() {
  return (
    <div className="about-background">
      <div className="about-page">
        <h2 className="team-titel">Who We Are</h2>
        <p className="text-para">
          We are a team of four enthusiastic DCI (Digital Career Institute)
          students, passionate about both literature and technology.
          Collaborating on a project, we've united our love for the Game of
          Thrones universe and our skills in React to construct an engaging
          online bookstore.
        </p>

        <h3 className="our-team">Meet Our Team:</h3>

        <ul className="team-list">
          {allMembers.map((member) => {
            return (
              <li>
                <Link to={member.url} state={member}>
                  <img className="profile-img" src={member.image} alt="" />
                  <p>{member.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>

        <h2>Our Mission</h2>

        <p className="text-para">
          To immerse readers in the captivating world of Westeros and beyond, by
          providing an exceptional collection of Game of Thrones books and
          related literary works.
        </p>

        <h2>Our Story</h2>
        <p className="text-para">
          Our journey began with a shared passion for the works of George R.R.
          Martin. Four book enthusiasts joined forces, envisioning a platform
          that celebrates the intricate tales woven in the Game of Thrones
          universe.
        </p>

        <h2>Our Evolution</h2>
        <p className="text-para">
          From humble beginnings, we've evolved into a dedicated team, using
          React to create a seamless and engaging online bookstore for fellow
          enthusiasts. Our journey has been marked by learning, growth, and the
          excitement of bringing the world of Westeros to life online.
        </p>

        <h2>Our "Aha!" Moment</h2>
        <p className="text-para">
          The pivotal moment for us was when we realized the immense potential
          of combining our technical skills with our love for storytelling. This
          realization fueled our determination to create a unique platform where
          fans can explore the vast realm of Game of Thrones through literature.
        </p>

        <h2>Our Audience</h2>
        <p className="text-para">
          We cater to avid readers, fantasy enthusiasts, and anyone seeking an
          unforgettable adventure through the pages of epic fantasy novels. Our
          platform is a haven for those eager to delve into the intrigues of
          Westeros and its characters.
        </p>

        <h2>What We Offer</h2>
        <p className="text-para">
          We offer an extensive selection of Game of Thrones books, novellas,
          and related literary works. Our curated collection ensures that fans
          have access to the entire epic, experiencing the world of Westeros in
          all its glory.
        </p>

        <h2>Our Values</h2>
        <p className="text-para">
          At our core, we value authenticity, integrity, and a deep respect for
          the art of storytelling. We are committed to delivering exceptional
          experiences to our community, fostering a love for literature, and
          preserving the magic of George R.R. Martin's creation.
        </p>
      </div>
    </div>
  );
}
