import { useState } from "react"
import styled from "styled-components"
import { Button, OutlineButton } from "../styled/Button"

const RoolDice = ({currentDice,roleDice}) => {  
  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice} >
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
        </div>
        <p>Click on Dice to roll </p>
        <div className="btn">
        <OutlineButton>Reset Score</OutlineButton>
        <Button>Show Rules</Button>
        </div>
        
    </DiceContainer>
  )
}

export default RoolDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.dice{
    cursor: pointer;
}
.btn{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px
    ;
}
`