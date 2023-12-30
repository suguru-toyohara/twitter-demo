import { Box, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

export const ProgressCircle = ({ size, value }) => {
  return (
    <Box sx={{ position: "relative"}}>
      <CircularProgress
        variant="determinate"
        sx={{ color: '#CCC', position: 'absolute' }}
        value={100}
        size={size}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        sx={{ color: 'primary.main', position: 'absolute' }}
      />
    </Box>
  );
};

ProgressCircle.propTypes = {
  size: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
