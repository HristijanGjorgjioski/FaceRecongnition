const dimensions = (imgSrc) => {
    const theImage = new Image();
    theImage.src = imgSrc;

    const imageWidth = theImage.width;
    const imageHeight = theImage.height;

    const imgDimensions = { width: imageWidth, height: imageHeight };

    return imgDimensions;
}

export default dimensions
