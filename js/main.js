//cloned new comment element for appending later on.
const commentNewEl = document.getElementsByClassName("comment-new")[0];
const clonedCommentNewEl = commentNewEl.cloneNode(true);

console.log(clonedCommentNewEl, "yare");

//for handling checkbox checked state on the parent div.
const newCommentInputContainerEl = document.getElementsByClassName(
  "comment-new"
);
const commentCheckboxEl = document.getElementById("comment-checkbox");
