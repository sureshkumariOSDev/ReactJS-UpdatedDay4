//component: app
//element: completeDesign
function App() {
    //var userInputElement = userInput();
    // var personDetailElement = personDetails();

    var userInputComponentObj = new userInput();
    var userInputElement = userInputComponentObj.render();

    //pseudo HTML element
    var completeDesign = document.createElement('div');
    completeDesign.appendChild(userInputElement);
    //completeDesign.appendChild(personDetailElement);
    return completeDesign;
}