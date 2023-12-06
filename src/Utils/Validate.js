export const checkValidation=(email,password,name)=>{
    const isEmail_valid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassword_valid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isName_valid=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name)
    
    if(!isName_valid)
    return "Name is not valid"

    if(!isEmail_valid)
    return "Email is not valid"
    
    if(!isPassword_valid)
    return "Password is not valid"
    
    return null;
}
