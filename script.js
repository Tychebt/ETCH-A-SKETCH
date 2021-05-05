
    var e = document.querySelector('.container'); // whatever you want to append the rows to: 
    e.style.display = 'table-cell';
    for(var i = 0; i < 16; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= 16; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
         
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    } 

    e.addEventListener("mouseover",function(event){
      event.target.style.background = "orange";
    }, false);