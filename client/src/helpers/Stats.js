export const getData = (user) => {
  var labels, values, data = [], pair =[];
  let users = JSON.parse(localStorage.getItem("usuarios"));
  if (users.length===1) {
    labels = users[0].fechasPartidas;
    values = users[0].partidas;
  } else {
    for (let i = 0; i < users.length; i++) {
      if (users[i].nombreUsuario === user.user) {
          labels = users[i].fechasPartidas;
          values = users[i].partidas;
      }
  }
  }
 for (let i = 0; i<labels.length;i++) {
   pair.push(labels[i]);
    pair.push(values[i]);
    data.push(pair);
    pair=[]
  }
 return data

} 







export function pintarGrafica (etiquetas, valores, titulo, id) {/*
      var data = {
        labels: etiquetas,
        datasets: [{
            label: titulo,
            backgroundColor: 'rgb(173, 193, 101)',
            borderColor: '#fff',
            color: '#fff',
            data: valores,
        }]

      };
    var options = {
        scales: {
          x: {
            ticks: {
              font: {
                size: 10,
              },
              backgroundColor: "red", // not working
              color: "white",　　// worked
            },
          },
          y: {
            min: 0,
            max: 10,
            ticks: {
            //   stepSize: 2,
              color: "white"
            },
          },
        },
      };
    var config = {
        type: 'bar',
        data: data,
        options: options
    }
      var myChart = new Chart(
        document.getElementById(id),
        config
    );*/
}

