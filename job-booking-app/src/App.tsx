import Authentication from "./components/authentication/Authentication";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";

const App = () => {
  return (
    <div>
      <Authentication></Authentication>
      <BusinessEditor operation="create" businessId={2}></BusinessEditor>
    </div>
  );
};

export default App;