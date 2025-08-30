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

/**
 * Handles user login by validating email and password.
 * Redirects to the summary page on successful login.
 *
 * @param {Event} event - The form submit event.
 */
async function handleLogin(event) {
  event.preventDefault();
  // toggleLoadingSpinner('add');
  // toggleSignInError('_', 'remove');

  const inputEmail = document.getElementById("mail").value;
  const inputPassword = document.getElementById("password").value;
  const allUsers = Object.values(await loadUserFromDB("users"));
  const user = allUsers.find((user) => user.email === inputEmail);

  checkCredentials(user, inputPassword);
}

/**
 * Checks if the user's email and password are correct.
 * Redirects to the summary page if valid, otherwise shows an error.
 *
 * @param {Object} user - The user object.
 * @param {string} inputPassword - The entered password.
 */
function checkCredentials(user, inputPassword) {
  if (!user) {
    // toggleLoadingSpinner('remove');
    // toggleSignInError('No user with that email', 'add');
    console.log("No user with that email");

    return;
  }

  if (user.password !== inputPassword) {
    // toggleLoadingSpinner('remove');
    // toggleSignInError('Email or password is invalid', 'add');
    console.log("Email or password is invalid");

    return;
  }

  console.log("Redirecting to: pages/summary.html");
  // console.log('Current page is:', window.location.href);

  // window.location.href = '../pages/summary.html';
  window.location.href = "pages/summary.html";
  // toggleLoadingSpinner('remove');
}
