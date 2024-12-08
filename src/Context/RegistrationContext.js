import React, { createContext, useState, useEffect } from 'react';
export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        email: '',
        password: '',
        planType: '',
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const updateData = (field, value) => {
        setRegistrationData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const logout = () => {
        setRegistrationData({
            username: '',
            email: '',
            password: '',
            planType: '',
            cardHolderName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: ''
        });
        sessionStorage.removeItem('registrationData'); 
    };

    useEffect(() => {
        sessionStorage.setItem('ClientData', JSON.stringify(registrationData));
    }, [registrationData]);

    return (
        <RegistrationContext.Provider value={{ registrationData, updateData, logout}}>
            {children}
        </RegistrationContext.Provider>
    );
};
