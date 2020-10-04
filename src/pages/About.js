import React from "react";
import Description from "../components/Description";
import Technologies from "../components/Technologies/Technologies";
import HTML from "../images/html5-logo.svg";
import CSS from "../images/css3-logo.svg";
import JS from "../images/javascript-logo.svg";
import REACT from "../images/react-logo.svg";
import GIT from "../images/git-logo.svg";
import RWD from "../images/rwd-logo.svg";
import PHP from "../images/php-logo.svg";
import MYSQL from "../images/mysql-logo.svg";
import PHOTO from "../images/photoshop-logo.svg";
import NODE from "../images/node-logo.svg";
import BOOTSTRAP from "../images/bootstrap-logo.svg";
import JQUERY from "../images/jquery-logo.svg";
import AJAX from "../images/ajax-logo.svg";
import REDUX from "../images/redux-logo.svg";
import SASS from "../images/sass-logo.png";
import MATERIAL from "../images/material-ui-logo.svg";
import CYPRESS from "../images/cypress-logo.svg";

const url = process.env.REACT_APP_API_URL;

const About = () => (
  <section className="about">
    <header className="about__header">
      <span>?</span>
      <span />
      <h2>O mnie</h2>
    </header>
    <Description content={aboutContent} />
    <Technologies stack={stack} />
  </section>
);

const aboutContent = [
  {
    id: 1,
    text: `Jestem wesołym, otwartym na nowe wyzwania człowiekiem. Nie lubię nudy i bezczynnego siedzenia. Pasjonuję się majsterkowaniem, koszykówką, podróżami oraz grą na giełdzie.`
  },
  {
    id: 2,
    text: `Moja droga z informatyką rozpoczęła się na studiach. Zainteresowałem się tworzeniem stron internetowych oraz programowaniem aplikacji na telefony komórkowe - głównie w Java ME. Życie, głównie ze względów rodzinnych, potoczyło się jednak w taki sposób, że podejmowałem inne prace. Często bywało tak, że miałem pracę stałą a po niej inne zajęcia np. tworzyłem proste strony internetowe, byłem copywriterem, zajmowałem się towarowaniem sklepów internetowych czy też uzupełnianiem baz danych na rożnych portalach. Współpracowałem z takimi markami jak 90minut.pl, nowiny24.pl. Sporo doświadczenia dały mi prace związane z administrowaniem stron, czy też sklepów internetowych. Poznałem takie środowiska jak WordPress czy Prestashop.`
  },
  {
    id: 3,
    text: `Od ponad roku pracuję w firmie React Poland z siedzibą w Gliwicach. Poszerzając swoją wiedzę korzystam z różnych kursów internetowych, youtube, forów oraz z doświadczenia moich kolegów.`
  }
];

const stack = {
  good: [
    {
      id: 1,
      name: "HTML5",
      img: `${url}${HTML}`
    },
    {
      id: 2,
      name: "CSS3",
      extra: [
        {
          id: 1,
          name: "SASS (SCSS)",
          img: `${url}${SASS}`,
          top: 0,
          left: 0
        }
      ],
      img: `${url}${CSS}`
    },
    {
      id: 3,
      name: "JavaScript",
      extra: [
        {
          id: 1,
          name: "AJAX",
          img: `${url}${AJAX}`,
          top: 0,
          left: 0
        },
        {
          id: 2,
          name: "jQuery",
          img: `${url}${JQUERY}`,
          top: "130px",
          right: "-10px"
        }
      ],
      img: `${url}${JS}`
    },
    {
      id: 4,
      name: "React",
      extra: [
        {
          id: 1,
          name: "Redux",
          img: `${url}${REDUX}`,
          top: "-10px",
          left: "0"
        },
        {
          id: 2,
          name: "Material UI",
          img: `${url}${MATERIAL}`,
          top: "45px",
          left: "-20px"
        },
        {
          id: 3,
          name: "Bootstrap",
          img: `${url}${BOOTSTRAP}`,
          top: "100px",
          right: "0px"
        },
        {
          id: 4,
          name: "Cypress",
          img: `${url}${CYPRESS}`,
          top: "150px",
          left: "-5px"
        }
      ],
      img: `${url}${REACT}`
    },
    {
      id: 5,
      name: "Git",
      img: `${url}${GIT}`
    },
    {
      id: 6,
      name: "RWD",
      img: `${url}${RWD}`
    }
  ],
  basic: [
    {
      id: 1,
      name: "Node",
      img: `${url}${NODE}`
    },
    {
      id: 2,
      name: "PHP",
      img: `${url}${PHP}`
    },
    {
      id: 3,
      name: "MySql",
      img: `${url}${MYSQL}`
    },
    {
      id: 4,
      name: "Photoshop",
      img: `${url}${PHOTO}`
    }
  ]
};

export default About;
