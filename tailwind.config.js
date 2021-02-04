module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            titleRed: 'rgb(187, 46, 31)'
         }
      }
   },
   variants: {
      extend: {}
   },
   plugins: []
};
