let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totalCount = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count <= 0)
        return
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalCount += count
    count = 0
    countEl.textContent = count
    totalEl.innerText = "Total Steps: " + totalCount
}

function reset() {
    count = 0
    totalCount = 0
    countEl.textContent = count
    saveEl.textContent = "Today's walks: "
    totalEl.innerText = "Total Steps: 0"
}

