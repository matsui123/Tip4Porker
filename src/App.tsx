import * as SC from './styled/porkerStyled';
import { Actions } from './component/Actions';
import { useState, useEffect } from 'react';
import { InitialValue } from './component/InitialValue';
import { useCallback } from 'react';
import { ModalAllValue } from './component/ModalAllValue';

export type InitialValueProps = {
  sb: number,
  bb: number,
  stuck: number
};

export type InitialRatio = {
  handNum: number,
  ratio: number,
}

const App = () => {

  const [initialValue, setInitialValue] = useState<InitialValueProps>({sb: 0, bb: 0, stuck: 0} as InitialValueProps);
  const [stuck, setStuck] = useState<number>(0);
  const updateInitialValue = useCallback((prop:InitialValueProps) => setInitialValue(prop), []);
  const [ratio, setRatio] = useState<InitialRatio>({handNum: 0 , ratio: 0});
  const updatedRatio = (prop: InitialRatio) => setRatio(prop);

  const [p1, setP1] = useState<number>(0);
  const [p2, setP2] = useState<number>(0);

  const [pot, setPot] = useState<number>(0);
  const [firstPlayer, setFirstPlayer] = useState<1 | 2>(1);
  const [handCounter, setHandCounter] = useState<number>(1);

  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(()=>{
    if(stuck && p1 === 0 && p2 ===0){
      setP1(stuck-initialValue.sb);
      setP2(stuck-initialValue.bb);
      setPot(initialValue.bb + initialValue.sb);
    }
  },[stuck]);

  useEffect(() => {
    let sb = initialValue.sb;
    let bb = initialValue.bb;
    //何回で何あげるか
    if(ratio.handNum !== 0 && ratio.ratio !== 0){
      if(handCounter !== 1 && (handCounter-1) % ratio.handNum === 0 ){
        sb = initialValue.sb*ratio.ratio;
        bb = initialValue.bb*ratio.ratio;
        setInitialValue({...initialValue, sb: sb, bb: bb});
      }
    }

    if(firstPlayer === 1){
      setFirstPlayer(2);
      updatedP1(-(bb));
      updatedP2(-(sb));
    }else{
      setFirstPlayer(1);
      updatedP1(-(sb));
      updatedP2(-(bb));
    }
    setPot(3*sb);
  },[handCounter]);


  const updatedP1 = (stuck: number) => setP1((preStuck) => preStuck + stuck);
  const updatedP2 = (stuck: number) => setP2((preStuck) => preStuck + stuck);

  const updatedPot = (stuck: number) => setPot((preStuck) => preStuck + stuck);
  const updateStuck = (stuck: number) => setStuck(stuck);

  const getPot = (player: number) => {
    //Switch文にする
    if(player === 1){
      updatedP1(pot);
    }else if(player === 2){
      updatedP2(pot);
    }else{
      updatedP1(pot/2);
      updatedP2(pot/2);
    }
    setHandCounter((prev) => prev+1);
  }

  const reseAllValues = () => {
    setIsModal(true);
  }

  const closeModal = () => setIsModal(false);

  return(
    <>
    {/* モーダル */}
    <ModalAllValue isModal={isModal} closeModal={closeModal} setP1={setP1} setP2={setP2} setPot={setPot} />
      {/* SB,BB,stuck 決める TODO:まとめる*/}
      <InitialValue updateInitialValue={updateInitialValue} updatedP1={updatedP1}  updatedP2={updatedP2} setStuck={updateStuck} updatedRatio={updatedRatio} />
      <SC.Hand>ハンド数：{handCounter}</SC.Hand>
      <SC.PorkerContainer>
        {/* 左部分 :共通化できる*/}
        <SC.SideBar>
          {/* アクションボタン */}
          <Actions
            updatedP1={updatedP1}
            updatedPot={updatedPot}
            pot={pot}
          />
        </SC.SideBar>
        {/* ポーカーテーブル */}
        <SC.TableLocation>
          <SC.Count>
            <SC.SetButton onClick={reseAllValues}>SET</SC.SetButton>
          </SC.Count>
          <SC.Table>
            <SC.DelerButton player={firstPlayer}>BUTTON/SB</SC.DelerButton>
            <SC.Player1>{p1}</SC.Player1>
            {/* <SC.Player1Bet>{p1Bet !== 0 && p1Bet}</SC.Player1Bet> */}
            <SC.Player2>{p2}</SC.Player2>
            {/* <SC.Player2Bet>{p2Bet !== 0 && p2Bet}</SC.Player2Bet> */}
            <SC.Pod>{pot}</SC.Pod>
            {/* <img src="../../img/poker-chips-v10nOW7-600-removebg-preview.png" /> */}
          </SC.Table>
          {/* potをgetする */}
          <SC.GetPotContainer>
            <SC.GetPotButton onClick={() => getPot(1)}>P1</SC.GetPotButton>
            <SC.GetPotButton onClick={() => getPot(3)}>DRAW</SC.GetPotButton>
            <SC.GetPotButton onClick={() => getPot(2)}>P2</SC.GetPotButton>
          </SC.GetPotContainer>
        </SC.TableLocation>
        {/* 右部分 共通化できる*/}
        <SC.SideBar>
          <Actions
            updatedP2={updatedP2}
            updatedPot={updatedPot}
            pot={pot}
          />
        </SC.SideBar>
        <SC.SbBb>SB:{initialValue.sb}/BB:{initialValue.bb}</SC.SbBb>
      </SC.PorkerContainer>
    </>
  )
}
export default App;
