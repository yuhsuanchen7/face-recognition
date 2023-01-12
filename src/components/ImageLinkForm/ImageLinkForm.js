import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./ImageLinkForm.css";

function ImageLinkForm(props) {

    const [urlInput, setUrlInput] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setUrlInput(newValue);
    }

    return (
        <div className="uploadSection">
            <p>Upload your pictures to join the face recognition challenge!</p>
            <div className="inputArea">
                <InputGroup className="mb-3">
                    <Form.Control 
                        onChange={handleChange}
                        placeholder="Your picture url"
                        aria-describedby="basic-addon2"
                        value={urlInput}
                    />
                    <Button 
                        variant="dark" 
                        id="button-addon2" 
                        onClick={() => {
                            props.onSubmit(urlInput);setUrlInput("");
                        }}
                    >
                        Detect
                    </Button>
                </InputGroup>
            </div> 
        </div>
    );
}

export default ImageLinkForm;