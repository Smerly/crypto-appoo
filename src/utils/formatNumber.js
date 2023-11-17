export function formatNumber(n) {
    // Handling decimals
    // If the character in string is a period, slice the rest of it out
    let formattedNum = ''
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '.') {
            formattedNum = n.slice(0, i)
            n = n.slice(i)
        }
    }
    return `${formattedNum.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${n}`
}