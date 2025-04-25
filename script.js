function searchTable() {
    // Déclaration des variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Boucle à travers toutes les lignes de la table et cache celles qui ne correspondent pas à la recherche
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // Choisissez la colonne sur laquelle vous souhaitez effectuer la recherche
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function searchTable1() {
    // Déclaration des variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable1");
    tr = table.getElementsByTagName("tr");

    // Boucle à travers toutes les lignes de la table et cache celles qui ne correspondent pas à la recherche
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // Choisissez la colonne sur laquelle vous souhaitez effectuer la recherche
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}