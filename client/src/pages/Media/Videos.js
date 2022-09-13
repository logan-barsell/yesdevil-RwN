import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../redux/actions';
import Video from './Video';

const videoCount = 4;
const Videos = ({ fetchVideos, videos }) => {
  const [category, setCategory] = useState('all');
  const [limit, setLimit] = useState(videoCount);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleChange = selected => {
    setCategory(selected);
  }

  const seeMoreVids = () => {
    setLimit(limit + videoCount);
  }

  const filteredVideos = videos?.filter(video => category !== 'all' ? video.category === category : true);
  
  return (
    <div className="justify-content-center fadeIn" id="videos">
      <div className="selectCategory">
        <select defaultValue="all" onChange={(e) => handleChange(e.target.value)} className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
          <option disabled>Select Category</option>
          <option value="all">All Videos</option>
          <option value="musicVids">Music Videos</option>
          <option value="liveVids">Live Performances</option>
          <option value="vlogs">Vlogs</option>
        </select>
      </div>  
      <hr />
      <div className="videos-container">
        {filteredVideos
          .slice(0, limit)
          .map(video => (
            <Video key={video._id} video={video} />
          ))}
      </div>
      {limit < filteredVideos.length &&
        <div className="d-grid see-more">
          <button onClick={seeMoreVids} className="btn btn-danger">Load More Videos</button>
        </div>
      }
      {filteredVideos.length === 0 && <h4 className="noVids">No Videos</h4>}
    </div>
  );
};

function mapStateToProps({ videos }) {
  return { videos };
};

export default connect(mapStateToProps, { fetchVideos })(Videos);