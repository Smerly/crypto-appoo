
export const formatDateSlash = (date) => {
    return `${new Date(date).getMonth()+1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
}

export const formatDateDash = (date) => {
    return `${new Date(date).getDate()}-${new Date(date).getMonth()+1}-${new Date(date).getFullYear()}`
}