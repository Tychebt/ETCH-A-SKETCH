
    let value = prompt("How many cells in you table ?", 16)
    
    var e = document.querySelector('.container'); // whatever you want to append the rows to: 
    e.style.display = 'table-cell';
    for(var i = 0; i < value; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= value; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.style.height = `calc(960px/${value})`

          row.appendChild(cell); 
          cell.addEventListener("mouseover",function(event){
            var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            event.target.style.background = `${randomColor}`
          }, false);
      } 
      e.appendChild(row); 
    } 
           

    let reset = document.querySelector('.reset')
    reset.addEventListener("click",function(event){
  

      window.location.reload()
      
     
          }, false);