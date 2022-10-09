const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')
const h2 = document.getElementsByClassName('h2')
const spans = document.getElementsByTagName('span')
const p = document.querySelectorAll('.p')

const getJson = async () => {
    const response = await fetch('../data.json')
    return await response.json()
}
const getData = async (index, period) => {
    const arr = await getJson()
    if(period === 'daily') {
        const dailyh2 = arr[index].timeframes.daily.current + 'hrs'
        const spanDaily = `Yesterday - ${arr[index].timeframes.daily.previous}hrs`
        h2[index].innerText = dailyh2
        spans[index].innerText = spanDaily 
    }
    else if (period === 'weekly') { 
        const weeklyh2 = arr[index].timeframes.weekly.current + 'hrs'
        const spanWeekly = `Last Week - ${arr[index].timeframes.weekly.previous}hrs`
        h2[index].innerText = weeklyh2
        spans[index].innerText = spanWeekly
    } 
    else if (period === 'monthly') {
        const monthlyh2 = arr[index].timeframes.monthly.current + 'hrs'
        const spanMonthly = `Last Mounth - ${arr[index].timeframes.monthly.previous}hrs`
        h2[index].innerText = monthlyh2
        spans[index].innerText = spanMonthly
    }
}

let selectedIdx = 1

function selectedP(index) {
    p[selectedIdx].removeAttribute('selected')
    p[index].setAttribute('selected', "")
    selectedIdx = index
}

daily.onclick = () => {
    for(i = 0; i<h2.length; i ++)
    getData(i, 'daily')
    selectedP(0)
}

weekly.onclick = () => {
    for(i = 0; i<h2.length; i ++)
    getData(i, 'weekly')
    selectedP(1)
}

monthly.onclick = () => {
    for(i = 0; i<h2.length; i ++)
    getData(i, 'monthly')
    selectedP(2)
}
