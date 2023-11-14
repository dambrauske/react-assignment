import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import GameBoardPage from "./pages/GameBoardPage.jsx";

function App() {


    return (
    <div className="bg-slate-50">
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="/gameBoard" element={<GameBoardPage/>}/>
        </Routes>
    </div>
  )
}

export default App
