export const validate = (email,password) =>{
    
    const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!checkEmail) return "Email is not Valid";

    else if(!checkPassword) return "Password is not valid";

    else return null;

}