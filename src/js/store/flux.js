const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      vehicles: [],
      characters: [],
      planetsData: [],
    },
    actions: {
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => data)
          .then(async (data) => {
            const { results } = data;
            results.forEach(async (planet, index) => {
              const resp = await fetch(planet.url);
              const info = await resp.json();
              data.results[index].info = info.result.properties;
              setStore({ planets: data });
            });
          });
      },

      getVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles")
          .then((response) => response.json())
          .then((data) => data)
          .then(async (data) => {
            const { results } = data;
            results.forEach(async (vehicle, index) => {
              const resp = await fetch(vehicle.url);
              const info = await resp.json();
              data.results[index].info = info.result.properties;
              setStore({ vehicles: data });
            });
          });
      },
    },
  };
};
export default getState;
