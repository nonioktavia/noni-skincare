document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("rekomendasi");

  if (box) {

    document.getElementById("kulit-kering").onclick = function () {
      box.innerHTML = `
        <h3>Rekomendasi Kulit Kering</h3>

        <div class="rekom-produk">
          <div class="rekom-item">
            <img src="toner.jpeg">
            <p>Hydrating Toner</p>
          </div>

          <div class="rekom-item">
            <img src="mois.jpeg">
            <p>Moisturizer Aloe</p>
          </div>

          <div class="rekom-item">
            <img src="vit.jpeg">
            <p>Serum HA</p>
          </div>

          <div class="rekom-item">
            <img src="mask.jpeg">
            <p>Sheet Mask</p>
          </div>
        </div>

        <a href="produk.html" class="btn-produk">Lihat Produk</a>
      `;
      box.classList.add("animasi");
    };

    document.getElementById("kulit-berjerawat").onclick = function () {
      box.innerHTML = `
        <h3>Rekomendasi Kulit Berjerawat</h3>

        <div class="rekom-produk">
          <div class="rekom-item">
            <img src="cumuk.jpeg">
            <p>Acne Cleanser</p>
          </div>

          <div class="rekom-item">
            <img src="toner.jpeg">
            <p>Toner Tea Tree</p>
          </div>

          <div class="rekom-item">
            <img src="vit.jpeg">
            <p>Serum Acne</p>
          </div>
        </div>

        <a href="produk.html" class="btn-produk">Lihat Produk</a>
      `;
      box.classList.add("animasi");
    };

    document.getElementById("kulit-kombinasi").onclick = function () {
      box.innerHTML = `
        <h3>Rekomendasi Kulit Kombinasi</h3>

        <div class="rekom-produk">
          <div class="rekom-item">
            <img src="cumuk.jpeg">
            <p>Gentle Cleanser</p>
          </div>

          <div class="rekom-item">
            <img src="toner.jpeg">
            <p>Toner Balance</p>
          </div>

          <div class="rekom-item">
            <img src="suns.jpeg">
            <p>Sunscreen</p>
          </div>
        </div>

        <a href="produk.html" class="btn-produk">Lihat Produk</a>
      `;
      box.classList.add("animasi");
    };
  }
  const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".produk-item").forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = item.dataset.img;
    modalTitle.textContent = item.dataset.title;
    modalDesc.textContent = item.dataset.desc;
  });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

});
