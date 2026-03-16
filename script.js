// Handle admission modal
const modalBackdrop = document.getElementById("admission-modal");
const admissionButtons = document.querySelectorAll("[data-open-admission]");
const modalCloseBtn = document.querySelector("[data-close-admission]");
const admissionForm = document.getElementById("admission-form");

function openModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.add("show");
}

function closeModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove("show");
}

admissionButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => {
    closeModal();
  });
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });
}

if (admissionForm) {
  admissionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentName = admissionForm.studentName?.value.trim();
    const fatherName = admissionForm.fatherName?.value.trim();
    const classLevel = admissionForm.classLevel?.value;
    const phone = admissionForm.phone?.value.trim();
    const email = admissionForm.email?.value.trim();
    const previousSchool = admissionForm.previousSchool?.value.trim();
    const message = admissionForm.message?.value.trim();

    const lines = [
      "*New Admission Enquiry* - Dua Public School & College",
      "",
      `Student Name: ${studentName || "-"}`,
      `Father/Guardian Name: ${fatherName || "-"}`,
      `Applying For: ${classLevel || "-"}`,
      `Contact Number: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      `Previous School/College: ${previousSchool || "-"}`,
      "",
      `Additional Details: ${message || "-"}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const whatsappNumber = "923112323217"; // without +
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
  });
}

// Floating WhatsApp button
const globalWhatsappButton = document.getElementById("whatsapp-float-btn");
if (globalWhatsappButton) {
  globalWhatsappButton.addEventListener("click", () => {
    const whatsappNumber = "923112323217";
    const text = encodeURIComponent(
      "Assalamualaikum, I would like to ask about admission at Dua Public School & College."
    );
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  });
}

// Footer WhatsApp
const footerWhatsappButton = document.getElementById("footer-whatsapp");
if (footerWhatsappButton) {
  footerWhatsappButton.addEventListener("click", () => {
    const whatsappNumber = "923112323217";
    const text = encodeURIComponent(
      "Assalamualaikum, I would like to enquire about admission at Dua Public School & College."
    );
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  });
}

// Simple mobile menu (removed as per design update)

