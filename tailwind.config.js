/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			]
  		},
  		 fontSize: {
  "fluid-h1": "clamp(2.5rem, 6vw, 4rem)",     
  // 2.5rem = 40px (min)
  // 6vw → 86px @1440px, 115px @1920px
  // 4rem = 64px (max)

  "fluid-h2": "clamp(1.5rem, 4vw, 2.25rem)", 
  // 1.5rem = 24px (min)
  // 4vw → 57px @1440px, 76px @1920px
  // 2.25rem = 36px (max)

  "fluid-h3": "clamp(1.25rem, 3vw, 1.5rem)", 
  // 1.25rem = 20px (min)
  // 3vw → 43px @1440px, 58px @1920px
  // 1.5rem = 24px (max)

  "fluid-body": "clamp(1rem, 2.5vw, 1.25rem)", 
  // 1rem = 16px (min)
  // 2.5vw → 36px @1440px, 48px @1920px
  // 1.25rem = 20px (max)

  "fluid-caption": "clamp(0.875rem, 2vw, 1rem)", 
  // 0.875rem = 14px (min)
  // 2vw → 29px @1440px, 38px @1920px
  // 1rem = 16px (max)

  "fluid-small": "clamp(0.75rem, 1.5vw, 0.875rem)", 
  // 0.75rem = 12px (min)
  // 1.5vw → 22px @1440px, 29px @1920px
  // 0.875rem = 14px (max)
},

  		keyframes: {
  			scrollLeft: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			scrollRight: {
  				'0%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			scrollLeft: 'scrollLeft 50s linear infinite',
  			scrollRight: 'scrollRight 50s linear infinite',
  			skeleton: 'skeleton 1.2s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
