import { Avatar, Grid, Stack, Box, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import styled from '@emotion/styled';
import { useState } from 'react';
const utilButtonStyle = { fontSize: '20px' };
const StyledSpan = styled.span`
  font-size: 16px;
  vertical-align: -1px;
`;

const TweetUtilButton = ({ valiant, value, ...props }) => {
  const [isHover, SetIsHover] = useState(false);
  const valiant2Icon = (valiant) => {
    switch (valiant) {
      case 'reply':
        return ChatBubbleOutlineIcon;
      case 'retweet':
        return RepeatIcon;
      case 'fav':
        return FavoriteBorderIcon;
      case 'bookmark':
        return BookmarkBorderIcon;
      case 'share':
        return IosShareIcon;
      default:
        return null;
    }
  };
  const valiant2Color = (valiant) => {
    switch (valiant) {
      case 'reply':
        return '#1DA1F2';
      case 'retweet':
        return '#00C06B';
      case 'fav':
        return 'red';
      case 'bookmark':
        return '#1DA1F2';
      case 'share':
        return '#1DA1F2';
      default:
        return null;
    }
  };
  const IconComponent = valiant2Icon(valiant);
  return (
    <>
      <IconButton
        size="small"
        onMouseEnter={() => {
          SetIsHover(true);
        }}
        onMouseLeave={() => {
          SetIsHover(false);
        }}
        {...props}
      >
        {
          <IconComponent
            sx={
              isHover
                ? { color: valiant2Color(valiant), ...utilButtonStyle }
                : { color: 'gray', ...utilButtonStyle }
            }
          />
        }
      </IconButton>
      <StyledSpan style={isHover ? { color: valiant2Color(valiant) } : {}}>{value}</StyledSpan>
    </>
  );
};

TweetUtilButton.propTypes = {
  valiant: PropTypes.string.isRequired,
  value: PropTypes.number,
  onClick: PropTypes.func,
};

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
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>{tweet}</Typography>
            <Grid container columns={9} sx={{ marginTop: '10px' }}>
              <Grid item xs={2}>
                <TweetUtilButton valiant="reply" value={1} />
              </Grid>
              <Grid item xs={2}>
                <TweetUtilButton valiant="retweet" value={21} />
              </Grid>
              <Grid item xs={2}>
                <TweetUtilButton valiant="fav" value={1} />
              </Grid>
              <Grid item xs={2}>
                <TweetUtilButton valiant="bookmark" />
              </Grid>
              <Grid item xs={1}>
                <TweetUtilButton valiant="share" />
              </Grid>
            </Grid>
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
