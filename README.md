# Tailwind CSS Presentation

## 1. Motivations

### Problems with Traditional CSS
- Duplication and repetition of styles.
- Scope conflicts and maintenance difficulties.
- Use of conventions like BEM to organize styles.

### Solution Proposed by Tailwind
- Utility-first styling: small, focused classes directly in HTML.
- Reduces the need for separate CSS files.

**Traditional CSS Example:**
```css
.btn-primary {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}
```

**Tailwind:**
```html
<button class="bg-blue-500 text-white px-4 py-2">Save</button>
```

---

## 2. Usability

### Features
- Styles are applied directly in HTML.
- Logical and standardized class naming.

**Example:**
```html
<div class="flex justify-center mt-4">
  <button class="bg-green-500 text-white py-2 px-4 rounded">
    Submit
  </button>
</div>
```

---

## 3. Theming

### Customization with `tailwind.config.js`
- Define colors, spacing, fonts, and more.

**Example:**
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#123456',
      },
    },
  },
}
```

**Usage:**
```html
<div class="bg-brand text-white">My custom color</div>
```

---

## 4. Examples

**Product Card Component Example:**
```html
<div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <img class="w-full h-48 object-cover" src="product.jpg" alt="Product">
  <div class="p-4">
    <h2 class="text-xl font-semibold">Product X</h2>
    <p class="text-gray-600 mt-2">Brief product description.</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Buy</button>
  </div>
</div>
```

---

## 5. Pros

- High productivity.
- Visual consistency.
- Slim final bundle.
- Integration with React, Vue, Angular, etc.

**Consistency Example:**
```html
<p class="text-sm text-gray-600">Published Date</p>
<p class="text-sm text-gray-600">Author</p>
```

---

## 6. Cons

- Verbose HTML with many classes.
- Harder to read for beginners.
- Resistance from teams used to separating HTML and CSS.

**Example:**
```html
<div class="flex flex-col gap-4 p-6 bg-white shadow rounded-md w-full max-w-md mx-auto">
  <input class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  <button class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
</div>
```

---

## 7. Bundling

- Tailwind removes unused classes during build.
- Generates lightweight, optimized CSS.

**Configuration:**
```js
content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
```

---

## 8. Scan Algorithm

- Tailwind scans files for class names.
- Dynamic classes must be declared statically or using `safelist`.

**Problem Example:**
```js
const color = "blue-500";
return <div className={`bg-${color}`}>Hello</div>;
```

**Solution:**
```js
safelist: ["bg-blue-500", "bg-red-500"]
```

---
