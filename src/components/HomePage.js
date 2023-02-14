import { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  let employee_table = EmployeeList(searchQuery);

  function testFunction() {
    <h1>Hello</h1>;
  }

  return (
    <div className="HomePage">
      <Header text="Employee Directory" />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {employee_table}
      <a href="#" onClick={testFunction}>
        test
      </a>
    </div>
  );
}
export default HomePage;
