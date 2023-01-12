import React, {useState, useEffect} from "react";
import env from "react-dotenv";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import './App.css';
// import { Row, Col } from "react-bootstrap";

function App() {

  const [imageInput, setImageInput] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function CalculateFaceLocation(data) {
    const ClarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: ClarifaiFace.left_col * width,
      topRow: ClarifaiFace.top_row * height,
      rightCol: width - (ClarifaiFace.right_col * width),
      bottomRow: height - (ClarifaiFace.bottom_row * height),
    }
  }

  function DisplayFaceBox(data) {
    setBox(data);
  }

  function ButtonDetect(urlInput) {

    setImageInput(urlInput);

    const private_token = env.YOUR_PERSONAL_TOKEN;

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": urlInput
                  }
              }
          }
      ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + private_token
        },
        body: raw
    };

    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
        .then(response => response.json())
        .then(response => DisplayFaceBox(CalculateFaceLocation(response)))
        // .then(response => console.log(response.outputs[0].data.regions[0].region_info.bounding_box))
        // .then(result => console.log(result))
        .catch(error => console.log(error));
      
  }

  function onRouteChange(routeLink) {
    if (routeLink === "signin" || routeLink === "register") {
      setIsLoggedIn(false);
    } else if (routeLink === "home") {
      setIsLoggedIn(true);
    }
    setRoute(routeLink);
  }

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} routeChange={onRouteChange}/>
      { route === "signin"
      ? <Signin routeChange={onRouteChange}/>
      : (
          route === "register"
          ? <Register routeChange={onRouteChange}/>
          : <div>
              <Rank />
              <ImageLinkForm onSubmit={ButtonDetect} />
              <FaceRecognition imageInput={imageInput} faceBox={box} />
            </div>
        )
      }
    </div>
  );
}

export default App;
