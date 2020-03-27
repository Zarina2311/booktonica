export function getAllBooks() {
  return fetch("/books", {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        `😩 fetch('/books') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}. (Note: this error is custom to Booktonica and you cannot Google it). Check your Network console for more information about the request and the Express logs for more information about the response.`
      );
    }
  });
}

export function addComment(comment) {
  return fetch("/comments", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Unexpected non-OK HTTP status: POST /comments");
    }
  });
}

export function getComments() {
  return fetch("/comments", {
    headers: {
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        ` fetch('/comments') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}.`
      );
    }
  });
}
