import { useEffect } from 'react';

const AnimationScript = () => {
  useEffect(() => {
    const slideright = () => {
      const aboutussection = document.querySelector("#aboutussection");
      const seemoresection = document.querySelector("#seemoresection");
      const plane = document.querySelector("#aboutussection > img.planeimg");

      setTimeout(() => {
        seemoresection.style.zIndex = "999";
      }, 3000);
      aboutussection.style.transform = "translateX(-100%)";
      seemoresection.style.transform = "translateX(0%)";
      seemoresection.style.zIndex = "-1";
      plane.style.transform = "translateX(200%)";
      plane.style.transition = "linear 3.5s";
    };

    const slideleft = () => {
      const aboutussection = document.querySelector("#aboutussection");
      const seemoresection = document.querySelector("#seemoresection");
      const plane = document.querySelector("#aboutussection > img.planeimg");

      aboutussection.style.transform = "translateX(0%)";
      seemoresection.style.transform = "translateX(100%)";
      seemoresection.style.zIndex = "-1";
      plane.style.transform = "translateX(0%)";
      plane.style.transition = "linear 3.5s";
    };

    const seemorebtn = document.querySelector("#seemorebtn");
    const backbtn = document.querySelector("#backbtn");

    if (seemorebtn && backbtn) {
      seemorebtn.addEventListener("click", slideright);
      backbtn.addEventListener("click", slideleft);
    }

    return () => {
      if (seemorebtn && backbtn) {
        seemorebtn.removeEventListener("click", slideright);
        backbtn.removeEventListener("click", slideleft);
      }
    };
  }, []);

  return null;
};

export default AnimationScript;
