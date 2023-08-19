import {useEffect} from "react";

export default function useClickOutside(elementRef, hamburgerState, callback) {
    useEffect(() => {

        const handleClickOutside = (event) => {
            if (typeof window !== "undefined" || window.document) {
                event.preventDefault()
                if (elementRef && elementRef.current && !elementRef.current.contains(event.target)) {
                    // Call Callback only if event happens outside element or descendent elements
                    callback()
                    console.log(1)
                }

                return
            }
            document.addEventListener('click', handleClickOutside, true)
        }
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [elementRef, callback])

}