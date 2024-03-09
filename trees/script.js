import {trees} from '../data/trees.js';

const tree_list = document.getElementById('tree_list');

// tree_list

trees.forEach(tree => {
	const tree_item = document.createElement('li');
	tree_item.textContent = tree.title;
	tree_list.appendChild(tree_item);
})