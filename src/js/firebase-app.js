import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';


import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwpmuhImdY7RHC3U0YYZIshSlCJATjNaU',
  authDomain: 'project-team-10-5792d.firebaseapp.com',
  projectId: 'project-team-10-5792d',
  storageBucket: 'project-team-10-5792d.appspot.com',
  messagingSenderId: '76240638065',
  appId: '1:76240638065:web:5518f239b638187e380bd0',
  measurementId: 'G-CCNXH403RH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const loginSectionEl = document.querySelector('.login-section');

const user = auth.currentUser;
const signUpEl = document.querySelector('#userProfileLoggedOut');
const logOutEl = document.querySelector('#userProfileLoggedIn');
const userLogged = document.querySelector('#userProfileLoggedInk')


const logOut = e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      Notiflix.Notify.success(`You are signing out...`);
      setTimeout(
        () =>
          (window.location =
            'https://millenialia.github.io/project-team-10-added-features/login.html'),
        3000
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
};

const signUp = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      Notiflix.Notify.info(`You are redirected to sign up...`);
      setTimeout(
        () =>
          (window.location =
            'https://millenialia.github.io/project-team-10-added-features/sign-up.html'),
        3000
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
};

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('User logged in.');
    signUpEl.classList.remove('is-active');
    userLogged.classList.add('is-active');;
    logOutEl.addEventListener('click', logOut);
  } else {
    console.log('No user.');
    userLogged.classList.remove('is-active');
    signUpEl.classList.add('is-active');
    signUpEl.addEventListener('click', signUp);
  }
});

const userProfileLoggedInButton = document.getElementById("userProfileLoggedInk");
const logoutModal = document.getElementById("logoutModal");
const logoutButton = document.getElementById("userProfileLoggedIn");

let isLogoutModalOpen = false;

userProfileLoggedInButton.addEventListener("click", toggleLogoutModal);
logoutButton.addEventListener("click", logout);

function toggleLogoutModal() {
  if (isLogoutModalOpen) {
    closeLogoutModal();
  } else {
    openLogoutModal();
  }
}

function openLogoutModal() {
  logoutModal.style.display = "block";
  isLogoutModalOpen = true;
}

function closeLogoutModal() {
  logoutModal.style.display = "none";
  isLogoutModalOpen = false;
}