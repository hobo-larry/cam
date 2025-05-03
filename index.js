const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function sendImage() {
  const form = new FormData();
  form.append("image", fs.createReadStream("input.jpg"));

  const res = await axios.post("http://localhost:5000/process", form, {
    headers: form.getHeaders(),
    responseType: "arraybuffer",
  });

  fs.writeFileSync("output.jpg", res.data);
  console.log("Processed image saved as output.jpg");
}

sendImage().catch(console.error);
