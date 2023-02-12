

function generate_html(data){
var html_top_section = `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
</head>
<body>

<header class="top">
<h2 id="page-title">My Team</h2>
</header>

<main>
<div class="row">\n`;

var html_middle_section = "";

var html_bottom_section = `</div>
</main>
</body>
</html>`;


for(let i=0; i < data.length; i++) {
    //console.log(data[i].name, data[i].id);
   let role = data[i].getRole();
   let email = data[i].email;
   let name = data[i].name;
   let id = data[i].id;
   let github_url = "https://github.com";
   let info = "";

    if (role === "Engineer"){
      let username = data[i].getGithub();
      info = `<li>Github: <a href="${github_url}/${username}">${github_url}/${username}</a></li>`;
    } else if (role === "Intern"){
      info = `<li>School: ${data[i].getSchool()}</li>`;
    } else {
      info = `<li>Office Number: ${data[i].getOfficeNumber()}</li>`;
    }


    html_middle_section += `<div class="column">
                              <h2 class="header">${name}</h2>
                              <h3 class="sub-header">${role}</h3>
                              <ul>
                               <li>ID: ${id}</li>
                               <li>Email: <a href="mailto:${email}">${email}</a></li>
                               ${info}
                              </ul>
                             </div>\n`

}

return `${html_top_section}${html_middle_section}${html_bottom_section}`;


}

module.exports = generate_html;