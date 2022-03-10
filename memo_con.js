let arr = [];
memo = document.getElementById("memo");
memo.addEventListener('keypress', push);
function push(e) {
  if (e.keyCode == 13 && !e.shiftKey){
      target = document.getElementById("output");
      memo = document.getElementById("memo");
      arr.unshift(memo.value)
      target.innerHTML = arr.join("<br><br>");
      memo.value = "";
      copy();
      e.preventDefault();
  }
}
function copy(num){
  new_arr = arr.slice().reverse();
  copy_text = new_arr.join("\n");
  copyToClipboard(copy_text);
  if (num === 0){
  alert("コピー完了");
  }
  memo.focus();
}
function copyToClipboard(text){
var tmp = document.createElement("textarea");
tmp.value = text;
document.body.appendChild(tmp);
tmp.select();
document.execCommand("copy");
tmp.parentElement.removeChild(tmp);
}