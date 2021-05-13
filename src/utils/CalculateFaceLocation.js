import { useContext } from 'react'

import { ImageContext } from '../context/ImageContext'
import dimensions from './dimensions'

const CalculateFaceLocation = async (data) => {
    const { setBox, setImageUrl, imageUrl } = useContext(ImageContext)

    const clarifaiFace = await data?.outputs[0]?.data?.regions[0]?.region_info?.bounding_box
    setImageUrl(data.outputs[0].input.data.image.url)

    const imgDimensions = await dimensions(imageUrl)
    const width = imgDimensions.width
    const height = imgDimensions.height

    setBox({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    })
}

export default CalculateFaceLocation
