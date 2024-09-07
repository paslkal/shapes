import { Shape } from "./Shape"

export class Circle extends Shape{
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