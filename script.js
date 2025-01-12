
document.getElementById("submitTicketButton").addEventListener("click", function () {
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const problem = document.getElementById("test").value;


    localStorage.setItem("ticketData", JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        problem
    }));

  
   
});
