const formatDateRange = (start, end = "Present") => {
  if(!start) return;
  let endFormatted = "Present"; // Use `let` since the value might change
    const startFormatted = new Date(start).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      
    if (
      end &&
      end.trim().toLowerCase() !== 'present' &&
      end.trim().toLowerCase() !== 'current' &&
      end.trim().toLowerCase() !== 'ongoing' 
    ) {
      endFormatted = new Date(end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
    
    return `${startFormatted} - ${endFormatted}`;
  };

  export{
    formatDateRange
  }