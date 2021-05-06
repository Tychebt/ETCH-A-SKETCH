
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
var cmp=0;
          //cell.addEventListener("mousedown",function(event){
            cell.addEventListener('dblclick', function (event) {
              if(cmp===0){
              console.log('down >> ',event);
              mouseISdown = true
              console.log(mouseISdown);
              setTimeout( ()=>{cmp++},10);
              }
            else if(cmp===1){
              console.log('Up  >> ',event);
              mouseISdown = false
              console.log(mouseISdown)
              setTimeout( ()=>{cmp=0},10);
            }
          });

         /* calc(num1,num2,)
          function calc(...sum){

          }
          */

          /*cell.addEventListener("mouseup",function(event){
            console.log('Up  >> ',event);
            mouseISdown = false
            console.log(mouseISdown)
            });
          */

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