import React, {useState} from 'react';
import {GlobalStyle,Container,Grid,AreaBox,ParamBox,TextBox,Text,Button,Img,link,naked} from '../css/style.js';



let Carousel = _props => {

   const [count,setCount] = useState(_props.count);   
   const steps = _props.steps;
    const Beerpic = () => (
        <AreaBox g={[2,2,11,5]} style={naked}>
            {steps[count]}
            {_props.components[count]}
        </AreaBox>
    );
    const CarouselProcess = () => (<Beerpic/>);
    return (<CarouselProcess/>);
};
export default Carousel;
