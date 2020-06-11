function getNewTimeStamp(){
    const date = new Date().toDateString()
    const hour = new Date().getHours().toString()
    const minute = new Date().getMinutes().toString()
    const milliseconds = new Date().getUTCMilliseconds().toString()
    
    const now = `${date} - ${hour}:${minute}:${milliseconds}`

    return now
  }

  export { getNewTimeStamp }