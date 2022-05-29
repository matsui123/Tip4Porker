import { FC, useState } from 'react';
import * as SC from './actionsStyled';

type Props = {
    updatedP1?: (stuck: number) => void,
    updatedP2?: (stuck: number) => void,
    updatedPot: (stuck: number) => void,
    pot: number,
}

export const Actions:FC<Props> = ({updatedP1, updatedP2, updatedPot, pot}) => {
    const [bet, setBet] = useState<number>(0);
    const updatedBet = (e: any) => {
        const  b:number = e.target.value;
        setBet(b);
    }
    const doBet = (decidedBet?: number) => {
        const numBet = !!decidedBet ? decidedBet : Number(bet);
        updatedPot(numBet);
        updatedP1 ? updatedP1(-numBet) : updatedP2?.(-numBet);
        setBet(0);
    }
    return(
        <>
            <SC.Buttons>
                <SC.Buttons>
                    <SC.BetButton onClick={() => doBet(pot/3)}>1 / 3 POT</SC.BetButton>
                    <SC.BetButton onClick={() => doBet(pot/2)}>1 / 2 POT</SC.BetButton>
                    <SC.BetButton onClick={() => doBet(pot)}>1 POT</SC.BetButton>
                    <SC.BetButton onClick={() => doBet(pot*2)}>2 POT</SC.BetButton>
                    <SC.BetButton onClick={() => doBet(pot*3)}>3 POT</SC.BetButton>
                    <SC.BetInput onChange={updatedBet} value={bet} />
                    <SC.BetButton onClick={() => doBet()}>BET</SC.BetButton>
                </SC.Buttons>
            </SC.Buttons>
        </>
    )
}