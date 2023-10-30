export const handleAwait = (obj, str) => {
    return obj ? obj[str] : [1,2,3,4]
}

export const handleAwaitArray = (data, query, start, end) => {
    return Array.isArray(data[query]) ? data[query].map((l) => l[1]).slice(start, end) : [[1, 0], [1, 0]]
}

export const handleAwaitSlice = (obj, str, begin, end) => {
    return Array.isArray(obj) ? obj[str].slice(0, 7) : [1,2,3,4,5,6,7,8]
}

export const handleAwaitPrim = (obj, str) => {
    return obj ? obj[str] : 'loading...'
}