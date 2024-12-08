import React, { useState, useContext } from 'react';
import "../Styles/PaymentMethod.css";
import { useNavigate } from 'react-router-dom';
import { RegistrationContext } from '../Context/RegistrationContext'; 
import axios from 'axios';

export default function PaymentMethod() {
    const navigate = useNavigate();
    // const location = useLocation();
    const { registrationData, updateData } = useContext(RegistrationContext);
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const paymentData = {
            ...registrationData,
            planType: registrationData.planType, 
            cardHolderName: formData.cardHolderName,
            cardNumber: formData.cardNumber,
            expiryDate: formData.expiryDate,
            cvv: formData.cvv
        };

        try {
            const response = await axios.post('http://localhost:3030/api/auth/register', paymentData);
            console.log('Payment successful:', response.data);
            alert("Payment Successful!");
            navigate('/dashboard',{replace : true});
        } catch (error) {
            console.error('Error during payment:', error);
            alert("Payment failed. Please try again.");
        }
    };

    return (
        <React.Fragment>
            <div className='Payment-Container'>
                <div className="modal">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="credit-card-info--form">
                            <div className="input_container">
                                <label htmlFor="card-holder-name" className="input_label">
                                    Card holder full name
                                </label>
                                <input
                                    id="card-holder-name"
                                    className="input_field"
                                    type="text"
                                    name="cardHolderName"
                                    placeholder="Enter your full name"
                                    value={formData.cardHolderName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="input_container">
                                <label htmlFor="card-number" className="input_label">
                                    Card Number
                                </label>
                                <input
                                    id="card-number"
                                    className="input_field"
                                    type="text"
                                    name="cardNumber"
                                    placeholder="0000 0000 0000 0000"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="input_container">
                                <label htmlFor="expiry-date" className="input_label">
                                    Expiry Date / CVV
                                </label>
                                <div className="split">
                                    <input
                                        id="expiry-date"
                                        className="input_field"
                                        type="text"
                                        name="expiryDate"
                                        placeholder="01/23"
                                        value={formData.expiryDate}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        id="cvv"
                                        className="input_field"
                                        type="text"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <button className="purchase--btn">
                                Pay
                                <svg className="svgIcon" viewBox="0 0 576 512">
                                    <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
