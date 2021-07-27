// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {


    //points.coordinates from database
    const points = [7.0376836, 5.4848632]


    //polygons.coordinates from database
    const coordinates =  [
        [
            [
                7.0365702,
                5.4849501
            ],
            [
                7.0366533,
                5.4860311
            ],
            [
                7.0366743,
                5.4860273
            ],
            [
                7.0366798,
                5.4860323
            ],
            [
                7.0366789,
                5.4860325
            ],
            [
                7.0366783,
                5.4860355
            ],
            [
                7.0366814,
                5.4860459
            ],
            [
                7.0366926,
                5.4860536
            ],
            [
                7.036775,
                5.4861116
            ],
            [
                7.0368164,
                5.4861403
            ],
            [
                7.0368384,
                5.486151
            ],
            [
                7.0368544,
                5.486151
            ],
            [
                7.0369136,
                5.4860945
            ],
            [
                7.0369444,
                5.4860745
            ],
            [
                7.0370347,
                5.4859489
            ],
            [
                7.0371364,
                5.4858021
            ],
            [
                7.0371829,
                5.4857283
            ],
            [
                7.0372152,
                5.485679
            ],
            [
                7.0372814,
                5.4855865
            ],
            [
                7.0373356,
                5.4854878
            ],
            [
                7.0373509,
                5.4854687
            ],
            [
                7.0373613,
                5.4854601
            ],
            [
                7.0373699,
                5.4854468
            ],
            [
                7.0374091,
                5.485386
            ],
            [
                7.0375826,
                5.4851374
            ],
            [
                7.0376058,
                5.485097
            ],
            [
                7.0376114,
                5.4850877
            ],
            [
                7.0376378,
                5.4850327
            ],
            [
                7.0365702,
                5.4849501
            ]
        ]
    ]

    let polygon = []

    coordinates[0].map(i => {
        const obj = {
            lat: i[1],
            lng: i[0]
        }

        polygon.push(obj)
    });





    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: points[0], lng: points[0] },
        mapTypeId: "terrain",
    });
    // Define the LatLng coordinates for the polygon's path.

    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
        paths: polygon,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    bermudaTriangle.setMap(map);
}