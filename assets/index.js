function myFunction() {
  const name = document.querySelector("#myName").value;
  const surname = document.querySelector("#mySurname").value;
  const mail = document.querySelector("#myEmail").value;

  document.getElementById("nameP").innerText = name;
  document.getElementById("surnameP").innerText = surname;
  document.getElementById("emailP").innerText = mail;
}

// const myBtn = querySelector(".btn");

if (document.getElementById("nameP") !== "") {
    console.log("Error");
}
if (document.getElementById("surnameP").value !== "") {
  console.log("Error");
}
if (document.getElementById("emailP").value !== "") {
  console.log("Error");
}
