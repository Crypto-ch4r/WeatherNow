window.addEventListener('load', ()=>{
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura__valor')
    let temperaturaDescripcion = document.getElementById('temperatura__descripcion')

    let ubicacionCiudad = document.getElementById('ubicacion__ciudad') 
    let icono = document.getElementById('ubicacion__iconoAnim')

    let vientoVelocidad = document.getElementById('velocidad')

    let sr = document.getElementById('puesta')
    let ss = document.getElementById('salida')

    let feels = document.getElementById('salida')

    if(navigator.geolocation){{
        navigator.geolocation.getCurrentPosition( posicion =>{
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            //Por ubicación actual
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=`
            
            //
            fetch(url)
            .then( response => {return response.json() })
            .then (data => {
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} °C`

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc

                ubicacionCiudad.textContent = data.name

                vientoVelocidad.textContent = `${data.wind.speed} m/s`

                sr = data.sunrise

                ss = data.sunset

                console.log(data)

                //para iconos dinámicos
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      icono.src='img/animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      icono.src='img/animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      icono.src='img/animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      icono.src='img/animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        icono.src='img/animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      icono.src='img/animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        icono.src='img/animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      icono.src='img/animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }
            })
            .catch (error =>{
                console.log(error)
            })
        })
    }}
})