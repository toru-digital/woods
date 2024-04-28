import {default as t202822184} from "./trees/ash-202822184"
import {default as t126191404} from "./trees/bloodwood-126191404"
import {default as t202042854} from "./trees/blue-atlas-cedar-202042854"
import {default as t202396851} from "./trees/coast-redwood-202396851"
import {default as t202824312} from "./trees/corsican-pine-202824312"
import {default as t202816653} from "./trees/dawn-redwood-202816653"
import {default as t202822660} from "./trees/english-oak-202822660"
import {default as t202396033} from "./trees/giant-sequoia-202396033"
import {default as t202819759} from "./trees/horse-chestnut-202819759"
import {default as t202829637} from "./trees/hungarian-oak-202829637"
import {default as t202817925} from "./trees/japanese-cherry-202817925"
import {default as t202396554} from "./trees/monkey-puzzle-202396554"
import {default as t140281316} from "./trees/mulberry-140281316"
import {default as t0153436862} from "./trees/sweet-chestnut-0153436862"
import {default as t202832295} from "./trees/sycamore-maple-202832295"
import {default as t140191672} from "./trees/tulip-tree-140191672"
import {default as t202824825} from "./trees/western-redcedar-202824825"
import {default as t126346432} from "./trees/white-willow-126346432"
import {default as t202823906} from "./trees/wild-cherry-202823906"

const trees_raw = [
	t202822184,
	t126191404,
	t202042854,
	t202396851,
	t202824312,
	t202816653,
	t202822660,
	t202396033,
	t202819759,
	t202829637,
	t202817925,
	t202396554,
	t140281316,
	t0153436862,
	t202832295,
	t140191672,
	t202824825,
	t126346432,
	t202823906
];

export const trees = trees_raw.map(t => Object.assign({
	"inaturalist_observation_id": 123,
	"scientific_name": "...",
	"title": "...",
	"slug" : "not-set",
	"lat": 0,
	"lon": 0,
	"img": "",
	"distance": -1,
	"content" : [],
}, t))