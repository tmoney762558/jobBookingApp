import Authentication from "./components/authentication/Authentication";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";
import MyBusinesses from "./components/myBusinesses/MyBusinesses";

const App = () => {
  return (
    <div>
      <Authentication></Authentication>
      <BusinessEditor businessId={1} operation="Create"></BusinessEditor>
      <MyBusinesses></MyBusinesses>
    </div>
  );
};

export default App;