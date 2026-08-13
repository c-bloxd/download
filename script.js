const supabase = window.supabase.createClient(
    "https://ecurculdinfgvnlxhstv.supabase.co",
    "sb_publishable_nvHEtUh2DWUBID5jtHTcxg_f0zRYwH8"
);

async function incrementCounter(counterName) {
    const { data, error } = await supabase.rpc(
        "increment_counter",
        { counter_name: counterName });
    if (error) { return null; }
    return data;
}

async function downloadPack() {
    const count = await incrementCounter("TpackDCounter");
    const link = document.createElement("a");
    link.href = "assets/tpacks/C_Bloxd 8x.zip";
    link.download = "C_Bloxd 8x.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
async function downloadAssetPack() {
    const count = await incrementCounter("AssetDCounter");
    const link = document.createElement("a");
    link.href = "https://github.com/c-bloxd/download/releases/download/1.0/C_Bloxds.Essentials.V1.zip";
    link.download = "C_Bloxd Essentials (V1).zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function downloadRig() {
    const count = await incrementCounter("RigDCounter");
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

async function loadDownloadCounts() {
    const { data, error } = await supabase
        .from("counters")
        .select("name, value");

    if (error) { return; }
    data.forEach(counter => {
        const element = document.getElementById(counter.name);
        if (element) { element.textContent = `${counter.value.toLocaleString()} downloads`; }
    });
}

loadDownloadCounts();
