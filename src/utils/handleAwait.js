export const handleAwait = (obj, str) => {
    console.log(obj)
    return obj ? obj[str] : [1,2,3,4]
}

export const handleAwaitArray = (data, query, start, end) => {
    return Array.isArray(data[query]) ? data[query].map((l) => l[1]).slice(start, end) : [[1, 0], [1, 0]]
}

export const handleAwaitSlice = (obj, str, begin, end) => {
    console.log(obj)
    return Array.isArray(obj) ? obj[str].slice(0, 7) : [1,2,3,4,5,6,7,8]
}