exports.index = function(req,res){
    res.render('index')
}
exports.message = function(req,res){
    var msg = req.body
    console.log(msg)
    res.send(msg)
}
