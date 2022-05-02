const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			vehicles: [],
			characters: []
		},
		actions: {
			getPlanets: () => {
				fetch('https://www.swapi.tech/api/planets')
					.then((response) => response.json())
					.then((data) => setStore( { planets: data }))
			
			},
			getVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles')
					.then((response) => response.json())
					.then((data) => {console.log(data);setStore( { vehicles: data })})
		},
		}
	}
}

export default getState;
