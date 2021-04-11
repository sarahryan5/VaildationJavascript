var userEle = document.body.querySelector(".user");
var viewEle = document.body.querySelector(".view");
var messageBox = document.body.querySelector(".message");
var contentEle = document.body.querySelector(".content");
var viewsub = document.body.querySelector(".viewsub");
var list = [];

viewsub.style.visibility = "hidden";

function validated() {
  contentEle.style.display = "none";
  var view = document.body.querySelector(".view");
  var view = document.createElement("input");
  viewEle.appendChild(view);
  document.body.appendChild(view);
  viewsub.style.visibility = "visible";
}
function rendernote() {
  document.body.querySelector(".list").innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var itmEle = document.createElement("h6");
    itmEle.innerHTML = list[i].name;
    document.body.querySelector(".list").appendChild(itmEle);
  }
}

document.body.querySelector(".submit").addEventListener("click", function () {
  messageBox.innerHTML = "";
  if (userEle.value == "coolStudent123") {
    validated();
    viewsub.style.visibility = "visible";
  } else {
    messageBox.innerHTML = "Incorrect Username";
  }
});

document.body.querySelector(".viewsub").addEventListener("click", function () {
  messageBox.innerHTML = "";
  if (view.length > 1) {
    rendernote();
  } else if (viewEle.length < 1) {
    messageBox.innerHTML = "Not Enough Charcters";
  }
});