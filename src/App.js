import "./App.css";
import Video from "./Components/Video";
// import axios from "axios";
import React, { useEffect } from "react";
import Response from "./response";
import { db } from "./firebase";
// import dataSet from "./axios";
function App() {
  const data = Response;
  // const { data } = dataSet();
  console.log(data.data.itemList);
  useEffect(() => {
    data.data.itemList.map((video) =>
      db.collection("videos").add({
        url: video.video.cover,
        channel: video.author.nickname,
        description: video.desc,
        song: video.music.title,
        likes: video.stats.diggCount,
        messages: video.stats.commentCount,
        shares: video.stats.shareCount,
      })
    );
  }, [data.data.itemList]);

  return (
    <div className="app">
      <div className="app__videos">
        {data.data.itemList.map((video) => (
          <Video
            url={video?.video.cover}
            channel={video.author.nickname}
            description={video.desc}
            song={video.music.title}
            likes={video.stats.diggCount}
            messages={video.stats.commentCount}
            shares={video.stats.shareCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
