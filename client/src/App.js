import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import { FaAlignRight } from "react-icons/fa";
 const App = () => {
  let name = "example";
 return (
   <div>
     <Navbar />
     <div style={{padding: "5px"}}>
      <h1 style={{fontSize: "3vh"}}>Enter your username: </h1>
      <form onSubmit={(e) => {name = e.target.user.value}}>
        <input type="text" name="user" placeholder='Try "example"' />
        <input type="submit" value="Submit" />
      </form>
     </div>
     <Routes>
       <Route exact path="/" element={<RecordList user={name} />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 export default App;