import { createStore } from 'vuex';
import type { IStore } from '../interfaces/IStore'

export default createStore({
  state () {
    return {
		permissions_has_gps: false,
		permissions_has_compass: false,
		permissions_has_fullscreen: false,
		permissions_last_error: '',
		latitude: 0,
		longitude: 0,
		orientation_initial_offset:-1,
		has_got_position: false,
		northern_axis: 0,
		orientation_absolute: false,
		has_got_orientation: false,
		services: null,
    } as IStore
  },
  mutations: {
	setPermissionsHasGps: function (state: IStore, value: boolean) {
		state.permissions_has_gps = value;
	},
	setPermissionsHasCompass: function (state: IStore, value: boolean) {
		state.permissions_has_compass = value;
	},
	setPermissionsHasFullscreen: function (state: IStore, value: boolean) {
		state.permissions_has_fullscreen = value;
	},
	setPermissionsLastError: function (state: IStore, value: string) {
		state.permissions_last_error = value;
	},
    setLatitude: function (state: IStore, value: number) {
		state.latitude = value;
		state.has_got_position = true;
	},
	setLongitude: function (state: IStore, value: number) {
		state.longitude = value;
		state.has_got_position = true;
	},
	setOrientationAlpha: function (state: IStore, value: number) {
		if (state.orientation_initial_offset == -1) {
			state.orientation_initial_offset = value;
		}
		state.orientation_alpha = value;
	},
	setNorthernAxis: function (state: IStore, value: number) {
		state.northern_axis = value;
		state.has_got_orientation = true;
	},
	setOrientationAbsolute: function (state: IStore, value: boolean) {
		state.orientation_absolute = value;
	},
	setServices: function (state: IStore, value: any) {
		state.services = value;
	},
  },
});
