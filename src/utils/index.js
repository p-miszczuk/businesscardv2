import CALC from "../images/projects-images/calc.jpg";
import RETRO from "../images/projects-images/retro-game.png";
import KS from "../images/projects-images/ks.jpg";
import PM from "../images/projects-images/pm.png";
import SNAKE from "../images/projects-images/snake.jpg";
import CLOCK from "../images/projects-images/clock.jpg";
import PSD from "../images/projects-images/psd.jpg";

const url = process.env.REACT_APP_API_URL;

const getUrl = (imageUrl) => `${url}${imageUrl}`;

export const routes = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "O mnie",
    path: "/about"
  },
  {
    id: 3,
    name: "Projekty",
    path: "/projects"
  },
  {
    id: 4,
    name: "Kontakt",
    path: "/contact"
  }
];
console.log("logo", KS);
export const projects = [
  {
    id: 1,
    name: "Retro Game",
    img: getUrl(RETRO),
    desc:
      "Gra polegająca na numerycznym ułożeniu kwadratów. 10 najlepszych wyników zapisywanych jest za pomocą Firebase.",
    shortDesc: "Gra przeglądarkowa Retro Game.",
    tech: "React, Redux, Firebase, HTML, CSS",
    link: "https://oldgame-2019.firebaseapp.com/",
    github: "https://github.com/p-miszczuk/oldgame"
  },
  {
    id: 2,
    name: "Businesscard",
    img: getUrl(PM),
    desc: "Moja wizytówka w sieci. Wykorzystanie poznanych technologii",
    shortDesc: "Projekt strony internetowej, Moja wizytówka w sieci.",
    tech: "React, JavaScript, HTML, CSS(SCSS)",
    link: "",
    github: ""
  },
  {
    id: 3,
    name: "KS Przedmieście",
    img: getUrl(KS),
    desc: [
      {
        text: [
          "Założeniem było napisanie strony prostej oraz przejrzystej. Zastosowanie poznawanych technologii.",
          "Strona oprócz front-end`u posiada zaplecze back-end`owe z wykorzystaniem PHP oraz MySql. Administrator po zalogowaniu może m.in.:",
          "Aktualnie storna nie jest dostępna"
        ],
        options: [
          "Dodawać/modyfikować/usuwać wpisy",
          "Dodawać/modyfikować/usuwać komentarze",
          "Dodawać/modyfikować/usuwać wyniki meczów (po dodaniu wyniku meczu tabela automatycznie uzupełnia dane)",
          "Tworzyć/modyfikować/usuwać tabelę oraz terminarz",
          "Tworzyć/modyfikować/usuwać mecze następny / poprzedni",
          "Tworzyć/modyfikować/usuwać galerię oraz poszczególne zdjęcia",
          "Dodawać/modyfikować/usuwać informację o piłkarzach"
        ]
      }
    ],
    shortDesc: "Strona Klubu Sportowego Przedmieście Jarosław",
    tech: [
      "HTML5",
      "CSS3(SCSS)",
      "JavaScript",
      "jQuery",
      "Ajax",
      "RWD",
      "PHP",
      "MySql"
    ],
    link: "",
    github: "https://github.com/p-miszczuk/ks"
  },
  {
    id: 4,
    name: "Kalkulaor",
    img: getUrl(CALC),
    desc: "Prosty kalkulator stworzony za pomocą create react app.",
    shortDesc: "Kalkulator napisany w oparciu o React.",
    tech: ["HTML5", "CSS3(SCSS)", "JavaScript", "React", "Bootstrap"],
    link: "",
    github: "https://github.com/p-miszczuk/reactcalc"
  },
  {
    id: 5,
    name: "Snake",
    img: getUrl(SNAKE),
    desc:
      "Gra napisana w oparciu o element HTML5 - Canvas. Minimalna rodzielczość 700px x 500px.",
    shortDesc: "Gra przeglądarkowa Snake.",
    tech: ["HTML5", "CSS3(SCSS)", "JavaScript"],
    link: "https://p-miszczuk.github.io/businesscard/projects/snake.html",
    github: "https://github.com/p-miszczuk/snake"
  },
  {
    id: 6,
    name: "Zegar",
    img: getUrl(CLOCK),
    desc: "Projekt zegara analogowego.",
    tech: ["HTML5", "CSS3(SCSS)", "JavaScript"],
    link: "https://p-miszczuk.github.io/businesscard/projects/zegar.html",
    github: "https://github.com/p-miszczuk/examples/blob/master/zegar.html"
  },
  {
    id: 7,
    name: "PSD to HTM, CSS",
    img: getUrl(PSD),
    desc: "Responsywne zakodowanie pliku PSD w HTML, CSS.",
    tech: ["HTML5", "CSS3(SCSS)", "Bootstrap", "JavaScript", "jQuery"],
    link: "",
    github: "https://github.com/p-miszczuk/psdtohtml"
  }
];
