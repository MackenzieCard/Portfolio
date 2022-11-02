import React from "react";
import styled from "styled-components";
import {FiMail} from 'react-icons/fi'; 
import {BsTelephone} from 'react-icons/bs'; 
import {BsGithub} from 'react-icons/bs'; 
import {BsLinkedin} from 'react-icons/bs'; 

const ContactMe = () => {
    return (
        <Wrapper>
        <Title>Contact Me</Title>
        <Email><FiMail/> kenziecard@gmail.com </Email>
        <Phone><BsTelephone/> +1 (514) 299-7324</Phone>
        <GitHub><BsGithub/> github.com/MackenzieCard </GitHub>
        <LinkedIn><BsLinkedin/> linkedin.com/in/mackenziecard/ </LinkedIn>
        </Wrapper>
    )
}

export default ContactMe; 

const Wrapper = styled.div`
font-family: var(--font-body);
`; 

const Title = styled.div`
font-size: 22px;
font-weight: bold;
font-family: var(--font-body);
`; 

const Email = styled.div`

`;

const Phone = styled.div`

`; 

const GitHub = styled.div`

`; 

const LinkedIn = styled.div`

`; 