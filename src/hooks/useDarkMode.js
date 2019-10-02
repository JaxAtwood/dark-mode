// import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage("key here")
}


// add a class to the body?
// useEffect?
// useLocalStorage true or false
// if true add dark mode to body element
// if false, remove from the body element

// setter function to toggle dark modeforward the value and the setter that were returned out of the local out useLocalStorage

// import darkmode to the navbar component
// replace out hooks in navabr? click toggle
// 