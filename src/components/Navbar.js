import PropTypes from "prop-types";
import { React, useState } from "react";
import gear from "../img/gear.svg"
import gearfill from "../img/gear-fill.svg";
const Component = (props) => {
  let [showgear, setgear] = useState(gear);
  let [showmode, setmode] = useState("modal");
  let change = () => {
    if (showgear === gear) {
      setgear(gearfill);
      setmode("show");
    } else {
      setgear(gear);
      setmode("modal");
    }
  };
  
  return (
    <>
      <div id="MyModal" className={`${showmode}   color-black `}>
        <div className="modal-content">
          <span className="open" onClick={change}>
            &times;
          </span>
          <h2>Themes</h2>
          <div id="themes">
            <ul className="themeUl">
              <span
                className={`tli ${props.showcolor} `}
                onClick={props.toggleColor[0]}
              >
                <li>
                  <h3>purple</h3>
                  <img src={gearfill} alt="purple theme" />
                </li>
              </span>
              <span
                className={`tli ${props.showcolor} `}
                onClick={props.toggleColor[1]}
              >
                <li>
                  <h3>gray</h3>
                  <img src={gearfill} alt="gray theme" />
                </li>
              </span>
              <span
                className={`tli ${props.showcolor} `}
                onClick={props.toggleColor[2]}
              >
                <li>
                  <h3>orange</h3>
                  <img src={gearfill} alt="gray theme" />
                </li>
              </span>
              <span
                className={`tli ${props.showcolor} `}
                onClick={props.toggleColor[3]}
              >
                <li>
                  <h3>blue</h3>
                  <img src={gearfill} alt="gray theme" />
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <nav id="navbar" className={`${props.showcolor}`}>
        <div className="logo">{props.title}</div>
        <ul className="ul1">
          <li>
            <a  href="#">Home</a>
          </li>
        </ul>
        <ul className="ul2">
          <li onClick={props.toggle}>
            <img src={props.defUrl} alt="darkmode" id="muf" />
          </li>
          <li onClick={change}>
            <img src={showgear} alt="settings" id="settings"></img>
          </li>
        </ul>
      </nav>
    </>
  );
};
Component.propTypes = {
  title: PropTypes.string.isRequired,
};
Component.defaultProps = {
  title: "set title here",
};
export default Component;
