let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = myObj.name;
    document.getElementById("birthday").innerHTML = myObj.birthday;
  }
};

newRequest.open("GET", "einstein.json", true);
newRequest.send();


function loadBio(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp) {
  let myObj = JSON.parse(xhttp.responseText);
  document.getElementById("bio").innerHTML = myObj.bio;
}