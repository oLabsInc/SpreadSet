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

