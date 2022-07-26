import './bioEdit.css';

import React from 'react';
import SecondaryNav from '../../Navbar/SecondaryNav';

const BioEdit = () => {
  return (
    <>
      <SecondaryNav label={"Members"} />
      <div className="container">
        <div className="row">
          <div className="col-lg membersUpdate">
            <form >
              <div className="form-group">
                <label for="formFile" class="form-label">Image</label>
                <div className="fileUpload btn btn-danger">
                  <span>Choose File</span>
                  <input class="form-control upload" type="file" id="formFile" required />
                </div>

              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" type="text" name="name" required />
                {/* <div className="invalid-feedback">
                  Please enter a name!
                </div> */}
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input className="form-control" id="role" name="role" required />
                {/* <div className="invalid-feedback">
                  Please nter a role!
                </div> */}
              </div>
              <div className="form-group">
                <label htmlFor="fbLink">Facebook Link</label>
                <input className="form-control" id="fbLink" name="fbLink"></input>
              </div>
              <div className="form-group">
                <label htmlFor="instaTag">Instagram Tag</label>
                <input className="form-control" id="instaTag" name="instaTag"></input>
              </div>
              <div className="form-group">
                <label htmlFor="snapName">Snapchat Username</label>
                <input className="form-control" id="snapName" name="snapName"></input>
              </div>
              <div className="d-grid gap-2">
                <button className="submitMember btn btn-primary btn-danger" type="submit" value="send">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioEdit;