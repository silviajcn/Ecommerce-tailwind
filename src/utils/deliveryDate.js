
//Delivery Date
export const today = new Date();
export const deliveryDate = (date, format, days) => {
    const map = {
            dd: date.getDate() + days,
            mm: date.getMonth() + 1,
            yy: date.getFullYear().toString().slice(-2),
            yyyy: date.getFullYear()
    }
    return format.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
}