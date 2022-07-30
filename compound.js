window.addEventListener("load", () => {
  const compoundButton = document.querySelector("[data-calculate-button]");

  compoundButton.addEventListener("click", compoundInterest);

  function compound(money, years, rate, monitor) {
    const interest = money * (rate / 100);
    const newAmount = interest + money;
    if (monitor === years) {
      return newAmount;
    } else {
      monitor++;
      return compound(newAmount, years, rate);
    }
  }

  function compoundInterest() {
    const amount = document.querySelector("#amount").value;
    const time = document.querySelector("#duration").value;
    const interestRate = document.querySelector("#rate").value;
    const results = document.querySelector("[data-results]");
    let compoundDurationMonitor = 0;

    if (amount !== "" && time !== "" && interestRate !== "") {
      const solution = compound(
        amount,
        time,
        interestRate,
        compoundDurationMonitor
      ).toFixed(2);
      if (solution) {
        results.textContent = `Ksh ${solution.toLocaleString()}`;
      }
    } else {
      results.textContent = `Pass all values...`;
    }
  }
});
