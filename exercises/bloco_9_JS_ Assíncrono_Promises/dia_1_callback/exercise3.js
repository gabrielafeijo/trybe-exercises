const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
  setTimeout(() => console.log(getPlanet(mars)), 4000);
  // setTimeout(() => console.log("Returned planet: ", mars), 4000); <-- linha
};
getPlanet();
