import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background:white;
  }
`;
const Container = styled.div`
    width:100vw;
    height:100vh;
`; 
const Grid = styled.div`
    display:grid;
    grid-template-columns: 5% repeat(3,30%) 5%;
    grid-template-rows: 2.5vh repeat(8,11.9%) 2.5vh;
    width:100%;
    height:100%;
    background:white;
`;
const AreaBox = styled.div`
    display:flex;
    flex-direction:${p=> p.fd || "column"};
    grid-area:${p=> p.g[0]+"/"+p.g[1]+"/"+p.g[2]+"/"+p.g[3]};
    justify-content:center;
    align-items:center;
    border:${p=> p.b || "0.5px solid black"};
    padding:0px;
    overflow-wrap:normal;
    background:White;
`;
const ParamBox = styled.div`
    display:flex;
    flex-direction:${p=> p.fd || "row"};
    width:${p => p.w || '100%'};
    height:${p => p.h || '100%'};
    justify-content:center;
    align-items:center;
    overflow-wrap:normal;
    //overflow:scroll;
`;
const Text = styled.div`
    margin:${p => p.m};
`;
const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:1vmin;
    padding:5vmin;
    width:30vw;
    border:0.5vmin solid DarkSlateGrey;    
`;
const Img = styled.img`
    width:auto;
    height:80%;
`;
const TextBox = styled(ParamBox)`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    height:${p => p.h || "66%"};
    justify-content:flex-start;
    align-items:flex-start;
    font-size:1rem;
    margin:1vmin;
    //overflow:scroll;
`;
const Input = styled.input`
    color: black;
    border: 1px solid darkGrey;
    margin: 0 0 5px 0;
    width: 300%;
    background-color: lightGrey;
        
    &:hover & {
        background-color: white;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }

`

const Selectable = styled.b`
    &:hover {
        background-color: yellow;
    }
`
const link = {
  'color': 'black',
  'text-decoration': 'none'
};
const ghost = {
  'color': 'grey',
  'opacity': '50%'
};
const naked = {
  'border': '0px',
};

const NavbarDropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    opacity:90%;
    min-width: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 16px;
    z-index: 1;
`;

const NavbarDropdown = styled.div`
position: relative;
display: inline-block;
&:hover ${NavbarDropdownContent} {
  display: block;
}
`;


export {
    GlobalStyle,NavbarDropdown,NavbarDropdownContent,Container,Grid,AreaBox,ParamBox,TextBox,Input,Text,Button,Img,link,naked,Selectable,ghost
}
