var request = new XMLHttpRequest()

request.open('GET', 'http://api.postcodes.io/postcodes/BS206AQ', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    console.log(data)

    if (request.status >= 200 && request.status < 400) {
        console.log("lat =", data.result.latitude)
        console.log("long =", data.result.longitude)
        console.log("ccg =",data.result.ccg)

        //data[1].forEach(location => {
           // console.log(location.postcode)
           // console.log(location.longitude)
           // console.log(location.latitude)
       // })
    } else {
        console.log('error')
    }
}

request.send()