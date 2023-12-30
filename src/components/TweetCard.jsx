import { Avatar, Grid, Stack, Box, Typography } from '@mui/material';

export const TweetCard = (props) => {
  return (
    <>
      <Grid container sx={{ padding: '10px' }}>
        <Grid item xs={1}>
          <Avatar />
        </Grid>
        <Grid item xs={11} sx={{ paddingLeft: '10px' }}>
          <Stack>
            <Box>
              <span style={{ fontWeight: 'bold' }}>{props.user}</span>
              <span style={{ color: 'gray' }}>{props.userId}</span>
            </Box>
            <Typography>{props.tweet}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
