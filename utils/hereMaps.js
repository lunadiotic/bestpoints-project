const ExpressError = require('./ErrorHandler')
const baseUrl = `https://geocode.search.hereapi.com/v1`
const apiKey = `PtBwHDt0WGY1C5U1l-F_idbSjQ5iP6l-L0Do1sseUEs`

const geocode = async (address) => {
    const url = `${baseUrl}/geocode?q=${address}&limit=1&apiKey=${apiKey}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.items[0]
    } catch (error) {
        throw new ExpressError(error.message, 500)
    }
}

const geometry = async (address) => {
    try {
        const { position } = await geocode(address);
        return {
            type: 'Point',
            coordinates: [position.lng, position.lat]
        }
    } catch (error) {
        throw new ExpressError(error.message, 500)
    }
}

module.exports = {
    geocode,
    geometry
}