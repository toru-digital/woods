import { getDistance } from "./utils";

const trees = [
	{
		"inaturalist_observation_id": 124626725,
		"scientific_name": "Pterocarya fraxinifolia",
		"title": "Caucasian Wingnut",
		"slug" : "caucasian-wingnut",
		"lat": 52.22492211,
		"lon": -0.8748217451,
		"url": "https://www.inaturalist.org/observations/124626725",
		"img": "https://static.inaturalist.org/photos/211255538/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 124869322,
		"scientific_name": "Sambucus nigra",
		"title": "European black elderberry",
		"slug" : "european-black-elderberry",
		"lat": 52.22520082,
		"lon": -0.8891221357,
		"url": "https://www.inaturalist.org/observations/124869322",
		"img": "https://static.inaturalist.org/photos/211698253/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 126168401,
		"scientific_name": "Acer pseudoplatanus",
		"title": "Sycamore Maple",
		"slug" : "sycamore-maple",
		"lat": 52.22495,
		"lon": -0.8895416667,
		"url": "https://www.inaturalist.org/observations/126168401",
		"img": "https://static.inaturalist.org/photos/214046952/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 126191404,
		"scientific_name": "Pterocarpus",
		"title": "Bloodwood",
		"slug" : "bloodwood",
		"lat": 52.22533381,
		"lon": -0.8888622746,
		"url": "https://www.inaturalist.org/observations/126191404",
		"img": "https://static.inaturalist.org/photos/214088707/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 126346432,
		"scientific_name": "Salix alba",
		"title": "White Willow",
		"slug" : "white-willow",
		"lat": 52.22509667,
		"lon": -0.8898866667,
		"url": "https://www.inaturalist.org/observations/126346432",
		"img": "https://static.inaturalist.org/photos/214365706/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 128282682,
		"scientific_name": "Prunus spinosa",
		"title": "Blackthorn",
		"slug" : "blackthorn",
		"lat": 52.223645,
		"lon": -0.88425,
		"url": "https://www.inaturalist.org/observations/128282682",
		"img": "https://static.inaturalist.org/photos/217939763/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 131352031,
		"scientific_name": "Alnus",
		"title": "Alder",
		"slug" : "alder",
		"lat": 52.22432437,
		"lon": -0.8899906464,
		"url": "https://www.inaturalist.org/observations/131352031",
		"img": "https://static.inaturalist.org/photos/223517331/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 132128026,
		"scientific_name": "Sambucus nigra",
		"title": "European Black Elderberry",
		"slug" : "european-black-elderberry",
		"lat": 52.22368936,
		"lon": -0.8837845225,
		"url": "https://www.inaturalist.org/observations/132128026",
		"img": "https://static.inaturalist.org/photos/224962274/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 136144521,
		"scientific_name": "Symphoricarpos albus",
		"title": "Common Snowberry",
		"slug" : "common-snowberry",
		"lat": 52.21787194,
		"lon": -0.8870431176,
		"url": "https://www.inaturalist.org/observations/136144521",
		"img": "https://static.inaturalist.org/photos/232314680/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 140191672,
		"scientific_name": "Liriodendron tulipifera",
		"title": "Tulip Tree",
		"slug" : "tulip-tree",
		"lat": 52.22466667,
		"lon": -0.8882383333,
		"url": "https://www.inaturalist.org/observations/140191672",
		"img": "https://static.inaturalist.org/photos/239936807/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 140281316,
		"scientific_name": "Morus",
		"title": "Mulberry",
		"slug" : "mulberry",
		"lat": 52.22440833,
		"lon": -0.8904916667,
		"url": "https://www.inaturalist.org/observations/140281316",
		"img": "https://static.inaturalist.org/photos/240105711/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 149633441,
		"scientific_name": "Euphorbia characias",
		"title": "Mediterranean Spurge",
		"slug" : "mediterranean-spurge",
		"lat": 52.22521893,
		"lon": -0.8897608146,
		"url": "https://www.inaturalist.org/observations/149633441",
		"img": "https://static.inaturalist.org/photos/257873837/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 150403873,
		"scientific_name": "Prunus cerasifera",
		"title": "Cherry-plum",
		"slug" : "cherry-plum",
		"lat": 52.22380633,
		"lon": -0.8855020534,
		"url": "https://www.inaturalist.org/observations/150403873",
		"img": "https://static.inaturalist.org/photos/259338147/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 153436862,
		"scientific_name": "Castanea sativa",
		"title": "Sweet Chestnut",
		"slug" : "sweet-chestnut",
		"lat": 52.22468701,
		"lon": -0.8863793395,
		"url": "https://www.inaturalist.org/observations/153436862",
		"img": "https://static.inaturalist.org/photos/268457848/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 158623894,
		"scientific_name": "Symphoricarpos",
		"title": "Snowberry",
		"slug" : "snowberry",
		"lat": 52.21782541,
		"lon": -0.8923432867,
		"url": "https://www.inaturalist.org/observations/158623894",
		"img": "https://static.inaturalist.org/photos/275343130/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 159367235,
		"scientific_name": "Amygdaloideae",
		"title": "",
		"slug" : "title",
		"lat": 52.22521604,
		"lon": -0.8898692408,
		"url": "https://www.inaturalist.org/observations/159367235",
		"img": "https://static.inaturalist.org/photos/275343185/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202042705,
		"scientific_name": "Taxus baccata",
		"title": "Common Yew",
		"slug" : "common-yew",
		"lat": 52.22440649,
		"lon": -0.8880982551,
		"url": "https://www.inaturalist.org/observations/202042705",
		"img": "https://static.inaturalist.org/photos/356760783/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202042854,
		"scientific_name": "Cedrus atlantica",
		"title": "Atlas Cedar",
		"slug" : "atlas-cedar",
		"lat": 52.22428428,
		"lon": -0.8881420125,
		"url": "https://www.inaturalist.org/observations/202042854",
		"img": "https://static.inaturalist.org/photos/356760644/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202154961,
		"scientific_name": "Prunus laurocerasus",
		"title": "Cherry Laurel",
		"slug" : "cherry-laurel",
		"lat": 52.22544201,
		"lon": -0.8888544266,
		"url": "https://www.inaturalist.org/observations/202154961",
		"img": "https://static.inaturalist.org/photos/356980992/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202155393,
		"scientific_name": "Syringa vulgaris",
		"title": "Common Lilac",
		"slug" : "common-lilac",
		"lat": 52.22547848,
		"lon": -0.888917679,
		"url": "https://www.inaturalist.org/observations/202155393",
		"img": "https://static.inaturalist.org/photos/356981974/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202395608,
		"scientific_name": "Ilex aquifolium",
		"title": "European Holly",
		"slug" : "european-holly",
		"lat": 52.22387177,
		"lon": -0.8884415896,
		"url": "https://www.inaturalist.org/observations/202395608",
		"img": "https://static.inaturalist.org/photos/357448467/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202396033,
		"scientific_name": "Sequoiadendron giganteum",
		"title": "Giant Sequoia",
		"slug" : "giant-sequoia",
		"lat": 52.22394029,
		"lon": -0.8886648465,
		"url": "https://www.inaturalist.org/observations/202396033",
		"img": "https://static.inaturalist.org/photos/357449389/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202396334,
		"scientific_name": "Cedrus",
		"title": "Cedar",
		"slug" : "cedar",
		"lat": 52.22424989,
		"lon": -0.8885083067,
		"url": "https://www.inaturalist.org/observations/202396334",
		"img": "https://static.inaturalist.org/photos/357450024/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202396554,
		"scientific_name": "Araucaria araucana",
		"title": "Monkey-Puzzle",
		"slug" : "monkey-puzzle",
		"lat": 52.22408893,
		"lon": -0.8882626366,
		"url": "https://www.inaturalist.org/observations/202396554",
		"img": "https://static.inaturalist.org/photos/357450315/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202396851,
		"scientific_name": "Sequoia sempervirens",
		"title": "Coast Redwood",
		"slug" : "coast-redwood",
		"lat": 52.22389521,
		"lon": -0.8881946978,
		"url": "https://www.inaturalist.org/observations/202396851",
		"img": "https://static.inaturalist.org/photos/357450744/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202396981,
		"scientific_name": "Taxodium distichum",
		"title": "Bald Cypress",
		"slug" : "bald-cypress",
		"lat": 52.2238676,
		"lon": -0.8879876119,
		"url": "https://www.inaturalist.org/observations/202396981",
		"img": "https://static.inaturalist.org/photos/357451111/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202815919,
		"scientific_name": "× hesperotropsis leylandii",
		"title": "Leyland Cypress",
		"slug" : "leyland-cypress",
		"lat": 52.22466594,
		"lon": -0.8881752682,
		"url": "https://www.inaturalist.org/observations/202815919",
		"img": "https://static.inaturalist.org/photos/358247462/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202816653,
		"scientific_name": "Metasequoia glyptostroboides",
		"title": "Dawn Redwood",
		"slug" : "dawn-redwood",
		"lat": 52.22442969,
		"lon": -0.8880252022,
		"url": "https://www.inaturalist.org/observations/202816653",
		"img": "https://static.inaturalist.org/photos/358250209/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202817925,
		"scientific_name": "Prunus serrulata",
		"title": "Japanese Cherry",
		"slug" : "japanese-cherry",
		"lat": 52.224522,
		"lon": -0.8880583056,
		"url": "https://www.inaturalist.org/observations/202817925",
		"img": "https://static.inaturalist.org/photos/358254284/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202819115,
		"scientific_name": "Paulownia tomentosa",
		"title": "Princess Tree",
		"slug" : "princess-tree",
		"lat": 52.22439347,
		"lon": -0.8878621681,
		"url": "https://www.inaturalist.org/observations/202819115",
		"img": "https://static.inaturalist.org/photos/358255754/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202819759,
		"scientific_name": "Aesculus hippocastanum",
		"title": "Horse-Chestnut",
		"slug" : "horse-chestnut",
		"lat": 52.223875,
		"lon": -0.8871352175,
		"url": "https://www.inaturalist.org/observations/202819759",
		"img": "https://static.inaturalist.org/photos/358254957/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202820147,
		"scientific_name": "Ginkgo biloba",
		"title": "Ginkgo",
		"slug" : "ginkgo",
		"lat": 52.22402086,
		"lon": -0.8873155693,
		"url": "https://www.inaturalist.org/observations/202820147",
		"img": "https://inaturalist-open-data.s3.amazonaws.com/photos/358256374/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202821988,
		"scientific_name": "Fagus sylvatica",
		"title": "European Beech",
		"slug" : "european-beech",
		"lat": 52.22396079,
		"lon": -0.8871512429,
		"url": "https://www.inaturalist.org/observations/202821988",
		"img": "https://inaturalist-open-data.s3.amazonaws.com/photos/358260235/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202822184,
		"scientific_name": "Fraxinus",
		"title": "Ash",
		"slug" : "ash",
		"lat": 52.22412405,
		"lon": -0.8871650567,
		"url": "https://www.inaturalist.org/observations/202822184",
		"img": "https://static.inaturalist.org/photos/358259389/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202822660,
		"scientific_name": "Quercus robur",
		"title": "English Oak",
		"slug" : "english-oak",
		"lat": 52.22432422,
		"lon": -0.8869633373,
		"url": "https://www.inaturalist.org/observations/202822660",
		"img": "https://static.inaturalist.org/photos/358260179/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202823106,
		"scientific_name": "Carpinus",
		"title": "Hornbeam",
		"slug" : "hornbeam",
		"lat": 52.22439602,
		"lon": -0.8867291124,
		"url": "https://www.inaturalist.org/observations/202823106",
		"img": "https://inaturalist-open-data.s3.amazonaws.com/photos/358261462/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202823906,
		"scientific_name": "Prunus avium",
		"title": "Wild Cherry",
		"slug" : "wild-cherry",
		"lat": 52.22447968,
		"lon": -0.8871720166,
		"url": "https://www.inaturalist.org/observations/202823906",
		"img": "https://static.inaturalist.org/photos/358262244/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202824312,
		"scientific_name": "Pinus nigra laricio",
		"title": "Corsican Pine",
		"slug" : "corsican-pine",
		"lat": 52.22454324,
		"lon": -0.8873398453,
		"url": "https://www.inaturalist.org/observations/202824312",
		"img": "https://static.inaturalist.org/photos/358349899/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202824365,
		"scientific_name": "",
		"title": "",
		"slug" : "title",
		"lat": 52.22446864,
		"lon": -0.8871484065,
		"url": "https://www.inaturalist.org/observations/202824365",
		"img": "https://inaturalist-open-data.s3.amazonaws.com/photos/358263318/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202824825,
		"scientific_name": "Thuja plicata",
		"title": "Western Redcedar",
		"slug" : "western-redcedar",
		"lat": 52.22447491,
		"lon": -0.8873601897,
		"url": "https://www.inaturalist.org/observations/202824825",
		"img": "https://static.inaturalist.org/photos/358264067/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202825452,
		"scientific_name": "Pinoideae",
		"title": "pines",
		"slug" : "pines",
		"lat": 52.22450951,
		"lon": -0.8876501141,
		"url": "https://www.inaturalist.org/observations/202825452",
		"img": "https://static.inaturalist.org/photos/358265224/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202826473,
		"scientific_name": "Prunus laurocerasus",
		"title": "Cherry Laurel",
		"slug" : "cherry-laurel",
		"lat": 52.22456594,
		"lon": -0.8873503136,
		"url": "https://www.inaturalist.org/observations/202826473",
		"img": "https://static.inaturalist.org/photos/358267040/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202826575,
		"scientific_name": "Rhododendron maximum",
		"title": "Great Rhododendron",
		"slug" : "great-rhododendron",
		"lat": 52.22462089,
		"lon": -0.887326459,
		"url": "https://www.inaturalist.org/observations/202826575",
		"img": "https://inaturalist-open-data.s3.amazonaws.com/photos/358269318/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202827664,
		"scientific_name": "Acer palmatum",
		"title": "Japanese Maple",
		"slug" : "japanese-maple",
		"lat": 52.2247752,
		"lon": -0.8874056615,
		"url": "https://www.inaturalist.org/observations/202827664",
		"img": "https://static.inaturalist.org/photos/358269274/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202828158,
		"scientific_name": "Bambusoideae",
		"title": "Bamboo",
		"slug" : "bamboo",
		"lat": 52.22478616,
		"lon": -0.8875131517,
		"url": "https://www.inaturalist.org/observations/202828158",
		"img": "https://static.inaturalist.org/photos/358272440/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202828171,
		"scientific_name": "",
		"title": "",
		"slug" : "title",
		"lat": 52.2246181,
		"lon": -0.8872556188,
		"url": "https://www.inaturalist.org/observations/202828171",
		"img": "https://inaturalist-open-data.s3.amazonaws.com/photos/358275493/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202828556,
		"scientific_name": "Syringa",
		"title": "Lilac",
		"slug" : "lilac",
		"lat": 52.22477993,
		"lon": -0.8874434951,
		"url": "https://www.inaturalist.org/observations/202828556",
		"img": "https://static.inaturalist.org/photos/358271004/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202829367,
		"scientific_name": "Acer palmatum",
		"title": "Japanese Maple",
		"slug" : "japanese-maple",
		"lat": 52.22494154,
		"lon": -0.8876607651,
		"url": "https://www.inaturalist.org/observations/202829367",
		"img": "https://static.inaturalist.org/photos/358272690/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202829637,
		"scientific_name": "Quercus frainetto",
		"title": "Hungarian Oak",
		"slug" : "hungarian-oak",
		"lat": 52.22497769,
		"lon": -0.8874970837,
		"url": "https://www.inaturalist.org/observations/202829637",
		"img": "https://static.inaturalist.org/photos/358273211/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202829900,
		"scientific_name": "",
		"title": "",
		"slug" : "title",
		"lat": 52.22480278,
		"lon": -0.8873428998,
		"url": "https://www.inaturalist.org/observations/202829900",
		"img": "https://inaturalist-open-data.s3.amazonaws.com/photos/358278346/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202830316,
		"scientific_name": "Corylus avellana",
		"title": "Common Hazel",
		"slug" : "common-hazel",
		"lat": 52.22493438,
		"lon": -0.8878940221,
		"url": "https://www.inaturalist.org/observations/202830316",
		"img": "https://static.inaturalist.org/photos/358274435/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202830662,
		"scientific_name": "Chamaecyparis lawsoniana",
		"title": "Lawson's Cypress",
		"slug" : "lawson-s-cypress",
		"lat": 52.22506211,
		"lon": -0.8878066655,
		"url": "https://www.inaturalist.org/observations/202830662",
		"img": "https://static.inaturalist.org/photos/358274759/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202831510,
		"scientific_name": "Garrya elliptica",
		"title": "Coast Silk Tassel",
		"slug" : "coast-silk-tassel",
		"lat": 52.22531036,
		"lon": -0.8882049226,
		"url": "https://www.inaturalist.org/observations/202831510",
		"img": "https://static.inaturalist.org/photos/358276664/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202832295,
		"scientific_name": "Acer pseudoplatanus",
		"title": "Sycamore Maple",
		"slug" : "sycamore-maple",
		"lat": 52.22469432,
		"lon": -0.8884118498,
		"url": "https://www.inaturalist.org/observations/202832295",
		"img": "https://static.inaturalist.org/photos/358277645/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202967637,
		"scientific_name": "Buxus sempervirens",
		"title": "Common Box Tree",
		"slug" : "common-box-tree",
		"lat": 52.22540397,
		"lon": -0.8875886114,
		"url": "https://www.inaturalist.org/observations/202967637",
		"img": "https://static.inaturalist.org/photos/358539647/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202968012,
		"scientific_name": "Viburnum rhytidophyllum",
		"title": "Leatherleaf Viburnum",
		"slug" : "leatherleaf-viburnum",
		"lat": 52.22543757,
		"lon": -0.8881715902,
		"url": "https://www.inaturalist.org/observations/202968012",
		"img": "https://static.inaturalist.org/photos/358540266/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 202968312,
		"scientific_name": "Ribes sanguineum",
		"title": "Red-flowering Currant",
		"slug" : "red-flowering-currant",
		"lat": 52.22526986,
		"lon": -0.8882187121,
		"url": "https://www.inaturalist.org/observations/202968312",
		"img": "https://static.inaturalist.org/photos/358540670/medium.jpg",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 1,
		"scientific_name": "z Behind",
		"title": "z Behind",
		"slug" : "z-behind",
		"lat": 52.208653227000774,
		"lon": -0.8962303939160998,
		"url": "https://www.inaturalist.org/observations/202968312",
		"img": "https://placehold.co/600x400?text=Behind",
		"distance": -1
	},
	{
		"inaturalist_observation_id": 2,
		"scientific_name": "z Infront",
		"title": "z Infront",
		"slug" : "z-infront",
		"lat": 52.20809421608868,
		"lon": -0.8969087289229427,
		"url": "https://www.inaturalist.org/observations/202968312",
		"img": "https://placehold.co/600x400?text=Infront",
		"distance": -1
	}
];

