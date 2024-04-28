import { trees } from "../../data/trees";

export default defineEventHandler(() => {
	const sort_on = "title";	
	return trees.filter (t => t.title !== undefined && t.title.trim() != "")
		.sort((a, b) =>
		a[sort_on] > b[sort_on]
			? 1
			: b[sort_on] > a[sort_on]
			? -1
			: 0
		);
})