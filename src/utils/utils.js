function latLonToMetres(lat1, lon1, lat2, lon2) {
  if (lat1 === null || lat2 === null || lon1 === null || lon2 === null) {
    return "Location not available"
  }
  const R = 6371000 // Radius of the earth in m
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in m
  return Math.round(d)
}

function appendMetres(distance) {
  return Number.isInteger(distance) ? distance + "m" : distance
}

function hasMaleToilet(toilet) {
  return toilet.paranoma.maleYaw != null
}

function hasFemaleToilet(toilet) {
  return toilet.paranoma.femaleYaw != null
}

function hasHandicappedToilet(toilet) {
  return toilet.facilities.handicapped;
}

function hasSeperateHandicappedToilet(toilet) {
  return toilet.paranoma.handicappedYaw != null
}

function toiletHasHose(toilet) {
  return toilet.facilities.hose
}

function toiletHasShowerHeads(toilet) {
  return toilet.facilities.showerHeads
}

function toiletHasWaterCooler(toilet) {
  return toilet.paranoma.waterCoolerYaw != null
}

function buttonToLinkStyle(color, size) {
  return {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    display: "inline",
    margin: "0",
    padding: "0",
    color: color,
    fontSize: size,
  }
}

export {
  latLonToMetres,
  hasMaleToilet,
  hasFemaleToilet,
  hasHandicappedToilet,
  hasSeperateHandicappedToilet,
  toiletHasHose,
  toiletHasShowerHeads,
  toiletHasWaterCooler,
  appendMetres,
  buttonToLinkStyle
}
