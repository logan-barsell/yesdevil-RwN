import './showsAccordion.css';
import '../EditPages/Bootstrap/accordion.css';

import React, { Component } from 'react';
class ShowsAccordion extends Component {

  renderSubItems(content) {
    return content.map(({ prefix, value }, index) => {
      return (
        <div key={index}>
          {prefix}
          <span className="subItemVal">
            {value}
          </span>
        </div>
      )
    })
  }

  renderContent() {
    return this.props.items.map((item, index) => {
      console.log(item);

      const { id, venue, poster, date, city, content } = item;
      const headerId = `show_heading${id}`;
      const collapseId = `show_collapse${id}`;


      return (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" id={headerId}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
              <div>
                <div className="coHeader">{date}</div>
                <div className="header">{venue}</div>
                <div className='coHeader'>{city}</div>
              </div>

              <span className="tix btn btn-sm btn-danger">Tickets</span>

            </button>
          </h2>
          <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={headerId} data-bs-parent={`#${this.props.id}`}>
            <div className="accordion-body row">
              <div className="accordion-img col-12 col-sm-6 col-lg-5">
                <img src={poster} className="img-thumbnail" alt='preview' />
              </div>
              <div className="itemInfo col-12 col-sm-6 col-lg-7 center">
                <div className='subhead'>
                  {city}
                </div>
                <div className="content">
                  {this.renderSubItems(content)}
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