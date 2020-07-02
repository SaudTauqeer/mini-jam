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

  appendNewCommentOnCoords(coords);
}

function appendNewCommentOnCoords(coords) {
  const { x, y } = coords;
  const clonedNewCommentEl = newCommentEl.cloneNode(true);

  clonedNewCommentEl.display = "block";
  clonedNewCommentEl.position = "absolute";
  clonedNewCommentEl.style.left = x + "px";
  clonedNewCommentEl.style.top = y + "px";

  document.body.append(clonedNewCommentEl);
}

function handleSaveComment() {}

window.ondblclick = handleAddNewCommentClick;
