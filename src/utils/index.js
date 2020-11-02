import CALC from "../images/projects-images/calc.jpg";
import RETRO from "../images/projects-images/retro-game.png";
import KS from "../images/projects-images/ks.jpg";
import PM from "../images/projects-images/pm.png";
import SNAKE from "../images/projects-images/snake.jpg";
import CLOCK from "../images/projects-images/clock.jpg";
import PSD from "../images/projects-images/psd.jpg";
import EMAIL from "../images/contact.png";
import PHONE from "../images/phone.png";
import GITHUB from "../images/github.png";

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

export const projects = [
  {
    id: 1,
    name: "Retro Game",
    img: getUrl(RETRO),
    desc:
      "Gra polegająca na numerycznym ułożeniu kwadratów. 10 najlepszych wyników zapisywanych jest za pomocą Firebase.",
    shortDesc: "Gra przeglądarkowa Retro Game.",
    tech: ["React", "Redux", "Firebase", "HTML", "CSS"],
    link: "https://oldgame-2019.firebaseapp.com/",
    github: "https://github.com/p-miszczuk/oldgame"
  },
  {
    id: 2,
    name: "Businesscard",
    img: getUrl(PM),
    desc: "Moja wizytówka w sieci. Wykorzystanie poznanych technologii",
    shortDesc: "Projekt strony internetowej, Moja wizytówka w sieci.",
    tech: ["React", "JavaScript", "HTML", "CSS(SCSS)"],
    link: "",
    github: ""
  },
  {
    id: 3,
    name: "KS Przedmieście",
    img: getUrl(KS),
    desc: {
      text: [
        "Założeniem było napisanie strony prostej oraz przejrzystej. Zastosowanie poznawanych technologii.",
        "Aktualnie storna nie jest dostępna",
        "Strona oprócz front-end`u posiada zaplecze back-end`owe z wykorzystaniem PHP oraz MySql. Administrator po zalogowaniu może m.in.:"
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
    },
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

export const formularFields = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Imię lub nazwa firmy",
    required: true,
    validOptions: { empty: true, minSigns: 3 },
    validMessages: {
      empty: "Wprowadź imię lub nazwę",
      minSigns: "Pole powinno zawierać minimum 3 znaki"
    }
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "E-mail",
    required: true,
    validOptions: { empty: true, includes: "@" },
    validMessages: {
      empty: "Wprowadź e-mail",
      includes: "Email nie zawiera znaku @"
    }
  },
  {
    id: 3,
    name: "subject",
    type: "text",
    placeholder: "Temat wiadomości",
    required: false
  },
  {
    id: 4,
    name: "message",
    type: "textarea",
    placeholder: "Wiadomość",
    required: true,
    validOptions: { empty: true },
    validMessages: { empty: "Nie lubię pustych wiadomości, napisz coś :)))" }
  },
  {
    id: 5,
    name: "send-button",
    type: "submit",
    value: "Wyślij",
    required: false
  }
];

const FORMS_FLAGS = {
  phone: "phone",
  email: "email",
  github: "github"
};

export const contactForms = [
  {
    id: 1,
    name: FORMS_FLAGS.phone,
    text: "697 232 839",
    image: PHONE,
    link: "tel:+48697232839",
    target: "_self"
  },
  {
    id: 2,
    name: FORMS_FLAGS.email,
    text: "piotr.miszczuk@interia.pl",
    image: EMAIL,
    link: "mailto:piotr.miszczuk@interia.pl",
    target: "_self"
  },
  {
    id: 3,
    name: FORMS_FLAGS.github,
    text: "p-miszczuk",
    image: GITHUB,
    link: "https://github.com/p-miszczuk",
    target: "_blank"
  }
];
