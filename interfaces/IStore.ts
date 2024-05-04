export interface IStore {
	permissions_has_gps: boolean;
	permissions_has_compass: boolean;
	permissions_has_fullscreen: boolean;
	permissions_last_error: string;
	has_got_position: boolean;
	has_got_orientation: boolean;
	latitude: number;
	longitude: number;
	northern_axis: number;
	orientation_alpha?: number;
	orientation_initial_offset?: number;
	orientation_absolute?: boolean;
	services: any;
}
