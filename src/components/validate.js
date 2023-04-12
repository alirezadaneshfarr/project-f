export const validate = (data) => {


    const errors = {};


    if(!data.name.trim()) {
        errors.name = 'Username Required';
    }
    else {
        delete errors.name;
    }

    if(!data.email) {
        errors.email = 'Email Required';
    }
    else if(!/\S+@\S+/.test(data.email)) {
        errors.email = 'It is not Email';
    }
    else {
        delete errors.email;
    }

    if(!data.password) {
        errors.password = 'Password Required';
    }
    else if(data.password.lenght < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    else {
        delete errors.password;
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = 'Confirm The Password';
    }
    else if(data.confirmPassword !== data.password) {
        errors.confirmPassword = 'Password do not match';
    }
    else {
        delete errors.confirmPassword;
    }

    if(data.isAccepted) {
        delete errors.isAccepted;
    }
    else {
        errors.isAccepted = 'Accept Our Rules';
    }

    return errors;
}