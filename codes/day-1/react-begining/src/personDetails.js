//component: personDetails
//element: nameSpan
function PersonDetails(data) {
    //pseudo HTML element
    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = data.fname + ' ' + data.lname;
    return nameSpan;
}
