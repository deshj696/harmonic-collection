

let lattePics = [
  "../archive/latte1.png",
  "../archive/latte2.png",
  "../archive/latte3.png",
  "../archive/latte4.png",
  "../archive/latte5.png",
  "../archive/latte6.png",
  "../archive/latte7.png"
];

let latteImg = document.getElementById("latte-img");
let latteIndex = 0;

latteImg.addEventListener("click", function () {
  latteIndex = latteIndex + 1;

  if (latteIndex === lattePics.length) {
    latteIndex = 0;
  }

  latteImg.src = lattePics[latteIndex];
});




let hotpotPics = [
  "../archive/hopo1.png",  // corn
  "../archive/hopo2.png",  // bok choy
  "../archive/hopo3.png",  // beef rolls
  "../archive/hopo4.png",  // tteok
  "../archive/hopo5.png",  // ramen
  "../archive/hopo6.png",  // fish cake
  "../archive/hopo7.png"   // tofu
];

let hotpotImg = document.getElementById("malatang-img");
let hotpotIndex = 0;

hotpotImg.addEventListener("click", function () {
  hotpotIndex = hotpotIndex + 1;

  if (hotpotIndex === hotpotPics.length) {
    hotpotIndex = 0;
  }

  hotpotImg.src = hotpotPics[hotpotIndex];
});



let outfitPics = [
  "../archive/fit1.png",  // grey hoodie
  "../archive/fit2.png",  // Acne Studios scarf
  "../archive/fit3.png",  // camo shirt
  "../archive/fit4.png",  // Stussy beanie
  "../archive/fit5.png",  // taupe wool coat
  "../archive/fit6.png"   // polka dot blouse
];

let outfitImg = document.getElementById("outfit-img");
let outfitIndex = 0;

outfitImg.addEventListener("click", function () {
  outfitIndex = outfitIndex + 1;

  if (outfitIndex === outfitPics.length) {
    outfitIndex = 0;
  }

  outfitImg.src = outfitPics[outfitIndex];
});
