const path = require('path'); //importando o path em que a requisicao esta sendo feita -> maximiza compatibilidade
const HtmlWebpackPlugin = require('html-webpack-plugin'); //importando o plugin para gerar o html

const isDevelopment = process.env.NODE_ENV !== 'production'; //verifica se o ambiente e de desenvolvimento

module.exports = {
    mode: isDevelopment? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), //arquivo inicial da aplicação
    devtool: isDevelopment? 'eval-source-map' : 'source-map', //gera um arquivo de mapeamento para o codigo
    output: {
        path: path.resolve(__dirname, 'public'), //caminho do arquivo de saida
        filename: 'bundle.js' //nome do arquivo de saida
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], //extensoes que o webpack vai entender
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [ //testa se o arquivo e jsx, se for, converte para js usando o babel
            {
                test: /\.(t|j)sx$/, //expressao regular para identificar arquivos .jsx
                exclude: /node_modules/, //excluindo a pasta node_modules
                use: 'babel-loader' //usando o babel-loader para transpilar o codigo 
            },
        
            {
                test: /\.scss$/, //expressao regular para identificar arquivos .css
                exclude: /node_modules/, //excluindo a pasta node_modules
                use: ['style-loader', 'css-loader', 'sass-loader'] //usando o babel-loader para transpilar o codigo
            }]
    }
}