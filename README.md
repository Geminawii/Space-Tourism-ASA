# Frontend Mentor - Space Tourism Website Solution

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size.
- See hover states for all interactive elements on the page.
- View each page and be able to toggle between the tabs to see new information.

## Links

- **Solution URL:** [GitHub Repo](https://github.com/Geminawii/Space-Tourism-ASA.git)
- **Live Site URL:** [Live Demo](https://space-tourism-asa.netlify.app/)

## My Process

### Built With

- React (functional components and hooks)
- Tailwind CSS for utility-first styling
- React Router for navigation
- Responsive design with mobile-first approach
- CSS Grid & Flexbox for layouts

### What I Learned

- How to structure a multi-page React app with clean navigation and dynamic content updates.
- Managing state effectively to switch between tabs and update content dynamically.
- Advanced Tailwind techniques to handle responsive images and layouts, including using the `<picture>` element for responsive images.
- Implementing smooth interactive UI elements like active states, hover effects, and transitions.

Here is an example code snippet of dynamic tab buttons with active styles:

```jsx
<button
  key={t.name}
  onClick={() => setActive(t)}
  className={`h-12 w-12 rounded-full border text-lg font-belle font-bold transition flex items-center justify-center ${
    active.name === t.name
      ? "bg-white text-black"
      : "border-gray-500 text-white hover:bg-gray-500/30"
  }`}
>
  {index + 1}
</button>

```

## Continued Development

- Improve accessibility (ARIA roles, keyboard navigation) for better inclusivity.
- Add animations and transitions for a smoother user experience.
- Optimize images further for faster loading and performance improvements.
- Work better with images as backgrounds.

## Useful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
  Essential for building responsive, utility-first styles.

- [React Router Docs](https://reactrouter.com/en/main/start/overview)  
  Helpful for handling routing in React apps.

- [MDN Web Docs - `<picture>` Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)  
  Guided me on serving responsive images.

## Author

**Oluwatiseteminire Coker**  


