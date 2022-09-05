import './contactEdit.css';
import React from 'react';

const ContactEdit = () => {
  return (
    <div id="contactEdit" className="container textForm">
        <h3>Update Contact</h3>
        <form>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone #</label>
          <input type="tel" class="form-control" id="phone" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="fb" class="form-label">Facebook</label>
          <input type="text" class="form-control" id="fb" />
        </div>
        <div class="mb-3">
          <label for="ig" class="form-label">Instagram</label>
          <input type="email" class="form-control" id="ig" />
        </div>
        <div class="mb-3">
          <label for="yt" class="form-label">YouTube</label>
          <input type="text" class="form-control" id="yt" />
        </div>
        <div class="mb-3">
          <label for="sc" class="form-label">SoundCloud</label>
          <input type="text" class="form-control" id="sc" />
        </div>
        <div class="mb-3">
          <label for="sp" class="form-label">Spotify</label>
          <input type="text" class="form-control" id="sp" />
        </div>
          <div className="d-flex">
            <button 
              // onClick={handleSubmit}
              type="button" 
              className="btn btn-danger"
              // disabled={updated}
            >Save Changes
              {/* {updated ? 
              <>Update Successful &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </> 
              : 'Save Changes'} */}
            </button>
          </div>
        </form>
      </div>
  );
}

export default ContactEdit;