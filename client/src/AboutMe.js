import React from "react";
import styled from "styled-components";

const AboutMe = () => {
    return (
        <Wrapper> 
        <Title>About Me</Title>
        <Info> Hi! I'm Mackenzie.</Info>
        <Blurb>
            <div>
            I am a recent graduate of Concordia University's Full Stack Web Development Bootcamp.
            </div>
            <div>
            I became interested in web development through a family member, and began to teach myself the basics in January 2022.
            </div>
            <div>
            I am still learning every day, and continuing to grow my portfolio as I go along. 
            </div>
            <div>
                I hope you enjoy taking a look at what I have been able to create in the last few months as a student and enthusiast!
            </div>
        </Blurb>
        </Wrapper>
    )
}

export default AboutMe; 

const Wrapper = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`; 

const Title = styled.div`
font-weight: bold;
`; 

const Info = styled.div``;

const Blurb = styled.div``; 