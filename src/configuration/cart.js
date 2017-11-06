export const addCart = (key, value = {}) => localStorage.setItem(key, JSON.stringify(value))

export const get = key => JSON.parse(localStorage.getItem(key))

export const remove = key => localStorage.removeItem(key)

export const clear = key => localStorage.clear()

export const cartDisp = () => {
    for (let i = 0; i < localStorage.length; i++)   {
        (localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
}