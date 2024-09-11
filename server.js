const express = require('express')
const path = require('path')//path is inbuilt module in node js
const app = express()
const multer  = require('multer')
const {mergePdfs} = require('./mergepdf')//mergePdfs would be an object so we have to use destructuring while importing this method from testpdf.js
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))//we are serving complete html file to server
})
app.post('/merge', upload.array('pdfs', 2), async function (req, res, next) {//we have installed multer to upload files to express js server
    // here pdfs is name of input type in our html file and we are using upload.array bcoz we want more than one file at a same time
    // and 2 is the maximum number of files
   // console.log(req.files); just for checking
  let d= await mergePdfs(path.join((__dirname, req.files[0].path)), path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:3000/static/${d}.pdf`)
    //res.send({data: req.files});//it sends response of our files data from request
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})