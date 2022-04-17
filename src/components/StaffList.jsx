import React from "react";
import StaffItem from "./StaffItem";

const StaffList = ({ staff }) => {
  return (
    <div>
      {staff.map((staff) => (
        <StaffItem key={staff.id} staff={staff} />
      ))}
    </div>
  );
};

export default StaffList;
