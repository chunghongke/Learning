const msg = require('../api/index.js')
const assert = require('chai').assert
describe('test email format', function(){

  it('should have "@" sign',function(){
    assert(msg.test_email("234sfdagmail.com"),'should include "@" sign')
  })
  it('should not contain special chracter',function(){
    assert(msg.test_email("Q%#$"),'don\'t use special character')
  })
  
})