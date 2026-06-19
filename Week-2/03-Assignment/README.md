# Week 2 Assignment

Welcome to your Week 2 assignment for the WnCC Full Stack Web Development LS! This week you move from theory into building real web applications
**The Main Mission: Mini Food Ordering Hub**

---


## Requirements & Functional Specifications

### 1. The Menu Grid
* **Component-Driven UI:** Build a responsive grid that renders a list of available food items using modular, reusable components.
* **Card Elements:** Each individual food item card **must** dynamically display at least three core elements:
  1. A descriptive **Food Image**.
  2. The **Food Name** (along with an optional price tag).
  3. An interactive **"Add to Cart"** button.

### 2. The Cart Sidebar / Summary
* **Item List:** Implement a contextual sliding or fixed sidebar displaying items added to the cart. It must specify their names, tracking individual quantities explicitly (e.g., `Pepperoni Pizza x2`).
* **Live Calculations:** The summary must automatically compute and display the aggregate **Total Price** updates in real-time.
* **Live Counter:** A persistent badge or counter displaying the global **Total Items** currently sitting in the cart.

### Innovation Metric
> **Note:** Base functional completion does not award passing grades, **Innovation will be heavily graded**. Consider adding smart features like interactive micro-animations (Framer Motion), item filtering/search, persistent storage (`localStorage`), dummy checkout modal states, or unique UI theme toggles to stand out. We will judge you on your **creativity, design choice and features** you can think of.

---
### Figma Make

When you are done prototyping with Figma Make you can connect your github account and can create a repository on your Github Account for further feature additions

Use this Resource for connecting Figma Make to GitHub - [Link](https://help.figma.com/hc/en-us/articles/35463818346647-Push-from-Figma-Make-to-GitHub)

---

## Expected Repository File Structure

Submit your github repo with the following suggested file structure. Make sure you use reusable components and dynamic react hooks in your project. Figma Make hardcodes details and features into your files. **Note:** hardcoding may lead to deduction in your marks

```text
food-ordering-hub/
├── public/
│   └── images/              # Local static food assets/icons
├── src/
│   ├── assets/              # Global styling styles/branding logos
│   ├── components/          # Reusable Presentational UI Components
│   │   ├── FoodCard.jsx     # Individual food grid item logic
│   │   ├── MenuGrid.jsx     # Renders list layout mapping FoodCards
│   │   └── CartSidebar.jsx  # Interactive item summary drawer
│   ├── App.jsx              # Application core / global cart state management
│   ├── index.css            # Base Tailwind CSS layout / global configurations
│   └── main.jsx             # React DOM injection point
├── .gitignore
├── index.html
├── package.json
└── vite.config.js



