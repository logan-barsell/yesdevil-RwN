import './showsAccordion.css';
import '../../components/Bootstrap/accordion.css';

import React, { Component } from 'react';
class ShowsAccordion extends Component {

  renderSubItems(content) {
    return content.map(({ prefix, value }, index) => {
      if(value) {
        return (
          <div key={index}>
            {prefix}
            <span className="subItemVal">
              {value}
            </span>
          </div>
        );
      }
    });
  }

  renderContent() {
    return this.props.items.map((item, index) => {
      const { id, venue, poster, date, location, tixlink, content } = item;
      const headerId = `show_heading${id}`;
      const collapseId = `show_collapse${id}`;
      const headerDate = new Date(date).toDateString();

      return (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" id={headerId}>
            <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
            <div className="col-auto"><img className="poster" src={poster} alt="show poster" /></div>
              <div className="row w-100 gx-0 justify-content-between ms-2">
                <div className="col-12 col-sm-6">
                  <div className="coHeader">{headerDate}</div>
                  <div className="header">{venue}</div>
                  <div className='coHeader'>{location}</div>
                </div>
                {tixlink ? 
                  <div className="col-12 col-sm-6 w-auto align-self-center mt-2 mt-sm-0">
                    <a 
                      href={tixlink}
                      onClick={(e) => window.open(e.target.href, '_blank')} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="tix btn btn-sm btn-danger"
                    >Tickets</a>
                  </div>
                  : null
                }
                
              </div>
              

            </div>
          </h2>
          <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={headerId} data-bs-parent={`#${this.props.id}`}>
            <div className="accordion-body row">
              <div className="accordion-img col-12 col-sm-6 col-lg-5">
                <img src={poster} className="img-thumbnail" alt='preview' />
              </div>
              <div className="itemInfo col-12 col-sm-6 col-lg-7 center">
                <div className='subhead'>
                  {venue}
                  <div className="coSubhead">
                    {location}
                  </div>
                </div>
                <div className="content">
                  {this.renderSubItems(content)}
                  {tixlink ? 
                    <a 
                      href={tixlink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="tix btn btn-danger"
                    >Buy Tickets</a>
                    : null
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div className="accordion" id={this.props.id}>
          {this.props.items.length ? this.renderContent() : <h5>No {this.props.title}</h5>}
        </div>
      </>
    );
  }
}



export default ShowsAccordion;