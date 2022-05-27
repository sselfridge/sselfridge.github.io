const targetMap = {
  infoBtn: "infoSection",
  contributeBtn: "contributeSection",
  contributeBtn2: "contributeSection",
};

window.onload = function () {
  const btns = Object.keys(targetMap);

  btns.forEach((btn) =>
    document.getElementById(btn).addEventListener("click", scrollToArea)
  );
  document.getElementById("textArea").addEventListener;
};

const scrollToArea = (e) => {
  const id = targetMap[e.target.id];
  console.info("id: ", id);
  document
    .getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: "start" });
};

const submit = () => {
  const textArea = document.getElementById("textArea");
  const value = textArea.value;
  const sendVal = encodeURIComponent(value);
  fetch(
    `http://www.mapper.bike/api/sbmt/submission/BikssesBeersBaby3a58a6bc3f6a?segment=${sendVal}`,
    { method: "GET", mode: "cors" }
  )
    .then((response) => response.json())
    .then(endSubmit)
    .catch(endSubmit);
};

const endSubmit = () => {
  document.getElementById("submitArea").classList.add("hideElm");
  document.getElementById("allDone").classList.remove("hideElm");
  document.getElementById("submitArea").classList.remove("flexCol");
  document.getElementById("allDone").classList.add("flexCol");
  document.getElementById("textArea").value = "";
};

const bringTextBack = () => {
  document.getElementById("submitArea").classList.remove("hideElm");
  document.getElementById("allDone").classList.add("hideElm");
  document.getElementById("submitArea").classList.add("flexCol");
  document.getElementById("allDone").classList.remove("flexCol");
};

const onTextChange = () => {
  const ta = document.getElementById("textArea");
  const value = `${ta.value}`;
  const count = value.length;

  document.getElementById("textCount").innerText = 1000 - count;
};

setInterval(onTextChange, 450);
