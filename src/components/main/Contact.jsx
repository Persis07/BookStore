import { handleSubmit } from "../../custom/handleSubmit";

export default function Contact() {
    return (
        <>
            <form className="contactForm" onSubmit={e => handleSubmit(e)}>
                <h3>Contact us</h3>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="yourText">Write us</label>
                <textarea name="yourText" cols="30" rows="10" placeholder="Write us"></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};