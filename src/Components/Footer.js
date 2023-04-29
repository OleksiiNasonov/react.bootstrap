import React from "react";
import { Container } from "react-bootstrap";
import facebook from "../Images/svg/facebook.svg"
import instagram from "../Images/svg/instagram.svg"
import linkedin from "../Images/svg/linkedin.svg"
import twitter from "../Images/svg/twitter.svg"


const Footer = () => {
    return ( 
        <Container fluid style={{backgroundColor: '#212529', color:'#fff'}}>
            <Container style={{display:'flex', justifyContent:'center', padding:'10px'}}>
                <h3>Web Developer Blog</h3>
            </Container>
            <Container style={{display:'flex', justifyContent:"center", paddingBottom:'10px'}}>
                <a href="https://www.facebook.com" target="blank" >
                    <img style={{width:"36px",marginRight:"25px"}}  alt="" src={facebook}/>
                </a>
                <a href="https://www.instagram.com" target="blank" >
                    <img style={{width:"36px",marginRight:"25px"}}  alt="" src={instagram}/>
                </a>
                <a href="https://www.linkedin.com" target="blank" >
                    <img style={{width:"36px",marginRight:"25px"}}  alt="" src={linkedin}/>
                </a>
                <a href="https://twitter.com" target="blank" >
                    <img style={{width:"36px"}}  alt="" src={twitter}/>
                </a>
                </Container>
        </Container>
    );
}

export default Footer;