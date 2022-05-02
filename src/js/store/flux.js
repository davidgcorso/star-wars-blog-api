const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			vehicles: [],
			characters: [],
			planetsData: []
		},
		actions: {
			getPlanets: () => {
				fetch('https://www.swapi.tech/api/planets')
					.then((response) => response.json())
					.then((data) => setStore( { planets: data }))
					.then( async data => {
						const { results } = data;
						results.forEach(async (planet, index) => {
							const { attributes } = planet;
							attributes.forEach(async (planet, i) => {
								const resp = await fetch(planet)
								const info = await resp.json();
								data.results[index].attributes[i] = info
								setStore( {planets: data})
							})
							
						});
					})
						
					
			
			},
			getPlanetProps: () => {

			}
		},
	}
}

export default getState;
