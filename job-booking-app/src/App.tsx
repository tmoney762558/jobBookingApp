import Authentication from "./components/authentication/Authentication";
import CustomerLanding from "./components/customerLanding/CustomerLanding";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";

const App = () => {
  return (
    <div>
      <Authentication></Authentication>
      <BusinessEditor operation="Create"></BusinessEditor>
      <CustomerLanding></CustomerLanding>
    </div>
  );
};

export default App;