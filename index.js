
//Oppgave 1



var input = document.getElementById('input')
input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {
    console.log(rows);
    rows.forEach(element => {
        console.log(element[2] + " " + element[3])
    });
  })
})

//Oppgave 2


var input = document.getElementById('input')
input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {
    
    var divcontainer = document.createElement ("div")
    document.body.append (divcontainer)
    rows.forEach(element => {
        img = document.createElement('img')
        img.src = element [7]
        img.style.width = "100px"
        divcontainer.appendChild(img)
    })
  })
})

 //Oppgave 3
 
 var input = document.getElementById('input')
input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {
    
    var divcontainer = document.createElement ("div")
    document.body.append (divcontainer)
    rows(element  => {
        img = document.createElement('img')
        img.src = element [7]
        img.style.width = "100px"
        divcontainer.appendChild(img)
    })
  })
})

