const randomUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((responsive) => responsive.json())
    .then((data) => displayData(data));
};

const displayData = (users) => {
  const name = document.getElementById("name");
  const gender = document.getElementById("gender");
  // name.innerText =
  //   users.results[0].name.title +
  //   " " +
  //   users.results[0].name.first +
  //   " " +
  //   users.results[0].name.last;
  // gender.innerText = users.results[0].gender;
  const imgShow = document.getElementById("imgShow");
  imgShow.innerHTML = `

  <h3>Name: <span id="name">${
    users.results[0].name.title +
    " " +
    users.results[0].name.first +
    " " +
    users.results[0].name.last
  }</span>
    </h3>
  <h3>Gender: <span id="gender">${users.results[0].gender}</span></h3>
    <img src="${users.results[0].picture.medium}" />

    `;
  console.log(users.results[0]);
};

randomUser();
