import React from "react";
import CardItems from "./CardItems";
import alarmclock from "./img/alarmclock.png";
import blackjackgame from "./img/blackjackgame.png";
import calculator from "./img/calculator.png";
import colourgenerator from "./img/colourgenerator.png";
import countdowntimer from "./img/countdowntimer.png";
import crudapp from "./img/crudapp.png";
import draganddrop from "./img/draganddrop.png";
import formvalidation from "./img/formvalidation.png";
import leadtracker from "./img/leadtracker.png";
import libraryproject from "./img/libraryproject.png";
import lightbulb from "./img/lightbulb.png";
import notesapp from "./img/notesapp.png";
import paragraphgenerator from "./img/paragraphgenerator.png";
import passwordgenerator from "./img/passwordgenerator.png";
import quizapp from "./img/quizapp.png";
import todolist from "./img/todolist.png";
import toggletheme from "./img/toggletheme.png";
import weatherapp from "./img/weatherapp.png";

export default function Cards() {
  const cardData = [
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Alarm%20Clock/",
      image: alarmclock,
      name: "Alarm Clock",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Blackjack%20Game/",
      image: blackjackgame,
      name: "Blackjack Game",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/CRUD%20App/",
      image: crudapp,
      name: "CRUD App",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Calculator/",
      image: calculator,
      name: "Calculator",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Form%20Validation/",
      image: formvalidation,
      name: "Form Validation",
    },

    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Lead%20Tracker%20Chrome%20Extension/",
      image: leadtracker,
      name: "Chrome Extension",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Weather%20App/",
      image: weatherapp,
      name: "Weather App",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Toggle%20Theme%20Using%20JavaScript/",
      image: toggletheme,
      name: "Toggle Theme",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/To-do%20List/",
      image: todolist,
      name: "To-Do List",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Random%20Password%20Generator/",
      image: passwordgenerator,
      name: "Password Generator",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Random%20Paragraph%20Generator/",
      image: paragraphgenerator,
      name: "Paragraph Generator",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Random%20Color%20Generator/",
      image: colourgenerator,
      name: "Color Generator",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Quiz%20App/",
      image: quizapp,
      name: "Quiz App",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Notes%20App/",
      image: notesapp,
      name: "Notes App",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/New%20Year%20CountDown%20Timer/",
      image: countdowntimer,
      name: "Countdown Timer",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Light%20Bulb%20Project/",
      image: lightbulb,
      name: "Light Bulb Project",
    },

    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Library%20Project/",
      image: libraryproject,
      name: "Library Project",
    },
    {
      link: "https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Drag%20and%20Drop%20Elements/",
      image: draganddrop,
      name: "Drag and Drop Elements",
    },
  ];

  return (
    <div className="py-10 max-w-full">
      <h2 className="text-3xl md:text-4xl pt-10 text-[#102a42] font-bold text-center tracking-widest">
        All Projects
      </h2>
      <div className="w-20 h-1 block m-auto mt-3 bg-[#f0db51]"></div>

      <div className="max-w-full container mt-14 px-5 flex flex-wrap gap-8 justify-center">
        {cardData.map((card) => {
          return (
            <CardItems
              key={card.link}
              image={card.image}
              link={card.link}
              name={card.name}
            />
          );
        })}
      </div>
    </div>
  );
}
