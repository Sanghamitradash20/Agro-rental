import React,{useEffect} from "react";
function useGoogleTranslateScript() {
    useEffect(() => {
      const addScript = document.createElement('script');
      addScript.src = '//translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
      addScript.async = true;
      document.body.appendChild(addScript);
  
      window.loadGoogleTranslate = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
        }
      };
  
      return () => {
        document.body.removeChild(addScript);
        delete window.loadGoogleTranslate;
      };
    }, []);
  }
  const Language = () => {
    useGoogleTranslateScript();
  
    return (
        <div>
            <style>
        {`
          body > .skiptranslate {
            display: none;
          }
          
          .goog-logo-link {
            display: none !important;
          }
          
          .goog-te-gadget {
            color: transparent !important;
            height: 30px;
            margin-top: 4px;
            overflow: hidden;
          }
          
          .goog-te-gadget .goog-te-combo {
            color: #000 !important;
            border: 1px solid darkgray;
          }
          
          .goog-te-combo {
              height: 26px;
              font-size: 15px;
              margin-top: 4px !important;
              padding: 2px 0;
              font-weight: 500;
              color: green !important;
              border: 1px solid green !important;
              outline: none;
          }
          #google_element {
            position:fixed;
            right: -90px;
            top: 0;
            width: 300px; /* Adjust the width as needed */
            height: 100%; /* Take full height of the viewport */
            z-index: 9999; /* Ensure it appears above other elements */
          }
          
        `}
      </style>
        <div id="google_element"></div>
    </div>
    );
  };
  
  export default Language;