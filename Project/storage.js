export function saveData(data) {
  console.log("📌 User Submitted Data:", data);
  localStorage.setItem("registrationData", JSON.stringify(data));
  return "Data saved successfully (check console).";
}
