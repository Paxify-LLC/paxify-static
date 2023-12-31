async function requestVerification() {
  try {
    await fetch("https://backend.paxify.io/auth/requestVerification", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, storeId }),
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

requestVerification();
