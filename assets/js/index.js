const myDiv = document.createElement("div")
const formid = document.querySelector("#form")

const myButton = document.querySelector(".sendinfo")
// function addInformation (tagname,tagtextname,tagtextsurname,tagtextemail ){
//     tagname.innerHTML +=`
//     <p>${tagtextname} </p>   
//     <p>${tagtextsurname}</p>   
//     <p>${tagtextemail}</p>   
//     `
// }
// const button =document.querySelectorAll("div");




myButton.addEventListener("click", () => {
    const inputeName = document.createElement("p")
    const inputeSurname = document.createElement("p")
    const inputeEmail = document.createElement("p")
    myDiv.append(inputeName, inputeSurname, inputeEmail);
    
    formid.appendChild(myDiv);
    inputeName.innerText = "Ad:      Kamran";
    inputeSurname.innerText = "Soyad:   Huseynov";
    inputeEmail.innerText = "Email:    kamranmh@code.edu.az";
    myDiv.classList.add("showinfo");
});