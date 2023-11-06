export const returnGreenOrRed = (data) => {
    return data[data.length - 1][1] > data[0][1] ? '#4ade80' : '#dc2626'
}

export const returnGreenOrRedCompare = (data1, data2) => {
    return data1 > data2 ? 'text-green-400' : 'text-red-600'
}

export const returnArrow = (data1, data2) => {
    return data1 > data2 ? <div className='text-green-400 mx-2'>▲</div> : <div className='text-red-600 mx-2'>▼</div>
}

export const returnGreenOrRedCondition = (condition) => {
    return condition ? 'text-green-400' : 'text-red-600'
}