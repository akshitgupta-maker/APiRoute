const sendApproval = async () => {
  await fetch("/api/send-approval-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     
        name: "Ankush",
        email: "ankush3515@gmail.com" // no comma at end
      }