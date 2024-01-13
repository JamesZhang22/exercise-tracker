import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Create() {
 const [form, setForm] = useState({
   exercise: "",
   reps: "",
   weight: "",
   date: "",
 });
 const navigate = useNavigate();
  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
  // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
    await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
    setForm({ exercise: "", reps: "", weight: "", date: "" });
   navigate("/");
 }
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
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
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}