export const getTreesWithDistance = (lat, lon) => {
	return trees
		.map (tree => {
			tree.distance = getDistance (lat, lon, tree.lat, tree.lon)
			return tree
		});
}

export const getTreeById = id => {
	return trees.find (t => t.inaturalist_observation_id == id)
}

export const getTreesById = id => {
	return trees
		.filter (t => t.inaturalist_observation_id == id)
};

export const getTrees = () => {
	const sort_on = "title"
	return trees
		.filter (t => t.title !== undefined && t.title.trim() != "")
		.sort((a, b) =>
		a[sort_on] > b[sort_on]
			? 1
			: b[sort_on] > a[sort_on]
			? -1
			: 0
	);
};

const getTreesWithinInDistancRange = (user_lat,user_lon,d1,d2) => {
	return trees
		.map (t => {
			t.distance = getDistance (user_lat, user_lon, t.lat, t.lon)
			return t
		})
		.filter (t => t.distance >= d1/1000 && t.distance <= d2/1000)
		.filter (t => t.title !== undefined && t.title.trim() != "")
		.sort((a, b) =>
		a['title'] > b['title']
			? 1
			: b['title'] > a['title']
			? -1
			: 0
		)
}

export const getTreeDistanceGroups = (lat,lon) => {
	const distances = [10, 20, 50, 100, 1000]

	const group_array = [];

	distances.forEach((d,i) => {
		const trees = getTreesWithinInDistancRange(lat,lon, i == 0 ? 0 :  distances[i-1], d)
		if (trees.length > 0) {
			group_array.push({
				"title": `within ${d} meters`,
				"trees": trees
			});
		}
	});

	return group_array
};
