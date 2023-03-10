import React, { useEffect } from 'react';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

function DisableRightClick({ children }) {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      Swal.fire({
        title: 'From: GtechAmour.com!!!',
        text: "Sorry user!!! 🖱️ Drag & Drop and Right-clicking are strictly prohibited on this site. Kindly requesting that you refrain from using these actions due to security measures that protect the integrity and confidentiality of my website's digital certificate.Thank you for visiting this page and for respecting my website's security protocols.",
        icon: 'warning',
        confirmButtonText: 'Thank you'
      })
      // alert("From: GtechAmourdevelopers.com\n\nSorry user!!! 🖱️ Drag & Drop and Right-clicking are strictly prohibited on this site. Kindly requesting that you refrain from using these actions due to security measures that protect the integrity and confidentiality of my website's digital certificate.\n\nThank you for visiting this page and for respecting my website's security protocols.");
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
