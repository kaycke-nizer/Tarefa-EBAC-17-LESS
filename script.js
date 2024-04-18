function alq_calculum(){
    
    var hec = document.getElementById("hectare").value
    var alq = document.getElementById('alqueire').textContent

    if (document.getElementById('BA').checked) {
        document.getElementById('alqueire').textContent = (parseFloat(hec)*9.86).toFixed(2)
    } else if (document.getElementById('RO').checked) {
        document.getElementById('alqueire').textContent = (parseFloat(hec)*4.84).toFixed(2)
    } else if (document.getElementById('GO').checked) {
        document.getElementById('alqueire').textContent = (parseFloat(hec)*2.72).toFixed(2)
    } else {
        document.getElementById('alqueire').textContent = (parseFloat(hec)*2.42).toFixed(2)
    }
}