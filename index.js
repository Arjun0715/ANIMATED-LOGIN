
    // Simple login validation
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "username" && password === "password") {
        alert("Login Successful!");
        errorMsg.style.display = "none";
        form.reset();
      } else {
        errorMsg.style.display = "block";
      }
    });
