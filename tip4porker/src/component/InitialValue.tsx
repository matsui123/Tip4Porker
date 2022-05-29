import { useState } from "react";
import { FC } from "react";
import {InitialValueProps, InitialRatio} from '../App';
import * as SC from '../component/initialValueStyled';

type Props = {
    updateInitialValue : (props:InitialValueProps) => void,
    updatedP1: (props:number) => void,
    updatedP2: (props:number) => void,
    setStuck: (props: number) => void,
    updatedRatio: (props: InitialRatio) => void
}
export const InitialValue:FC<Props> = ({updateInitialValue, updatedP1, updatedP2, setStuck ,updatedRatio}) => {
    /**まとめられる */
    const [sb, setSb] = useState<number>(0);
    const [inputStuck, setInputStuck] = useState<number>(0);
    const [hand, setHand] = useState<number>(0);
    const updatedHand = (e: any) => setHand(e.target.value);
    const [magnification, setMagnification] = useState<number>(0);
    const updatedMagnification = (e: any) => setMagnification(e.target.value);
    const [check, setCheck] = useState<string[]>([]);

    const updatedSb = (e: any) => setSb(e.target.value);
    const updatedStuck = (e: any) => setInputStuck(e.target.value);

    const handleCheck = (e: any) => {
        const ch: string = e.target.value;
        check.includes(ch) ? setCheck(che => che.filter(c => c !== ch))
        : setCheck(che => [...che, ch]);
    }

    const setInitialValue = () => {
        const iv = {
            sb: Number(sb),
            bb: Number(sb)*2,
            stuck: Number(inputStuck)
        };
        console.log(iv);
        setStuck(inputStuck);
        updateInitialValue(iv);
        //倍率とハンド数セット
        updatedRatio({
            handNum: hand,
            ratio: magnification
        });

    }
    return(
        <SC.InitialValueContainer>
            {/* TODO:バリデーションかける */}
            <SC.InputContainerFlex>
                    <SC.CheckBox value="ratio" checked={check.includes("ratio")} onChange={handleCheck} />
                    <SC.InputContainerPadding>
                        ハンド数:
                        <SC.SbInput onChange={updatedHand} value={hand} disabled={!check.includes("ratio")} />
                    </SC.InputContainerPadding>
                    <SC.InputContainerPadding>
                        倍率:
                        <SC.SbInput onChange={updatedMagnification} value={magnification} disabled={!check.includes("ratio")} />
                    </SC.InputContainerPadding>
            </SC.InputContainerFlex>
            <SC.InputContainerFlex>
                <SC.InputContainerPadding>
                    SB:
                    <SC.SbInput onChange={updatedSb} value={sb} />
                </SC.InputContainerPadding>
                <SC.InputContainerPadding>
                    STUCK:
                    <SC.SbInput onChange={updatedStuck} value={inputStuck} />
                </SC.InputContainerPadding>
            </SC.InputContainerFlex>
            <SC.InputContainer>
                <SC.StartButton onClick={setInitialValue}>START</SC.StartButton>
            </SC.InputContainer>
        </SC.InitialValueContainer>
    )
}