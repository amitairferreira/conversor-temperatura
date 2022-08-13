function ConverterTemperatura() {
  var temperaturaCelsius = parseInt(document.getElementById('temperatura').value)
  
  var temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32
  
  var resultadoTela = document.getElementById('resultado')
  resultadoTela.innerHTML = ` ${temperaturaCelsius} °C equivale a ${temperaturaFahrenheit} °F`
  
}