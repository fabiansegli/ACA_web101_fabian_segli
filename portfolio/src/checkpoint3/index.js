let count = 0

const increment = () => {
    console.log("hit me again")
    count = count + 1
    document.getElementById("counter").innerHTML = count
}
const addAutoclicker = () => {
    if (count >= 25) {
        count = count - 25
        document.getElementById("counter").innerHTML = count
        let interval = setInterval(increment,1000)
    }
}