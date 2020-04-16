import React, {useState} from 'react';
//import * as actions from '../actions';
//import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import {GlobalStyle,Container,Grid,AreaBox,ParamBox,TextBox,Text,Button,Img,link,naked} from '../css/style.js';



let Carousel = _props => {

   const [count,setCount] = useState(_props.count);   
   const steps = _props.steps;

    /*
   let handlePrev = _stepId => {
        setCount(count-1);
    };
    let handleNext = _stepId => {
        setCount(count+1);
    };
    */
    const Welcome = () => (
        <AreaBox g={[2,2,3,5]}>
            <Text>
                LETS THE JOURNEY BEGIN!     
            </Text>
        </AreaBox>
    );
    
    const Beerpic = () => (
        <AreaBox g={[2,2,11,5]} style={naked}>
            {steps[count]}
            {_props.components[count]}
        </AreaBox>
    );
    /*
    const PrevButton = () => (
        <Button>
            <div onClick={handlePrev}> 
                PREVIOUS 
            </div>
        </Button>     
    );
    const NextButton = () => (
        <Button>
            <div onClick={handleNext}> 
                NEXT 
            </div>
        </Button>
    );
    const ButtonsBox = () => (
        <AreaBox g={[7,2,8,5]} fd="row">
            <PrevButton/>
            <NextButton/>
        </AreaBox>
    );
    */
    const CarouselProcess = () => (
       
                <Beerpic/>
  
    );
    
    return (
        
            <CarouselProcess/>

    );
};

/*
const mapStateToProps = state => ({
  beerPic: state.gallery
});

const mapDispatchToProps = (dispatch, id) => ({
  onLove: id => dispatch(actions.love(id)),
  onHate: id => dispatch(actions.hate(id)),
  onFetchGallery: (() => dispatch(actions.fetchGallery()))()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
*/
export default Carousel;
