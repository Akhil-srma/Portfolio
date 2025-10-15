// client/src/context/ThemeProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for both theme and basename
const ThemeContext = createContext();

// Custom hook to use theme and basename context
export function useTheme() {
  return useContext(ThemeContext);
}

// Theme and Basename provider component
export function ThemeProvider({ children }) {
  // State for theme (light/dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // State for basename (e.g., "/" or other paths)
  const [basename, setBasename] = useState(localStorage.getItem("basename") || "/");

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Update the document's class based on theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Optionally update basename in localStorage if it changes
  useEffect(() => {
    localStorage.setItem("basename", basename);
  }, [basename]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, basename, setBasename }}>
      {children}
    </ThemeContext.Provider>
  );
}
