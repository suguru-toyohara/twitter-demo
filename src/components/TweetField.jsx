import { Stack, Grid, Avatar, InputBase, Button } from '@mui/material';
import { ProgressCircle } from './Utils/ProgressCircle';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Add this line

export const TweetField = ({ inputFunc }) => {
  const [Tweet, SetTweet] = useState('');
  return (
    <>
      <Grid container sx={{ padding: '10px' }}>
        <Grid item xs={1} sx={{ paddingTop: '3px' }}>
          <Avatar />
        </Grid>
        <Grid item xs={11} sx={{ padding: '10px' }}>
          <Stack>
            <InputBase
              placeholder="いまどうしてる？"
              multiline
              onChange={(e) => {
                SetTweet(e.target.value);
              }}
            />
            <Grid container>
              <Grid item xs={7} />
              <Grid item xs={2} sx={{ marginTop: '4px', position: 'relative' }}>
                {<ProgressCircle value={Math.floor((Tweet.length / 140) * 100)} size={'30px'} />}
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ borderRadius: '20px' }}
                  variant="contained"
                  disabled={Tweet === ''}
                  onClick={() => {
                    inputFunc({
                      user: 'Simeji',
                      userId: '@Simeji1993',
                      tweet: Tweet,
                    });
                  }}
                >
                  ポストする
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

// Add this block
TweetField.propTypes = {
  inputFunc: PropTypes.func.isRequired,
};
