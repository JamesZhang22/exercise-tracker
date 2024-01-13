import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Record = (props) => (
 <tr>
   <td>{props.record.exercise}</td>
   <td>{props.record.reps}</td>
   <td>{props.record.weight}</td>
   <td>{props.record.date}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
export default function RecordList({user}) {
 const [records, setRecords] = useState([]);
  // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
      if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
      const records = await response.json();
     setRecords(records);
   }
    getRecords();
    return;
 }, [records.length]);
  // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
    const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
  // This method will map out the records on the table
 function recordList() {
   return records.filter((record) => record.user === user).map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
  // This following section will display the table with the records of individuals.
 return (
   <div>
    <h2>Welcome {user}!</h2>
     <h3>Exercise List</h3>
     <Link to="/create">
      <button type="button" >Create</button>
     </Link>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Exercise</th>
           <th>Reps</th>
           <th>Weight</th>
           <th>Date</th>
           <th>Options</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}