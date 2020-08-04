import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Services extends Component {
  render() {
    //Matérias
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Capítulos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {' '}
                    <Link to={d.path}>
                      <i className={d.icon} onClick={() => {}}>
                        {' '}
                      </i>
                    </Link>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
