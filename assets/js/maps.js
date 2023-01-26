const citymap = {
            me: {
                center: { lat: 51.750, lng: -0.442 },
                size: 25000,
            }
        };

        var map;
        function initMap() {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 51.750, lng: -0.472 },
                zoom: 9.9
            });

            for (const city in citymap) {
                // Add the circle for this city to the map.
                const cityCircle = new google.maps.Circle({
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.35,
                    map,
                    center: citymap[city].center,
                    radius: Math.sqrt(citymap[city].size) * 100,
                });
            };
        };