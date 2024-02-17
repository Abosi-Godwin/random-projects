class Chair {
  constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable) {
    this.color = color;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.backSupport = backSupport;
    this.headSupport = headSupport;
    this.padding = padding;
    this.armRests = armRests;
    this.seatSize = seatSize;
    this.isHeightAdjustable = isHeightAdjustable;
    this.isMovable = isMovable;
  }

  checkSeatHeight() {
    return this.seatHeight;
  }
}


class ShopChair extends Chair {

  constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable, type) {

    super(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests,seatSize, isHeightAdjustable,isMovable);
    this.type = type;
  }

}




const ourChair = new Chair("Blue", "25 inch", "20 deg", true, false, "3 inch", true, "16 inch", false, false);


const shopChair = new ShopChair("Red and Blue", "54 inch", "60 deg", true, false, "3 inch", true, " 16 inch", false, true, "office chair");

console.log(ourChair.checkSeatHeight());
console.log(shopChair.checkSeatHeight());

console.log(shopChair);