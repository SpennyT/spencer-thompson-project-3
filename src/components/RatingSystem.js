// Importing libraries from material-ui for this app to work
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Assign our rating stars colours for hover and filled states
const StyledRating = withStyles({
  iconFilled: {
    color: '#FFB302',
  },
  iconHover: {
    color: '#aa6c39',
  },
})(Rating);


function CustomizedRatings() {
  return (
    <div className="rating">
      
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={0} 
          precision={1}
        />
      </Box>

    </div>
  );
  
}

export default CustomizedRatings;

