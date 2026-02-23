// Mobile drawer
const drawer = document.querySelector("[data-drawer]");
const openBtn = document.querySelector("[data-open-drawer]");
const closeBtn = document.querySelector("[data-close-drawer]");

if (openBtn && drawer) openBtn.addEventListener("click", () => drawer.classList.add("open"));
if (closeBtn && drawer) closeBtn.addEventListener("click", () => drawer.classList.remove("open"));
if (drawer) drawer.addEventListener("click", (e) => {
  if (e.target === drawer) drawer.classList.remove("open");
});

// Modal for work tiles
const modal = document.querySelector("[data-modal]");
const modalClose = document.querySelector("[data-modal-close]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalSub = document.querySelector("[data-modal-sub]");
const modalImg = document.querySelector("[data-modal-img]");
const modalDesc = document.querySelector("[data-modal-desc]");
const modalTag = document.querySelector("[data-modal-tag]");
const modalLinkWatch = document.querySelector("[data-modal-watch]");
const modalLinkIG = document.querySelector("[data-modal-ig]");

function openModal(data){
  if(!modal) return;
  modalTitle.textContent = data.title || "Project";
  modalSub.textContent = data.client || "";
  modalTag.textContent = data.tag || "Work";
  modalImg.src = data.image || "";
  modalImg.alt = data.title || "Project image";
  modalDesc.textContent = data.desc || "Project description goes here.";

  // Optional links
  if (data.watch && data.watch !== "#") {
    modalLinkWatch.href = data.watch;
    modalLinkWatch.style.display = "inline-flex";
  } else {
    modalLinkWatch.style.display = "none";
  }

  if (data.ig && data.ig !== "#") {
    modalLinkIG.href = data.ig;
    modalLinkIG.style.display = "inline-flex";
  } else {
    modalLinkIG.style.display = "none";
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  if(!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modal) modal.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

document.querySelectorAll("[data-tile]").forEach(tile => {
  tile.addEventListener("click", () => {
    openModal({
      title: tile.dataset.title,
      client: tile.dataset.client,
      tag: tile.dataset.tag,
      desc: tile.dataset.desc,
      image: tile.dataset.image,
      watch: tile.dataset.watch,
      ig: tile.dataset.ig
    });
  });
});

// Footer year
const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
