import styled from "styled-components";
import times from "../../utils/times";

export const StyledInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  tooltipText = "",
  max,
  min = 0,
}) => {
  return (
    <InputContainer className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <div className="tooltipContainer">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          max={max}
          min={min}
        />
        {tooltipText && <span className="tooltipText">{tooltipText}</span>}
      </div>
    </InputContainer>
  );
};

export const TimeSelect = ({ label, name, value, onChange }) => {
  return (
    <InputContainer className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <select name={name} onChange={onChange} value={value}>
        {times.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  label,
  select,
  .tooltipContainer {
    flex: 1;
  }
  input {
    width: 100%;
  }
  label {
    text-transform: uppercase;
    font-size: 14px;
  }

  .tooltipContainer {
    position: relative;
  }

  .tooltipText {
    font-size: 14px;
    visibility: hidden;
    max-width: 240px;
    background-color: #495057;
    color: #f8f9fa;
    text-align: center;
    border-radius: 4px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltipText::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  &:hover .tooltipText,
  input:focus .tooltipText {
    visibility: visible;
    opacity: 1;
  }
`;
