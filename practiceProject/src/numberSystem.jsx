import { useState } from "react";
import styled from "styled-components";

const NumberSystem = () => {
  const arraNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  const onNumberSelect = (value) => {
    console.log(selectedNumber);
    setSelectedNumber(value);
  };
  return (
    <NumberContent>
      <div className="flex">
        {arraNumber.map((value, i) => (
          <Box onClick={() => onNumberSelect(value)}>{value}</Box>
        ))}
      </div>
    </NumberContent>
  );
};

export default NumberSystem;

const Box = styled.div`
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  justify-content: center;
`;

const NumberContent = styled.div`
  .flex {
    display: flex;
  }
`;
