
  document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Redirect to Login Page');
  });

  document.querySelector('.signup-btn').addEventListener('click', () => {
    alert('Redirect to Signup Page');
  });


  
  document.addEventListener("DOMContentLoaded", function () {
  // Log In / Sign Up Alerts
  document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Redirect to Login Page');
  });

  document.querySelector('.signup-btn').addEventListener('click', () => {
    alert('Redirect to Signup Page');
  });

  
  const suggestions = [
    "Home decor",
    "Fashion tips",
    "Crocet bags",
    "DIY crafts",
    "Makeup tutorials",
    "DIY rakhi"
  ];

  const searchInput = document.getElementById("searchInput");
  const suggestionList = document.getElementById("suggestionList");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    suggestionList.innerHTML = "";

    if (value.trim() === "") {
      suggestionList.style.display = "none";
      return;
    }

    const filtered = suggestions.filter(item =>
      item.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
      suggestionList.style.display = "none";
      return;
    }

    filtered.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => {
        searchInput.value = item;
        suggestionList.style.display = "none";
      });
      suggestionList.appendChild(li);
    });

    suggestionList.style.display = "block";
  });

  
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      suggestionList.style.display = "none";
    }
  });
});


function showMore() {
    const extraRow = document.getElementById('extraRow');
    extraRow.style.display = 'flex'; 
    document.querySelector('.see-more-container').style.display = 'none'; 
}

function openImage(imgElement) {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImg");
      modal.style.display = "flex";
      modalImg.src = imgElement.src;
    }

    function closeImage() {
      document.getElementById("imageModal").style.display = "none";
    }