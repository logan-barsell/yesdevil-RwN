import './videoEdit.css';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AddVideo from './AddVideo';
import DeleteVideo from './DeleteVideo';
import EditVideo from './EditVideo';
import editVideoFields from './editVideoFields';
import { fetchVideos } from '../../../redux/actions';

const VideosEdit = ({ fetchVideos, videos }) => {
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const editVideo = video => {
    
  }

  const deleteVideo = id => {
    
  }

  const currentVideos = videos?.map(video => (
    <div key={video._id} className="vid-container">
      <div className="video embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={video.link}></iframe>
      </div>
      <div className="buttons d-grid">
        <EditVideo video={video} editFields={editVideoFields} onEdit={editVideo}/>
        <DeleteVideo video={video} />
      </div>
    </div>
  ))

  return (
    <>
      <div id="videoEdit">
        <h3>Edit Videos</h3>
        <hr/>
        <AddVideo />
        <div className="currentVideos">
          {currentVideos}
        </div>
      </div>
    </>
  );
};

function mapStateToProps({ videos }) {
  return { videos };
};

export default connect(mapStateToProps, { fetchVideos })(VideosEdit);
