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

document.addEventListener('DOMContentLoaded', () => {
  const allCompanyDiv = document.querySelector('.shipping-companies');

  // JSON data
  const data = [
    {
      "name": "FreightYa",
      "phone": "+234 708 211 1555",
      "website": "www"
    },
    {
      "name": "TopFlight",
      "phone": "+86 159 8685 6909",
      "website": "www"
    },
    {
      "name": "Kash Global",
      "phone": "+234 814 223 6280",
      "website": "www"
    },
    {
      "name": "Main Service",
      "phone": "+234 702 509 0079",
      "website": "www"
    },
    {
      "name": "SkyJet (Grace)",
      "phone": "+86 166 2466 4343",
      "website": "www"
    },
    {
      "name": "SkyJet (Grace)",
      "phone": "+86 166 2466 4343",
      "website": "www"
    },
    {
      "name": "SkyJet (Grace)",
      "phone": "+86 166 2466 4343",
      "website": "www"
    },
    {
      "name": "SkyJet (Grace)",
      "phone": "+86 166 2466 4343",
      "website": "www"
    },
    {
      "name": "SkyJet (Grace)",
      "phone": "+86 166 2466 4343",
      "website": "www"
    },
    {
      "name": "SkyJet (Grace)",
      "phone": "+86 166 2466 4343",
      "website": "www"
    },
    {
      "name": "SkyJet (Grace)",
      "phone": "+86 166 2466 4343",
      "website": "www"
    }
  ];

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create table header
  const headerRow = document.createElement('tr');
  const headers = ['NAME', 'PHONE NUMBER', 'WEBSITE'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Create table body
  data.forEach(datum => {
    const row = document.createElement('tr');
    Object.values(datum).forEach((text, index) => {
      const td = document.createElement('td');
      if (index === 2) { // Check if the current value is for the website column
        const link = document.createElement('a');
        link.href = text;
        link.textContent = text;
        link.target = "_blank";
        td.appendChild(link);
      } else {
        td.textContent = text;
      }
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  allCompanyDiv.appendChild(table);
});
