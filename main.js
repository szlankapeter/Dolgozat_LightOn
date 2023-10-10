import Controller from "./Controller/Controller.js";

$(function () {
  new Controller();

  $(window).on("reset", () => {
    location.reload();
    console.log("asdasd");
  });
});
