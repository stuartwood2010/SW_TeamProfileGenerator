let generatehtml = (myTeam) => {
    console.log('My Team:', myTeam);
    // start with an empty htmlCard
    let htmlCard = "";
    // loop over an array of myTeam
    for (let i = 0; i < myTeam.length; i++){
        let finalPrompt = myTeam[i].officeNumber || myTeam[i].github || myTeam[i].school;
        let keys = Object.keys(myTeam[i]);
        let lastKey = keys[3];
        let finalOption = lastKey + ': ' + finalPrompt;

        if (lastKey === undefined) {
            finalOption = "";
        } else if (lastKey === 'github'){
            finalOption = (`Github: <a href = "https://github.com/${myTeam[i].github}"> ${myTeam[i].github}</a>`);
            console.log(finalOption);
        } else {
            console.log(finalOption);
        };

        let {name, id, email} = myTeam[i];
        let role = myTeam[i].getRole();
        htmlCard+= 
            `
            <div class="card col" style="width: 18rem;">
            <div class="card-body card-header">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2">${role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
                <li class="list-group-item">Employee ID: ${id}</li>
                <li class="list-group-item"> ${finalOption}</li>            
            </ul>
            </div>
            `        
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>    
    </head>    
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>    
        <main class="container">
            <div class="row">
             ${htmlCard}
            </div>
        </main>
    </body>
    </html>` 
}
module.exports = generatehtml;