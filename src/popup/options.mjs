import { config } from "../config.mjs";
const urlInput = document.getElementById("url");
(async () => {
  const conf = await chrome.storage.local.get(["url"]);
  urlInput.value = conf.url || config.target_url;
  console.log("END", config, urlInput.value);
})();
urlInput.addEventListener("input", () => {
  chrome.storage.local.set({ url: urlInput.value });
  console.log(urlInput.value);
});
