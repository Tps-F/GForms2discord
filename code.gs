function send_discord(e) {
  const WEBHOOKURL = "YOURWEBHOOK"

  URL = getURL(e)

  const message = {
    "embeds": [
      {
        "image": { "url": URL }
      }

    ]
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(WEBHOOKURL, param)
}


function getURL(e) {
  url = e.namedValues['Image'][0] // Change it to suit you.
  replaceWord = "https://drive.google.com/open?id=";
  id = url.replace(replaceWord, "")
  previewURL = "http://drive.google.com/uc?export=view&id=" + id
  return previewURL
}
