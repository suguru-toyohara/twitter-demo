import { Avatar, Grid, Stack, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const TweetCard = ({ user, userId, tweet }) => {
  return (
    <>
      <Grid container sx={{ padding: '10px' }}>
        <Grid item xs={1}>
          <Avatar />
        </Grid>
        <Grid item xs={11} sx={{ paddingLeft: '10px' }}>
          <Stack>
            <Box>
              <span style={{ fontWeight: 'bold' }}>{user}</span>
              <span style={{ color: 'gray' }}>{userId}</span>
            </Box>
            <Typography>{tweet}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

TweetCard.propTypes = {
  user: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired,
};
