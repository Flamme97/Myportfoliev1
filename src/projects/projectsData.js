import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Portfolie",
    image: projectOne,
    description: (
      <>
        <p>
          My Portfolie
        </p>
      </>
    ),
    github: "https://github.com/flamme97",
    demo: "https://netlify.com",
  },
  2: {
    title: "RPG Game Javascript,css and html",
    image: projectTwo,
    description: (
      <>
        <p>
          RPG Game in Javascript
        </p>
      </>
    ),
    github: "https://github.com/Flamme97/RPGgame",
    demo: "https://netlify.com",
  },
  3: {
    title: "First app ",
    image: projectThree,
    description: (
      <>
        <p>
          first browser
        </p>
      </>
    ),
    github: "https://github.com/Flamme97/firstWebPage",
    demo: "https://netlify.com",
  },
};

export default projects;