import "../scss/style.scss";

const wrapperTree = document.createElement("div");
wrapperTree.classList.add("wrapper-tree");
document.body.append(wrapperTree);
//CONTAINER TREE
const treeContainer = document.createElement("div");
treeContainer.classList.add("tree-container");
//STAR
const star = document.createElement("div");
star.classList.add("star");
//the tree itself
const tree = document.createElement("div");
tree.classList.add("tree");
//layers container
const layerContainer = document.createElement("div");
layerContainer.classList.add("layer-tree");

//layer generator
function createLayerTree(level) {
  const form = document.createElement("div");
  form.classList.add(`form-layer-${level}`);

  const layerLeft = document.createElement("div");
  layerLeft.classList.add(`layer-left-${level}`);
  //balls
  const boll = document.createElement("div");
  boll.classList.add("boll", `${level}`);

  const layerRight = document.createElement("div");
  layerRight.classList.add(`layer-right-${level}`);

  layerLeft.append(boll);
  form.append(layerLeft, layerRight);

  return form;
}
const layerCount = 5;
for (let i = 1; i <= layerCount; i++) {
  const layer = createLayerTree(i);
  layerContainer.append(layer);
}
//steam
const steam = document.createElement("div");
steam.classList.add("stem");
//add to markup
wrapperTree.append(treeContainer);
treeContainer.append(star, tree);
tree.append(layerContainer, steam);
