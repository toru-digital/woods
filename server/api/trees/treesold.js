export default defineEventHandler((event) => {
	return {
	  hello: 'world'
	}
 })






// export const getTreesWithDistance = (lat, lon) => {
// 	return trees
// 		.map (tree => {
// 			tree.distance = getDistance (lat, lon, tree.lat, tree.lon)
// 			return tree
// 		});
// }

// export const getTreeById = id => {
// 	return trees.find (t => t.inaturalist_observation_id == id)
// }

// export const getTreeBySlug = slug => {
// 	return trees.find (t => t.slug == slug)
// }

// export const getTreesById = id => {
// 	return trees
// 		.filter (t => t.inaturalist_observation_id == id)
// };



// const getTreesWithinInDistancRange = (user_lat,user_lon,d1,d2) => {
// 	return trees
// 		.map (t => {
// 			t.distance = getDistance (user_lat, user_lon, t.lat, t.lon)
// 			return t
// 		})
// 		.filter (t => t.distance >= d1/1000 && t.distance <= d2/1000)
// 		.filter (t => t.title !== undefined && t.title.trim() != "")
// 		.sort((a, b) =>
// 		a['title'] > b['title']
// 			? 1
// 			: b['title'] > a['title']
// 			? -1
// 			: 0
// 		)
// }

// export const getTreeDistanceGroups = (lat,lon) => {
// 	const distances = [10, 20, 50, 100, 1000]

// 	const group_array = [];

// 	distances.forEach((d,i) => {
// 		const trees = getTreesWithinInDistancRange(lat,lon, i == 0 ? 0 :  distances[i-1], d)
// 		if (trees.length > 0) {
// 			group_array.push({
// 				"title": `within ${d} meters`,
// 				"trees": trees
// 			});
// 		}
// 	});

// 	return group_array
// };
