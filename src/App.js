import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';

function App() {

  function ButtonDetect(urlInput) {
    console.log(urlInput);   
  }

  return (
    <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm onSubmit={ButtonDetect} />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
