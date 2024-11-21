export const calculateAge = (birthDate: Date) => { 
  const today = new Date();
  const yearDiff = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  let ageInYears = yearDiff;
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    ageInYears--;
  }

  if (ageInYears < 1) {
    const totalMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + monthDiff;
    
    if (totalMonths < 1) {
      const totalDays = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
      return `${totalDays} วัน`;
    }
    
    return `${totalMonths} เดือน`;
  }

  return `${ageInYears} ปี`;
};
