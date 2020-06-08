import React  from "react";
import {
  GlobalStyle,
  Container,
  Grid,
  AreaBox,
  Text,
  TextBox,
  naked,
} from "../css/style.js";

const Home = () => (
    <div>
      <GlobalStyle />
      <Container>
        <Grid>
          <AreaBox g={[2, 2, 6, 4]} fd="column" style={naked}>
            <TextBox h={"100%"}>
              <Text m={"2vmin"}>
                ЧТО-ТО ТУТ ДОЛЖНО БЫТЬ,
              <br />А ПОКА МОЖЕШЬ ПРОЙТИСЬ ПО МЕНЮ
            </Text>
          </TextBox>
        </AreaBox>
      </Grid>
    </Container>
  </div>
);

export default Home;
