import React from "react";

const StaffItem = (props) => {
  return (
    <div className="staff">
      <div className="staff__content">
        <strong>
          {props.staff.id}. {props.staff.name}
        </strong>
        <div>
          Salary: {props.staff.salary}. Phone namber: {props.staff.phone_number}
          . Position: {props.staff.position}
        </div>
      </div>
    </div>
  );
};

export default StaffItem;
