import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const FlightDeatils = () => {

  const { flight_id } = useParams();
  const [flightDetail, setflightDetail] = useState([]);

  useEffect(() => {

    // defining space api
    const fetchlaunches = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/' + flight_id);
        const data = await response.json();
        setflightDetail(data);

      } catch (error) {
        console.error('error fetching launches: ', error)
      }

    }

    fetchlaunches();

  }, []);//empty Dependecy array ensures to run only once

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
                >
                  <img className="card-img-top" alt="asa" src={
                    flightDetail?.links?.flickr_images && flightDetail.links.flickr_images.length > 3
                      ? flightDetail.links.flickr_images[3]
                      : "https://farm9.staticflickr.com/8638/16512101410_83763eb9ea_o.jpg"
                  }
                  style={{ height: '80vh', width: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </a>
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  {flightDetail.details}
                </h4>
                <div className="row">
                  <dt className="col-3">Success:</dt>
                  <dd className="col-9">{flightDetail?.launch_success ? 'Yes' : 'No'}</dd>
                  <dt className="col-3">Year</dt>
                  <dd className="col-9">{flightDetail.launch_year}</dd>
                  <dt className="col-3">Wikipedia</dt>
                  <dd className="col-9">
                    {flightDetail?.links?.wikipedia && (
                      <a href={flightDetail.links.wikipedia} target="_blank" rel="noopener noreferrer">
                        {flightDetail.links.wikipedia}
                      </a>
                    )}
                  </dd>
                  <dt className="col-3">YouTube:</dt>
                  <dd className="col-9">
                    {flightDetail?.links?.video_link && (
                      <a href={flightDetail.links.video_link} target="_blank" rel="noopener noreferrer">
                        {flightDetail.links.video_link}
                      </a>
                    )}
                  </dd>
                </div>
                <hr />
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}

export default FlightDeatils