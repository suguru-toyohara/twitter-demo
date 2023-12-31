import { Stack, Grid, Avatar, Input, Button, CircularProgress } from '@mui/material';
import { ProgressCircle } from './Utils/ProgressCircle';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Add this line
import { Sleep } from './Utils/Utils';
import styled from 'styled-components';

const AbsolutePositionDiv = styled.div`
  position: absolute;
  left: 30%;
`;

export const TweetField = ({ inputFunc }) => {
  // state hooks
  const [Tweet, SetTweet] = useState('');
  const [isTweeting, SetIsTweeting] = useState(false);

  // ツイートをポストする関数
  const PostTweet = async () => {
    SetIsTweeting(true);
    await Sleep(1000);
    inputFunc({ user: 'Simeji', userId: '@Simeji1993', tweet: Tweet });
    SetTweet('');
    SetIsTweeting(false);
  };

  return (
    <>
      <Grid container sx={{ padding: '10px' }}>
        <Grid item xs={1} sx={{ paddingTop: '3px' }}>
          <Avatar />
        </Grid>
        <Grid item xs={11} sx={{ padding: '10px' }}>
          <Stack>
            <Input
              placeholder="いまどうしてる？"
              multiline
              onChange={(e) => {
                SetTweet(e.target.value);
              }}
              value={Tweet}
              disabled={isTweeting}
              error={Tweet.length > 140}
              sx={{ fontSize: '20px' }}
              onKeyDown={(e) => {
                // Ctrl + Enterでポスト
                if (
                  e.key === 'Enter' &&
                  (e.ctrlKey || e.metaKey) &&
                  Tweet !== '' &&
                  !isTweeting &&
                  Tweet.length <= 140
                ) {
                  PostTweet();
                }
              }}
              disableUnderline
            />
            <Grid container>
              <Grid item xs={7} />
              <Grid item xs={2} sx={{ marginTop: '4px', position: 'relative' }}>
                <AbsolutePositionDiv>
                  {isTweeting ? (
                    <CircularProgress size={'30px'} />
                  ) : (
                    <ProgressCircle value={Math.floor((Tweet.length / 140) * 100)} size={'30px'} />
                  )}
                </AbsolutePositionDiv>
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ borderRadius: '20px' }}
                  variant="contained"
                  disabled={Tweet === '' || isTweeting || Tweet.length > 140}
                  onClick={() => {
                    PostTweet();
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
