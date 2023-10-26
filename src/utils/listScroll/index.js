export function scrollLeftProducts() {
  const left = document.querySelector("#productList");
  left?.scrollBy(-760, 0);
}

export function scrollRightProducts() {
  const right = document.querySelector("#productList");
  right?.scrollBy(760, 0);
}
