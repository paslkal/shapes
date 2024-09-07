export class Shape {
  getPerimeter() {
    return 0
  }

  getArea() {
    return 0
  }

}

export class Rectangle extends Shape{
  private width = 0
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

  getWidth() {
    return this.width
  }

  setWidth(width: number) {
    this.width = width
  }

  getHeight() {
    return this.height
  }

  setHeight(height: number) {
    this.height = height
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

  getFirstSide() {
    return this.firstSide
  }

  setFirstSide(side: number) {
    this.firstSide = side
  }

  getSecondSide() {
    return this.secondSide
  }

  setSecondSide(side: number) {
    this.secondSide = side
  }

  getThirdSide() {
    return this.thirdSide
  }

  setThirdSide(side: number) {
    this.thirdSide = side
  }

  // s = a*h / 2
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
    return Math.PI * this.getRadius()
  }

  getRadius() {
    return this.radius
  }

  getDiameter() {
    return this.radius * 2
  }
}