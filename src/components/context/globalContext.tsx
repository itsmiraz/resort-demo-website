"use client"
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define types for the context
interface GlobalContextType {
  isAnimate: boolean;
  count:number
}

// Create context with default values
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 100) return;

    const interVal = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 5);

    return () => clearInterval(interVal);
  }, [count]);

  const isAnimate = count === 100;
  return (
    <GlobalContext.Provider value={{ isAnimate ,count}}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
