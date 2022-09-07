import "./App.css";
import Counter from "./components/Counter/Counter";
import CustomForm from "./components/CustomForm/CustomForm";
import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  return (
    <div className="App">
      <Counter />
      <CustomForm />
    </div>
  );
}

export default App;
