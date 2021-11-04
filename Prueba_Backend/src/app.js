const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const flash = require('connect-flash')
const app = express();

// rutas
// const routerUser = require('./app/router/routerUser')
const routes = require('./routes.js')

// configuration
app.set('port', process.env.PORT || 4000); 


// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(flash())



app.listen(app.get('port'), ()=>{ console.log(`Tu puerto es ${app.get('port')}`) })

app.use('/api', routes)