var element = document.getElementById(window.location.pathname.replace('/latam',''));
element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
