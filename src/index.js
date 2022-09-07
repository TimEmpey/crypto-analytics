import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//Business Logic
function getToken(ids, intervals, num) {
  let request = new XMLHttpRequest();
  const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${ids}&intervals=${intervals}`;
  
  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, intervals, num);
    }
  });
  request.open("GET", url, true);
  request.send();
}


//User Logic
function printElements(response, intervals, num) {
  response.forEach(function(cryptoOutput) {
    let p = document.createElement("h4");
    p.innerText = cryptoOutput.currency;
    if (num === 1) {
      document.getElementById("outputs").appendChild(p);
    } else {
      document.getElementById("outputs2").appendChild(p);
    }
    let p1 = document.createElement("p");
    p1.innerText = "Current Price: $" + cryptoOutput.price;
    if (num === 1) {
      document.getElementById("outputs").appendChild(p1);
    } else {
      document.getElementById("outputs2").appendChild(p1);
    }
    let p2 = document.createElement("p");
    if (intervals === "1d") {
      p2.innerText = "1 Day Change: $" + cryptoOutput["1d"].price_change;
    } else if (intervals === "7d") {
      p2.innerText = "1 Week Change: $" + cryptoOutput["7d"].price_change;
    } else if (intervals === "30d") {
      p2.innerText = "1 Month Change: $" + cryptoOutput["30d"].price_change;
    } else if (intervals === "365d") {
      p2.innerText = "1 Year Change: $" + cryptoOutput["365d"].price_change
    } else {
      p2.innerText = "Year To Date: $" + cryptoOutput["ytd"].price_change
    }
    if (num === 1) {
      document.getElementById("outputs").appendChild(p2);
    } else {
      document.getElementById("outputs2").appendChild(p2);
    }
  });
}





function handleForm(e) {
  e.preventDefault();
  let outputs = document.getElementById("outputs")
  outputs.innerHTML = null
  let idsArray = []
  let ids = document.querySelectorAll("input[type=checkbox]:checked");
  let intervals = document.getElementById("intervals").value;
  for (let i = 0; i < ids.length; i++) {
    idsArray.push(ids[i].value)
  }
  getToken(idsArray, intervals, 1);
}

function handleForm2(e) {
  e.preventDefault();
  let outputs = document.getElementById("outputs2")
  outputs.innerHTML = null
  let intervals = document.getElementById("intervals2").value;
  let altId = document.querySelector("select#alt").value;
  getToken(altId, intervals, 2);
}

window.addEventListener("load", function() {
  document.querySelector("form#token-select").addEventListener("submit", handleForm);
  document.querySelector("form#alt-select").addEventListener("submit", handleForm2);
});
// function to take the GET and output it to html