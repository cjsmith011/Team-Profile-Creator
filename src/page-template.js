
const { template } = require("lodash");
const generateManager = managerText => {
    if (!managerText) {
        return '';
    }
     return `
     <section class="section">
      <h2 class="title is-2">Team Manager: ${managerText}</h2>
     </section>
  `;
};

const generateTeam = detailsArr => {
    return `
    <section class="section">
      <h2 class="has-text-primary>Team Members:</h2>
      
      ${detailsArr
        .map(({ role, name, id, email, github, office, school }) => {
          // if (!github, !office, !school) {
          //   return '';
          // }
          return `
          <div class="card">
          <header class="card-header">
          <p class-"card-header-title">Team Mamber</p>
          <div class="card-content">
            <p class="subtitle is-3>${role}</p>  
            <p class="title is-3">${name}</p>
            <p class="subtitle is-3>Employee id: ${id}</p>
            <p class="subtitle is-3>Email: ${email}</p>
            <p class="subtitle is-3>Github: https://github.com/${github}</p>
            <p class="subtitle is-3>Office: ${office}</p>
            <p class="subtitle is-3>School: ${school}</p>
            </div>
          </div>
          `;
        })
      }
      </div>
      </section>
      `;
    }
    

module.exports = templateData => {
    console.log(templateData);
    //destructure projects and about data from templateData based on their object properties
    const { details, manager } = templateData;


    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" src="./design.css">
        <title>Team Profile</title>
        </head>

        <body>
        <header>
        <header class="has-background-primary"></header>
            <div>
             <h1 class="has-background-success-light is-centered title is-2 ">Meet the Index Team!</h1>
            </div>
        </header>

        <main class>
            ${generateManager(manager)}
            ${generateTeam(details)}
        </main>

        <footer class="footer has-text-centered">
            <h3 class="has-text-primary">&copy; ${new Date().getFullYear()} by Carlie Smith</h3>
        </footer>
        </body>
    </html>
        `;
};
