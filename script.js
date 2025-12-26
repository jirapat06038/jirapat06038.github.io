function calculateTotal() {
  const price = Number(document.getElementById("case").value);
  const round = Number(document.getElementById("round").value);
  document.getElementById("total").innerText = price * round;
}

function saveData() {
  const name = document.getElementById("name").value;
  const caseSelect = document.getElementById("case");
  const caseText = caseSelect.options[caseSelect.selectedIndex].text;
  const round = document.getElementById("round").value;
  const total = document.getElementById("total").innerText;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  document.getElementById("popupText").innerHTML = `
    <strong>${name}</strong> ทำผิดในกรณี<br>
    <span style="color:#ff5d8f;">${caseText}</span><br><br>

    จำนวน <strong>${round}</strong> ครั้ง<br>
    💰 เป็นเงิน <strong>${total}</strong> บาท<br><br>

    ⏰ กรุณาชำระก่อนวันที่<br>
    <strong>${tomorrow.toLocaleDateString("th-TH")}</strong>
  `;

  document.getElementById("popupBg").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupBg").style.display = "none";
}

function confirmSave() {
  closePopup();
  // ตรงนี้เดี๋ยวค่อยต่อ backend / บันทึกจริง
}

function openAgreement() {
  document.getElementById("agreementBg").style.display = "flex";
}

function closeAgreement() {
  document.getElementById("agreementBg").style.display = "none";
}
