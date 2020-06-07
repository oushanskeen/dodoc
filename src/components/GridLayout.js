import React from 'react';
import { Box, Heading, Button } from 'rebass';


export default props => 
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridGap: 3, 
      gridTemplateColumns: 
        'repeat(auto-fit, minmax(128px, 1fr), auto-fit)',
    }}
  >
    <Button>REBASS</Button>
    <Box p={3} color="background" bg="primary">CSS GRID</Box>
  </Box>
