import React, { useState, useEffect } from 'react';

import styles from './booleanSlider.module.css'

const BooleanSlider = props => {
    const {
        values,
        returnValue
    } = props;

    const [selectedValue, setSelectedValue] = useState("default");
    const [sliderClass, setSliderClass] = useState(styles.defaultSelected);
    
    const setDefaultValue = () => {
        setSelectedValue("default");
        setSliderClass(styles.defaultSelected);
    }
    const setSecondaryValue = () => {
        setSelectedValue("secondary");
        setSliderClass(styles.secondarySelected);
    }

    useEffect(() => {
        returnValue(selectedValue);
    }, [selectedValue]);
    
    // if the values are not declared, error is throw
    var errorMsg, booleanSlider;
    if (
        "default" in values &&
        "secondary" in values &&
        values.default !== null &&
        values.secondary !== null
    ) {
        booleanSlider = (
            <div className={styles.slider}>
                <p className={styles.defaultValue} onClick={setDefaultValue}>{values.default}</p>
                <p className={styles.secondaryValue} onClick={setSecondaryValue}>{values.secondary}</p>
                <span></span>
            </div>
        );
    } else {
        errorMsg = <p className={styles.error}>Slider values error</p>;
    }

    // TODO add the possibility to put a value selected by default

    return (
        <div className={styles.root}>
            <div className={sliderClass}>
                {errorMsg}
                {booleanSlider}
            </div>
        </div>
    );
}

export default BooleanSlider;
