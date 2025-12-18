class Modal {
  constructor(modalSelector, openModal, closeModal) {
    this.modal = document.querySelector(modalSelector);
    this.openModal = document.querySelectorAll(openModal);
    this.closeModal = document.querySelectorAll(closeModal);

    this.addEvent();
  }

  addEvent() {
    this.openModal.forEach((btn) => {
      btn.addEventListener("click", () => this.open());
    });

    this.closeModal.forEach((btnClose) => {
      btnClose.addEventListener("click", () => this.close());
    });

    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.close();
    });
  }
  open() {
    this.modal.classList.add("active");
  }
  close() {
    this.modal.classList.remove("active");
  }
}
new Modal(".modal", ".open-modal", ".close");
