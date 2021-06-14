async function getResponce() {
    const response = await fetch("https://randomuser.me/api/");
    const content = await response.json();
  
    document.getElementById("Female").innerHTML =
      "Пол: " + content["results"][0]["gender"];
    document.getElementById("Surname").innerHTML =
      "Фамилия имя: " +
      content["results"][0]["name"]["first"] +
      " " +
      content["results"][0]["name"]["last"];
    document.getElementById("Address").innerHTML =
      "Город: " + content["results"][0]["location"]["city"];
    document.getElementById("Email").innerHTML =
      "Email: " + content["results"][0]["email"];
    document.getElementById("DataAge").innerHTML =
      "Дата рождения, возраст: " +
      content["results"][0]["dob"]["date"].slice(0, 10) +
      "," +
      content["results"][0]["dob"]["age"];
    document.getElementById("Phone").innerHTML =
      "Телефон: " + content["results"][0]["phone"];
    document.getElementById("Phone").innerHTML =
      "Телефон: " + content["results"][0]["phone"];
  
    //picture
    const img = document.createElement("img");
    img.src = content["results"][0]["picture"]["large"];
    img.style =
      "position: absolute; top: 0px; left: 0px; width: 255px; height: 259px;";
    document.getElementById("cardImg").appendChild(img);
  }
