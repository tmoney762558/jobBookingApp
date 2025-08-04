import Authentication from "./components/authentication/Authentication";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";
import JobBoard from "./components/jobBoard/JobBoard";

const App = () => {
  return (
    <div>
      <Authentication></Authentication>
      <BusinessEditor businessId={1} operation="Edit"></BusinessEditor>
      <JobBoard></JobBoard>
    </div>
  );
};

export default App;