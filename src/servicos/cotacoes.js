import axios from "axios";

const URL = "http://localhost:3001"

function getCotacoes() {
    const promisse = axios.get(URL);
    return promisse;
} 

function getCotacao(rota) {
    const promisse = axios.get(`${URL}/${rota}`);
    return promisse;
}

export {getCotacoes, getCotacao}