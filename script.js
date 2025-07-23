document.getElementById("disasterForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const magnitude = parseFloat(document.getElementById("magnitude").value);
  const depth = parseFloat(document.getElementById("depth").value);
  const rainfall = parseFloat(document.getElementById("rainfall").value);

  let prediction = "No Disaster";

  // 🔁 Simple Logic (replace with real ML API later)
  if (magnitude > 4.5 && depth < 70) {
    prediction = "Earthquake";
  } else if (rainfall > 100) {
    prediction = "Flood";
  }

  document.getElementById("result").innerText = `🚨 Prediction: ${prediction}`;
});
