import axios from "axios";
import React, { useState } from "react";
import StaffList from "../components/StaffList";
import GreenButton from "../components/UI/button/GreenButton";
import StaffService from "../API/StaffService";

const About = () => {
  const [staff, setStaff] = useState([]);
  async function fetchStaff() {
    const response = await StaffService.getAll();
    setStaff(response.data);
    console.log(response.data);
  }
  return (
    <div>
      <h1>About</h1>
      <GreenButton onClick={fetchStaff}>get staff</GreenButton>
      <StaffList staff={staff} />
    </div>
  );
};

export default About;
