document.querySelectorAll(".atout").forEach(btn => {
    btn.addEventListener("click", function() {
        const sectionId = this.getAttribute("data-section");
        
        // Masquer toutes les sections
        document.querySelectorAll(".section").forEach(section => {
            section.classList.remove("active");
        });
        
        // Retirer la classe active de tous les boutons
        document.querySelectorAll(".atout").forEach(b => {
            b.classList.remove("active");
        });
        
        // Afficher la section sélectionnée
        document.getElementById(sectionId).classList.add("active");
        
        // Ajouter la classe active au bouton cliqué
        this.classList.add("active");
    });
});