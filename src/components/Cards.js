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
  return (
    <div className="py-10 ">
      <h2 className="text-3xl md:text-4xl pt-10 text-[#102a42] font-bold text-center tracking-widest">
        All Projects
      </h2>
      <div className="w-20 h-1 block m-auto mt-3 bg-[#f0db51]"></div>

      <div className="w-full container mt-14 flex flex-wrap gap-8 justify-center">
        <CardItems
          image={alarmclock}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Alarm%20Clock/"
          name="Alarm Clock"
        />
        <CardItems
          image={blackjackgame}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Blackjack%20Game/"
          name="Blackjack Game"
        />
        <CardItems
          image={crudapp}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/CRUD%20App/"
          name="CRUD App"
        />
        <CardItems
          image={calculator}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Calculator/"
          name="Calculator"
        />
        <CardItems
          image={formvalidation}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Form%20Validation/"
          name="Form Validation"
        />
        <CardItems
          image={leadtracker}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Lead%20Tracker%20Chrome%20Extension/"
          name="Chrome Extension"
        />
        <CardItems
          image={weatherapp}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Weather%20App/"
          name="Weather App"
        />
        <CardItems
          image={toggletheme}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Toggle%20Theme%20Using%20JavaScript/"
          name="Toggle Theme"
        />
        <CardItems
          image={todolist}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/To-do%20List/"
          name="To-Do List"
        />
        <CardItems
          image={passwordgenerator}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Random%20Password%20Generator/"
          name="Password Generator"
        />
        <CardItems
          image={paragraphgenerator}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Random%20Paragraph%20Generator/"
          name="Paragraph Generator"
        />
        <CardItems
          image={colourgenerator}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Random%20Color%20Generator/"
          name="Color Generator"
        />
        <CardItems
          image={quizapp}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Quiz%20App/"
          name="Quiz App"
        />
        <CardItems
          image={notesapp}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Notes%20App/"
          name="Notes App"
        />
        <CardItems
          image={countdowntimer}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/New%20Year%20CountDown%20Timer/"
          name="Countdown Timer"
        />
        <CardItems
          image={lightbulb}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Light%20Bulb%20Project/"
          name="Light Bulb Project"
        />
        <CardItems
          image={libraryproject}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Library%20Project/"
          name="Library Project"
        />
        <CardItems
          image={draganddrop}
          link="https://daudarsalan.github.io/HTML-CSS-and-JavaScript-small-projects/Drag%20and%20Drop%20Elements/"
          name="Drag and Drop Elements"
        />
      </div>
    </div>
  );
}
