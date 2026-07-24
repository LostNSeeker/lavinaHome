
# Shopify Frontend (Levina Home)

## Project Overview

Design a **premium Shopify storefront** for a luxury home décor and carpet brand called **LEVINA HOME**.

The brand should feel:

* Scandinavian
* Minimalistic
* Warm
* Premium
* Elegant
* Calm
* Timeless

Avoid looking like a generic Shopify template. The experience should feel like a high-end interior design brand similar to Zara Home, West Elm, H&M Home, Ferm Living, or Crate & Barrel.

Use the uploaded logo as the brand identity reference.

**Do NOT use category icons anywhere.**
Use **large lifestyle photography**, elegant typography, whitespace, and subtle animations instead.

---

# Color Palette

Primary Background:

* Warm White (#FAF8F5)

Secondary:

* Sand
* Beige
* Cream

Accent:

* Terracotta

Secondary Accent:

* Sage Green

Text:

* Charcoal
* Warm Black

Borders:

* Very light gray (#ECE8E2)

No bright colors.
No gradients.
No shadows unless extremely subtle.

---

# Typography

Heading:
Elegant Serif

Examples:

* Cormorant Garamond
* Canela
* Playfair Display

Body:

Modern Sans Serif

Examples:

* Inter
* Manrope
* Plus Jakarta Sans

Large spacing.

Premium typography.

---

# Layout

Use lots of breathing space.

Large sections.

1200–1400px content width.

Rounded corners only where necessary.

No unnecessary cards.

Keep every section feeling editorial.

---

# Homepage Structure

## 1. Transparent Navigation

Initially transparent over hero.

On scroll:

* becomes white
* slight blur
* subtle bottom border
* smooth transition

Navigation:

* Home
* Carpets
* Furniture
* Home Decor
* Textiles
* Kitchen
* About
* Contact

Right side:

Search

Wishlist

Account

Cart

---

## 2. Hero Section

Full viewport.

Large luxury interior image.

Left aligned content.

Heading:

LEVINA HOME

Subheading:

Beautiful spaces.
Beautiful moments.

CTA

Explore Collection

Secondary CTA

Shop Carpets

Animation

Entire hero fades in.

Background image slowly zooms (Ken Burns effect).

Buttons slide upward.

Navigation fades.

---

## 3. Featured Collections

Instead of icons use:

Large image cards

Examples

Luxury Carpets

Modern Rugs

Furniture

Decor

Textiles

Kitchen

Cards:

Image

Title

Small description

Hover:

Image zooms

Overlay darkens slightly

Button slides in

Desktop:

Horizontal slider

Mobile:

Swipe carousel

---

## 4. Best Sellers

Horizontal product slider.

Large product image.

Minimal product information.

Product name

Price

Rating

Quick Add

Hover:

Image changes to second image.

Add to Cart fades in.

Wishlist appears.

---

## 5. Split Editorial Banner

50%

Lifestyle image

50%

Content

Heading

Few lines

CTA

Animation:

Image slides from right.

Text slides from left.

Triggered while scrolling.

---

## 6. New Arrivals

Grid

2 rows

4 columns desktop

Cards remain minimal.

Hover:

Product image zooms slightly.

Price fades.

Quick actions appear.

---

## 7. Shop by Room

Bedroom

Living Room

Dining

Office

Kids

Each card:

Large editorial image.

Overlay text.

Entire section horizontal scrolling.

---

## 8. Brand Story

Large whitespace.

One lifestyle image.

Elegant typography.

No cards.

Simple.

Minimal.

Fade in while scrolling.

---

## 9. Instagram Inspired Gallery

Pinterest style layout.

Hover:

Image scales.

Show "Shop this room".

---

## 10. Newsletter

Minimal.

Background:

Warm beige.

Large heading.

Single email field.

Rounded button.

Fade upward.

---

## 11. Footer

4 Columns

Collections

Company

Support

Socials

Very minimal.

Thin divider.

---

# Animation Guidelines

Entire website should feel alive but calm.

Never flashy.

Animation duration:

500–700ms

Easing:

ease-out

GSAP or Framer Motion style animations.

---

### Hero

Fade

Scale

Background slow zoom

---

### Sections

Fade up while entering viewport.

---

### Collection Cards

Slide horizontally.

Snap scrolling.

---

### Product Slider

Infinite.

Auto play very slowly.

Pause on hover.

---

### Images

Parallax scrolling.

Very subtle.

---

### Hover Effects

Scale:

1.03

Soft shadow

Image zoom

CTA fades

---

### Buttons

Background fills.

Text transitions.

Micro interaction.

---

# Shopify Specific Components

Design reusable Shopify sections.

Hero Banner

Collection Slider

Featured Products

Editorial Banner

Rich Text

Image With Text

Testimonials

Newsletter

Product Carousel

Recently Viewed

Footer

Every section should be independently customizable using Shopify Theme Editor.

---

# Product Page

Sticky image gallery.

Large product images.

Thumbnail strip.

Sticky Add to Cart.

Variant selectors.

Material

Size

Color

Accordion

Description

Care

Shipping

Returns

Below:

Related Products slider.

Recently Viewed slider.

---

# Collection Page

Large banner.

Filter sidebar.

Sort dropdown.

Infinite scrolling.

Product cards.

Quick Add.

Hover image.

---

# Cart Drawer

Slide from right.

Smooth animation.

Suggested products.

Shipping progress bar.

Checkout CTA.

Minimal UI.

---

# Mobile Experience

Thumb-friendly.

Bottom spacing.

Swipe everywhere.

Sticky Add to Cart.

Fast animations.

---

# Performance

Images lazy loaded.

Animations GPU accelerated.

Minimal JavaScript.

Optimized for Lighthouse score above 90.

---

# Tech Stack

* Shopify 2.0 (Liquid)
* JSON Templates
* Tailwind CSS
* GSAP (scroll animations)
* Swiper.js (sliders)
* Alpine.js or vanilla JS where possible
* Fully responsive
* WCAG accessibility compliant

---

## Overall Design Direction

The final website should feel like a blend of:

* Zara Home
* West Elm
* Ferm Living
* Crate & Barrel
* H&M Home
* Restoration Hardware

The emphasis should be on **premium lifestyle photography, editorial layouts, generous whitespace, elegant typography, and smooth cinematic scrolling animations**, avoiding clutter, icon-heavy interfaces, or conventional e-commerce aesthetics. The experience should immediately communicate a luxury home décor brand rather than a standard online store.
