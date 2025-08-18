import { useState } from "react";
import Authentication from "./components/authentication/Authentication";
import Dashboard from "./components/dashboard/Dashboard";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";
import JobBoard from "./components/jobBoard/JobBoard";
import JobViewer from "./components/jobViewer/JobViewer";
import MyBusinesses from "./components/myBusinesses/MyBusinesses";

const App = () => {
  const [businessOperation, setBusinessOperation] = useState("Edit");
  return (
    <div>
      <Authentication></Authentication>
      <BusinessEditor businessId={1} operation={businessOperation} setOperation={setBusinessOperation}></BusinessEditor>
      <MyBusinesses></MyBusinesses>
      <Dashboard businessId={1}></Dashboard>
      <JobBoard></JobBoard>
      <JobViewer businessId={1}></JobViewer>
    </div>
  );
};

export default App;