import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormProvider = ({children}) => {
    const [journeyFormData, setJourneyFormData] = useState({
        title: "",
        description: "",
        destination: "",
        userId: 0,
        privacy: 0,
        thumbnailId: 0,
        journeyStart: "",
        journeyEnd: "",
        events: [],
    });

    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const updateJourneyFormData = (newData) => {
        setJourneyFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };


    return (
        <FormContext.Provider value={{step, nextStep, prevStep, journeyFormData, updateJourneyFormData}}>
            {children}
        </FormContext.Provider>
    )
}

