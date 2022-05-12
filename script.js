
const utskrift = document.getElementById("utskrift");
const btn = document.getElementById("btn");
const btn3 = document.getElementById("btn3");
const fnavn = document.getElementById("fnavn")
const wrapper = document.getElementById("wrapper");

btn.addEventListener("click", function(event){
    event.preventDefault();
    
    utskrift.innerHTML = "Hei " + fnavn.value + "! \nBestillingen din er godkjent.";
  });

  btn3.addEventListener("click", function(event){
    wrapper.style.backgroundColor = "black";
    wrapper.innerHTML = "";
    wrapper.style.height = "2000px";
    

  });
