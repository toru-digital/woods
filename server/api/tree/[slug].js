import { trees } from "../../data/trees";

export default defineEventHandler((event) => {
	const slug = getRouterParam(event, 'slug')
	const tree = trees.find (t => t.slug == slug)

	if (tree === undefined) {
		throw createError({ statusCode: 404, statusMessage: 'Tree Not Found' })
	}

	return tree;
 })