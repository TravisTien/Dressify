import React, { useState, useEffect } from 'react'

const TravisContext = React.createContext({
    name: '',
    imageSrc: '',
    setName: () => { },
})

export const TravisContextProvider = (props) => {
    const [name, setName] = useState("");
    const [imageSrc, setImageSrc] = useState(null)
    const [CroppedSrc, setCroppedSrc] = useState(null)

    // 濾鏡
    const [brightness, setBrightness] = useState(100)
    const [contrast, setContrast] = useState(100)
    const [saturate, setSaturate] = useState(100)
    const filterStyle = {
        filter: `
            brightness(${brightness}%)
            contrast(${contrast}%)
            saturate(${saturate}%)
        `
    }

    // 獲取BLOB Image
    useEffect(() => {
        let takePhoto = async function () {
            const url = "./src/assets/img/picture2.jpg"
            let response = await fetch(url) //使用fetch 去取得資料
            const base64 = await response.blob() //將取得的資料 存放到 BLOB

            if (base64) {
                const reader = new FileReader()
                reader.onload = () => {
                    setImageSrc(reader.result)
                }
                reader.readAsDataURL(base64)
            }
        }
        takePhoto();
    }, [])

    return (
        <TravisContext.Provider value={{ imageSrc, filterStyle, CroppedSrc, setCroppedSrc, brightness, setBrightness, saturate, setSaturate, contrast, setContrast }} >
            {props.children}
        </TravisContext.Provider>
    )
}

export default TravisContext
