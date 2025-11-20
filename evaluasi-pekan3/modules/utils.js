function getTodayForApi () {
    const now = new Date ();
    const year = now.getFullYear();
    const month = (now.getMonth() +1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
console.log("API Format:", getTodayForApi());

function getTodayForDisplayModern() {
  const now = new Date();
  
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit'    
  };

  return now.toLocaleDateString('id-ID', options);
}
