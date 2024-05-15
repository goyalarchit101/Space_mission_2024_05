import React, { useEffect, useState } from 'react'
import FlightList from './FlightList';

const SpaceMissions = () => {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {

    // defining space api
    const fetchlaunches = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        const data = await response.json();
        setLaunches(data);

      } catch (error) {
        console.error('error fetching launches: ', error)
      }

    }

    fetchlaunches();

  }, []);//empty Dependecy array ensures to run only once





  return (
    <div className="wrapper px-1">
      <div className="d-md-flex align-items-md-center">
        <div className="h3">Space Missions</div>
        <div className="ml-auto d-flex align-items-center views">
          {" "}
          <span className="green-label px-md-2 px-1">428</span>{" "}
          <span className="text-muted">Missions</span>{" "}
        </div>
      </div>

      {/* radio buttons */}
      <div className="d-lg-flex align-items-lg-center pt-2">
        <div className="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-light border">
          {" "}
          <label className="options">
            Most Popular <input type="radio" name="radio" />{" "}
            <span className="checkmark" />{" "}
          </label>{" "}
          <label className="options">
            Cheapest <input type="radio" name="radio" defaultChecked="" />{" "}
            <span className="checkmark" />{" "}
          </label>{" "}
        </div>
      </div>

      
      <section id="sidebar">
        <div className="py-3">
          <h5 className="font-weight-bold">Categories</h5>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
              {" "}
              vegetables{" "}
              <span className="badge badge-primary badge-pill">328</span>{" "}
            </li>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
              {" "}
              Fruits <span className="badge badge-primary badge-pill">
                112
              </span>{" "}
            </li>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
              {" "}
              Kitchen Accessories{" "}
              <span className="badge badge-primary badge-pill">32</span>{" "}
            </li>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
              {" "}
              Chefs Tips{" "}
              <span className="badge badge-primary badge-pill">48</span>{" "}
            </li>
          </ul>
        </div>
      </section>{" "}
      <p className="d-flex flex-wrap m-0">
      {launches.map((launch, index) => {
        return (
          <FlightList key={index} launches={launch} />
        )
      })}

      </p>

    </div>
  )
}

export default SpaceMissions
