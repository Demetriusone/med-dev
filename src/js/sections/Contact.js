import GoogleMapsApi from '../lib/GoogleMapsAPI';

class Contact {
  constructor() {
    this.block = document.querySelector('.contact');

    if (!this.block) return;

    this.init();
  }

  init() {
    this.buildMap();
  }

  buildMap() {
    const gmapApi = new GoogleMapsApi();

    gmapApi.load().then(() => {
      const mapContainer = this.block.querySelector('.contact__map'),
        zoom = parseInt(mapContainer.dataset.zoom),
        lat = parseFloat(mapContainer.dataset.centerLat),
        lng = parseFloat(mapContainer.dataset.centerLng),
        markerIcon = mapContainer.dataset.markerIcon,
        mapCoords =  { lat, lng };

      const mapStyle = [
        {
          featureType: 'administrative',
          elementType: 'all',
          stylers: [
            {
              saturation: '-100'
            }
          ]
        },
        {
          featureType: 'administrative.province',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: 0
            },
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: '0'
            },
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [
            {
              saturation: '-100'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'all',
          stylers: [
            {
              lightness: '0'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'all',
          stylers: [
            {
              lightness: '0'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [
            {
              saturation: -100
            },
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              hue: '#b6d9e7'
            },
            {
              lightness: 0
            },
            {
              saturation: -30
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels',
          stylers: [
            {
              lightness: -25
            },
            {
              saturation: -100
            }
          ]
        }
      ];

      const map = new google.maps.Map(mapContainer, {
        zoom: zoom,
        center: mapCoords,
        disableDefaultUI: true,
        styles: mapStyle
      });

      const icon = {
        url: markerIcon

        // scaledSize: new google.maps.Size(44, 68)
      };

      const marker = new google.maps.Marker({
        position: { lat: parseFloat(mapContainer.dataset.markerLat), lng: parseFloat(mapContainer.dataset.markerLng) },
        map: map,
        icon: icon
      });

    });

    return this;
  }
}

export default new Contact();
