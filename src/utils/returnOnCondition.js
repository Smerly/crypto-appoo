
export const returnOnCondition = (item, callback) => {
    if (callback()) {
        return item
    }
}