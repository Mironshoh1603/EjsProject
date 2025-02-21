let btn = document.querySelector("#btnSubmit");

btn.addEventListener("click", (event) => {
  console.log("Ishladi");
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;
  console.log(name, email, subject, message);

  fetch("http://localhost:4000/api/v1/contact", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, email, subject, message }),
  })
    .then((data) => data.json())
    .then((contact) => {
      console.log(contact);
    })
    .catch(console.log);
  //   event.preventDefault();
});
