import React,{useContext} from 'react'
import TravisContext from "./TravisContext";
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
    const {name, setName} = useContext(TravisContext);

    const handleChangeName = ()=>{
        setName("Travis")
    }
    const handleShop = ()=>{
        console.log('ho');
        navigate("/Shop")
    }


    return (<>
        <h1>首頁</h1>
        <h1>Hello, {name || "Guest"}</h1>
        <button onClick={handleChangeName}>點擊</button>
        <button onClick={handleShop}>商店</button>
    </>)
}

export default Home
