const deg2rad = (degrees) => {
	var pi = Math.PI;
	return degrees * (pi / 180);
};
  
 const rad2Deg = radians => {
	return radians * 180 / Math.PI;
 }

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

// export const calculateBearing = (lat1, lon1, lat2, lon2) => {
// 	var dLon = lon2 - lon1;
// 	var y = Math.sin(dLon) * Math.cos(lat2);
// 	var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
// 	var bearing = Math.atan2(y, x);
// 	bearing = bearing * (180 / Math.PI); // Convert radians to degrees
// 	bearing = (bearing + 360) % 360; // Ensure bearing is between 0 and 360 degrees
// 	return bearing;
// }



export const calculateBearing = (startLat, startLng, destLat, destLng) => {
	startLat = deg2rad(startLat);
	startLng = deg2rad(startLng);
	destLat = deg2rad(destLat);
	destLng = deg2rad(destLng);

	const y = Math.sin(destLng - startLng) * Math.cos(destLat);
	const x = Math.cos(startLat) * Math.sin(destLat) -
			Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
	let brng = Math.atan2(y, x);
	brng = rad2Deg(brng);
	return (brng + 360) % 360;
}

export const toOrdinal = bearing => {
	if (bearing >= 337.5 || bearing < 22.5) return "N";
	if (bearing >= 22.5 && bearing < 67.5) return "NE";
	if (bearing >= 67.5 && bearing < 112.5) return "E";
	if (bearing >= 112.5 && bearing < 157.5) return "SE";
	if (bearing >= 157.5 && bearing < 202.5) return "S";
	if (bearing >= 202.5 && bearing < 247.5) return "SW";
	if (bearing >= 247.5 && bearing < 292.5) return "W";
	if (bearing >= 292.5 && bearing < 337.5) return "NW";

	return "";
}

export const getIsIOS = () => {
	return navigator != null &&
	navigator.userAgent != null &&
	navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
	navigator.userAgent.match(/AppleWebKit/)
}

export const getIsAndroid = () => {
	if (!navigator || !navigator.userAgent) return false;
	const u = navigator.userAgent;
	return !!u.match(/Android/i);
}
