class WaterBottle {
  constructor(volume, material, brand, color, opened) {
    this.volume = volume;
    this.material = material;
    this.brand = brand;
    this.color = color;
    this.opened = opened;
  }
  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
}

export default WaterBottle;
