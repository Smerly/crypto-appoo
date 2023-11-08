export const returnMillBillThou = (num) => {
    if (num >= 1.0e+12) {
        return `${(num / 1.0e+12).toFixed(2)}T`
    }
    else if (num >= 1.0e+9) {
        return `${(num / 1.0e+9).toFixed(2)}B `
    } else if (num >= 1.0e+6) {
        return `${(num / 1.0e+6).toFixed(2)}M`
    } else if (num >= 1.0e+3) {
        return `${(num / 1.0e+3).toFixed(2)}K`
    } else {
        return num
    }
}