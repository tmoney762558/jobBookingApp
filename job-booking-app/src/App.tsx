import Authentication from "./components/authentication/Authentication";
import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";

const App = () => {
  return (
    <div>
      <Authentication></Authentication>
      <BusinessEditor operation="Edit" businessId={1}></BusinessEditor>
    </div>
  );
};

export default App;