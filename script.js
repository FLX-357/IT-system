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
const ticketData = JSON.parse(localStorage.getItem("ticketData"));
    
if (ticketData) {
    // Inhalte dynamisch in den Body einfügen
    document.body.innerHTML = `
        <h1>Meine Tickets</h1>
        <p><strong>Vorname:</strong> ${ticketData.firstName}</p>
        <p><strong>Nachname:</strong> ${ticketData.lastName}</p>
        <p><strong>Martikelnummer:</strong> ${ticketData.username}</p>
        <p><strong>Email:</strong> ${ticketData.email}</p>
        <p><strong>Problem:</strong> ${ticketData.problem}</p>
    `;
} else {
    document.body.innerHTML = "<h1>Keine Tickets gefunden</h1>";
}