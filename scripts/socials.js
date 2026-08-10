(function () {
  const links = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@mohammd_abbas",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z"/></svg>',
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100077411403703",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.2h2.4V5H14c-2.3 0-3.8 1.6-3.8 4v1.6H8V14h2.2v7h3.2v-7H16l.5-3.4h-3.1V9.3c0-.7.3-1.1 1.1-1.1z"/></svg>',
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@mohammad_abbas_bio12",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 7.2a5.7 5.7 0 0 1-3.3-1.1v7.2a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 1 0 1.8 2.6V2.5h2.7a5.7 5.7 0 0 0 3.3 4.7z"/></svg>',
    },
  ];

  document.querySelectorAll("[data-socials]").forEach((el) => {
    el.innerHTML = links
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.icon}<span>${l.name}</span></a>`
      )
      .join("");
  });
})();
