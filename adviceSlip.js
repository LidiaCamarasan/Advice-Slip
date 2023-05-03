const button = document.querySelector("#advice-btn");
const text = document.querySelector(".text-advice");
const adviceId = document.querySelector(".title-advice");

async function getAdvice() {
  const adviceData = await fetch("https://api.adviceslip.com/advice").then(
    (response) => response.json()
  );

  console.log(adviceData);

  adviceId.innerHTML = `ADVICE ${adviceData.slip.id}`;
  text.innerHTML = `"${adviceData.slip.advice}"`;
}

button.addEventListener("click", getAdvice);
