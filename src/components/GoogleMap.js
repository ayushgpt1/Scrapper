// import React, { useEffect, useRef, useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import './style.css'

// const GeocodingService = () => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [geocoder, setGeocoder] = useState(null);
//   const [response, setResponse] = useState(null);
//   const inputRef = useRef(null);

//   const containerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const center = {
//     lat: -34.397,
//     lng: 150.644,
//   };

//   const onLoad = (mapInstance) => {
//     setMap(mapInstance);
//     const geocoderInstance = new window.google.maps.Geocoder();
//     setGeocoder(geocoderInstance);

//     const markerInstance = new window.google.maps.Marker({
//       map: mapInstance,
//     });
//     setMarker(markerInstance);

//     mapInstance.addListener("click", (e) => {
//       geocode({ location: e.latLng });
//     });
//   };

//   const geocode = (request) => {
//     geocoder
//       .geocode(request)
//       .then((result) => {
//         const { results } = result;
//         map.setCenter(results[0].geometry.location);
//         marker.setPosition(results[0].geometry.location);
//         setResponse(JSON.stringify(result, null, 2));
//       })
//       .catch((e) => {
//         alert("Geocode was not successful for the following reason: " + e);
//       });
//   };

//   const handleGeocodeClick = () => {
//     const address = inputRef.current.value;
//     if (address) {
//       geocode({ address });
//     }
//   };

//   const handleClearClick = () => {
//     marker.setMap(null);
//     setResponse(null);
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBL8ZFUG_x6n0XO0czZefjsK0_y_yKVA5s">
//       <div>
//         <input ref={inputRef} type="text" placeholder="Enter a location" />
//         <button onClick={handleGeocodeClick} className="button button-primary">
//           Geocode
//         </button>
//         <button onClick={handleClearClick} className="button button-secondary">
//           Clear
//         </button>
//         <p>
//           <strong>Instructions</strong>: Enter an address in the textbox to
//           geocode or click on the map to reverse geocode.
//         </p>
//         {response && (
//           <div id="response-container">
//             <pre id="response">{response}</pre>
//           </div>
//         )}
//       </div>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={8}
//         onLoad={onLoad}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };

// export default GeocodingService;

// import React, { useEffect, useRef, useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const GeocodingService = () => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [geocoder, setGeocoder] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [nearestPoliceStation, setNearestPoliceStation] = useState(null);
//   const inputRef = useRef(null);

//   const containerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const center = {
//     lat: -34.397,
//     lng: 150.644,
//   };

//   const onLoad = (mapInstance) => {
//     setMap(mapInstance);
//     const geocoderInstance = new window.google.maps.Geocoder();
//     setGeocoder(geocoderInstance);

//     const markerInstance = new window.google.maps.Marker({
//       map: mapInstance,
//     });
//     setMarker(markerInstance);

//     mapInstance.addListener("click", (e) => {
//       geocode({ location: e.latLng });
//     });
//   };

//   const geocode = (request) => {
//     geocoder
//       .geocode(request)
//       .then((result) => {
//         const { results } = result;
//         map.setCenter(results[0].geometry.location);
//         marker.setPosition(results[0].geometry.location);
//         setResponse(JSON.stringify(result, null, 2));

//         // Search for nearby police stations
//         searchNearbyPoliceStation(results[0].geometry.location);
//       })
//       .catch((e) => {
//         alert("Geocode was not successful for the following reason: " + e);
//       });
//   };

//   const searchNearbyPoliceStation = (location) => {
//     const service = new window.google.maps.places.PlacesService(map);
//     const request = {
//       location,
//       radius: 5000, // Search within 5km radius
//       type: ["police"],
//     };

//     service.nearbySearch(request, (results, status) => {
//       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//         if (results && results.length > 0) {
//           const nearest = results[0]; // Get the first (nearest) result
//           setNearestPoliceStation(nearest);
//           // Optionally, set marker on the map for the police station
//           const policeMarker = new window.google.maps.Marker({
//             position: nearest.geometry.location,
//             map: map,
//             title: nearest.name,
//           });
//         } else {
//           alert("No police stations found nearby.");
//         }
//       } else {
//         alert("Nearby Search was not successful for the following reason: " + status);
//       }
//     });
//   };

//   const handleGeocodeClick = () => {
//     const address = inputRef.current.value;
//     if (address) {
//       geocode({ address });
//     }
//   };

//   const handleClearClick = () => {
//     marker.setMap(null);
//     setResponse(null);
//     setNearestPoliceStation(null);
//   };

//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyBL8ZFUG_x6n0XO0czZefjsK0_y_yKVA5s"
//       libraries={["places"]} // Include the places library
//     >
//       <div>
//         <input ref={inputRef} type="text" placeholder="Enter a location" />
//         <button onClick={handleGeocodeClick} className="button button-primary">
//           Geocode
//         </button>
//         <button onClick={handleClearClick} className="button button-secondary">
//           Clear
//         </button>
//         <p>
//           <strong>Instructions</strong>: Enter an address in the textbox to
//           geocode or click on the map to reverse geocode.
//         </p>
//         {response && (
//           <div id="response-container">
//             <pre id="response">{response}</pre>
//           </div>
//         )}
//         {nearestPoliceStation && (
//           <div>
//             <h3>Nearest Police Station</h3>
//             <p>{nearestPoliceStation.name}</p>
//             <p>{nearestPoliceStation.vicinity}</p>
//           </div>
//         )}
//       </div>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={8}
//         onLoad={onLoad}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };

