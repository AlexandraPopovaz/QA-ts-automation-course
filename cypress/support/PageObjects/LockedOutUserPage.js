
class LockedOutUserPage{
    getErrorText(){
        return ('[data-test="error"]');
    }
    getClickErrorButton(){
        return ('.error-button');
    }
    getClearUserName(){
        return ('[data-test="username"]');
    }
    getClearPasswordName(){
        return ('[data-test="password"]');
    }
}

export default LockedOutUserPage