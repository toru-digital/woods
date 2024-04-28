const deg2rad = (degrees) => {
	var pi = Math.PI;
	return degrees * (pi / 180);
};

export const getDistance = (lat1, lon1, lat2, lon2) => {
	if (lat2 == 0 && lon2 == 0) return "...";

	const R = 6371; // Radius of the earth in km
	const dLat = deg2rad(lat2 - lat1); // deg2rad below
	const dLon = deg2rad(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) *
		Math.cos(deg2rad(lat2)) *
		Math.sin(dLon / 2) *
		Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c; // Distance in km
	return d.toFixed(2);
};

export const getCompassAngle = (lat1, lon1, lat2, lon2) => {
	const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
	const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
	let angle = Math.atan2(y, x) * (180 / Math.PI);

	if (angle < 0) {
		angle += 360;
	}

	return angle;
}

export const bearing = (lat1, lng1, lat2, lng2) => {
	var dLon = toRad(lng2 - lng1);
	lat1 = toRad(lat1);
	lat2 = toRad(lat2);
	var y = Math.sin(dLon) * Math.cos(lat2);
	var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
	var rad = Math.atan2(y, x);
	var brng = toDeg(rad);
	return (brng + 360) % 360;
}

export const calculateBearing = (lat1, lon1, lat2, lon2) => {
	var dLon = lon2 - lon1;
	var y = Math.sin(dLon) * Math.cos(lat2);
	var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
	var bearing = Math.atan2(y, x);
	bearing = bearing * (180 / Math.PI); // Convert radians to degrees
	bearing = (bearing + 360) % 360; // Ensure bearing is between 0 and 360 degrees
	return bearing;
}
