export const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

// http://scratch99.com/web-development/javascript/how-to-get-the-domain-from-a-url/
export const getDomainFromUrl = url =>
  url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(/[/?#]/)[0]
