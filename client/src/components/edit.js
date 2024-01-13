import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 export default function Edit({user}) {
 const [form, setForm] = useState({
   exercise: "",
   reps: "",
   weight: "",
   date: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
  useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
      if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
      const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
      setForm(record);
   }
    fetchData();
    return;
 }, [params.id, navigate]);
  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
  async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     user: form.user,
     exercise: form.exercise,
     reps: form.reps,
     weight: form.weight,
     date: form.date,
   };
    // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
    navigate("/");
 }
  // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
      <div className="form-group">
         <label htmlFor="exercise">Exercise</label>
         <input
           type="text"
           className="form-control"
           id="exercise"
           value={form.exercise}
           onChange={(e) => updateForm({ exercise: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="reps">Reps</label>
         <input
           type="text"
           className="form-control"
           id="reps"
           value={form.reps}
           onChange={(e) => updateForm({ reps: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="weight">Weight</label>
         <input
           type="text"
           className="form-control"
           id="weight"
           value={form.weight}
           onChange={(e) => updateForm({ weight: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="date">Date</label>
         <input
           type="text"
           className="form-control"
           id="date"
           value={form.date}
           onChange={(e) => updateForm({ date: e.target.value })}
         />
       </div>
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}