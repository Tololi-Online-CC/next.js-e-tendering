import Layout from "@/components/contractorLayout";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)


const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Pippes Transportation",
    allDay: true,
    start: new Date(2023, 4, 1),
    end: new Date(2023, 4, 8),
  },
  {
    title: "Pippes Delivery",
    start: new Date(2023, 4, 10),
    end: new Date(2023, 4, 12),
  },
  {
    title: "Project Evaluation With Operator",
    start: new Date(2023, 4, 20),
    end: new Date(2023, 4, 23),
  },
];

export default function Projectpage() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {

    for (let i = 0; i < allEvents.length; i++) {

      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if (
        ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
          (d4 <= d3))
      ) {
        alert("CLASH");
        break;
      }

    }


    setAllEvents([...allEvents, newEvent]);
  }


  const callAlert = () => {
    // Swal.fire({
    //   title: "Add New Event",
    //   text: "Message!",
    //   // icon: 'success',
    //   html: 
    //     '<input id="swal-input1" class="swal2-input" placeholder="Title">' + 
    //     '<h3>Start Date</h3><input type="date" placeholderText="Start Date" class="swal2-input">\n' +
    //     '<h3>End Date</h3><input type="date" placeholderText="End Date" class="swal2-input">',
    //   confirmButtonColor: '#000000',
    // }).then(handleAddEvent);
    MySwal.fire({
      title: "Add New Event",
      html:
        <MyPopUp />,
      showConfirmButton: true,
      confirmButtonColor: '#000000',
    }).then(function isconfirm(confirm){
      if (confirm){
        handleAddEvent()
      }
  })
  }
  const MyPopUp = () => <div>
    <input type="text" placeholder="Add Title" className="swal2-input" />
    <input type="date" className="swal2-input" id="start" />
    <input type="date" className="swal2-input" id="end" />
  </div>
  return (
    <Layout>
      <div className="projects">
        {/* <h1>Projects</h1> */}
        <div className="project-header">
          <h2>Project Calender</h2>
          <button className='add-event-button' onClick={callAlert}>Add Event</button>
        </div>
        {/* <h2>Add New Event</h2> */}
        {/* <div>
          <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
          <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
          <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
          <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
            Add Event
          </button>
        </div> */}

        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" className="calendar" style={{ height: "80vh" }}/>
      </div>
    </Layout>

  );
}

