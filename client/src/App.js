import React, { useState } from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import { FaAlignRight } from "react-icons/fa";
 const App = () => {
  const [name, setName] = useState("example");
  let tmpName;
 return (
   <div>
     <Navbar />
     <div style={{padding: "5px"}}>
      <h1 style={{fontSize: "3vh"}}>Enter your username: </h1>
      <input type="text" placeholder='Try "example"' onChange={(e) => {tmpName = e.target.value;} } />
      <button type="button" onClick={() => {setName(tmpName)}} >Submit</button>
     </div>
     <Routes>
       <Route exact path="/" element={<RecordList user={name} />} />
       <Route path="/edit/:id" element={<Edit user={name} />} />
       <Route path="/create" element={<Create user={name} />} />
     </Routes>
   </div>
 );
};
 export default App;