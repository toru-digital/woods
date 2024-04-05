export interface IStore {
	permissions_has_gps: boolean;
	permissions_has_compass: boolean;
	permissions_last_error: string;
	latitude: number;
	longitude: number;
	northern_axis: number;
	active_inaturalist_observation_id: number | null;
}
