import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lavankishore </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I recently completed my B.Tech in Information Technology.
            <br />
            I am passionate about technology, problem-solving, and continuous learning.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Art Work
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When life gives you bugs, fix them."{" "}
          </p>
          <footer className="blockquote-footer">Lavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
