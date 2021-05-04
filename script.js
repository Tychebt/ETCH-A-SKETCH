function genDivs(v){ 
    var e = document.querySelector('.container'); // whatever you want to append the rows to: 
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.innerText = (i * v) + x;
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    } 
    //document.getElementById("code").innerText = e.innerHTML;

  }