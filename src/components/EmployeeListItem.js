function EmployeeListItem(props) {
  return (
    <div className="EmployeeListItem">
      <img src={props.photo} />

      <div className="itemName">
        <h3>{props.name}</h3>
        <h4>{props.jobTitle}</h4>
        <h3>{props.office}</h3>
        <h3>{props.mobile}</h3>
        <h3>{props.sms}</h3>
        <h3>{props.email}</h3>
      </div>
    </div>
  );
}

export default EmployeeListItem;
