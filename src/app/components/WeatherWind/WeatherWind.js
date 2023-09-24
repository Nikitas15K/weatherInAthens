// convert wind speed to beaufort (https://en.wikipedia.org/wiki/Beaufort_scale)

const weatherWind = (speed) => {

    if (speed < 2) {
        return [0, "calm"]
    }

    else if (speed <= 5) {
        return [1, "light air"]
    }

    else if (speed <= 11) {
        return [2, "light breeze"]
    }

    else if (speed <= 19) {
        return [3, "gentle breeze"]
    }

    else if (speed <= 28) {
        return [4, "moderate breeze"]
    }

    else if (speed <= 38) {
        return [5, "fresh breeze"]
    }

    else if (speed <= 49) {
        return [6, "strong breeze"]
    }

    else if (speed <= 61) {
        return [7, "high wind"]
    }

    else if (speed <= 74) {
        return [8, "fresh gale"]
    }

    else if (speed <= 88) {
        return [9, "severe gale"]
    }

    else if (speed <= 102) {
        return [10, "storm"]
    }

    else if (speed <= 117) {
        return [11, "violent storm"]
    }
    else if (speed > 117) {
        return [12, "hurricane force"]
    }
    else
        return "no wind info"

}

export default weatherWind;