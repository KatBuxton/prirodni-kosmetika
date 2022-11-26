import React, { createContext, useContext } from 'react';

export const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);
