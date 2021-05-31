const express = require('express')//Importa el modulo
const app = express()//Crea una variable del modulo express
 
app.get('/', (req, res) => {//Funcion de express
    //console.log(req);
  //Funcion de express
    //res.send('<h1>Hello World</h1>');
    let ejemplo ={
        clave: "valor",
        clave2: "valor 1",
        clave3: "valor 2",
        clave4: "valor 3",
    };
    let ejemplo2 ={
        clave: "x",
        clave2: "x 1",
        clave3: "x 2",
        clave4: "x 3",
    };
    /*res.json({
        a: ejemplo,
        b: ejemplo2
    });*/
    res.json([
        ejemplo,
        ejemplo2
    ]);
})

app.get('/nuevo', function (req, res) {//Funcion de express
    //Funcion de express
      res.send('Hello World Nuevo');
  })
 
app.listen(3000)//Iniciando mi servidor en el puerto 3000