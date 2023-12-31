import { Avatar, Grid, Stack, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
const utilButtonStyle = { color: 'gray', fontSize: '18px' };

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
                <ChatBubbleOutlineIcon sx={utilButtonStyle} />
              </Grid>
              <Grid item xs={2}>
                <RepeatIcon sx={utilButtonStyle} />
              </Grid>
              <Grid item xs={2}>
                <FavoriteBorderIcon sx={utilButtonStyle} />
              </Grid>
              <Grid item xs={2}>
                <BookmarkBorderIcon sx={utilButtonStyle} />
              </Grid>
              <Grid item xs={1}>
                <IosShareIcon sx={utilButtonStyle} />
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
