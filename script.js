  const menuBtn = document.querySelector(".menu-btn");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuBtn.addEventListener("click", ()=> {
    menuBtn.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  })

 document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
         menuBtn.classList.remove("active");
         navbarMenu.classList.remove("active");
    }));