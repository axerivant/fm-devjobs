export const getIdealBGColor = (image: HTMLImageElement) => {
	// Create a canvas element
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')

	// Set the canvas size to the dimensions of the image
	canvas.width = image.width
	canvas.height = image.height

	if (ctx === null) throw new Error('ctx is null')

	// Draw the image on the canvas
	ctx.drawImage(image, 0, 0)

	// Get the image data from the canvas
	const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
	const data = imageData.data

	// Initialize variables for the average RGB values
	let r = 0
	let g = 0
	let b = 0

	// Loop through all the pixels in the image
	for (let i = 0, len = data.length; i < len; i += 4) {
		// Add the values for each channel (red, green, blue)
		r += data[i]
		g += data[i + 1]
		b += data[i + 2]
	}

	// Calculate the average values for each channel
	r = Math.floor(r / (data.length / 6))
	g = Math.floor(g / (data.length / 6))
	b = Math.floor(b / (data.length / 6))

	// Return the average values as a CSS-formatted string
	return `rgb(${r}, ${g}, ${b})`
}
