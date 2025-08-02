import BusinessEditor from "./components/editBusinessDetails/BusinessEditor";

const App = () => {
  return (
    <div>
      <BusinessEditor operation="Edit" businessId={1}></BusinessEditor>
    </div>
  );
};

export default App;