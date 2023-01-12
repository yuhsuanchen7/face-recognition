import React from "react";
import "./FaceRecognition.css";

function FaceRecognition(props) {
    return (
        <div className="faceSection">
            <div className="imageSection">
                <img id="inputImage" alt="" src={props.imageInput} />
                <div 
                    className="bounding-box" 
                    style={{
                        top: props.faceBox.topRow, 
                        right: props.faceBox.rightCol, 
                        bottom: props.faceBox.bottomRow, 
                        left: props.faceBox.leftCol
                        }}>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;