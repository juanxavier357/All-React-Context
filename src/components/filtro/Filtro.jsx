import { useContext, useState } from "react";
import "./index.scss";
import VotacionContext from "../../context/VotacionContext";

export default function Filtro() {
  const [selectedOption, setSelectedOption] = useState("total");
  const { filter } = useContext(VotacionContext)

  const handleCheckboxChange = (e) => {
    const { value } = e.target
    filter(value);
    setSelectedOption(value);
  };

  return (
    <div className="content__filtros">
      <h3>Filtros</h3>
      {["porcentaje", "total", "todos"].map((option) => (
        <label htmlFor={option} key={option}>
          <input
            type="checkbox"
            id={option}
            value={option}
            checked={selectedOption === option}
            onChange={handleCheckboxChange}
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  );
}