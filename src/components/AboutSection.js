import React from "react";
import home1 from '../img/home1.png';
//styled components
import styled from 'styled-components';
//import styles components
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles';

const AboutSection = () => {
    return (
        <StyledAbout className="about">
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span> dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>ture.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with a camera"/>
            </StyledImage>
        </StyledAbout>
    )
}

export default AboutSection;