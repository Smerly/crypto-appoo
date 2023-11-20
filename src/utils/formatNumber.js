export function formatNumber(n) {
    // Handling decimals
    // If the character in string is a period, slice the rest of it out
    let formattedNum = ''
    if (String(n).includes('.')) {
        for (let i = 0; i < n.length; i++) {
            if (n[i] === '.') {
                formattedNum = n.slice(0, i)
                n = n.slice(i)
            }
        }
    } else {
        return String(n).replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return `${formattedNum.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${n}`
}