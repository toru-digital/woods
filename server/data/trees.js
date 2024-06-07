
import {default as t140281316} from "./trees/mulberry-140281316"
import {default as t140191672} from "./trees/tulip-tree-140191672"
import {default as t126346432} from "./trees/white-willow-126346432"
import {default as testTreeRacecourse} from "./trees/test-tree-racecourse"

const trees_raw = [
	t140281316,
	t140191672,
	t126346432,
	testTreeRacecourse
];

export const trees = trees_raw.map(t => Object.assign({
	"inaturalist_observation_id": 123,
	"scientific_name": "...",
	"title": "...",
	"slug" : "not-set",
	"lat": 0,
	"lon": 0,
	"images": "",
	"distance": -1,
	"content" : [],
}, t))