import React from "react";
import styled from "styled-components";

const MyProjects = () => {
  return (
    <Wrapper>
      <Title>My Projects</Title>
      <FetchProjectInfo>
        <Info>
          <div>
            Fetch is a full-stack web application dedicated to connecting dog
            owners and their pets with other owners and dogs in their area for
            the purpose of coordinating "play dates" between the dogs. Users can
            edit their profile, post status updates and request, accept or deny
            playdate plans with other users.
          </div>
          <div>
            Technologies Used: Front-end: React.js, JavaScript, CSS Back-end:
            Node.js, Express.js, MongoDB Productivity Tools: Github, Visual
            Studio Code
          </div>
          {/* Find the GitHub repo here: https://github.com/MackenzieCard/Fetch */}
        </Info>
        <img
          src={require("./Images/Final_Project_Screen_Recording_Screenshot.png")}
          height={400}
          width={800}
          alt="Final Project Screenshot"
        />
      </FetchProjectInfo>
      <GroupProjectInfo>
        <img
          src={require("./Images/Group_Project_Recording_Thumbnail.png")}
          height={400}
          width={800}
          alt="Group Project Screenshot"
        />
        <GroupInfo>
        <div> 
        This was our group project for Concordia University's Web Development Bootcamp. It is a wearables e-commerce website built collaboratively between group members. The structure of the project mimicked the agile work environment with daily stand-up meetings with a product manager.
        </div>
        <div>
            Technologies Used
            </div>
            <div>
            Front-end: React.js, JavaScript, CSS
Back-end: Node.js, Express.js, MongoDB
Productivity Tools: Github, Visual Studio Code
        </div>
<div>
    Group members:
    </div>
    <div>
https://www.linkedin.com/in/karlricher/
</div>
<div>
https://github.com/AlexandrosFytilis
</div>
        </GroupInfo>
      </GroupProjectInfo>
    </Wrapper>
  );
};

export default MyProjects;

const Wrapper = styled.div`
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 25px;
`;

const FetchProjectInfo = styled.div`
display: flex;
margin-bottom: 20px;
`;

const Info = styled.div`
font-weight: lighter;
line-height: 40px;
`; 

const GroupProjectInfo = styled.div`
display: flex;
line-height: 40px;
`;

const GroupInfo = styled.div`
font-weight: lighter;
`; 