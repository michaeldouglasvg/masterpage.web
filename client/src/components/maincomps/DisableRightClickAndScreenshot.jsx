import React, { useEffect } from 'react';

function DisableRightClick({ children }) {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      alert("From: GtechAmourdevelopers.com\nOops!!! 🖱️ Drag & Drop and Right-clicking are strictly prohibited on this site. Kindly requesting that you refrain from using these actions due to security measures that protect the integrity and confidentiality of my website's digital certificate.\n\nThank you for visiting this page and for respecting my website's security protocols.");
    };

    const handleDragStart = (event) => {
      event.preventDefault();
    };

    const handleDrop = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('drop', handleDrop);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('drop', handleDrop);
    };
  }, []);

  return <div>{children}</div>;
}

export default DisableRightClick;
