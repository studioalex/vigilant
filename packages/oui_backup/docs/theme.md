---
title: Theme
---

# OUI Theme

OUI support themin out of the box. for this purpose we use the css **`color-scheme`** property.
Read more about **`color-schema`** [here](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme).

## Usage

The default theme is predefined with three variations: `light`, `dark`, `dim`, while `light` is the default one.    
The `oui-theme` class can be used to set Theme background color, or the `--surface-primary` variable. The `oui-theme` class also set the font color to `--text-primary`.

To use the predefined color, just use these css variables in your css.

```css
  --oui-color            // Is the basis color
  --text-primary         // Fisrt text color
  --text-secondary       // Second text color
  --surface-primary      // The primary surface color, also alias for --surface-1th
  --surface-secondary    // The secondary surface color, also alias for --surface-2th
  --surface-1th          // The primary surface color
  --surface-2th          // The primary surface color
  --surface-3th          // The primary surface color
  --surface-4th          // The primary surface color
  --surface-shadow       // Box shadow definition
  --shadow-strength      // Box shadow strength definition
```

## Browser Theme

It is also possible to set the Theme color or any specific Brand color to browser theme color.
This can be achieved through the `meta` definition in your html file:

```html
<meta name="theme-color" content="#319197">
```

If you want learn more about setting browser theme, this [article](https://css-tricks.com/meta-theme-color-and-trickery/) is helpful.

## Customise
To customise the `color-scheme` the OUI variables defined for **html** should be overwritten.
The color values are defined as `hsl`, while this is actually supported by most browsers.

```css
html {
  --oui-hue: 200;
  --oui-saturation: 100%;
  --oui-lightness: 50%;
}
```

Based on this color we define three tones: 

* `light` is the default and corresponds exactly to the defined color.
* `dark` is the darkest variation.
* `dim` is a dark, dim variation.

The predefined darkening of the colors results in a restriction in the definition of the basic color. This must be relatively light so that there is a difference to the darkened variations.

This can also be adjusted. For this, however, the definition of the variations must be overwritten. 

The created theme variation variables then apply to choosen theme variation.

### Light

```css
html {
  /* define light color variation */
  --oui-light: hsl(
    var(--oui-hue) var(--oui-saturation) var(--oui-lightness)
  );
  --text-primary-light: hsl(var(--oui-hue) var(--oui-saturation) 10%);
  --text-secondary-light: hsl(var(--oui-hue) 30% 30%);
  --surface1-light: hsl(var(--oui-hue) 25% 90%);
  --surface2-light: hsl(var(--oui-hue) 20% 99%);
  --surface3-light: hsl(var(--oui-hue) 20% 92%);
  --surface4-light: hsl(var(--oui-hue) 20% 85%);
  --surface-shadow-light: var(--oui-hue) 10% 20%;
  --shadow-strength-light: 0.02;
}

/* apply light color variation */
[color-scheme="light"] {
  color-scheme: light;

  --oui-color: var(--oui-light);
  --text-primary: var(--text-primary-light);
  --text-secondary: var(--text-secondary-light);
  --surface-primary: var(--surface1-light);
  --surface-secondary: var(--surface2-light);
  --surface-1th: var(--surface1-light);
  --surface-2th: var(--surface2-light);
  --surface-3th: var(--surface3-light);
  --surface-4th: var(--surface4-light);
  --surface-shadow: var(--surface-shadow-light);
  --shadow-strength: var(--shadow-strength-light);
}
```

### Dark

```css
html {
  /* define dark color variation */
  --oui-dark: hsl(
    var(--oui-hue) calc(var(--oui-saturation) / 2)
      calc(var(--oui-lightness) / 1.5)
  );
  --text-primary-dark: hsl(var(--oui-hue) 15% 85%);
  --text-secondary-dark: hsl(var(--oui-hue) 5% 65%);
  --surface1-dark: hsl(var(--oui-hue) 10% 10%);
  --surface2-dark: hsl(var(--oui-hue) 10% 15%);
  --surface3-dark: hsl(var(--oui-hue) 5% 20%);
  --surface4-dark: hsl(var(--oui-hue) 5% 25%);
  --surface-shadow-dark: var(--oui-hue) 50% 3%;
  --shadow-strength-dark: 0.8;
}

/* apply light color variation */
[color-scheme="dark"] {
  color-scheme: dark;

  --oui-color: var(--oui-dark);
  --text-primary: var(--text-primary-dark);
  --text-secondary: var(--text-secondary-dark);
  --surface-primary: var(--surface1-dark);
  --surface-secondary: var(--surface2-dark);
  --surface-1th: var(--surface1-dark);
  --surface-2th: var(--surface2-dark);
  --surface-3th: var(--surface3-dark);
  --surface-4th: var(--surface4-dark);
  --surface-shadow: var(--surface-shadow-dark);
  --shadow-strength: var(--shadow-strength-dark);
}
```

### Dim

```css
html {
  /* define dim color variation */
  --oui-dim: hsl(
    var(--oui-hue) calc(var(--oui-saturation) / 1.25)
      calc(var(--oui-lightness) / 1.25)
  );
  --text-primary-dim: hsl(var(--oui-hue) 15% 75%);
  --text-secondary-dim: hsl(var(--oui-hue) 10% 61%);
  --surface1-dim: hsl(var(--oui-hue) 10% 20%);
  --surface2-dim: hsl(var(--oui-hue) 10% 25%);
  --surface3-dim: hsl(var(--oui-hue) 5% 30%);
  --surface4-dim: hsl(var(--oui-hue) 5% 35%);
  --surface-shadow-dim: var(--oui-hue) 30% 13%;
  --shadow-strength-dim: 0.2;
}

/* apply light color variation */
[color-scheme="dim"] {
  color-scheme: dark;

  --oui-color: var(--oui-dim);
  --text-primary: var(--text-primary-dim);
  --text-secondary: var(--text-secondary-dim);
  --surface-primary: var(--surface1-dim);
  --surface-secondary: var(--surface2-dim);
  --surface-1th: var(--surface1-dim);
  --surface-2th: var(--surface2-dim);
  --surface-3th: var(--surface3-dim);
  --surface-4th: var(--surface4-dim);
  --surface-shadow: var(--surface-shadow-dim);
  --shadow-strength: var(--shadow-strength-dim);
}
```


