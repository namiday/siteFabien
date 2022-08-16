import { useEffect, useState, useRef } from "react";

export default function useSticky () {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null)

  function handleScroll() {
    setSticky(window.scrollY > element.current.getBoundingClientRect().bottom);
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
            window.removeEventListener("scroll", () => handleScroll);
          }  
  }, [handleScroll])


  return { isSticky, element }
}

function debounce(func, wait = 20, immediate = true) {
  let timeOut;
  return () => {
    let context = this,
      args = arguments;
    const later = () => {
      timeOut = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
