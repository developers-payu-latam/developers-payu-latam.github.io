// debugger;

function createCopyButton(highlightDiv) {

  const copyBtnDiv = document.createElement('div');

  copyBtnDiv.setAttribute("class", "copy-btn-container")

  const copyBtnText = document.createElement('span');
  copyBtnText.setAttribute("class", "copy-btn-txt")
  copyBtnText.innerHTML = "Copy"
  copyBtnDiv.appendChild(copyBtnText);

  const button = document.createElement('i');
  button.className = "far fa-copy";
  copyBtnDiv.appendChild(button);

  button.addEventListener("click", () =>
      copyCodeToClipboard(copyBtnText, highlightDiv)
  );
  addCopyButtonToDom(copyBtnDiv, highlightDiv);
}




async function copyCodeToClipboard(copyCodeToClipboard, highlightDiv) {
  const codeToCopy = highlightDiv.querySelector(":last-child > code")
      .innerText;
  try {
      result = await navigator.permissions.query({ name: "clipboard-write" });
      if (result.state == "granted" || result.state == "prompt") {
          await navigator.clipboard.writeText(codeToCopy);
      } else {
          copyCodeBlockExecCommand(codeToCopy, highlightDiv);
      }
  } catch (_) {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
  } finally {
      codeWasCopied(copyCodeToClipboard);
  }
}

function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
  const textArea = document.createElement("textArea");
  textArea.contentEditable = "true";
  textArea.readOnly = "false";
  //textArea.className = "copyable-text-area";
  textArea.value = codeToCopy;
  highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
  const range = document.createRange();
  range.selectNodeContents(textArea);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  textArea.setSelectionRange(0, 999999);
  textArea.select();
  document.execCommand("copy");
  highlightDiv.removeChild(textArea);
}

function codeWasCopied(codeWasCopied) {
  // button.blur();
  codeWasCopied.innerHTML = "Copied!";
  setTimeout(function() {
      codeWasCopied.innerHTML = "Copy";
  }, 2000);
}

function addCopyButtonToDom(button, highlightDiv) {
  highlightDiv.insertBefore(button, highlightDiv.firstChild);
  const wrapper = document.createElement("div");
  wrapper.className = "highlight-wrapper";
  highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
  wrapper.appendChild(highlightDiv);
}

document
  .querySelectorAll(".highlight")
  .forEach((highlightDiv) => createCopyButton(highlightDiv));