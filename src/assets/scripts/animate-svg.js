// Definimos una funcion que ayude a generar la animacion de los distintos paths del SVG
function setSVGAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
  let paths = document.querySelectorAll(".animated-svg path");
  let mode = repeat ? "infinite" : "forwards";
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const length = path.getTotalLength();
    path.style["stroke-dashoffset"] = `${length}px`;
    path.style["stroke-dasharray"] = `${length}px`;
    //                path.style["stroke-width"] = `${strokeWidth}px`;
    //                path.style["stroke"] = `${strokeColor}`;
    //                path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
    path.style["animation-delay"] = `${i * delay}s`;
  }
}
setSVGAnimation(0.05, 2, 0, "ease-in-out", "#ffffff", false);
