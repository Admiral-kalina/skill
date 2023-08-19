export const calculateTotalPrice = (courses) => {
   const totalPrice = courses.reduce((acc, el) => acc += el.price ,0)
    return totalPrice.toFixed(2).toString()
}