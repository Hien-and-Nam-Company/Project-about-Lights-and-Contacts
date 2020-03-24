function handleButtonSwitch() {
    contactList.forEach(function(currentContact) {
        if (currentContact.isTargeted) {
            currentContact.status = !currentContact.status;
            currentContact.draw();
        }
    });
}

// function handleButtonLink() {
//     ableToLink = true;
//     hideElement('buttonLink');
//     showElement('buttonTieUp');
//     showElement('buttonSwitch');
// }

// function handleButtonBack(){
//     ableToLink = false;
//     showElement('buttonLink');
//     hideElement('buttonTieUp');
//     hideElement('buttonSwitch');
// }

// function handleSomething(){
//     if (this == targetList[0]) {
//         this.status = !this.status;
//         targetList[1].status = !targetList[1].status;
//         resetLinkTarget();
//         drawAllContacts();
//     }
//     if (this == targetList[1]) {
//         this.status = !this.status;
//         targetList[0].status = !targetList[0].status;
//         resetLinkTarget();
//         drawAllContacts();
//     }
// }

// function handleButtonUnLink() {
//     resetLinkTarget();
//     drawAllContacts();
// }
