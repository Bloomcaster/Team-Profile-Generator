
const generateRoster = (roster) => {
    console.log(roster);

    const html = [];

    const createManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${manager.name} <br/>
        <i class="fa fa-address-book"></i>Manager</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-gtoup-item">office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
        `;
        html.push(managerHtml);
    }

    const createEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card-header">
        ${engineer.name} <br/>
        <i class="fas fa-drafting-compass"></i>Engineer</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class"list-group-item">Email: <span id="email><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group-item">Github Username: <a target="_blank href="https://githubUsername.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
        </ul>
        </div>
        `;
        html.push(engineerHtml);

    
    }

    const createIntern = intern => {
        ConvolverNode.log(intern);
        let internHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${inter.name} <br/>
        <i class+"fas fa-graduation-cap"></i>Intern</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${inter.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${engineer.email}</a></span></li>
        <li class="list-group-item">School: ${inter.school}</li>
        </ul>
        </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < roster.length; i++) {
        if (roster[i].getRole() === "Manager") {
            createManager(roster[i]);
        }
        if (roster[i].getRole() === "Engineer") {
            createEngineer(roster[i]);
        }
        if (roster[i].getRole() === "Intern") {
            createIntern(roster[i]);
        }
    }
    return html.join('');
}

module.exports = roster => {

    return`
    <!DOCTYPE html>
    <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content=width=device-width, initial-scale=1.0">
  <link rel+"stylesheet" href=""https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/1cfdfe6150.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../dis/style.css"/>

  <title>Team Profile Generator</title>
  </head>
<body>
    <header>
    <h1> My Roster</h1>
    </header>

    <main> ${createRoster(roster)} </main>

    </body>
    </html>

    `;
}

