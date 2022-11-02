import React from "react";
import styled from "styled-components";

const AboutMe = () => {
    return (
        <Wrapper> 
        <Title>About Me</Title>
        <Blurb>
        <Info> Hi! I'm Mackenzie.</Info>
            <Intro>
            I am a recent graduate of Concordia University's Full Stack Web Development Bootcamp.
            </Intro>
            <SecondPart>
            I became interested in coding and web development because of the creative potential I saw in the field. 
            As I began to teach myself the basics of HTML and CSS, I saw just how boundless the innovation 
            of web development, web design and UX design could truly be.
            </SecondPart> 
            <ThirdPart>
            Through my educational journey with web development I have become interested in making 
            applications that offer the best user experiences possible. I am now taking the web 
            development skills I have gained and applying them to my new educational journey with UX 
            design. I am looking for opportunities to put my skills to use on projects with similar 
            goals of creating original, thoughtful and unique user experiences.
            </ThirdPart>
            <FourthPart>
            I am still learning every day, and continuing to grow my portfolio as I go along. 
            </FourthPart>
            <FifthPart>
            I hope you enjoy taking a look at what I have been able to create in the last few months as a student and enthusiast!
            </FifthPart>
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
margin-bottom: 10px;
`; 

const Info = styled.div`
margin-bottom: 10px;
`;

const Blurb = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 500px;
`; 

const Intro = styled.div`
margin-bottom: 10px;
`; 

const SecondPart = styled.div`
margin-bottom: 10px;
`; 

const ThirdPart = styled.div`
margin-bottom: 10px;
`; 

const FourthPart = styled.div`
margin-bottom: 10px;
`; 

const FifthPart = styled.div``; 