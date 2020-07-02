//for cloning later on.
const newCommentEl = document.getElementsByClassName("comment-new")[0];

function handleAddNewCommentClick(e) {
  document.body.classList.add("noselect");
  //center origin is top-left.
  const x = e.pageX;
  const y = e.pageY;
  const coords = {
    x,
    y,
  };
  const targetNode = e.target;
  appendNewCommentOnCoords(coords, targetNode);
}

function appendNewCommentOnCoords(coords, targetNode) {
  const { x, y } = coords;
  const clonedNewCommentEl = newCommentEl.cloneNode(true);

  clonedNewCommentEl.display = "block";
  clonedNewCommentEl.position = "absolute";
  clonedNewCommentEl.style.left = x + "px";
  clonedNewCommentEl.style.top = y + "px";

  clonedNewCommentEl.childNodes.forEach((e) => {
    if (e.tagName === "BUTTON" && e.className === "comment-save-button") {
      e.addEventListener(
        "click",
        handleSaveComment.call(e, clonedNewCommentEl, targetNode)
      );
    }
  });
  document.body.append(clonedNewCommentEl);
}

function handleSaveComment(parentNodeOfSaveButton, targetNode) {
  let saveButton = this;
  const styleProps = parentNodeOfSaveButton.style;
  //for saving in db
  const payload = {
    computedX: styleProps?.left,
    computedY: styleProps?.top,
    pageX: remove_character("px", styleProps.left),
    pageY: remove_character("px", styleProps.left),
    targetNode: targetNode,
    //do stuff with targetNode, just passing it for now since it's not actually being sent anywhere.
  };

  let inputEl;
}

function remove_character(str_to_remove, str) {
  let reg = new RegExp(str_to_remove);
  return str.replace(reg, "").trim();
}
window.ondblclick = handleAddNewCommentClick;
