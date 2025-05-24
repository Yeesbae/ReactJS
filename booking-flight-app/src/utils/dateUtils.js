export function setDefaultDepartureDate() {
    var today = new Date();
    return today.getFullYear() + '-' +
        ('0' + (today.getMonth() + 1)).slice(-2) + '-' +
        ('0' + today.getDate()).slice(-2);
}

export function setDefaultReturnDate() {
    var today = new Date();
    var tomorrow = new Date(today.setDate(today.getDate() + 1));
    return tomorrow.getFullYear() + '-' +
        ('0' + (tomorrow.getMonth() + 1)).slice(-2) + '-' +
        ('0' + tomorrow.getDate()).slice(-2);
}