export function handleSubmit(e) {
    e.preventDefault();
    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.email.value = "";
    e.target.yourText.value = "";
};