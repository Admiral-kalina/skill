export const getWindowType = () => {
    if (typeof window !== "undefined" || window.document) {
        return window.innerWidth <= 768;
    }
}