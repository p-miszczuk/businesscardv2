import React from "react";

const About = () => {
  return (
    <div className="about">
      <header className="about__header">
        <span>?</span>
        <span />
        <h2>O mnie</h2>
      </header>
      <div className="about__description">
        {aboutContent.map(({ id, text }) => (
          <p key={id} className="about__text">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

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

export default About;
