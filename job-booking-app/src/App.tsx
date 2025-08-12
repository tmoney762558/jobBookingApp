import Authentication from "./components/authentication/Authentication";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Authentication></Authentication>
      <Dashboard businessId={1}></Dashboard>
    </div>
  );
};

export default App;