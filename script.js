
    let value = prompt("How many columns do you want ?", 64)

    while(value>=101 || value<-1){value = prompt("Please choose a value between 0 and 100", 64)}
    
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

          var mouseISdown = false

          cell.addEventListener("mousedown",function(event){
            mouseISdown = true
          console.log(mouseISdown)
          });

          cell.addEventListener("mouseup",function(event){
            mouseISdown = false
            console.log(mouseISdown)
            });
          

            cell.addEventListener("mousemove",function(event){
              var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
              if(mouseISdown == true){
              event.target.style.background = `${randomColor}`
              console.log(mouseISdown)
              }
            }, false);
          
        } 
      e.appendChild(row); 
    } 
           

    let reset = document.querySelector('.reset')
    reset.addEventListener("click",function(event){
      window.location.reload()
          }, false);