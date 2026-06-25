/* ============================================
   POPGC.org — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '&#9776;';
      });
    });
  }

  // --- Countdown Timer (Partnership Tournament — July 11, 2026) ---
  var countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    var targetDate = new Date('2026-07-11T08:00:00-05:00').getTime();

    function updateCountdown() {
      var now = new Date().getTime();
      var diff = targetDate - now;

      if (diff <= 0) {
        countdownEl.innerHTML = '<div class="countdown__unit"><span class="countdown__number">Event Day!</span></div>';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('cd-days').textContent = days;
      document.getElementById('cd-hours').textContent = hours;
      document.getElementById('cd-minutes').textContent = minutes;
      document.getElementById('cd-seconds').textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // --- Accordion / Collapsible ---
  document.querySelectorAll('.accordion__header').forEach(function(header) {
    header.addEventListener('click', function() {
      var accordion = this.closest('.accordion');
      accordion.classList.toggle('active');
    });
  });

  // --- Active Navigation Link ---
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function(link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

});
