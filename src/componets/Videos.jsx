import React from 'react';
import { Grid } from '@mui/material';
import VideoCard from './VideoCard';


const Videos = ({ videos }) => {
  return (
    
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;
