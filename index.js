function hi(){
  var list = ["Steven", "Khava", "Jessica", "Dimitre", "Harshita", "Roopak", "Sydney", "Walter", "Juan", "Isabela", "Sloane", "Zoë", "Zoe", "Camilla", "Morgan", "Darya", "Aishat", "Diana", "Alison", "Kathit", "Candace", "Kowalyk"]
  var password = ["kathitisthebest"];
  var myName = document.getElementById("demo").value;
  var letter = myName.slice(0,1);
  var myPassword = document.getElementById("password").value;
  var capitalize = letter.toUpperCase();
  var letters = myName.slice(1,myName.length);
  var noCapital = letters.toLowerCase();
  var yourName = capitalize + noCapital;
  
  if(list.includes(yourName) && password.includes(myPassword)){
    if(yourName === "Candace" && password.includes(myPassword)|| yourName === "Kowalyk" && password.includes(myPassword)){
      document.getElementById("cofl").style.display = "none";
      document.getElementById("message").innerHTML = "Mrs. Kowalyk";
      alert("Aww, Thanks Mrs.Kowalyk, Thanks for confirming me that I am! Now that you have accepted it... you must refer to me as 'God Kathit' from now on, Just Kidding! 🤣");
    }
    else{
      document.getElementById("message").innerHTML = yourName;
      document.getElementById("cofl").style.display = "none";
      alert("Aww, Thanks " + yourName + ", Thanks for confirming that I am!  Now that you have accepted it... you must refer to me as 'God Kathit' from now on, Just Kidding! 🤣");
      }
  }
  else{
    alert("Please stop here and retry");
  }
}

function noWay(){
  if (document.getElementById("message").innerHTML == "Mrs. Kowalyk"){
    document.getElementById("clue").innerHTML = "BCEEHIKLMPQRSUV";
  }
  else if (document.getElementById("message").innerHTML == "Steven"){
    document.getElementById("clue").innerHTML = "Yr";
  }
  else if (document.getElementById("message").innerHTML == "Khava"){
    document.getElementById("clue").innerHTML = "ow";
  }
  else if (document.getElementById("message").innerHTML == "Jessica"){
    document.getElementById("clue").innerHTML = "ua";
  }
  else if (document.getElementById("message").innerHTML == "Dimitre"){
    document.getElementById("clue").innerHTML = "&2";
  }
  else if (document.getElementById("message").innerHTML == "Harshita"){
    document.getElementById("clue").innerHTML = "re";
  }
  else if (document.getElementById("message").innerHTML == "Roopak"){
    document.getElementById("clue").innerHTML = "t3";
  }
  else if (document.getElementById("message").innerHTML == "Sydney"){
    document.getElementById("clue").innerHTML = "hw";
  }
  else if (document.getElementById("message").innerHTML == "Walter"){
    document.getElementById("clue").innerHTML = "eb";
  }
  else if (document.getElementById("message").innerHTML == "Juan"){
    document.getElementById("clue").innerHTML = "6e";
  }
  else if (document.getElementById("message").innerHTML == "Isabela"){
    document.getElementById("clue").innerHTML = "as";
  }
  else if (document.getElementById("message").innerHTML == "Sloane"){
    document.getElementById("clue").innerHTML = "xt";
  }
  else if (document.getElementById("message").innerHTML == "Zoe" || document.getElementById("message").innerHTML == "Zoë"){
    document.getElementById("clue").innerHTML = "te";
  }
  else if (document.getElementById("message").innerHTML == "Camilla"){
    document.getElementById("clue").innerHTML = "za";
  }
  else if (document.getElementById("message").innerHTML == "Morgan"){
    document.getElementById("clue").innerHTML = "sc";
  }
  else if (document.getElementById("message").innerHTML == "Darya"){
    document.getElementById("clue").innerHTML = "9h";
  }
  else if (document.getElementById("message").innerHTML == "Aishat"){
    document.getElementById("clue").innerHTML = "ye";
  }
  else if (document.getElementById("message").innerHTML == "Diana"){
    document.getElementById("clue").innerHTML = "rx";
  }
  else if (document.getElementById("message").innerHTML == "Alison"){
    document.getElementById("clue").innerHTML = "!z";
  }
}
