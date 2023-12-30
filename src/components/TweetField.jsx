import { Stack, Grid, Avatar, InputBase, Button, CircularProgress } from '@mui/material';
import { ProgressCircle } from './Utils/ProgressCircle';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Add this line
import { Sleep } from './Utils/Utils';

export const TweetField = ({ inputFunc }) => {
  const [Tweet, SetTweet] = useState('');
  const [isTweeting, SetIsTweeting] = useState(false);
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
              value={Tweet}
              disabled={isTweeting}
            />
            <Grid container>
              <Grid item xs={7} />
              <Grid item xs={2} sx={{ marginTop: '4px', position: 'relative' }}>
                {isTweeting ? (
                  <CircularProgress size={'30px'} />
                ) : (
                  <ProgressCircle value={Math.floor((Tweet.length / 140) * 100)} size={'30px'} />
                )}
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ borderRadius: '20px' }}
                  variant="contained"
                  disabled={Tweet === ''}
                  onClick={() => {
                    const promise = Sleep(1000);
                    SetIsTweeting(true);
                    promise.then(() => {
                      inputFunc({
                        user: 'Simeji',
                        userId: '@Simeji1993',
                        tweet: Tweet,
                      });
                      SetTweet('');
                      SetIsTweeting(false);
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
