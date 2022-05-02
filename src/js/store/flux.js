const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// getPlanets: () => {
			// 	fetch(fetch('https://www.swapi.tech/api/planets')
			// 		.then((response) => response.json)
			// }
			
			
		}
	};
};

export default getState;
