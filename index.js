function getTicket() {
  let ticket = ''
  const letters = 'ABCDEFGHIjKLMNOPQRSTUVWXYZ'
  // way 1
  // ticket += letters[Math.floor(Math.random() * 26)]
  // ticket += letters[Math.floor(Math.random() * 26)]
  // ticket += Math.floor(Math.random() * 10)
  // ticket += Math.floor(Math.random() * 10)
  // ticket += Math.floor(Math.random() * 10)
  // ticket += Math.floor(Math.random() * 10)

  // way 2
  for (let i = 0; i < 2; i++) {
    ticket += letters[Math.floor(Math.random() * 26)]
  }
  for (let j = 0; j < 4; j++) {
    ticket += Math.floor(Math.random() * 10)
  }
  


  




  

 
  console.log(ticket)
  return ticket
}
getTicket()


module.exports = {
  getTicket
}