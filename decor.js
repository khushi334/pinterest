

  const images = document.querySelectorAll('.container-card img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  images.forEach(img => {
    img.addEventListener('click', () => {
      if (img.src) {
        modal.style.display = 'block';
        modalImage.src = img.src;
      }
    });
  });

  function closeModal() {
    modal.style.display = 'none';
  }

  
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

 
  document.addEventListener("DOMContentLoaded", function () {
    const saveBtn = document.getElementById('saveBtn');
    const toast = document.getElementById('toastMessage');

    if (saveBtn && toast) {
      saveBtn.addEventListener('click', () => {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2000);
      });
    }
  });


  function showSaveMessage() {
    const toast = document.getElementById('toastMessage');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

 
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.container-card img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-btn');
    const toast = document.getElementById('toastMessage');
    const saveBtn = document.getElementById('saveBtn'); // Optional button inside modal

    // ✅ Open modal on image click
    images.forEach(img => {
      img.addEventListener('click', () => {
        if (img.src) {
          modal.style.display = 'block';
          modalImage.src = img.src;
        }
      });
    });

    // ✅ Close modal on X button click
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeModal();
      });
    }

    // ✅ Close modal on clicking outside the modal image
    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // ✅ Close modal on ESC key
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // ✅ Close modal function
    function closeModal() {
      modal.style.display = 'none';
    }

    // ✅ Show "Saved!" message
    function showSaveMessage() {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }

    // ✅ Save button action
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        showSaveMessage();
      });
    }
  });




