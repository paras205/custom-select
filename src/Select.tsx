import React from "react";
import Select, { SingleValue, ActionMeta } from "react-select";
import { MyOptionType } from "./types";

interface ISelectProps {
  options: MyOptionType[];
  onChange:
    | ((
        newValue: SingleValue<MyOptionType>,
        actionMeta: ActionMeta<MyOptionType>
      ) => void)
    | undefined;
}

const CustomSelect: React.FC<ISelectProps> = ({ options, onChange }) => {
  return <Select options={options} isMulti={false} onChange={onChange} />;
};

export default CustomSelect;
