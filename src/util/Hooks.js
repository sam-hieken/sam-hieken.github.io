import { useLayoutEffect, useState } from "react";

/**
 * React hook to dynamically get the browser window size.
 * 
 * Usage: 
 * const [ width, height ] = useWindowSize();
 */
export function useWindowSize() {
    const [ size, setSize ] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([ window.innerWidth, window.innerHeight ]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
  