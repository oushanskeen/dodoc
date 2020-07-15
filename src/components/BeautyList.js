import React from "react";
import { Button, Box, Flex, Text, Card, Heading, Link } from "rebass";

const SimpleCard = () => (
  <Card width={256}>
    <Heading>Card</Heading>
  </Card>
);

const Palette = () => (
  <Flex>
    <Box bg="eight" width={50} height={50} color="zero">
      eight
    </Box>
    <Box bg="seven" width={50} height={50} color="white">
      seven
    </Box>
    <Box bg="six" width={50} height={50} color="black">
      six
    </Box>
    <Box bg="five" width={50} height={50}>
      five
    </Box>
    <Box bg="four" width={50} height={50}>
      four
    </Box>
    <Box bg="three" width={50} height={50}>
      three
    </Box>
    <Box bg="two" width={50} height={50}>
      two
    </Box>
    <Box bg="one" width={50} height={50}>
      one
    </Box>
    <Box bg="zero" width={50} height={50}>
      zero
    </Box>
  </Flex>
);

const Container = () => (
  <Box
    sx={{
      maxWidth: 512,
      m: "auto",
      p: 3
    }}
  />
);

export const DicButton = ({ name }) => (
  <Button bg="two" heigth={"100%"} width={"auto"}>
    {name}
  </Button>
);
const ButtonsBar = () => (
  <>
    <Button bg="two">Button</Button>
    <Button bg="two">Button</Button>
    <Button bg="two">Button</Button>
  </>
);

export const DicHead = ({name}) => (
  <Flex 
    bg="white" 
    width={2 / 3} 
    m={"auto"} 
    p={3}
    justifyContent='center'
    mt={50}
    mb={0}
    color='seven'
  >
    {name}
  </Flex>
);

export const NewDic = ({data}) => (
  <Flex 
    bg="white" 
    width={2 / 3} 
    m={"auto"}
    mt={70}
    py={3}
    pl={3}
    justifyContent='space-between'
    alignItems='center'
    color='seven'
  >
  {console.log("NEWDIC COMPONENT: STARTED")}
    {data[0]}{data[1]}
  {console.log("NEWDIC COMPONENT: SUCCESS")}
  </Flex>
);

export const DicBar = ({ barName, buttonsBar }) => (
  <Flex bg="one" width={2 / 3} m={"auto"} p={0}>
    <Box bg="zero" width={"83%"} p={3}>
      {barName}
    </Box>
    {buttonsBar}
  </Flex>
);

const FlexBox = () => (
  <Flex>
    <Box p={3} width={1 / 2} color="white" bg="blue">
      Flex
    </Box>
    <Box p={3} width={1 / 2} color="white" bg="navy">
      Box
    </Box>
  </Flex>
);
const FlexBoxGrid = () => (
  <Flex mx={-2}>
    <Box width={1 / 2} px={2}>
      <Text p={1} color="background" bg="primary">
        Half
      </Text>
    </Box>
    <Box width={1 / 2} px={2}>
      <Text p={1} color="background" bg="primary">
        Half
      </Text>
    </Box>
  </Flex>
);

export const NavBar = ({ data }) => (
  <Flex 
    px={12} 
    pr={170}
    color="zero" 
    bg="six" 
    alignItems="center"
    justifyContent='flex-start'
  >
    <Text p={30} fontWeight="bold">
      DoDoc
    </Text>
    <Box mx="auto" />
    {data.map(e => (
      <Link
        variant="nav"
        color="zero"
        px={66}
        href={e.path}
        sx={{ "text-decoration": "none" }}
      >
        {e.name}
      </Link>
    ))}
  </Flex>
);

export const BeautyList = () => (
  <>
    <Palette />
    <Flex flexDirection={"column"} p={3}>
      <DicBar barName={"first"} buttonsBar={<ButtonsBar />} />
      <DicBar barName={"first"} buttonsBar={<ButtonsBar />} />
    </Flex>
    <SimpleCard />
    <FlexBoxGrid></FlexBoxGrid>
    <FlexBox>flexbox</FlexBox>
    <Box>BOX</Box>
    <Button bg="two" color="seven">
      Button
    </Button>
    <div>Hello me beauty list</div>
  </>
);
