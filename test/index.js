const msg = require('../api/messageboard.js')
const assert = require('chai').assert

describe('test email format', function(){
  it('should be a legal mail-address',()=>{
    assert(msg.test_email('ano876@gmail.com'))
  })
  it('should have "@" sign',function(){
    assert.isFalse(msg.test_email("234sfdagmail.com"),'should include "@" sign')
  })
  it('should not contain special chracter',function(){
    assert.isFalse(msg.test_email("@.."),'don\'t use special character')
  })
  it('should not enter a empty string',()=>{
    assert.isFalse(msg.test_email("  "))
  })
  it('should have character before and after "@" sign ',() => {
    assert.isFalse(msg.test_email("@ssafsadf.casdf"))
    assert.isFalse(msg.test_email("sfasdf@"))
  })
})

describe('test the legal name',()=>{
  it('should be a legal name',()=>{
    assert(msg.test_name('kevin'))
  })
  it('should be a string',()=>{
    assert.isFalse(msg.test_name(2345))
  })
  it('should not contain the dirty word',() => {
    assert.isFalse(msg.test_name('fuck'))
    assert.isFalse(msg.test_name('bitch'))
  })
  it('should not a empty string',()=>{
    assert.isFalse(msg.test_name(' '))
  })
  it('should not contain number',()=>{
    assert.isFalse(msg.test_name('name456'))
  })
  it('should not contain special character',()=>{
    assert.isFalse(msg.test_name('`qqwr'))
    assert.isFalse(msg.test_name('wr'))
    assert.isFalse(msg.test_name('@qq<r'))
    assert.isFalse(msg.test_name('#q.wr'))
    assert.isFalse(msg.test_name('$q:wr'))
    assert.isFalse(msg.test_name('%qq\'wr'))
    assert.isFalse(msg.test_name('^qq;wr'))
    assert.isFalse(msg.test_name('&qqwr'))
    assert.isFalse(msg.test_name('|q-wr'))
    assert.isFalse(msg.test_name('()qqwr'))
  })
})

describe('filter the bad word',()=>{
  it('should not contain the bad word',()=>{
    assert.isFalse(msg.test_content('what are you fuck doing'))
  })

})