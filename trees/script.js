import {trees} from '../data/trees.js';

const tree_list = document.getElementById('tree_list');
const prefix = "https://www.inaturalist.org/observations/"

trees.forEach(tree => {
	const tree_item = document.createElement('li')
	tree_item.textContent = tree.title + " "

	const a = document.createElement('a')
	a.setAttribute ('href', prefix + tree.inaturalist_observation_id)
	a.setAttribute ('target', "_blank")
	a.textContent = 'iNaturalist'
	tree_item.appendChild(a)

	const img = document.createElement('img')
	img.setAttribute ('src', tree.img)
	img.setAttribute ('alt', tree.title)
	tree_item.appendChild(img)

	tree_list.appendChild(tree_item);
})