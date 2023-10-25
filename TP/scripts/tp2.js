document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".header-menu").classList.toggle("show");
    const headerMenu = document.querySelector(".header-menu")
    if(headerMenu.style.display == "inline-block"){
        headerMenu.style.display = ""
    }else{
        headerMenu.style.display = "inline-block"
    }
  });
  
  