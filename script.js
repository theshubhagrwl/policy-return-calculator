var premium = document.querySelector("#premium");
var pYrs = document.querySelector("#paid-years");
var unpYrs = document.querySelector("#unpaid-years");
var interest = document.querySelector("#yearly-interest");
const submit = document.querySelector("#submit");

function calc() {
  let p = +premium.value;
  let inte = +interest.value;
  let pyrs = +pYrs.value;
  let t1 = parseFloat(p);
  let unpyrs = +unpYrs.value;

  console.log(p, inte, pyrs);

  if (p != "" && inte != "" && pyrs != "") {
    for (let i = 0; i < pyrs; i++) {
      t1 += (inte / 100) * t1;
      if (i != pYrs - 1) {
        t1 += p;
      }
    }
  }

  for (let i = 0; i < unpyrs; i++) {
    t1 += (inte / 100) * t1;
  }

  document.querySelector(
    ".result"
  ).innerHTML = `After <b>${pyrs} years</b> with <b>${inte}%</b> interest you will have <b>₹${t1.toFixed(
    2
  )}</b>`;
}

// event listeners
premium.addEventListener("change", calc);
pYrs.addEventListener("change", calc);
interest.addEventListener("change", calc);
unpYrs.addEventListener("input", calc);
