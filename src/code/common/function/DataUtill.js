
export const IsNullOrEmpty = (str) => {
    let isEmpty = false
    if (str === undefined || str === "" || str === Infinity || str === null || str === "null" || str === "undefined") {
        isEmpty = true
    } else if (typeof str === "string" && str.trim() === "") {
        isEmpty = true
    } else if (str instanceof Array && str.length === 0) {
        isEmpty = true
    } else if(str instanceof Object && Object.keys(str).length === 0){
        isEmpty = true
    }

    return isEmpty
}