import React from 'react'
import { Link } from 'react-router-dom';


const FlightList = ({ launches }) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 m-3"> 
        <div className="card">
        <img className="card-img-top" alt="asa" src={launches.links.flickr_images.length > 0 ? launches.links.flickr_images[3] : "https://farm9.staticflickr.com/8638/16512101410_83763eb9ea_o.jpg"} />
          <div className="card-body">
            <h6 className="font-weight-bold pt-1">{launches.mission_name}</h6>
            <div className="text-muted description">
              {launches.launch_site.site_name_long}
            </div>
            <div className="d-flex align-items-center justify-content-between pt-3">
              <div className="d-flex flex-column">
                <div className="h6 font-weight-bold">{launches.launch_success ? 'Yes' : 'No'}</div>
                <div className="text-muted rebate">{launches.launch_year}</div>
              </div>
              <div className="btn btn-primary">
                <Link to={`/${launches.flight_number}`} className="btn btn-primary">
                  {launches.flight_number}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default FlightList