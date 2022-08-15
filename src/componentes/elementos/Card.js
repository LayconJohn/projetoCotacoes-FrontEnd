import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi"

export default function Card({nome, rota}) {

    const navigate = useNavigate()

    //render
    return (
    <>
        <AreaCard onClick={() => {navigate(`/${rota}`)}}>
            {nome}
           <IconeCard> <FiArrowUpRight /> </IconeCard>
        </AreaCard>
    </>
    )
}

const AreaCard = styled.div`
    width: 220px;
    height: 40px;
    margin: 0 auto;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    scale: 0.9;
    transition: all ease 0.7s;

    &:hover {
        scale: 1;
    }

    &:active {
        transform: translate3d(1px 2px 2px);
    }

`;

const IconeCard = styled.div`
    position: absolute;
    top: 10px;
    right: 4px;
    scale: 0.9;
    transition: all ease 0.4s;

    &:hover {
        scale: 1;
    }

    &:active {
        transform: scale(1.2);
    }
`;