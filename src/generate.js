// Add HTML Based Off Employee Role
function generateHTML(team) {
    let html = "";
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            html += 
            `        <div class="container">
            <div class="card">
                <div class="manager">
                    <p class="name">${team[i].getName()}</p>
                    <p class="role">${team[i].getRole()}</p>
                    <p class="id">${team[i].getId()}</p>
                    <p class="phoneNumber">${team[i].getOfficeNumber()}</p>
                </div>
            </div>
        </div>`
        }
        if (team[i].getRole() === "Engineer") {
            html += 
            `        <div class="container">
            <div class="card">
                <div class="engineer">
                    <p class="name">${team[i].getName()}</p>
                    <p class="role">${team[i].getRole()}</p>
                    <p class="id">${team[i].getId()}</p>
                    <p class="github">${team[i].getGithub()}</p>
                </div>
            </div>
        </div>`
        }
        if (team[i].getRole() === "Intern") {
            html += 
            `        <div class="container">
            <div class="card">
                <div class="intern">
                    <p class="name">${team[i].getName()}</p>
                    <p class="role">${team[i].getRole()}</p>
                    <p class="id">${team[i].getId()}</p>
                    <p class="school">${team[i].getSchool()}</p>
                </div>
            </div>
        </div>`
        }
    }
}