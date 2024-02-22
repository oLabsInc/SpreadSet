const
    allMarkers = document.querySelectorAll('.ar-place-marker-container')

allMarkers.forEach(marker => {
    console.log(marker)
    const
        markerLat = marker.querySelector('.lat'),
        markerLng = marker.querySelector('.lng'),
        lat = markerLat.getAttribute('data-point'),
        lng = markerLng.getAttribute('data-point')

    const markerLocation = {
        lat: Number(lat),
        lng: Number(lng)
    }
    console.log(markerLocation)

    
})

const allIconSets = document.querySelectorAll('.icon-set')

allIconSets.forEach(iconSet => {
    const
        iconSetHeaderEl = document.createElement('div'),
        iconSetValue = iconSet.getAttribute('data-el-header')
        
    iconSetHeaderEl.classList.add('icon-set-header')
    iconSetHeaderEl.innerText = iconSetValue
    iconSet.prepend(iconSetHeaderEl)
})