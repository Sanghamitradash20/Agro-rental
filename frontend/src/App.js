// App.js
import React,{useEffect} from "react";
import AllRoutes from "./Components/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from '../src/Contexts/CartContext';
// import { LanguageProvider } from './Contexts/LanguageContext';
// import "../src/App.css"
// function useGoogleTranslateScript() {
//   useEffect(() => {
//     const addScript = document.createElement('script');
//     addScript.src = '//translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
//     addScript.async = true;
//     document.body.appendChild(addScript);

//     window.loadGoogleTranslate = () => {
//       if (window.google && window.google.translate) {
//         new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
//       }
//     };

//     return () => {
//       document.body.removeChild(addScript);
//       delete window.loadGoogleTranslate;
//     };
//   }, []);

  // return (
    
  //   <div>
  //     <div id="google_element"></div>
  //     <AllRoutes />
  //   </div>
  // );
//}
const App = () => {
  //useGoogleTranslateScript();

  return (
    
    
    <ChakraProvider>
     <CartProvider>
      <div>
      
      <AllRoutes />
  </div></CartProvider>
    </ChakraProvider>
    
  );
};

export default App;
