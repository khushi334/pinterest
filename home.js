
  document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const loginBtn = document.getElementById("loginBtn");

    // 👁️ Toggle Password Visibility
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.textContent = type === "password" ? "👁️" : "🙈";
    });

    // ✅ Login button action
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // 🎯 Simulate login success and redirect
      alert(`Welcome, ${email}! Redirecting...`);
      window.location.href = "explore.html"; // <-- redirect here
    });

    // Dummy social login console logs
    document.querySelector(".facebook-btn").addEventListener("click", () => {
      console.log("Redirecting to Facebook login...");
    });

    document.querySelector(".google-btn").addEventListener("click", () => {
      console.log("Redirecting to Google login...");
    });

    document.querySelector(".qr-btn").addEventListener("click", () => {
      console.log("Showing QR code login...");
    });
  });



const messages=[
    "chai time snacks idea",
    "home decor ideas",
    "outfit idea",
    "Diy idea"
];

const colors=[
    "#C49102",
    "#4682B4",
    "#9CAF88",
    "#6E8B3D"
];

const imageGroups=[
    [
        "https://images.unsplash.com/photo-1633536704822-c994d54c75b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaSUyMHdpdGglMjBzbmFja3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1732519970445-8f2d6998961f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaSUyMHdpdGglMjBzbmFja3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1683533698664-12ee473e8c9d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaSUyMHdpdGglMjBzbmFja3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1626108435371-9f49f4c616c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaSUyMHdpdGglMjBzbmFja3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1584428885051-d80a38d86b39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWklMjB3aXRoJTIwc25hY2tzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1633543001199-51aea2ff1ec0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWklMjB3aXRoJTIwc25hY2tzfGVufDB8fDB8fHww",
        "https://media.istockphoto.com/id/1365811232/photo/green-tea-with-ginger-on-wooden-table-elevated-detail.webp?a=1&s=612x612&w=0&k=20&c=gZpEmaik2MGKgAUETASK47yyI6Ig_tqiTXfHrJ0w-Zk="
    ],
    [
        "https://images.unsplash.com/photo-1700825560405-8a3b2329298b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_photo-1698942666669-ba021363a1f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yJTIwaWRlYXMlMjBoYW5kbWFkZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1560889745-0c26d8f2efbd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGRlY29yJTIwaWRlYXMlMjBoYW5kbWFkZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1678474801701-b4324a87867c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9tZSUyMGRlY29yJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1632830196000-d8a1abf32691?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG9tZSUyMGRlY29yJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1738069092808-3790993bb36b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9tZSUyMGRlY29yJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1742714684748-5a5a8a21115a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhvbWUlMjBkZWNvciUyMGlkZWFzfGVufDB8fDB8fHww"
    ],
    [
        "https://plus.unsplash.com/premium_photo-1697183203000-fda04f7ba5a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0Zml0JTIwaWRlYXMlMjBmb3IlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1749886485005-0093ba720813?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91dGZpdCUyMGlkZWFzJTIwZm9yJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1608680480325-d3ec3cdf7e60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG91dGZpdCUyMGlkZWFzJTIwZm9yJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1749747566115-ad1db55754ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3V0Zml0JTIwaWRlYXMlMjBmb3IlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1747221475991-e19acbf9fd36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG91dGZpdCUyMGlkZWFzJTIwZm9yJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1561444209-17feef437363?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG91dGZpdCUyMGlkZWFzJTIwZm9yJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1589363360147-4f2d51541551?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG91dGZpdCUyMGlkZWFzJTIwZm9yJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D"
    ],
    [
        "https://images.unsplash.com/photo-1725888328477-5db4013d6aaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RElZJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1535284366524-b78118e721ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RElZJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/2186608576/photo/crochet-threads-await-creative-hands.webp?a=1&b=1&s=612x612&w=0&k=20&c=jnKmskO0w2UaogW9zauz1Z1ZR-OxTgzw6e8wnUl6tXM=",
        "https://images.unsplash.com/photo-1633860943135-069d11a604fb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RElZJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1664303570779-3f2432802f82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RElZJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1574093180049-73055d3ababd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1519001904187-92788a1b784d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RElZJTIwaWRlYXMlMjBlYXN5fGVufDB8fDB8fHww"   
    ]
];

let index=0;
const textElement=document.getElementById("text");
 const imageGroupElement = document.getElementById("imageGroup");
  const imageElements = imageGroupElement.getElementsByTagName("img");


  function changeText(){
    imageGroupElement.style.opacity = 0;
    textElement.style.opacity = 0;
    setTimeout(()=>{
        textElement.textContent = messages[index];
        textElement.style.color = colors[index];
        
        const images = imageGroups[index];
        for (let i = 0; i < imageElements.length; i++) {
          imageElements[i].src = images[i];
        }

        textElement.style.opacity = 1;
        imageGroupElement.style.opacity = 1;

        index = (index + 1) % messages.length;
    },500);
}
changeText();
setInterval(changeText,3000);


const carouselTrack = document.getElementById("imageGroup");

setInterval(() => {
  carouselTrack.scrollLeft += 1;
  if (carouselTrack.scrollLeft + carouselTrack.clientWidth >= carouselTrack.scrollWidth) {
    carouselTrack.scrollLeft = 0;
  }
}, 50); 

let scrollPaused = false;

carouselTrack.addEventListener("mouseenter", () => scrollPaused = true);
carouselTrack.addEventListener("mouseleave", () => scrollPaused = false);

setInterval(() => {
  if (!scrollPaused) {
    carouselTrack.scrollLeft += 1;
    if (carouselTrack.scrollLeft + carouselTrack.clientWidth >= carouselTrack.scrollWidth) {
      carouselTrack.scrollLeft = 0;
    }
  }
}, 50);



