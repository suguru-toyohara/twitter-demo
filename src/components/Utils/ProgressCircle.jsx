import { CircularProgress } from '@mui/material';
import './main.css';
import PropTypes from 'prop-types';

export const ProgressCircle = ({ size, value }) => {
  return (
    <>
      <CircularProgress
        variant="determinate"
        sx={{ color: '#CCC' }}
        value={100}
        size={size}
        className="items"
      />
      <CircularProgress variant="determinate" value={value} size={size} className="items" />
    </>
  );
};

ProgressCircle.propTypes = {
  size: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
