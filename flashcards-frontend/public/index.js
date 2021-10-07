import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const searchBox = document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-btn-container");
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  navBtnContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  navBtnContainer.classList.remove("active");
});
