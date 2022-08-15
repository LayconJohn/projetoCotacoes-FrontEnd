import {useState, useEffect} from "react";
import styled from "styled-components"

import { getCotacoes } from "../../servicos/cotacoes";

import Card from "../elementos/Card";


export default function Home() {
    //state
    const [moedas, setMoedas] = useState([]);

    //logic
    useEffect( () => {
        getCotacoes().then( (res) => {
            console.log(res.data);
            setMoedas(res.data);
        })
    }, [])
    return(
        <EspacoCards>
            {moedas.length === 0 ? 
            "Carregando" 
            : 
            moedas.map( (moeda, index) => {
                return <Card 
                    key={index}
                    nome={moeda.name}
                    rota={moeda.rota}
                />
            })}
        </EspacoCards>
    )
}

const EspacoCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`;

