import React, { useContext, useEffect, useState } from "react"

const ImageContext = React.createContext()

export const useImage = () => {
    return useContext(ImageContext)
}

export const ImageProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState('')
    const [input, setInput] = useState('')
    const [box, setBox] = useState({})

    const value = {
        imageUrl, setImageUrl,
        input, setInput,
        box, setBox
    }

    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}
