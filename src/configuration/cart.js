export const addCart = (key, value = {}) => {
    localStorage.setItem(key, JSON.stringify(value))
    alert(key + ' added to cart!')}

export const get = key => JSON.parse(localStorage.getItem(key))

export const remove = key => localStorage.removeItem(key)

export const clear = key => {
    localStorage.clear()
    alert('Cart has been cleared!')
}

export const cartDisp = () => {
    for (let i = 0; i <= localStorage.length - 1; i++) {
        let list = "<tr><th>Name</th><th>Value</th></tr>\n"
        let key = ""
        key = localStorage.key(i);
        list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
    }       
}