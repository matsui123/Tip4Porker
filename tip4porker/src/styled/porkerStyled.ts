import styled from 'styled-components';

export const PorkerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Hand = styled.div`

`

export const SideBar = styled.div`
    width: 150px;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SbBb = styled.div`
    position:fixed;
    right:20px;
    bottom:20px;
`;

export const TableLocation = styled.div`
    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Table = styled.div`
    width: 1000px;
    height: 500px;
    border-radius: 250px;
    background: #00AE95;
    border: 20px solid;
`;

export const Count = styled.div`
    text-align: center;
    padding: 20px;
`
export const SetButton = styled.button`
    height: 50px;
    width: 100px;
    border-radius: 50px;
`;

export const DelerButton = styled.div<{player: number}>`

    text-align: ${({player}) => player === 1 ? 'start' : 'end'}

`

export const Player1 = styled.div`
    position: absolute;
	top: 50%;
    left: -10%;
	transform: translate(-50%, -50%);
    font-size: 30px;
`;

export const Player1Bet = styled.div`
    position: absolute;
	top: 50%;
    left: 10%;
	transform: translate(-50%, -50%);
    font-size: 20px;
`;

export const Player2 = styled.div`
    position: absolute;
	top: 50%;
    left: 110%;
	transform: translate(-50%, -50%);
    font-size: 30px;
`;

export const Player2Bet = styled.div`
    position: absolute;
	top: 50%;
    left: 90%;
	transform: translate(-50%, -50%);
    font-size: 20px;
`;

export const Pod = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
`;

export const GetPotContainer = styled.div`
    text-align: center;
    margin-top: 40px;
`;

export const GetPotButton = styled.button`
    height: 80px;
    width: 250px;
    margin-right: 20px;
    border-radius: 30px;
`;

export const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};