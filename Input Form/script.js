//Select Elements

const authorName = document.querySelector(".authorName");
const date = document.querySelector(".date");
const title = document.querySelector(".title");
const article = document.querySelector(".article");
const category = document.querySelector(".category");
const image = document.querySelector(".image");
const msg = document.querySelector(".msg");
const form = document.querySelector("form");

//-----
//Event Types
//----

//onSubmit
form.onsubmit = function (e) {
  //Attach the Values of inputs
  const authorNameV = authorName.value;
  const dateV = date.value;
  const articleV = article.value;
  const imageV = image.value;
  const categoryV = category.value;

  msg.textContent = "Form Submitted";
  e.preventDefault();
  console.log({ authorNameV, dateV, articleV, imageV, categoryV });
};

form.onreset = function (e) {
  //Attach the Values of inputs
  authorNameV.value = "";
  dateV.value = "";
  articleV.value = "";
  imageV.value = "";
  categoryV.value = "";

  msg.textContent = "Form Submitted";
};

authorName,
  (date.onfocus = function () {
    msg.textContent = "typing...";
  });

authorName.onchange = function (e) {
  msg.textContent = "Author's name has been changed";
  msg.style.color = "green";
};
