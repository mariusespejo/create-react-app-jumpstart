export function handleHttpResponse(response) {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status + ' ' + response.statusText);
}

export function getEmbeddedResource(json) {
  if (json._embedded) {
    let embeddedKey = Object.keys(json._embedded);
    return json._embedded[embeddedKey];
  }
  return json;
}
