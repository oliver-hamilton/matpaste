//Function to create an array from a node list
function toArray(list) {
    return Array.prototype.slice.call(list);
}

function copyCharacter(buttonElement) {   
    //Write to a hidden text field
    var hiddenText = document.getElementById("hidden_text");
    hiddenText.innerHTML = buttonElement.innerHTML;
    hiddenText.select();
    //Execute the copy command
    document.execCommand("copy");
    //Show the alert box
    var alertBox = document.getElementById("alertDiv");
      
    //ANIMATION
    if (alertBox.classList.contains("startAnimation")) {
        //Remove the class
        alertBox.classList.remove("startAnimation");
        //Add the new class
        alertBox.classList.add("startAnimationAgain");
    }
    
    else if (alertBox.classList.contains("startAnimationAgain")) {
        //Remove the class
        alertBox.classList.remove("startAnimationAgain");
        //Add the new class
        alertBox.classList.add("startAnimation");
    }
    
    //Otherwise, just add the start animation class
    else {
        alertBox.classList.add("startAnimation");
    }

}

function hide(elementName) {
    document.getElementById(elementName).style.display = "none";
}

function showBlock(elementName) {
    document.getElementById(elementName).style.display = "block";
}

function showInlineBlock(elementName) {
    document.getElementById(elementName).style.display = "inline-block";
}

//Function to add an item with the given id to the group specified
function addToGroup(itemId, group) {
    var item = document.getElementById(itemId);
    document.getElementById(group).appendChild(item);
}

//Function to remove an item with the given id from the group specified
function removeFromGroup(itemId, group) {
    var item = document.getElementById(itemId);
    document.getElementById(group).removeChild(item);
}

function showMathsSymbols() {
    //Change the first header
    document.getElementById("header1").innerHTML = "Variables";
    
    //Hide group 2 and group 3 and group 6
    hide("group2");
    hide("group3");
    hide("group6");
    
    //Show group 1, 4 and 5
    showBlock("group1");
    showBlock("group4");
    showBlock("group5");
    
    //Hide physics symbols
    //Hide 'tau'
    hide("tau");  
    //Hide (uppercase) theta
    hide("thetaUpper")
    //Hide (uppercase) omega
    //hide("omegaUpper");
    //Hide (uppercase) lambda
    hide("lambdaUpper");
    //Hide phi
    hide("phi");
    //Hide the duplicate alpha
    hide("alphaMechanics");
    
    //Move omega, theta and Pi to the miscellaneous group (group 4)
    addToGroup("omega", "group4");
    addToGroup("theta", "group4");
    addToGroup("pi", "group4");
    
    //Move lambda and omega to the variables group (group 1)
    addToGroup("lambda", "group1");
    addToGroup("omega", "group1");
    
    //Show infinity and sigma
    showInlineBlock("infinity");
    showInlineBlock("sigma");
    
    //Change the text of the mode button
    document.getElementById("modeButton").innerHTML = "Show physics symbols"
    
}

function showPhysicsSymbols() {
    //Change the first header
    document.getElementById("header1").innerHTML = "Atomic structure / Radioactivity";
    
        //Remove lambda from the variables group
    //removeFromGroup("lambda", "group1");
    
    //Remove sets group and the operators group
    hide("group5");
    hide("group6");
    
    //Remove omega, theta and Pi from the miscellaneous group (group 4)
    //removeFromGroup("omega", "group4");
    //removeFromGroup("theta", "group4");
    //removeFromGroup("pi", "group4");
    
    //Show group 1, 2, 3 and 4
    showBlock("group1");
    showBlock("group2");
    showBlock("group3");
    showBlock("group4");
    
    //Add omega, theta and Pi to the mechanics group (group 2)
    addToGroup("omega", "group2");
    addToGroup("theta", "group2");
    addToGroup("pi", "group2");
    
    //Move lambda to the miscellaneous group (group 4)
    addToGroup("lambda", "group4");
    
    //Show 'tau', uppercase 'lambda', 'alpha' and 'phi'
    showInlineBlock("tau");
    showInlineBlock("lambdaUpper");
    showInlineBlock("alphaMechanics");
    //Show uppercase theta
    showInlineBlock("thetaUpper");
    showInlineBlock("phi");
    
    //Hide infinity and sigma
    hide("infinity");
    hide("sigma");
    
        //Change the text of the mode button
    document.getElementById("modeButton").innerHTML = "Show maths symbols";
}

