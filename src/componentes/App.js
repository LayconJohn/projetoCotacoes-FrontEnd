import { BrowserRouter, Routes, Route } from "react-router-dom"
import Bitcoin from "./rotas/Bitcoin"
import Dolar from "./rotas/Dolar"
import Ethereum from "./rotas/Ethereum"
import Euro from "./rotas/Euro"
import Home from "./rotas/Home"

export default function App() {
    return(
        <>
            <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/dolar" element={<Dolar />}/>
                <Route path="/euro" element={<Euro />}/>
                <Route path="/bitcoin" element={<Bitcoin />}/>
                <Route path="/ethereum" element={<Ethereum />}/> 
            </Routes>
            </BrowserRouter>
        </>
    )
}