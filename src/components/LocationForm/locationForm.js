import React, { useState, useEffect }  from 'react';

// Component use
import { locateMeTreatment } from './useLocationForm';

// Components
import BooleanSlider from '../BooleanSlider';
import Button from '../Button';
import InputSearchBar from '../SearchBar/InputSearchBar';
import Loading from '../Loading';

// CSS
import styles from './locationForm.module.css';

const LocationForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [sliderContainer, setSliderContainer] = useState(styles.leftSliderContainer);

    const booleanSlider = {
        "default": "Manually",
        "secondary": "Automatically"
    };

    const booleanSliderTrigger = (value) => {
        if (value === "default") {
            setSliderContainer(styles.leftSliderContainer);
        } else {
            setSliderContainer(styles.rightSliderContainer);
        }
    }

    const locateMeTrigger = async () => {
        setIsLoading(true);

        if (await locateMeTreatment()) {
            window.location.href = '/';
        } else {
            setIsLoading(false);
        }
    }

    return (
        <div className={styles.root}>
            {isLoading ? <Loading /> : null}
            <div className={styles.booleanSliderContainer}>
                <BooleanSlider
                    values={booleanSlider}
                    returnValue={booleanSliderTrigger}
                />
            </div>
            <div className={sliderContainer}>
                <div className={styles.manuallyContainer}>
                    <InputSearchBar />
                </div>
                <div className={styles.automaticallyContainer}>
                    <Button triggerAction={locateMeTrigger}>
                        Locate me
                    </Button>
                    <p>Prevent message to user</p>
                </div>
            </div>
        </div>
    );
}

export default LocationForm;
