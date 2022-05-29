import Modal from 'react-modal';
import { useState, FC } from 'react';
import * as SC from '../styled/porkerStyled';

type Props = {
    isModal :boolean,
    closeModal: () => void,
    setP1: any,
    setP2: any,
    setPot: any
}
export const ModalAllValue:FC<Props> = ({
    isModal, closeModal, setP1, setP2, setPot
}) => {
    const [subp1, setSubp1] = useState<number>(0);
    const [subp2, setSubp2] = useState<number>(0);
    const [subpot, setSubpot] = useState<number>(0);

    const handleP1 = (e: any) => setSubp1(e.target.value);
    const handleP2 = (e: any) => setSubp2(e.target.value);
    const handlePot = (e: any) => setSubpot(e.target.value);

    const setValue = () => {
        setP1(Number(subp1));
        setP2(Number(subp2));
        setPot(Number(subpot));
        closeModal();
    }

    return(
        <Modal
        isOpen={isModal}
        onRequestClose={closeModal}
        style={SC.customStyles}
        >
            <div>pot:
                <input type="text" value={subpot} onChange={handlePot} />
            </div>
            <div>p1:
                <input type="text" value={subp1} onChange={handleP1} />
            </div>
            <div>p2:
                <input type="text" value={subp2} onChange={handleP2} />
            </div>
            <button onClick={setValue}>set</button>
            <button onClick={closeModal}>close</button>
        </Modal>
    )
}