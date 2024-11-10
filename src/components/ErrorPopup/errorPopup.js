import React, { useState, useEffect } from 'react';

// Setter - Getter
import { getError, getErrorTitle, getErrorMessage } from '../LocalStorage/useGetter';
import { setError } from '../LocalStorage/useSetter';

// Component use
import { checkError, reloadTrigger } from './useErrorPopup';

// Components
import Popup from '../Popup';

const ErrorPopup = () => {
    const [popupActive, setPopupActive] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupMessage, setPopupMessage] = useState("");

    // Set error cookie when it not exist
    if (!getError()) {
        setError(false);
    }

    // Check every 2.5s if an error is throw
    useEffect(() => {    
        const intervalId = setInterval(() => {
            if (checkError() !== "false") {
                setPopupTitle( getErrorTitle );
                setPopupMessage( getErrorMessage );
                setPopupActive( true );
            }
        }, 2500);
    
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Popup 
                active={popupActive}
                title={popupTitle}
                message={popupMessage}
                buttonText="Recharger"
                action={reloadTrigger}
            />
        </>
    );
}

export default ErrorPopup;
