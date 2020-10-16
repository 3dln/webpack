import _ from "lodash";
import "./style.css";
import Logo from './logo.png'

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "Webpack"], " ");
  element.classList.add("hello");

  const logo = new Image()
  logo.src = Logo
  element.appendChild(logo)
  
  return element;
}

document.body.append(component());
