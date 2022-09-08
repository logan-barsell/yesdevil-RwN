import React, { useEffect } from 'react';
// import { pictureRows } from './PictureRows';
import { connect } from 'react-redux';
import { fetchMediaImages } from '../../redux/actions';

const Pictures = ({ fetchMediaImages, images }) => {

  useEffect(() => {
    fetchMediaImages();
  }, [fetchMediaImages])

  const renderMediaImages = images.map(image => {
    return (
        <div key={image._id} className="img-container">
          <img src={image.imgLink} alt="media" className="img-thumbnail"/>
        </div>
      // <div key={image._id} className="row justify-content-around align-items-center">
      //   {pictureRow.map(picture => {
      //     return (
      //       <div key={picture} className="col-md-5">
      //         <div className="img-container"><img alt="" className="img-thumbnail" src={picture} /></div>
      //       </div>
      //     );
      //   })}
      // </div>
    );
  });

  return (
    <div id="pictures" className="fadeIn">
      {renderMediaImages}
    </div>
  );
}

function mapStateToProps({ media }) {
  return { images: media };
};

export default connect(mapStateToProps, { fetchMediaImages })(Pictures);