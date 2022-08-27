import React from 'react';
import { musicVideos, liveVideos, blogVideos } from './VideoDetails';

const Videos = () => {

  const renderVideos = (video) => {
    return (
      <div key={`${video.type}${video.id}`}>
        {video.id === 0 ? null : <hr />}
        <div className="blog-post">
          <div className="title">{video.title}</div>
          <hr />
          <div className="date">{video.date}</div>
          <div className="video embed-responsive embed-responsive-16by9">
            <iframe title={`${video.type}${video.id}`} className="embed-responsive-item" src={video.url} allowFullScreen></iframe>
          </div>
          <div className="yt-api-cont">
            <div className="g-ytsubscribe" data-channelid="UC_jExvqWhRlM-gBt9iEsLxA" data-layout="default" data-count="default"></div>
          </div>
        </div>
      </div>
    );
  };

  const renderMusicVideos = musicVideos.map(video => {
    return renderVideos(video);
  });

  const renderLiveVideos = liveVideos.map(video => {
    return renderVideos(video);
  });

  const renderBlogVideos = blogVideos.map(video => {
    return renderVideos(video);
  });

  return (
    <div className="justify-content-center fadeIn" id="videos">

      <ul className="nav nav-tabs justify-content-center videos-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="mv-tab" data-bs-toggle="tab" data-bs-target="#mv" type="button" role="tab" aria-controls="mv" aria-selected="true">
            Music Videos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="lv-tab" data-bs-toggle="tab" data-bs-target="#lv" type="button" role="tab" aria-controls="lv" aria-selected="false">
            Live Videos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="bv-tab" data-bs-toggle="tab" data-bs-target="#bv" type="button" role="tab" aria-controls="bv" aria-selected="false">
            Blog Videos
          </button>
        </li>
      </ul>


      <div className="tab-content">

        <div id="mv" className="tab-pane fade show active" role="tabpanel" aria-labelledby="mv-tab">
          {renderMusicVideos}
        </div>


        <div id="bv" className="tab-pane fade" role="tabpanel" aria-labelledby="bv-tab">
          {renderBlogVideos}
        </div>

        <div id="lv" className="tab-pane fade" role="tabpanel" aria-labelledby="lv-tab">
          {renderLiveVideos}
        </div>
      </div>

    </div>
  );
};

export default Videos;