import { createStore } from 'vuex';
import type { IStore } from '../interfaces/IStore'

export default createStore({
  state () {
    return {
		permissions_has_gps: false,
		permissions_has_compass: false,
		permissions_last_error: '',
		latitude: 0,
		longitude: 0,
		northern_axis: 0,
		active_inaturalist_observation_id: null,
    } as IStore
  },
  mutations: {
	setPermissionsHasGps: function (state: IStore, value: boolean) {
		state.permissions_has_gps = value;
	},
	setPermissionsHasCompass: function (state: IStore, value: boolean) {
		state.permissions_has_compass = value;
	},
	setPermissionsLastError: function (state: IStore, value: string) {
		state.permissions_last_error = value;
	},
    setLatitude: function (state: IStore, value: number) {
		state.latitude = value;
	},
	setLongitude: function (state: IStore, value: number) {
		state.longitude = value;
	},
	setNorthernAxis: function (state: IStore, value: number) {
		state.northern_axis = value;
	},
	setActiveInaturalistObservationId: function (state: IStore, value: number | null) {
		state.active_inaturalist_observation_id = value;
	},
  },
});
