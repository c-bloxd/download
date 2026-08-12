
function downloadPack() {
  const link = document.createElement("a");
  link.href = "assets/tpacks/C_Bloxd 8x.zip";
  link.download = "C_Bloxd 8x.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadAssetPack() {
  const link = document.createElement("a");
  link.href = "https://github.com/c-bloxd/download/releases/download/1.0/C_Bloxds.Essentials.V1.zip";
  link.download = "C_Bloxd Essentials (V1).zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadRig() {
  const link = document.createElement("a");
  link.href = "assets/tpacks/Bob Rig Wide.bbmodel";
  link.download = "Bob Rig Wide.bbmodel";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.querySelector("#Tpack-btn").addEventListener("click", function () {
    downloadPack();
});

document.querySelector("#Asset-btn").addEventListener("click", function () {
    downloadAssetPack();
});

document.querySelector("#Rig-btn").addEventListener("click", function () {
    downloadRig();
});

document.querySelector(".tooltip").addEventListener("click", function () {
    window.open("https://www.youtube.com/@_GEORGECR_", "_blank");
});

document.querySelector(".youtube-btn").addEventListener("click", function () {
    window.open("https://www.youtube.com/@C_Bloxd", "_blank");
});

document.querySelector(".discord-btn").addEventListener("click", function () {
    window.open("https://discord.com/invite/xaZjMWeFcr", "_blank");
});

document.querySelector(".jobs-btn").addEventListener("click", function () {
    window.open("https://ytjobs.co/talent/profile/556663", "_blank");
});
