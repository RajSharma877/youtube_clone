import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos || !Array.isArray(videos)) {
    return null; // Return null if videos is null or not an array
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id && (
            <>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
