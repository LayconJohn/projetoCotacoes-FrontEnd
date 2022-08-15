import {useState, useEffect} from "react";
import styled from "styled-components"
import { getCotacao } from "../../servicos/cotacoes";

export default function Dolar() {
    //state
    const [cotacaoDolar, setCotacaoDolar] = useState("");

    //logic
    useEffect( () => {
        getCotacao("dolar").then( (res) => {
            setCotacaoDolar(res.data.valorCota)
        })
    }, [])
    return(
        <>
            <EspacoCotacao>
                <h3>Dólar Hoje:</h3>
                <span>{cotacaoDolar === "" ? "Carregando..." : `USD ${cotacaoDolar}`}</span>
            </EspacoCotacao>
        </>
    )
}

const EspacoCotacao = styled.div`
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    margin-top: 100px;

    h3 {
        font-size: 20px;
        font-weight: 400;
        font-family: 'Cinzel Decorative', cursive;
        color: #FFF;
    }

    span {
        font-size: 18px;
        color: #FFF;
    }
`;
