const lunchDate = new Date(2026, 1, 25, 12, 10)

let dayE = document.getElementById("day")
let hourE = document.getElementById("hour")
let minuteE = document.getElementById("minute")
let secondE = document.getElementById("second")

function update() {
   const current = new Date()
    const diff = lunchDate - current
     if(diff <= 0)
     {
        dayE.textContent = "00"
        hourE.textContent = "00"
        minuteE.textContent = "00"
        secondE.textContent = "00"
        return
     }
     const day = Math.floor(diff / (1000 * 60 *60 *24))
     const hour = Math.floor((diff % (1000 *60*60*24))/(1000*60*60))
     const minute = Math.floor((diff % (1000 * 60 * 60)) /(1000 *60))
     const second = Math.floor((diff %   (1000 *60))/1000)


   dayE.textContent = String(day).padStart(2, "0")
  hourE.textContent = String(hour).padStart(2, "0")
  minuteE.textContent = String(minute).padStart(2, "0")
  secondE.textContent = String(second).padStart(2, "0")
  setTimeout(update,1000)
}

update()
