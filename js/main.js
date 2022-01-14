const item = document.querySelectorAll(".item");
const contact = document.querySelector(".contact");
const send = document.querySelector(".contact_button");
const close = document.querySelector(".closeButton");

item.forEach(e => {
  e.addEventListener("click", () => {
    contact.classList.add("show");
  })
})


send.addEventListener("click", () => {
  const dataKey = item.children[0].getAttribute("data-key");
  const name = document.querySelector(".inputName").value;
  const email = document.querySelector(".inputName").value;

  window.open('mailto:me@gmail.com?subject=Design number ' + dataKey + '&body=Hi ' + name + '! \nIn the return message to this e-mail, you will receive details on how to pay the fee for the selected website template. This e-mail does not oblige you to purchase our product. If you have any questions, please write them below.');
  contact.classList.remove("show");
})

close.addEventListener("click", () => {
  contact.classList.remove("show");
})
