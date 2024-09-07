export class Shape {
  getPerimeter() {
    return
  }

  getArea() {
    return
  }

}

export class Rectangle extends Shape{
   width = 0
  private height = 0

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getPerimeter() {
    return (this.width + this.height) * 2
  }

  getArea() {
    return this.width * this.height
  }

}
type numberOfSide = 1 | 2 | 3

export class Triangle extends Shape{
  private firstSide = 0
  private secondSide = 0
  private thirdSide = 0

  constructor(firstSide: number, secondSide: number, thirdSide: number) {
    super()
    this.firstSide = firstSide
    this.secondSide = secondSide
    this.thirdSide = thirdSide
  }

  getPerimeter() {
    return (this.firstSide + this.secondSide + this.thirdSide)
  }

  // p = p(p-a)(p-b)(p-c) where p = a+b+c / 2
  getArea() {
    const p = (this.firstSide + this.secondSide + this.thirdSide) / 2

    const area = Math.sqrt(p*(p-this.firstSide)*(p-this.secondSide)*(p-this.thirdSide))
 
    return area
  }

  getHeight(numberOfSide: numberOfSide) {
    let side = null
    
    if (numberOfSide === 1) {
      side = this.firstSide
    } else if (numberOfSide === 2){
      side = this.secondSide
    } else if (numberOfSide === 3) {
      side = this.thirdSide
    } else {
      return
    }
    const area = this.getArea()

    const height = (area * 2) / side

    return height
  }
}

export class Cirle extends Shape{
  private radius = 0

  constructor(radius: number) {
    super()
    this.radius = radius
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius
  }

  getDiameter() {
    return this.radius * 2
  }
}