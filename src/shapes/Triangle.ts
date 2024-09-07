import { Shape } from "./Shape"

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
