import React, { useState } from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// Component
import Popup from '../Popup';

// CSS
import styles from './infoPopup.module.css'

const InfoPopup = props => {
    const { t, i18n } = useTranslation();

    const {
        title,
        content,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const infoPopupTrigger = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className={styles.root} onClick={infoPopupTrigger}>
            <img className={styles.img} src='/logo192.png' alt=''/>
            <Popup
                active={isOpen}
                title={title}
                message={content}
                buttonText={t("components-infoPopup-buttonText")}
                action={infoPopupTrigger}
            />
        </div>
    );
}

export default InfoPopup;
