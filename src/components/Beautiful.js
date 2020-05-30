   
  import React from 'react';
  import styled from 'styled-components';
  import { color, space, layout } from 'styled-system';

  const Box = styled.div`
    ${color}
    ${space}
    ${layout}
  `;

  const Beautiful = () => (
    <div>
      <Box 
        color='#fff' 
        bg='blue'
        width={{
          _: 1,
          sm: 1,
          md: 1/2,
          lg: 1/4
        }}
        m={[ 0, 1, 2 ]}
        p={[ 2, 3, 4 ]}
        fontSize={[ 3, 4, 5 ]}
      >
        Tomato
        <div> me beautiful </div>
      </Box>
      
    </div>
  );

  export default Beautiful;

