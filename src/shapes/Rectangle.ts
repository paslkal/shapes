import { Shape } from "./Shape"

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
