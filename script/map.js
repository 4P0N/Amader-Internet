// Initialize and add the map
function initMap() {
    // The location of Dhaka
    const Dhaka = { lat: 23.81575594280469, lng: 90.41519425052755 }; 
    
    // The map, centered at Dhaka
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: Dhaka,
    });

    // The marker, positioned at Dhaka
    const marker = new google.maps.Marker({
        position: Dhaka,
        map: map,
    });


    let latt, lngg

    // chattogram
    [latt, lngg] = [ 22.48584589534597, 91.78415044916761 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // narayanganj
    [latt, lngg] = [ 23.632198996865714, 90.49827835541181 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // tongi
    [latt, lngg] = [ 23.904298613651054, 90.4069545111589 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });
    
    // bogura
    [latt, lngg] = [ 24.967637896297862, 89.41131855597395 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // jamalpur
    [latt, lngg] = [ 24.926668479026862, 89.97103445508804 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // pabna 
    [latt, lngg] = [ 24.044332101643857, 89.25417654044843 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // khulna 
    [latt, lngg] = [ 22.86769768299896, 89.55080741631572 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // sylhet 
    [latt, lngg] = [ 24.906741010149194, 91.89638841512148 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // cox's bazar
    [latt, lngg] = [ 21.44193813355636, 92.00370730111952 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // rajshahi
    [latt, lngg] = [ 24.462608000753118, 88.59924720445794 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // rangpur 
    [latt, lngg] = [ 25.837324532427044, 89.28676006760236 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // dinajpur 
    [latt, lngg] = [ 25.714902588424422, 88.63032125444012 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // mymensingh
    [latt, lngg] = [ 24.82289826846939, 90.40594252576761 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // naogaon
    [latt, lngg] = [ 24.889862492061035, 88.94157895358767 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // jashore
    [latt, lngg] = [ 23.26659694488116, 89.18047874093399 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // barishal 
    [latt, lngg] = [ 22.785750611667964, 90.35896361368715 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });
    
    // mongla 
    [latt, lngg] = [ 22.58506054455894, 89.61318693538631 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });
    
    // savar 
    [latt, lngg] = [ 23.898858341867076, 90.16216603668794 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // cumilla 
    [latt, lngg] = [ 23.400735993916037, 91.17984044440179 ]
    new google.maps.Marker({
        position: { lat: latt, lng: lngg },
        map: map,
    });

    // [latt, lngg] = [ 0000 ]
    // new google.maps.Marker({
    //     position: { lat: latt, lng: lngg },
    //     map: map,
    // });
}