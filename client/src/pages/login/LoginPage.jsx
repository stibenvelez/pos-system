import React from "react";
import styled from "@emotion/styled";
import FormLogin from "../../components/auth/FormLogin";
import img from "./auto.jpg";
import useAuth from '../../hooks/useAuth'

const Background = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
            90deg,
            rgba(27, 27, 27, 0.8) 0%,
            rgba(40, 40, 40, 0.5) 48%
        ),
        url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;



const LoginPage = () => {

    
    return (
        <div>
            <Background className="flex justify-center items-center">
                <FormLogin/>
            </Background>
        </div>
    );
};

export default LoginPage;
