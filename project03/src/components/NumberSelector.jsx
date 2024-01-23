import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
  const arraNumber = [1,2,3,4,5,6]
    const displayErrorNumberSelector = (value)=>{
        setSelectedNumber(value);
        setError("");
    }

  return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className="flex">
                {
                arraNumber.map((value,i)=>(
                    <Box 
                    isSelected = {value == selectedNumber}                
                    key={i} onClick={()=>displayErrorNumberSelector(value)}>{value}</Box>        
                ))}

            </div>
            <p>Select Number</p>           
        </NumberSelectorContainer>    
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div `
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 25px;

}

.error{
    color : red;
}
p{
    font-size: 24px;
    font-size: 24px;
}
`


const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
background-color: ${(props) =>   props.isSelected   ? "black":"white"};
color: ${(props) =>   !props.isSelected   ? "black":"white"};

`