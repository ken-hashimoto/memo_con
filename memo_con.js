let arr = []; //メモした内容を格納する配列
let memo = document.getElementById("memo");
let target = document.getElementById("output");
let contents = ""
//webstorageに値が残っているなら復元
if(localStorage["memo"]){
  target.innerHTML = localStorage["memo"];
  arr = target.innerHTML.split("<br><br>");
}

memo.addEventListener('keypress', push);

function push(e) {
  if (e.keyCode == 13 && !e.shiftKey){
    //arrの先頭にメモした内容を追加
      arr.unshift(memo.value);
      contents = arr.join("<br><br>");
      target.innerHTML = contents;
      memo.value = "";
      localStorage["memo"] = contents;
      e.preventDefault();
  }
}
function delete_memo(){
  localStorage.removeItem("memo");
  target.innerHTML = "";
  arr = [];
  alert("削除されました");
}

function copy(){
  // reverse_arrはarrを逆順にしたもの
  reverse_arr = arr.slice().reverse();
  copy_text = reverse_arr.join("\n");
  copyToClipboard(copy_text);
  alert("コピー完了");
  memo.focus();
}

function copyToClipboard(text){
let tmp = document.createElement("textarea");
tmp.value = text;
document.body.appendChild(tmp);
tmp.select();
document.execCommand("copy");
tmp.parentElement.removeChild(tmp);
}