export const calculateTotalPrice = (courses) => {
    return courses.reduce((acc, el, i) => acc += el.price ,0)
}