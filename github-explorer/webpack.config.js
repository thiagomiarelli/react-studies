const path = require('path'); //importando o path em que a requisicao esta sendo feita -> maximiza compatibilidade
const HtmlWebpackPlugin = require('html-webpack-plugin'); //importando o plugin para gerar o html

module.exports = {
    mode: 'development', //modo de desenvolvimento
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo inicial da aplicação
    output: {
        path: path.resolve(__dirname, 'public'), //caminho do arquivo de saida
        filename: 'bundle.js' //nome do arquivo de saida
    },
    resolve: {
        extensions: ['.js', '.jsx'], //extensoes que o webpack vai entender
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [ //testa se o arquivo e jsx, se for, converte para js usando o babel
            {
                test: /\.jsx$/, //expressao regular para identificar arquivos .jsx
                exclude: /node_modules/, //excluindo a pasta node_modules
                use: 'babel-loader' //usando o babel-loader para transpilar o codigo 
            }]
    }
}