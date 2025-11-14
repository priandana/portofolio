// Tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fungsi kirim via email memakai mailto
function openMailto(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("Kolaborasi / Pertanyaan - dari " + name);
  const body = encodeURIComponent(
    `Halo,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}\n\nDikirim dari form portofolio.`
  );

  window.location.href = `mailto:emailkamu@example.com?subject=${subject}&body=${body}`;
  return false;
}
