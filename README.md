# GhibliSphere

<img width="1907" height="867" alt="image" src="https://github.com/user-attachments/assets/92cdbf5d-7aa4-4057-9243-3b52e565781f" />


## Project Overview

GhibliSphere is a modern, immersive streaming platform concept inspired by the world of Studio Ghibli. Built with a focus on cutting-edge web technologies, it delivers a seamless and visually stunning user experience reminiscent of premium services like Apple TV+ and Disney+. The project emphasizes fluid animations, elegant Glassmorphism UI elements, and a dynamic content display.

## Features

* **Immersive Hero Section:** Dynamic background images with sophisticated overlay effects, changing smoothly based on the active movie.
* **Fluid Movie Carousel:** A highly interactive and draggable movie carousel powered by Swiper.js, featuring:
    * **"Amanteigado" Hover Effects:** Cards elevate and glow with a subtle, responsive animation, maintaining perfect `border-radius`.
    * **Vertical Poster Layout:** Premium 2:3 aspect ratio movie cards for a cinematic feel.
    * **Active Movie Indicator:** A visually distinct border and "Now Playing" badge for the currently selected movie.
* **Glassmorphism UI:** Consistent use of frosted glass effects for navigation, tags, and interactive elements.
* **Dynamic Avatar Selection:** A modal-based avatar picker with instant UI updates, showcasing the power of Angular Signals.
* **Responsive Design:** Adapts beautifully across various screen sizes.

<img width="1919" height="894" alt="image" src="https://github.com/user-attachments/assets/7fd1472b-b540-4971-9ab3-acfa03b10a20" />


## Technologies Used

This project leverages the latest advancements in web development:

* **Angular 20 (with Signals):** The core framework, utilizing the new **Angular Signals** for robust, reactive state management and highly optimized change detection, ensuring blazing-fast UI updates.
* **TypeScript:** For strong typing and improved code quality.
* **SCSS (Sass):** For maintainable and scalable styling, with a focus on CSS variables and modularity.
* **Swiper.js:** For the highly customizable, touch-enabled, and performant movie carousels.
* **HTML5 & CSS3:** Modern web standards for structure and styling, including advanced CSS properties like `backdrop-filter`, `will-change`, and `cubic-bezier` for buttery-smooth animations.
* **Bi Icons (Bootstrap Icons):** For scalable vector icons.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* npm (usually comes with Node.js)
* Angular CLI (`npm install -g @angular/cli`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/ghibli-sphere.git](https://github.com/your-username/ghibli-sphere.git)
    cd ghibli-sphere
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    ng serve
    ```
    Open your browser to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

    
### 📂 Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── services/      # UserService with Angular Signals
│   │   └── models/        # Movie and User interfaces
│   ├── pages/
│   │   └── home/          # Main Ghibli OS interface
│   └── app.component.ts
├── assets/                # Local fonts and static icons
└── public/                # Dynamic assets (avatars, backgrounds, logos)
    ├── avatars/
    ├── background/
    └── titles/
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. 

##👤 Author 

Developed by Guilherme Dourado
