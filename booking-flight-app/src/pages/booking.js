function getDate() {
    var today = new Date();
    document.getElementsByName("departureDate").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}