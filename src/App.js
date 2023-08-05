import Alert from "./components/Alert";
import muf from "./img/muf.svg"
import moonfill from "./img/moonfill.svg"
import "./App.css";
import Form from "./components/Form";
import Component from "./components/Navbar";
import { useState } from "react";

     function App() {
      const [dark, setdark] = useState("light");
      const [defUrl, setUrl] = useState(muf);
      const [modeform, setform] = useState("darkform");
      const [showalert, setalert] = useState(null);
      const [showcolor, setcolor] = useState(null);
      
      const toggleColor = [
        () => {
          setcolor("purple");
        },
        () => {
          setcolor("gray");
        },
        () => {
          setcolor("orange");
        },
        () => {
          setcolor("blue");
        },
      ];
     
      const toggleMode = () => {
        if (dark === "light") {
          setdark("dark");
          setUrl(moonfill);
          setform("lightform");
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
          document.title = "TextUtils darkMode";
          setalert({
            message: "dark mode",
            type: "color-black",
          });
          setTimeout(() => {
            setalert(null);
          }, 1500);
        } else {
          setdark("light");
          setUrl(muf);
          setform("darkform");
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          document.title = "TextUtils lightMode";
          setalert({
            message: "light mode",
            type: "bg-black",
          });
          setTimeout(() => {
            setalert(null);
          }, 1500);
        }
      };
  

      return (
        <div>
          <div>
            <Component
              title="TEXT-UTILS"
              mode={dark}
              toggle={toggleMode}
              defUrl={defUrl}
              showcolor={showcolor}
              toggleColor={toggleColor}
            />
            <Alert alert={showalert} />

            <Form
              modeform={modeform}
              toggleColor={toggleColor}
              showcolor={showcolor}
              mode={dark}
            />
          </div>
        </div>
      );
    };

export default App;
