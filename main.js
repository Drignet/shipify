import openAir from "service.js"
openAir()

const weightInput = document.querySelector("#weight-value");
const weightUnit = document.querySelector("#weight");
const results = document.querySelectorAll(".results");
const amountAir = document.querySelector("#amount-value-air");
const nairaRateAir = document.querySelector("#naira-rate-air");
const airSubmitBtn = document.querySelector("#air-submit");

const seaSubmitBtn = document.querySelector("#sea-submit");
const cbmUnit = document.querySelector("#cbm");
console.log(cbmUnit.value)
const lenght = document.querySelector("#lenght");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const cbmValue = document.querySelector(".cbm");
const nairaRateSea = document.querySelector("#naira-rate-sea");
const amountSea = document.querySelector("#amount-value-sea");

airSubmitBtn.addEventListener("click", () => {
  (weightUnit.value === "kg") ? results[0].children[1].textContent = ((+weightInput.value) * (+amountAir.value) * (+nairaRateAir.value)).toFixed(2) : results[0].children[1].textContent = ((+weightInput.value / 1000) * (+amountAir.value) * (+nairaRateAir.value)).toFixed(2)
})

seaSubmitBtn.addEventListener("click", () => {
  let volume = ((+lenght.value) * (+width.value) * (+height.value));
  if(cbmUnit.value === "cm"){
    cbmValue.textContent = (volume / 1000000).toFixed(2);
    results[1].children[1].textContent = ((volume / 1000000) * (+amountSea.value) * (+nairaRateSea.value)).toFixed(2)
  }else{
    cbmValue.textContent = (volume / 1000000000)
    results[1].children[1].textContent = ((volume / 1000000000) * (+amountSea.value) * (+nairaRateSea.value)).toFixed(2)
  }
})
