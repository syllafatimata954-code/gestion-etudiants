const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;

    console.log("Nom :", nom);
    console.log("Prénom :", prenom);
    console.log("Email :", email);

    alert("Étudiant ajouté avec succès !");

    form.reset();
});