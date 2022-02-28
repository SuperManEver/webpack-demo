import _ from "lodash";

import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack", "awesomer"], " ");
  element.classList.add("hello");

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
