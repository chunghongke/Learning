function index(req,res){
    res.render('index')
}
function message(req,res){
    var msg = req.body
    res.send(msg)
}
function test_email(mail){
    const email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email_reg.test(mail)
}
function test_name(name){
    let illegal_word=["fuck","bitch"," "]
    let num=/\d/
    let special=/[()[\]+=*&^%$#<>_|~`@!',:;./-]/
    if(typeof(name) !== 'string')
        return false
    for(let val of illegal_word){
        if(name==val) return false
    }
    if(num.test(name)){
        return false
    }
    if(special.test(name)){
        return false
    }
    return true
}
module.exports = {
    index,
    message,
    test_email,
    test_name
}