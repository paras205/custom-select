import { useState } from "react";
import Select from "./Select";
import { MyOptionType } from "./types";
import { OnChangeValue } from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const App: React.FC = () => {
  const [selected, setSelected] = useState<MyOptionType[]>([]);
  const handleChange = (val: OnChangeValue<MyOptionType, false>) => {
    if (val) {
      setSelected([...selected, val]);
    }
  };
  return (
    <div className="App">
      <Select options={options} onChange={handleChange} />
    </div>
  );
};

export default App;
