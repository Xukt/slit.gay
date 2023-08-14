const nameData = {
    malice: {
      title: '@xkt',
      content: 'xkt on discord',
    },
    restrict: {
      title: '@daddysam',
      content: 'what do you want on here ?',
    },
    axx: {
      title: '@seyma',
      content: 'xkt <3',
    },
    lewicide: {
      title: '@allah',
      content: 'Allah is with those who have patience.',
    },
    listed: {
      title: '@poison',
      content: 'Allah makes the impossible possible.',
    },
    riot: {
      title: '@mind',
      content: "Forgive others as quickly as you expect Allah to forgive you.",
    },
  };
  // Hello from xkt to anyone skidding this site :D
  const nameLinks = document.querySelectorAll('.names a');
  nameLinks.forEach(link => {
    link.addEventListener('click', () => {
      const name = link.getAttribute('class');
  
      const { title, content } = nameData[name];
  
      window.location.href = ‘https://exampleURL.com/’;
  
      const windowHeader = document.createElement('div');
      windowHeader.classList.add('window-header');
  
      const windowTitle = document.createElement('div');
      windowTitle.classList.add('window-title');
      windowTitle.textContent = title;
  
      const closeButton = document.createElement('div');
      closeButton.classList.add('window-close');
      closeButton.textContent = 'x';
  
      const windowContent = document.createElement('div');
      windowContent.classList.add('window-content');
      
      const paragraphs = content.split('\n');
      const firstParagraph = paragraphs[0];
  
      if (firstParagraph.includes('t.me/')) {
        const linkElement = document.createElement('a');
        linkElement.href = 'https://' + firstParagraph;
        linkElement.target = '_blank';
        linkElement.textContent = firstParagraph;
        windowContent.appendChild(linkElement);
  
        if (paragraphs.length > 1) {
          const remainingContent = paragraphs.slice(1).join('\n');
          const remainingParagraph = document.createElement('p');
          remainingParagraph.textContent = remainingContent;
          windowContent.appendChild(remainingParagraph);
        }
      } else {
        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = firstParagraph;
        windowContent.appendChild(contentParagraph);
      }
  
      windowHeader.appendChild(windowTitle);
      windowHeader.appendChild(closeButton);
  
      windowElement.appendChild(windowHeader);
      windowElement.appendChild(windowContent);
  
      document.body.appendChild(windowElement);
  
      let isDragging = false;
      let mouseOffsetX = 0;
      let mouseOffsetY = 0;
  
      const handleDragStart = (event) => {
        isDragging = true;
        mouseOffsetX = event.clientX - windowElement.offsetLeft;
        mouseOffsetY = event.clientY - windowElement.offsetTop;
      };
  
      const handleDrag = (event) => {
        if (isDragging) {
          const newX = event.clientX - mouseOffsetX;
          const newY = event.clientY - mouseOffsetY;
          windowElement.style.left = `${newX}px`;
          windowElement.style.top = `${newY}px`;
        }
      };
  
      const handleDragEnd = () => {
        isDragging = false;
      };
  
      windowHeader.addEventListener('mousedown', handleDragStart);
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
  
      closeButton.addEventListener('click', () => {
        document.body.removeChild(windowElement);
      });
    });
  });
