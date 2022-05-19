/*fetch('alberguesFav.json')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
  
  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].nombre + ' ' + data[i].localidad;
      mainContainer.appendChild(div);
    }
  }*/
  /*const meJson =`
    {
        "nombre": "albergue1",
        "ciudad": "vigo"
    }
    `;

  const me = JSON.parse(meJson);
  console.log(me.nombre);

  fr = new FileReader();
  fr.readAsText('/bbdd/alberguesFav.json');
  //const json = JSON.stringify('/bbdd/alberguesFav.json')
  console.log(fr)*/

  import { writeFile } from 'fs';
  
  // Data which will write in a file.
  let data = "Learning how to write in a file."
    
  // Write data in 'Output.txt' .
  writeFile('hola.txt', data, (err) => {
        
      // In case of a error throw err.
      if (err) throw err;
  })  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  });