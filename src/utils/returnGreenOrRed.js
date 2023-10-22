export const returnGreenOrRed = (data) => {
    return data[data.length - 1][1] > data[0][1] ? '#4ade80' : '#dc2626'
}