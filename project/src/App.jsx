import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import GameBoardPage from "./pages/GameBoardPage.jsx";


function App() {


    return (
    <>
        <Routes>
            <Route path={"/"} element={<IndexPage/>}/>
            <Route path={"/gameBoard"} element={<GameBoardPage/>}/>
        </Routes>
    </>
  )
}

export default App
