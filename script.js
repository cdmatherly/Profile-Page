function removeRqt(element) {
  //finds grandparent of button and removes element
  var parent = element.parentNode;
  parent.parentNode.remove();
  //updates the connection request number
  var rqtNum = document.querySelector("#rqtNum");
  rqtNum.innerText--;
  //updates the 'Your Connections' number
  var conNum = document.querySelector("#conNum");
  conNum.innerText++;
}
//updates name to random name from string of names
function updateName() {
  var name = document.querySelector("#name");
  var rdmName = [
    "Chase Matherly",
    "Grace Kelly",
    "Albert Einstein",
    "Laura Kinney",
    "Jane Doe",
    "Nico Minoru",
  ];
  name.innerText = rdmName[Math.floor(Math.random() * rdmName.length)];
}
//toggles visibility upon sign out/sign in
function signOut(element) {
  var main = document.querySelector(".main");
  if (element.innerText == "Sign Out") {
    //remove visibility from all content from main
    main.classList.toggle("blank");
    //update text to sign in
    element.innerText = "Sign In";
  } else {
    console.log(main);
    //adds content back in
    main.classList.toggle("blank");
    //updates text to sign out
    element.innerText = "Sign Out";
  }
}
