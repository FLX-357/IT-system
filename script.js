
document.getElementById("submitTicketButton").addEventListener("click", function () {
    // Werte aus den Input-Feldern holen
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const problem = document.getElementById("test").value;

    // Daten im LocalStorage speichern
    localStorage.setItem("ticketData", JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        problem
    }));

    // Nutzer zur Seite "Meine Tickets" weiterleiten
    window.location.href = "MeineTickets.html";
});
