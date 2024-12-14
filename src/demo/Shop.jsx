import React, { useContext } from 'react'
import TravisContext from "./TravisContext";

function Shop() {
    const { name, setName } = useContext(TravisContext)

    const handleChangeName = () => {
        setName("Travis")
    }

    return (<>
        <h1>商店</h1>
        <h1>Hello, {name || "Guest"}</h1>
        <button onClick={handleChangeName}>點擊</button>
    </>)
}

export default Shop
