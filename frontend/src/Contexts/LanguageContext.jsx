import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

<<<<<<< HEAD
export const useLanguage = () => useContext(LanguageContext);
=======
export const useLanguage = () => useContext(LanguageContext);
>>>>>>> 37b8723d7abe90e29a27f091814dc7e69dae7422
