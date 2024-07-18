let inputtext = document.querySelector("#InputNumber");
let checkBtn = document.querySelector("#checkBtn");
let resultBox = document.querySelector(".result");
let restart = document.querySelector("#restart");

let count = 1;
let genNum = Math.floor(Math.random() * 100);

console.log(genNum);

checkBtn.addEventListener("click", () => {
  let finalInputValue = inputtext.value;

  if (finalInputValue >= "0" && finalInputValue <= Infinity.toString()) {
    finalInputValue = Number(finalInputValue);
    if (finalInputValue < genNum) {
      resultBox.innerText = `Enter a bigger Number than ${finalInputValue}`;
      count++;
      inputtext.value = "";
    } else if (finalInputValue > genNum) {
      resultBox.innerText = `Enter a Smaller Number than ${finalInputValue}`;
      count++;
      inputtext.value = "";
    } else if (finalInputValue === genNum) {
      resultBox.innerText = `Yeah, You guess it in ${count} round`;
      resultBox.classList.add("win");
      resultBox.classList.remove("result");
      checkBtn.disabled = true;
    } else {
      resultBox.innerText = `Wrong entry`;
    }
  } else {
    resultBox.innerText = `Please enter a valid Number`;
  }
});

restart.addEventListener("click", () => {
  location.reload();
});
