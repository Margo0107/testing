function Modal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  this.init = function (openSelector, closeSelector) {
    const openButton = document.querySelector(openSelector);
    openButton.addEventListener("click", this.openModal);

    const closeButton = document.querySelector(closeSelector);
    closeButton.addEventListener("click", this.closeModal);

    window.addEventListener("click", () => this.closeModalOutside(event));
  };
  this.openModal = function () {
    modal.classList.add("modal__open");
  };
  this.closeModal = function () {
    modal.classList.remove("modal__open");
  };
  this.closeModalOutside = function (event) {
    if (event.target === modal) {
      this.closeModal();
    }
  };
}
const modal = new Modal(".modal");
modal.init(".modal-btn-open", ".modal-close");

const modal2 = new Modal(".modal");
modal2.init(".modal-btn-open2", ".modal-close");