function showOperators() {
    //Hide all existing groups
    var groups = document.getElementsByClassName("topicGroup");
    for (group of groups) {
        group.style.display = "none";
    }
    //Show group 6
    showBlock("group6");
}

function toggleMenuPanel() {
            
    //Toggle the darkened panel behind the menu panel
    var darkenedPanel = document.getElementById("darkenedPanel");
    darkenedPanel.classList.toggle("invisibleFromRightClass");
    darkenedPanel.classList.toggle("visibleFromRightClass");
    
    //Get the menu panel
    var menuPanel = document.getElementById("menu");
    //Toggle the menu's visibility
    menuPanel.classList.toggle("invisibleFromLeftClass");
    menuPanel.classList.toggle("visibleFromLeftClass");
    /*menuPanel.style.left = "-14px";
    menuPanel.style.top = "50px";*/

}

/*function hideMenuPanel() {
    //Hide the darkened panel
    var darkenedPanel = document.getElementById("darkenedPanel");
    darkenedPanel.style.display = "none";
    //Hide the menu panel
    var menuPanel = document.getElementById("menu");
    menuPanel.style.display = "none";
    
}*/

document.addEventListener('DOMContentLoaded', function() {
    
var buttons = toArray(document.getElementsByClassName("buttons"));

buttons.forEach(function (button) {
    
    button.addEventListener("click", function(){ 
        copyCharacter(button); 
    });  
});
    
//Get mode button
/*var modeButton = document.getElementById("modeButton");
modeButton.addEventListener("click", function(){
    //If the text of the button is 'Show maths symbols'
    if (modeButton.innerHTML == "Show maths symbols") {
        //Call the 'showMathsSymbols' function
        showMathsSymbols();
        
    //Otherwise, call the 'showPhysicsSymbols' function
    } else {
        showPhysicsSymbols();
    }
})*/
    
//Get hamburger button
var hamburgerButton = document.getElementById("hamburgerIcon");
hamburgerButton.addEventListener("click", function(){
    //Toggle the menu panel's visibility
    toggleMenuPanel();
});
    
//Set event listener for 'Show physics symbols' menu button
var physicsMenuButton = document.getElementById("physicsButton");
physicsMenuButton.addEventListener("click", function(){
    //Show the physics symbols
    showPhysicsSymbols();
    //Toggle the menu panel
    toggleMenuPanel();
});
    
//Set evebt listener for 'Show maths symbols' menu button
var mathsMenuButton = document.getElementById("mathsButton");
mathsMenuButton.addEventListener("click", function(){
    //Show the maths symbols
    showMathsSymbols();
    //Toggle the menu panel
    toggleMenuPanel();
});
    
//Set event listener for 'Shwo operators' menu button
var operatorsButton = document.getElementById("operatorsButton");
operatorsButton.addEventListener("click", function(){
    //Show the operators and hide the rest of the groups
    showOperators();
    //Toggle the mneu panel
    toggleMenuPanel();
});
//If the darkened panel is clicked, hide the menu panel
var darkenedPanel = document.getElementById("darkenedPanel");
darkenedPanel.addEventListener("click", function(){
    toggleMenuPanel();
});
    
//Style active menu button
var menuButtons = document.getElementsByClassName("menuButtons");

//Loop through buttons
for (var i = 0;i < menuButtons.length;i++) {
    //Add an event listener to this menu button
    menuButtons[i].addEventListener("click", function(){
        //Get the 'current' variable
        var current = document.getElementsByClassName("active");
        
        if (current.length > 0) {
            //Remove the active class from this button, as a new one has been clicked
            current[0].classList.remove("active");
        }
        //Add the active class to the clicked button
        this.classList.add("active");
    });
}
    
});