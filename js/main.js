//for cloning later on.
const newCommentEl = document.getElementsByClassName("comment-new")[0];
const inlineComment = document.getElementsByClassName("comment-container")[0];

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

  clonedNewCommentEl.style.display = "flex";
  clonedNewCommentEl.style.position = "absolute";
  clonedNewCommentEl.style.left = x + "px";
  clonedNewCommentEl.style.top = y + "px";

  clonedNewCommentEl.childNodes.forEach((e) => {
    if (e.tagName === "BUTTON" && e.className === "comment-save-button") {
      e.addEventListener(
        "click",
        handleSaveComment.bind(e, clonedNewCommentEl, targetNode, coords)
      );
    }
  });
  document.body.append(clonedNewCommentEl);
}

function handleSaveComment(commentBox, targetNode, coords) {
  let saveButton = this;
  const styleProps = commentBox.style;
  let inputText = "";
  commentBox.childNodes.forEach((e) => {
    if (e.tagName === "INPUT" && e.className === "input-reset") {
      inputText = e.value;
      return;
    }
  });

  const commentText = "" || inputText;

  //for saving in db
  const payload = {
    computedX: styleProps?.left,
    computedY: styleProps?.top,
    pageX: remove_character("px", styleProps.left),
    pageY: remove_character("px", styleProps.top),
    //do stuff with targetNode, just passing it for now since it's not actually being sent anywhere.
    targetNode: targetNode,
    commentText: commentText,
  };

  //show post comment state and remove comment box from dom.
  console.log(payload, "sent to database for processing.");
  commentBox.remove();
  showInlineComment(commentText, coords);
}

function showInlineComment(commentText, coords) {
  const { x, y } = coords;
  const inlineCommentClone = inlineComment.cloneNode(true);
  inlineCommentClone.childNodes.forEach((e) => {
    if (e.tagName === "P" && e.className === "comment-text") {
      e.innerText = commentText;
    }
  });
  console.log(x, y, "second");
  inlineCommentClone.style.display = "inline-flex";
  inlineCommentClone.style.position = "absolute";
  inlineCommentClone.style.left = x + "px";
  inlineCommentClone.style.top = y + "px";
  document.body.append(inlineCommentClone);
}

function remove_character(str_to_remove, str) {
  let reg = new RegExp(str_to_remove);
  return str.replace(reg, "").trim();
}
window.ondblclick = handleAddNewCommentClick;
