import { useNavigate } from 'react-router-dom';
import React from 'react';
import Pdf from "../assets/ShivamPokhriyal_RESUME.pdf";

export const redirectToGithub = (e) => {
  e.preventDefault();
  window.open("https://github.com/fs0sp", '_blank');
}

export const redirectToLinkedin = (e) => {
  e.preventDefault();
  window.open("https://www.linkedin.com/in/shivampokhriyal/", '_blank');
}

export const redirectToBlog = (e) => {
  e.preventDefault();
  window.open("https://siliconvalleyoxford.com/", '_blank');
}

export const redirectToResume = (e) => {
  e.preventDefault();
  window.open(Pdf, '_blank');
}