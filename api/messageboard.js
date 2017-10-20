const test = require('./index.js')
function index(req,res){
    res.render('index')
}
function message(req,res){
    var msg = req.body
    res.send(msg)
}
function test_email(msg){
    const email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email_reg.test(msg)
}

module.exports = {
    index,
    message,
    test_email
}