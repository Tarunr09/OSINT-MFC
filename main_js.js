// main_js.js

document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.getElementById("searchForm");
    
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var searchType = document.getElementById("searchType").value;
        var pagePath;

        if (searchType === "github") {
            pagePath = "/github.html";
        } else if (searchType === "ip") {
            pagePath = "/index.html";
        } else if (searchType === "email") {
            pagePath = "/email.html";
        } else if (searchType === "phone") {
            pagePath = "/email.html";
        } else {
            console.error("Invalid search type:", searchType);
            alert("Invalid search type. Please select a valid option.");
            return;
        }
        
        // Open the page in a new tab
        window.open(pagePath, '_blank');
    });
});
