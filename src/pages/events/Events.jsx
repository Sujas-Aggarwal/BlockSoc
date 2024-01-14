import React, { useEffect } from "react";
import "./Events.css";
import Event from "../../components/Event";
import EventsData from "../../Data/EventsData";
import { Link } from "react-router-dom";
function Events({ embeded = false }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let data = EventsData;
  if (embeded) {
    data = data.slice(0, 2);
  }
  let rev = 1;
  return (
    <section id="events" className="events container">
      <div className="wrapper">
        <h1>Events</h1>
        <div className="events-wrapper">
          {data.map((event) => {
            rev = !rev;
            return (
              <Event
                key={event.name}
                isReversed={rev}
                EventName={event.name}
                Description={event.description}
              />
            );
          })}
        </div>
        {embeded && <Link to={"/events"} className="styled-btn">
          See More
        </Link>}
      </div>
    </section>
  );
}

export default Events;
