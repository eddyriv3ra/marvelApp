const getDivToPortal = () => {
  const elementId = document.getElementById("modal-root");
  if (!elementId) {
    console.warn("modal-root not found");
    return document.createElement("div");
  }
  return elementId;
};

export default getDivToPortal;
