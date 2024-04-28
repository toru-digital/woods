// import {trees} from '../data/trees.js';

// const tree_list = document.getElementById('tree_list');
// const prefix = "https://www.inaturalist.org/observations/"

// trees.forEach(tree => {
// 	const tree_item = document.createElement('li')
// 	tree_item.textContent = tree.title

// 	const observation_a = document.createElement('a')
// 	observation_a.setAttribute ('href', prefix + tree.inaturalist_observation_id)
// 	observation_a.setAttribute ('target', "_blank")
// 	observation_a.textContent = ' iNaturalist '
// 	tree_item.appendChild(observation_a)

// 	const map_a = document.createElement('a')
// 	map_a.setAttribute ('href', "geo:" + tree.lat + "," + tree.lon)
// 	map_a.textContent = ' Open map '
// 	tree_item.appendChild(map_a)

// 	const img = document.createElement('img')
// 	img.setAttribute ('src', tree.img)
// 	img.setAttribute ('alt', tree.title)
// 	tree_item.appendChild(img)

// 	tree_list.appendChild(tree_item);
// })