import EmployeeListItem from "./EmployeeListItem";
import pic1 from "./pics/Capture1.PNG";
import pic2 from "./pics/Capture2.PNG";
import pic3 from "./pics/Capture3.PNG";
import pic4 from "./pics/Capture4.PNG";
import pic5 from "./pics/Capture5.PNG";
import pic6 from "./pics/Capture6.PNG";

function EmployeeList(query) {
  let employees = [
    {
      id: 1,
      photo: pic1,
      name: "James King",
      jobTitle: "President and CEO",
      office: 555 - 555 - 555,
      moble: 444 - 444 - 444,
      sms: 333 - 333 - 333,
      email: "james@fakemail.com"
    },
    {
      id: 2,
      photo: pic2,
      name: "Julie Taylor",
      jobTitle: "VP of Marketing",
      office: 851 - 485 - 555,
      moble: 274 - 404 - 444,
      sms: 393 - 333 - 603,
      email: "julie@fakemail.com"
    },
    {
      id: 3,
      photo: pic3,
      name: "Eugene Lee",
      jobTitle: "CFO",
      office: 595 - 555 - 155,
      moble: 437 - 854 - 444,
      sms: 349 - 333 - 313,
      email: "eugene@fakemail.com"
    },
    {
      id: 4,
      photo: pic4,
      name: "Jennifer Williams",
      jobTitle: "VP of Engineering",
      office: 795 - 555 - 105,
      moble: 844 - 644 - 794,
      sms: 303 - 433 - 133,
      email: "jennifer@fakemail.com"
    },
    {
      id: 5,
      photo: pic5,
      name: "Rachel Moore",
      jobTitle: "VP of Sales",
      office: 965 - 435 - 555,
      moble: 384 - 402 - 444,
      sms: 333 - 963 - 333,
      email: "rachel@fakemail.com"
    },
    {
      id: 6,
      photo: pic6,
      name: "Paul Jones",
      jobTitle: "QA Manager",
      office: 397 - 145 - 555,
      moble: 444 - 947 - 462,
      sms: 768 - 458 - 303,
      email: "paul@fakemail.com"
    }
  ];

  let employee_with_query = employees.filter((search) => {
    const searchName = search.name.toLowerCase();
    const query_lower = query.toLowerCase();
    return searchName.includes(query_lower);
  });

  let relevant_employee = employee_with_query.map((item) => {
    return (
      <EmployeeListItem
        name={item.name}
        jobTitle={item.jobTitle}
        photo={item.photo}
      />
    );
  });

  let employee_contact = employee_with_query.map((item) => {
    return (
      <EmployeeListItem
        name={item.name}
        jobTitle={item.jobTitle}
        photo={item.photo}
        office={item.office}
        moble={item.moble}
        sms={item.sms}
        email={item.email}
      />
    );
  });

  return (
    <div className="EmployeeList">
      <div>{relevant_employee}</div>
      <div>{employee_contact}</div>
    </div>
  );
}

export default EmployeeList;
