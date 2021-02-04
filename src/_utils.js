const dateObjFromUnix = (time) => {
   return new Date(time * 1000);
};

export const getDate = (time) => {
   const date = dateObjFromUnix(time);
   return date.toLocaleDateString('en-GB');
};

export const getTime = (time) => {
   const date = dateObjFromUnix(time);
   return date.toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
   });
};
