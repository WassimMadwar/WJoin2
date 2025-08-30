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
function handleLogIn() {
  // event.preventDefault();
  // toggleLoadingSpinner('add');
  // toggleSignInError('_', 'remove');

  // usder2@email.com
  // Test123@

  const inputEmail = document.getElementById("mail").value;
  const inputPassword = document.getElementById("password").value;

  checkCredentials(inputEmail, inputPassword);
}

/**
 * Checks if the user's email and password are correct.
 * Redirects to the summary page if valid, otherwise shows an error.
 *
 * @param {Object} inputEmail - The user object.
 * @param {string} inputPassword - The entered password.
 */
async function checkCredentials(inputEmail, inputPassword) {
  const objUser = await findUser(inputEmail);
  if (objUser) {
    checkPassword(objUser, inputPassword);
  } else {
    console.log("Email or password is invalid");
  }
}

async function findUser(inputEmail) {
  const allUsers = Object.values(await loadUsersFromDB("users"));
  return allUsers.find((user) => user.email === inputEmail);
}

function checkPassword(objUser, inputPassword) {
  if (objUser.password === inputPassword) {
    currentUser = objUser;
    console.log(currentUser);
    return;
  }
  console.log("Email or password is invalid");

}
