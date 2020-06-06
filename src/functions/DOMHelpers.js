export const didClickInside = (refElement, event) => {
  if (!refElement.current) return false;
  try {
    let boundary = refElement.current.getBoundingClientRect();
    return (
      event.clientX >= boundary.x &&
      event.clientX <= boundary.x + boundary.width &&
      event.clientY >= boundary.y &&
      event.clientY <= boundary.y + boundary.height
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const didClickInsideArray = (array, event) => {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (didClickInside(element, event)) return true;
  }
  return false;
};
