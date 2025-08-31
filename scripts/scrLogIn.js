function Loadingscreen() {
  if (window.innerWidth <= 600) {
    loader.innerHTML = getLoadingscreenMobile();
  } else {
    loader.innerHTML = getLoadingscreenDesktop();
  }
}

/**
 * Returns the HTML structure for the mobile loading screen, including a logo image.
 *
 * @returns {string} The HTML string for the mobile loading screen.
 */
function getLoadingscreenMobile() {
  return `
    <img src="assets/img/logo-black.svg" alt="Logo" id="loader-image-black" class="loader-image login-logo" />
  `;
}

/**
 * Returns the HTML structure for the desktop loading screen, including a logo image.
 *
 * @returns {string} The HTML string for the desktop loading screen.
 */
function getLoadingscreenDesktop() {
  return `
    <img src="assets/img/logo-black.svg" alt="Logo" id="loader-image-black" class="loader-image" />
  `;
}

async function handleLogIn(event) {
  event.preventDefault();
  // usder2@email.com
  // Test123@
  const inputEmail = document.getElementById("mail").value.trim();
  const inputPassword = document.getElementById("password").value.trim();
  const loggedUser = await checkCredentials(inputEmail, inputPassword);

  if (loggedUser) {
    console.log("Redirecting to: pages/summary.html");

    // window.location.href = "pages/summary.html";
  }
}

async function checkCredentials(inputEmail, inputPassword) {
  const objUser = await getUserData(inputEmail);
  if (objUser) {
    return checkPassword(objUser, inputPassword);
  } else {
    showError("❌ Email or password is invalid");
    return false;
  }
}

function checkPassword(objUser, inputPassword) {
  if (objUser.password === inputPassword) {
    return (currentObjUser = objUser);
  } else {
    showError("❌ Email or password is invalid");
    return false;
  }
}

async function getUserData(inputEmail) {
  const allUsers = Object.values(await loadUsersFromDB("users"));
  const targetUser = allUsers.find((user) => user.email === inputEmail);
  return targetUser;
}


// test
function showPasswordErrors(errors) {
  const container = document.getElementById("passwordErrors");
  container.innerHTML = errors.map(e => `• ${e}`).join("<br>");
}

function clearPasswordErrors() {
  document.getElementById("passwordErrors").innerHTML = "";
}



function validatePasswordTooltip() {
  const password = document.getElementById("password").value;
  const tooltip = document.getElementById("passwordTooltip");
  const errors = [];

  if (password.length < 8) errors.push("• Password must be at least 8 characters long");
  if (!/[A-Z]/.test(password)) errors.push("• Must contain at least one uppercase letter");
  if (!/[a-z]/.test(password)) errors.push("• Must contain at least one lowercase letter");
  if (!/[0-9]/.test(password)) errors.push("• Must contain at least one number");
  if (!/[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]/.test(password)) errors.push("• Must contain at least one special character");

  if (errors.length > 0) {
    tooltip.innerHTML = errors.join("<br>");
    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
}
