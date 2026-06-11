// MODAL
function initModal() {
  const appModal = document.getElementById('app-modal')
  appModal.addEventListener('show.bs.modal', event => {
    // Image element in which all necessary data is stored
    const image = event.relatedTarget
    // Pull the data
    const appTitle = image.getAttribute('data-bs-app-title')
    const appBody = image.getAttribute('data-bs-app-body')
    const appIcon = image.getAttribute('data-bs-app-icon')
    const appLink = image.getAttribute('data-bs-app-link')
    // Get HTML elements by using classes
    const modalTitle = appModal.querySelector('.modal-title')
    const modalBody = appModal.querySelector('.modal-body pre')
    const modalImage = appModal.querySelector('.card-img-top')
    const modalLink = appModal.querySelector('.card-link')
    // Update the modal's content
    modalTitle.textContent = appTitle
    modalBody.textContent = appBody
    modalImage.src = appIcon
    modalLink.href = appLink
    modalLink.textContent = appTitle
  })
}

function initValidation() {
  const forms = document.querySelectorAll('.needs-validation')
  console.log("VALIDATION ACTIVATED")
  console.log(forms.length)

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
}

// As there is no element (show.bs.modal) on a Contact page, but Javascript still executes
// I provided this structure to handle crash if any
try {
  initModal()
} catch (e) {
  console.log(e)
} finally {
  initValidation()
}