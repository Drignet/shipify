const weightInput = document.querySelector("#weight-value");
const weightUnit = document.querySelector("#weight");
const results = document.querySelectorAll(".results");
const amountAir = document.querySelector("#amount-value-air");
const nairaRateAir = document.querySelector("#naira-rate-air");
const airClearingFee = document.querySelector("#air-clearing-fee");
const airSubmitBtn = document.querySelector("#air-submit");
const seaSubmitBtn = document.querySelector("#sea-submit");
const cbmUnit = document.querySelector("#cbm");
const length = document.querySelector("#length");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const cbmValue = document.querySelector(".cbm");
const nairaRateSea = document.querySelector("#naira-rate-sea");
const amountSea = document.querySelector("#amount-value-sea");
const seaClearingFee = document.querySelector("#sea-clearing-fee");
const shipPage = document.querySelector(".ship");

const airPageBtn = document.querySelector("#airPage");
const seaPageBtn = document.querySelector("#seaPage");

const ball = document.querySelector(".ball");
const allCompanyDiv = document.querySelector(".shipping-companies");

airPageBtn?.addEventListener("click", () => {
  window.location.href = "air.html";
});

seaPageBtn?.addEventListener("click", () => {
  window.location.href = "sea.html";
});

airSubmitBtn?.addEventListener("click", () => {
  weightUnit.value === "kg"
    ? (results[0].children[1].textContent = ((
        +weightInput.value *
        +amountAir.value *
        +nairaRateAir.value
    ) + (+airClearingFee.value * +weightInput.value)).toFixed(2))
    : (results[0].children[1].textContent = ((
        (+weightInput.value / 1000) *
        +amountAir.value *
        +nairaRateAir.value
      ) + (+airClearingFee.value * (+weightInput.value / 1000))).toFixed(2));
});

seaSubmitBtn?.addEventListener("click", () => {
  let volume = +length.value * +width.value * +height.value;
  if (cbmUnit.value === "cm") {
    let cbmCM = volume / 1000000;
    cbmValue.textContent = cbmCM.toFixed(2);
    results[0].children[1].textContent = ((
      (volume / 1000000) *
      +amountSea.value *
      +nairaRateSea.value
    ) + (cbmCM * +seaClearingFee.value)).toFixed(2);
  } else {
    let cbmMM = volume / 1000000000;
    cbmValue.textContent = cbmMM;
    results[0].children[1].textContent = ((
      (volume / 1000000000) *
      +amountSea.value *
      +nairaRateSea.value
    ) + (cbmMM * +seaClearingFee.value)).toFixed(2);
  }
});

ball?.addEventListener("click", () => {
  window.location.href = "index.html";
});

fetch('shipping-companies.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // You can process your data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

