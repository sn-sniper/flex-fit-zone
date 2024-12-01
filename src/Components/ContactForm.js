import React from "react";
import "../Styles/ContactForm.css";

const ContactForm = () => {
    return (
        <form className="form-container">
            <div className="input-wrapper">
                <label htmlFor="title" className="label">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter title"
                    className="input"
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="content" className="label">
                    Content
                </label>
                <textarea
                    id="content"
                    rows="5"
                    placeholder="Enter your content"
                    className="textarea"
                ></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="button">
                    Post
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
