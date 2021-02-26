function newField() {
  var email = document.getElementById("email");
  var name = document.getElementById("name");
  var male = document.getElementById("male");
  var website = document.getElementById("website");
  var image = document.getElementById("image");
  console.log(name.value);
  console.log(email.value);
  var table = document.getElementById("table");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = `<div class="h6 font-weight-bold mb-0">${name.value}</div>
  <p class='mb-0'>${male.checked ? "Male" : "Female"}</p><p class='mb-0'>${
    email.value
  }</p><a href=${website.value} class='mb-0 text-primary text-underline'><u>${
    website.value
  }</u></a>`;
  cell2.innerHTML = `<img
  width="120"
  height="110"
  src=${image.value}
  alt=""
/>`;
}
var submit = document.getElementById("submit");
submit.onclick = newField;
