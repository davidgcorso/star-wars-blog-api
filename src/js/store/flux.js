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
			
			}
		},
	}
}

export default getState;
