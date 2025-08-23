import { useState } from "react";
import Authentication from "./components/authentication/Authentication";
import Dashboard from "./components/dashboard/Dashboard";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";
import JobBoard from "./components/jobBoard/JobBoard";
import JobViewer from "./components/jobViewer/JobViewer";
import MyBusinesses from "./components/myBusinesses/MyBusinesses";
import { Route, Routes } from "react-router-dom";
import ChooseYourPath from "./components/chooseYourPath/ChooseYourPath";

const App = () => {
  // All placeholder alerts will be replaced with a custom error/success message component in the future
  // Optimize API calls by deleting data from the frontend instead of refetching (partially implemented)
  const [currentBusinessId, setCurrentBusinessId] = useState(1);
  const [businessOperation, setBusinessOperation] = useState("Edit");
  return (
    <Routes>
      <Route path="/" element={<Authentication></Authentication>}></Route>
      <Route
        path="/chooseYourPath"
        element={<ChooseYourPath></ChooseYourPath>}
      ></Route>
      <Route
        path="/businessEditor"
        element={
          <BusinessEditor
            currentBusinessId={currentBusinessId}
            setCurrentBusinessId={setCurrentBusinessId}
          ></BusinessEditor>
        }
      ></Route>
      <Route
        path="/dashboard"
        element={<Dashboard businessId={currentBusinessId}></Dashboard>}
      ></Route>
      <Route
        path="/myBusinesses"
        element={
          <MyBusinesses
            setCurrentBusinessId={setCurrentBusinessId}
          ></MyBusinesses>
        }
      ></Route>
      <Route
        path="/bookings"
        element={<JobViewer businessId={currentBusinessId}></JobViewer>}
      ></Route>
      <Route path="/jobs/search" element={<JobBoard></JobBoard>}></Route>
    </Routes>
  );
};

export default App;
