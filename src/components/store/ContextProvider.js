import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {

  const [items, setItems] = useState([]);

  const saveNewItem = (newItem) => {
    const find = items.find((el) => el.id === newItem.id);
    if (!find) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
    if (find) {
      const newItems = items.map((item) => {
        if (item.id === newItem.id) {
          return {
            ...item,
            amount: item.amount + newItem.amount,
          };
        }
        return item;
      });
      setItems(newItems);
    }
  };

  const [isLoading, setIsLoadin] = useState(false);

  const [isLoadingSpinner, setIsLoadingSpinner] = useState(false)

  const context = {
    saveNewItem,
    items,
    setItems,
    isLoading,
    setIsLoadin,
    isLoadingSpinner,
    setIsLoadingSpinner,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
