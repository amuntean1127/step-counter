let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalCount += count
    count = 0
    countEl.textContent = count
    totalEl.innerText = "Total Steps: " + totalCount
}

