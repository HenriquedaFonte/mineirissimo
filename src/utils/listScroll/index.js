export function scrollLeftProducts() {
  const left = document.querySelector("#list");
  left?.scrollBy(-740, 0);
}

export function scrollRightProducts() {
  const right = document.querySelector("#list");
  right?.scrollBy(740, 0);
}