// export default GeocodingService;






// import React, { useEffect, useRef, useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const GeocodingService = () => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [geocoder, setGeocoder] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [nearestPoliceStation, setNearestPoliceStation] = useState(null);

//   const containerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const onLoad = (mapInstance) => {
//     setMap(mapInstance);
//     const geocoderInstance = new window.google.maps.Geocoder();
//     setGeocoder(geocoderInstance);

//     const markerInstance = new window.google.maps.Marker({
//       map: mapInstance,
//     });
//     setMarker(markerInstance);

//     // Get the user's current location when the map loads
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const location = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           mapInstance.setCenter(location);
//           markerInstance.setPosition(location);
//           searchNearbyPoliceStation(location);
//         },
//         () => {
//           alert("Geolocation failed or permission denied.");
//         }
//       );
//     } else {
//       alert("Your browser doesn't support geolocation.");
//     }
//   };

//   const searchNearbyPoliceStation = (location) => {
//     const service = new window.google.maps.places.PlacesService(map);
//     const request = {
//       location,
//       radius: 2000, // Search within a 5km radius
//       type: ["police"],
//     };

//     service.nearbySearch(request, (results, status) => {
//       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//         if (results && results.length > 0) {
//           const nearest = results[0]; // Get the first (nearest) result
//           setNearestPoliceStation(nearest);

//           // Set marker for the nearest police station
//           const policeMarker = new window.google.maps.Marker({
//             position: nearest.geometry.location,
//             map: map,
//             title: nearest.name,
//           });
//         } else {
//           alert("No police stations found nearby.");
//         }
//       } else {
//         alert("Nearby Search was not successful for the following reason: " + status);
//       }
//     });
//   };

//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyBL8ZFUG_x6n0XO0czZefjsK0_y_yKVA5s"
//       libraries={["places"]} // Include the places library
//     >
//       <div>
//         <p>
//           <strong>Instructions</strong>: The map will automatically center on
//           your current location and find the nearest police station.
//         </p>
//         {response && (
//           <div id="response-container">
//             <pre id="response">{response}</pre>
//           </div>
//         )}
//         {nearestPoliceStation && (
//           <div>
//             <h3>Nearest Police Station</h3>
//             <p>{nearestPoliceStation.name}</p>
//             <p>{nearestPoliceStation.vicinity}</p>
//           </div>
//         )}
//       </div>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         zoom={12}
//         onLoad={onLoad}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };

// export default GeocodingService;


import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";

const GoogleMaps = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [response, setResponse] = useState(null);
  const [nearestPoliceStation, setNearestPoliceStation] = useState(null);
  const [directions, setDirections] = useState(null); // To hold the directions result

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
    const geocoderInstance = new window.google.maps.Geocoder();
    setGeocoder(geocoderInstance);

    const markerInstance = new window.google.maps.Marker({
      map: mapInstance,
    });
    setMarker(markerInstance);

    // Get the user's current location when the map loads
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapInstance.setCenter(location);
          markerInstance.setPosition(location);
          searchNearbyPoliceStation(location);
        },
        () => {
          alert("Geolocation failed or permission denied.");
        }
      );
    } else {
      alert("Your browser doesn't support geolocation.");
    }
  };

  const searchNearbyPoliceStation = (location) => {
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location,
      radius: 2000, // Search within a 5km radius
      type: ["police"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        if (results && results.length > 0) {
          const nearest = results[0]; // Get the first (nearest) result
          setNearestPoliceStation(nearest);

          // Set marker for the nearest police station
          const policeMarker = new window.google.maps.Marker({
            position: nearest.geometry.location,
            map: map,
            title: nearest.name,
          });

          // Get directions from current location to nearest police station
          getDirections(location, nearest.geometry.location);
        } else {
          alert("No police stations found nearby.");
        }
      } else {
        alert("Nearby Search was not successful for the following reason: " + status);
      }
    });
  };

  const getDirections = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING, // You can change to WALKING, BICYCLING, or TRANSIT
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        alert("Directions request failed due to " + status);
      }
    });
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBL8ZFUG_x6n0XO0czZefjsK0_y_yKVA5s"
      libraries={["places"]} // Include the places library
    >
      <div>
        <p>
          <strong>Instructions</strong>: The map will automatically center on
          your current location, find the nearest police station, and display
          directions to it.
        </p>
        {response && (
          <div id="response-container">
            <pre id="response">{response}</pre>
          </div>
        )}
        {nearestPoliceStation && (
          <div>
            <h3>Nearest Police Station</h3>
            <p>{nearestPoliceStation.name}</p>
            <p>{nearestPoliceStation.vicinity}</p>
          </div>
        )}
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={12}
        onLoad={onLoad}
      >
        {directions && (
          <DirectionsRenderer directions={directions} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;

