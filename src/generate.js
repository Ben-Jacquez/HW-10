// Add HTML Based Off Employee Role
function generateHTML(team) {
    let html = "";
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            html += ``
        }
        if (team[i].getRole() === "Engineer") {
            html += ``
        }
        if (team[i].getRole() === "Intern") {
            html += ``
        }
    }
}