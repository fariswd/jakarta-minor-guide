const app = require('express')();
const listRouter = require('./router/listRouter')

app.use('/v1/list', listRouter)

app.listen(3000, () => {
  console.log('running on port 3000')
})
