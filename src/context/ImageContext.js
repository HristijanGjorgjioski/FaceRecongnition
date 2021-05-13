import React, { createContext, useEffect, useState } from "react"

const inititalState = []

export const ImageContext = createContext(inititalState)

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
