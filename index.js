
var input = document.getElementById('input');
input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {
    
    // Oppgave 1

    console.log("Elevenes navn:");
    rows.forEach(element => {

      console.log(element[2] + " " + element[3]);
    });

    // Oppgave 2

    var divContainerAll = document.createElement("div");
    document.body.append(divContainerAll);

    rows.forEach(element => {

      var imgAll = document.createElement('img');
      imgAll.src = element[7];
      imgAll.style.width = "100px";
      divContainerAll.appendChild(imgAll);
    });

    //Oppgave 3

    var divContainerElev1 = document.createElement("div");
    document.body.append(divContainerElev1);

    rows.forEach(element => {

      if (element[0] === 1) {
        var imgElev1 = document.createElement('img');
        imgElev1.src = element[7];
        imgElev1.style.width = "100px";
        divContainerElev1.appendChild(imgElev1);
      }
    });

    // Oppgave 4

    var divContainerAsker = document.createElement("div");
    document.body.append(divContainerAsker);
    
    rows.forEach(element => {

      if (element[8] === 'Asker') {
        var imgAsker = document.createElement('img');
        imgAsker.src = element[7];
        imgAsker.style.width = "100px";
        divContainerAsker.appendChild(imgAsker);
      }
    });

    // Oppgave 5

    var divContainerAlder = document.createElement("div");
    document.body.append(divContainerAlder);

    rows.forEach(element => {

      if (parseInt(element[4]) === 15) {
        var imgAlder = document.createElement('img');
        imgAlder.src = element[7];
        imgAlder.style.width = "100px";
        divContainerAlder.appendChild(imgAlder);
        console.log("15 år gammel:", element[2] + " " + element[3]);
      }
    });

    // Oppgave 6

    var eldstePers = rows.reduce(function(prev, current) {

      return parseInt(prev[4]) > parseInt(current[4]) ? prev : current;
    });

    console.log("Den eldste i klassen er:", eldstePers[2], eldstePers[3], "med alderen:", eldstePers[4]);
  });
});

