import React from "react";
import {
  GlobalStyle,
  Container,
  Grid,
  AreaBox,
  Text,
  TextBox,
  naked
} from "../css/style.js";
import { Flex, Box } from 'rebass';

const Home = () => (
  <Flex 
    width='100%' 
    height='90vh' 
    bg='zero'
    justifyContent='space-around'
    alignItem='center'
  > 
    <Box bg='zero' height='50px' width='auto' p={5} 
      mt='300px' 
    >
   home
   </Box>
  </Flex>
);

export default Home;
