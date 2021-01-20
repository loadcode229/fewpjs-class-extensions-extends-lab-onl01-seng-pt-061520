class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce(((add, side) => add + side), 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let array = this.array;
        if (array[0] + array[1] > array[2] && array[0] + array[2] > array[1] && array[1] + array[2] > array[0]) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let array = this.array;
        if (array[0] === array[1] && array[1] === array[2] && array[2] === array[3]) {
            return true
        } else {
            return false
        }
    }
    get area() {
        let array = this.array;
        return array[0] * array[1]
    }
}