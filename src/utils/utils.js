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
  return toilet.facilities.male
}

function hasFemaleToilet(toilet) {
  return toilet.facilities.female
}

function hasHandicappedToilet(toilet) {
  return toilet.facilities.handicapped
}

function hasSeparateHandicappedToilet(toilet) {
  return toilet.facilities.separateHandicapped
}

function toiletHasHose(toilet) {
  return toilet.facilities.hose
}

function toiletHasShowerHeads(toilet) {
  return toilet.facilities.showerHeads
}

function toiletHasWaterCooler(toilet) {
  return toilet.facilities.waterCooler
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

function howLongAgo(date) {
  const diff = Math.abs(date.toDate() - Date.now())
  if (diff < 1000) {
    return "Now"
  } else if (diff < 60000) {
    const sec = Math.floor(diff / 1000)
    return sec === 1 ? `${sec} second ago` : `${sec} seconds ago`
  } else if (diff < 3600000) {
    const min = Math.floor(diff / 60000)
    return min === 1 ? `${min} minute ago` : `${min} minutes ago`
  } else if (diff < 86400000) {
    const hour = Math.floor(diff / 3600000)
    return hour === 1 ? `${hour} hour ago` : `${hour} hours ago`
  } else if (diff < 604800000) {
    const day = Math.floor(diff / 86400000)
    return day === 1 ? `${day} day ago` : `${day} days ago`
  } else if (diff < 2628000000) {
    const week = Math.floor(diff / 604800000)
    return week === 1 ? `${week} week ago` : `${week} weeks ago`
  } else if (diff < 31540000000) {
    const month = Math.floor(diff / 2628000000)
    return month === 1 ? `${month} month ago` : `${month} months ago`
  } else {
    return (
      "Posted on " +
      date.toDate().toLocaleString("default", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    )
  }
}

function starsStateToScore(starsState) {
  return starsState.filter(x => x).length
}

export {
  latLonToMetres,
  hasMaleToilet,
  hasFemaleToilet,
  hasHandicappedToilet,
  hasSeparateHandicappedToilet,
  toiletHasHose,
  toiletHasShowerHeads,
  toiletHasWaterCooler,
  appendMetres,
  buttonToLinkStyle,
  howLongAgo,
  starsStateToScore
}
