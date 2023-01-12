import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
  }
  from 'mdb-react-ui-kit';
import "./Register.css";

function Register(props) {
    return (
        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

            <MDBCard className='bg-glass my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                <div className="register-heading">
                    <h2 className="fw-bold text-black-70 mb-2 text-center">Create New Account</h2>
                </div>

                <MDBInput wrapperClass='mb-4 w-100' label='Name' id='name' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='email-address' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password' type='password' size="lg"/>

                <MDBBtn onClick={() => props.routeChange("home")}>
                    Register
                </MDBBtn>

                <hr className="my-4" />

                <div className="text-center">
                    <p style={{marginBottom: 0}}>Already a member? </p>
                    <MDBBtn color='link' size="sm" onClick={() => props.routeChange("signin")}>Sign in</MDBBtn>
                    <p style={{marginTop: "16px"}}>or sign in with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
                            <MDBIcon fab icon='facebook-f' size="lg"/>
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                            <MDBIcon fab icon='twitter' size="lg"/>
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
                            <MDBIcon fab icon='google' size="lg"/>
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: 'black' }}>
                            <MDBIcon fab icon='github' size="lg"/>
                        </MDBBtn>
                    </div>

                </div>

            </MDBCardBody>
            </MDBCard>

        </MDBCol>
        </MDBRow>

        </MDBContainer>
    )
}

export default Register;