import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Container, Grid, Paper, Box, Typography } from '@mui/material';

const NearestPoliceStation = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [policeStations, setPoliceStations] = useState([]);
  const [nearestStation, setNearestStation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        fetchNearbyPoliceStations(latitude, longitude);
      },
      (error) => {
        setError("Error fetching location: " + error.message);
      }
    );
  }, []);

  const fetchNearbyPoliceStations = (latitude, longitude) => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    const request = {
      location: new window.google.maps.LatLng(latitude, longitude),
      radius: "5000", // Search within 5 km radius
      type: ["police"],
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPoliceStations(results);

        // Find the nearest police station
        let nearest = null;
        let minDistance = Infinity;
        results.forEach((station) => {
          const distance = getDistance(
            latitude,
            longitude,
            station.geometry.location.lat(),
            station.geometry.location.lng()
          );
          if (distance < minDistance) {
            minDistance = distance;
            nearest = station;
          }
        });
        setNearestStation(nearest);
      } else {
        setError("Error fetching nearby police stations: " + status);
      }
    });
  };

  const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h5" component="h2">
                Nearest Police Station
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {error ? (
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" component="h3" color="error">
                  Error: {error}
                </Typography>
              </Box>
            </Paper>
          ) : (
            <LoadScript
              googleMapsApiKey="AIzaSyBL8ZFUG_x6n0XO0czZefjsK0_y_yKVA5s" // Replace with your own API key
            >
              <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                center={currentLocation}
                zoom={14}
              >
                <Marker position={currentLocation} label="You" />
                {policeStations.map((station, index) => (
                  <Marker
                    key={index}
                    position={{
                      lat: station.geometry.location.lat(),
                      lng: station.geometry.location.lng(),
                    }}
                    label={station.name}
                    icon={{
                      url:
                        nearestStation &&
                        station.place_id === nearestStation.place_id
                          ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                          : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    }}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default NearestPoliceStation;
