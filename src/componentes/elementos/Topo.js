import styled from 'styled-components';
import {BsThreeDotsVertical} from 'react-icons/bs'
import {MdOutlineAttachMoney} from "react-icons/md"

export default function Topo() {
    return (
        <Header>
            <Perfil></Perfil>
            <Logo>
                <MdOutlineAttachMoney style={{color: "green"}}/>
                COTAÇÕES
                <MdOutlineAttachMoney style={{color: "green"}}/>
            </Logo>
            
            <Icone> <BsThreeDotsVertical /> </Icone>
        </Header>
    )
}

const Header = styled.div`
    margin: 0;
    width: 100%;
    height: 80px;
    background-color: #f1af09;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const Perfil = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    object-fit: cover;
`;  

const Logo = styled.h1`
    font-size: 30px;
    font-family: 'Cinzel Decorative', cursive;
    color: rgb(45, 79, 6);
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const Icone = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;