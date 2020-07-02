const newCommentEl = document.getElementsByClassName("comment-new")[0];

//for handling checkbox checked state on the parent div.
const newCommentInputContainerEl = document.getElementsByClassName(
  "comment-new"
);
const commentCheckboxEl = document.getElementById("comment-checkbox");

function handleAddNewCommentClick(e) {
  //center origin is top-left.
  const x = e.pageX;
  const y = e.pageY;
  const coords = {
    x,
    y,
  };

  appendNewCommentOnCoords(coords);
}

function appendNewCommentOnCoords(coords, commentText) {
  console.log("here");
  const { x, y } = coords;
  const clonedNewCommentEl = newCommentEl.cloneNode(true);

  clonedNewCommentEl.display = "block";
  clonedNewCommentEl.position = "absolute";
  clonedNewCommentEl.style.left = x + "px";
  clonedNewCommentEl.style.top = y + "px";
  document.body.append(clonedNewCommentEl);
}

function handleSaveComment() {}

window.onclick = handleAddNewCommentClick;
