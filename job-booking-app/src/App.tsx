import Authentication from "./components/authentication/Authentication";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";
import JobBoard from "./components/jobBoard/JobBoard";
import JobViewer from "./components/jobViewer/JobViewer";
import MyBusinesses from "./components/myBusinesses/MyBusinesses";

const App = () => {
  return (
    <div>
      <Authentication></Authentication>
      <BusinessEditor businessId={1} operation="Create"></BusinessEditor>
      <MyBusinesses></MyBusinesses>
      <JobBoard></JobBoard>
      <JobViewer></JobViewer>
    </div>
  );
};

export default App;