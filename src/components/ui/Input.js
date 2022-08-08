import styled from "styled-components";
import times from "../../utils/times";

export const StyledInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <InputContainer className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
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
  input {
    flex: 1;
  }
  label {
    text-transform: uppercase;
    font-size: 14px;
  }
`;
