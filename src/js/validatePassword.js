function validatePassword(pass) {
    if (pass.length <= 7) {
        return false;
    }

    return true;
}