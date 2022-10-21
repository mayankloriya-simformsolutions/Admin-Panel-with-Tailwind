/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: 'class',
  mode: 'jit',
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.button-save': {
          backgroundColor: 'rgb(37 99 235)',
          color: '#ffffff',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '500',
          border: '1px solid transparent',
          borderRadius: '0.375rem',
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          fontWeight: '500',
          transitionDuration: '200ms',
          transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgb(29 78 216)',
          },
          '&:focus': {
            outline: '2px solid transparent',
            outlineOffset: '2px'
          }
        },
        '.btn-outline': {
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: '1rem',
          color: 'rgb(55 65 81)',
          fontWeight: '400',
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          fontSize: '0.875rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#ffffff',
          borderColor: 'rgb(209 213 219)',
          borderWidth: '2px',
          borderRadius: '0.375rem',
          transitionDuration: '200ms',
          transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgb(249 250 251)',
          },
          '&:focus': {
            outline: '2px solid transparent',
            outlineOffset: '2px',
            borderColor: 'rgb(209 213 219)',
          }
        },
        '.form-label': {
          fontWeight: '500',
          color: 'rgb(55 65 8)',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          display: 'block'
        },
        '.form-input':{
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          boxShadow: '0 1px 2px 0 rgba(0 0 0 0.05)',
          borderColor: 'rgb(209 213 219)',
          borderRadius: '0.375rem',
          width: '100%',
          display: 'block',
          marginTop: '0.25rem',
          '&:focus':{
            outline: '2px solid transparent',
            outlineOffset: '2px',
            borderColor: 'rgb(29 78 216)',
          }
        },
        '.form-checkbox':{
          color: 'rgb(37 99 235)',
          borderRadius: '0.25rem',
          width: '1rem',
          height: '1rem',
        },
        '.form-radio':{
          color: 'rgb(37 99 235)',
          width: '1rem',
          height: '1rem',
        },
        '.button-light-gray':{
          color: ' rgb(75 85 99)',
          fontSize: '0.875rem',
          lineHeight: '1',
          padding: '0.75rem 1.25rem',
          backgroundColor: 'rgb(243 244 246)',
          borderRadius: '0.25rem',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'rgb(229 231 235)',
          borderWidth: '0',
          '&:hover': {
            backgroundColor: 'rgb(229 231 235)',
          },
          '&:focus': {
            outline: '0px solid transparent',
            outlineOffset: '0px',
            backgroundColor: 'rgb(229 231 235)',
          }
        },
        '.button-cancel':{
          color: 'rgb(55 65 81)',
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          padding: '0.5rem 1.5rem',
          backgroundColor: 'rgb(229 231 235)',
          borderWidth: '0px',
          borderRadius: '0.25rem',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: 'rgb(209 213 219)',
          },
          '&:focus': {
            outline: '0px solid transparent',
            outlineOffset: '0px',
            backgroundColor: 'rgb(209 213 219)',
          }
        }
      })
     }
    )
  ]
}
