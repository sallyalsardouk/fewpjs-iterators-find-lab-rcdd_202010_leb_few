const testVar = {}

function testFunc() {
  return "hi"
}

 superbowlWin=(record){
  let r=record.find(record=>record.result==="W")
  return r? r.year
}