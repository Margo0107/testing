import "../js/utils";
import "../scss/styles.scss";

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
  form.classList.add(`form-layer`);

  const layerLeft = document.createElement("div");
  layerLeft.classList.add(`layer-left`);
  //balls
  const boll = document.createElement("div");
  boll.classList.add(`boll`);

  const layerRight = document.createElement("div");
  layerRight.classList.add(`layer-right`);

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

const colors = [
  "rgb(252, 23, 23)",
  "rgb(255, 153, 0)",
  "rgb(255, 214, 33)",
  "rgba(95, 243, 9, 1)",
  "rgb(33, 255, 207)",
  "rgb(33, 137, 255)",
  "rgb(81, 33, 255)",
  "rgb(203, 33, 255)",
  "rgb(255, 33, 218)",
];
const bollsi = document.querySelectorAll(".boll");
function pointBolls() {
  bollsi.forEach((boll, index) => {
    boll.style.boxShadow = `0px 1px 8px 3px ${colors[index % colors.length]}`;
    boll.style.backgroundColor = colors[index % colors.length];
  });
}
pointBolls();

let start = 0;
function runBolls() {
  bollsi.forEach((boll, index) => {
    const colorIndex = (index + start) % colors.length;
    boll.style.boxShadow = `0px 1px 8px 3px ${colors[colorIndex]}`;
    boll.style.backgroundColor = colors[colorIndex];
  });
  start++;
}
setInterval(runBolls, 500);
