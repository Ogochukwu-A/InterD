import React, { useState } from "react";


const initialInterns = [
    {
      name: 'Jane Eze',
      picture: '../public/images/jane.jpg',
      info: 'informatics',
      grading: 92,
    },
    {
      name: 'Martina John',
      picture: '../public/images/ith.jpg',
      info: 'Mathematics student.',
      grading: 80,
    },
    {
      name: 'Bridget Ura',
      picture: '../public/images/ruth.jpg',
      info: 'Computer Science.',
      grading: 97,
    },
    {
      name: 'Judith Brown',
      picture: 'wea.jpg',
      info: 'Graphic design student.',
      grading: 98,
    },
    {
      name: 'Inn Johnson',
      picture: 'vic.jpg',
      info: 'Engineering student.',
      grading: 80,
    },
    {
      name: 'Peter Charlk',
      picture: 'ith.jpg',
      info: 'Medicine.',
      grading: 97,
    },
    {
      name: 'Alex Eke',
      picture: '../public/images/Ure.jpg',
      info: 'Pharmacy.',
      grading: 98,
    },
  ];
  
  function InternsList() {
    const [interns, setInterns] = useState(initialInterns);
  
    return (
      //console.log("Ogo", interns),
      <div>
        {interns.map((intern) => (
          <div key={intern.name}>
            <h2>{intern.name}</h2>
            <img src={intern.picture} alt={intern.name} />
            <p>{intern.info}</p>
            <p>Grading: {intern.grading}%</p>
          </div>
        ))}
      </div>
    );
  }
  export default InternsList;

  
  