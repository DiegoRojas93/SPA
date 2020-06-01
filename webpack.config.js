const path = require('path'); //permite hacia donde estamos dentro del directorio (local o nube)
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Permite trabajar en el HTML

//Modulo que vamos a exportar donde viene cada configuracion de lo que va a suceder

module.exports = {
  entry: './src/index.js', //punto de entrada, aqui vivira todo el codigo inicial
  output: { //Donde se va a poner todo este poryecto compilado listo para enviar a produccion. 
    path: path.resolve(__dirname, 'dist'), //Se encargara identificar donde se encuentre la carpeta y ahi poner otra carpeta 
    filename: 'main.js' //permite darle nombre al archivo que se va a generar una vez se compile el proyecto
  },
  resolve:{ // ¿Que extenciones va a trabajar nuestro proyecto?
    extensions: ['.js'], //permite darle nombre al archivo que se va a generar una vez se compile el proyecto
  },
  module: {
    rules: [
      {
        test: /\.js?$/, //Reject: es una forma de establecer valores que vamos a filtrar ya sea de una ruta, elemento o de los archivos que vamos estar utilizando.
        exclude: /node_modules/, //Exluir la carpeta de node_modules
        use: { //indicar que se va a utilizar una configuracion prestablecida
          loader: 'babel-loader',
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin([ // se establece el template principal
      {
        inject: true, //¿inyectaremos a un archivo html un valor?
        template: './public/index.html', // template base HTML
        filename: './index.html',
      }
    ]),
  ]
}