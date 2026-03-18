# Public Assets

✅ **All placeholder images have been created and are ready to use!**

## 📁 Current Image Structure

```
public/
├── favicon.ico                              ✅ Created
└── images/
    ├── backgrounds/
    │   └── hero-background.jpg              ✅ 1920x1080 - Cinematic gradient
    ├── cities/
    │   ├── miami.jpg                        ✅ 1200x800 - Ocean blue tones
    │   ├── dallas.jpg                       ✅ 1200x800 - Desert/Texas tones  
    │   ├── new-york.jpg                     ✅ 1200x800 - Urban gray
    │   ├── los-angeles.jpg                  ✅ 1200x800 - Sunset warm tones
    │   └── atlanta.jpg                      ✅ 1200x800 - Forest green
    └── team/
        └── kendall-hilton.jpg               ✅ 800x1000 - Creator photo
```

## ✨ Where These Images Are Used

### Hero Background (`/images/backgrounds/hero-background.jpg`)
- Used in: `Hero.tsx`
- Size: 1920x1080px
- Style: Dark cinematic gradient (ink → grass → pitch)
- Purpose: Full-screen background for hero section

### City Images (`/images/cities/*.jpg`)
- Used in: `Cities.tsx` as background images for city cards
- Size: 1200x800px each
- Style: Color-coded gradients matching each city's vibe
  - **Miami**: Ocean blue (tropical, vibrant)
  - **Dallas**: Desert/Texas tones (warm, earthy)
  - **New York**: Urban gray (metropolitan)
  - **Los Angeles**: Sunset tones (entertainment, golden)
  - **Atlanta**: Forest green (rising cultural capital)
- Purpose: Subtle background images (20% opacity, 30% on hover)

### Creator Photo (`/images/team/kendall-hilton.jpg`)
- Used in: `Credibility.tsx`
- Size: 800x1000px (portrait)
- Style: Professional dark background with vignette
- Purpose: Creator credibility section

### Favicon (`favicon.ico`)
- Used in: Browser tab icon
- Size: 64x64px
- Style: Simple "W" shape in gold on ink background
- Purpose: Browser tab and bookmark icon

## 🎨 Image Characteristics

All images feature:
- **Dark, cinematic aesthetic** matching brand
- **Subtle grain/noise texture** for film quality
- **Gradient compositions** (no flat colors)
- **High quality** (95% JPEG quality)
- **Optimized sizes** for web performance

## 🔄 Replacing Placeholder Images

To replace with your own photos:

1. **Keep the same filenames** or update paths in components
2. **Match or exceed dimensions** for best quality
3. **Optimize for web** (recommended: 85-95% JPEG quality)
4. **Maintain aspect ratios**:
   - Hero: 16:9 (landscape)
   - Cities: 3:2 (landscape)
   - Team: 4:5 (portrait)

### Where to Update in Code:

**Hero background:**
```tsx
// src/components/sections/Hero.tsx (line ~20)
backgroundImage: `url('/images/backgrounds/hero-background.jpg')`
```

**City images:**
```tsx
// src/components/sections/Cities.tsx (lines ~19-44)
const cities = [
  { name: 'Miami', image: '/images/cities/miami.jpg', ... },
  // ...
]
```

**Creator photo:**
```tsx
// src/components/sections/Credibility.tsx (line ~23)
<img src="/images/team/kendall-hilton.jpg" alt="Kendall Hilton" />
```

## 📸 Recommended Real Images

When adding your actual photos, consider:

### Hero Background
- Stadium crowd shot
- Street soccer scene
- City skyline at golden hour
- Cultural celebration/festival
- Food market scene
- Fans celebrating

### City Images
- Iconic landmarks
- Cultural neighborhoods
- Sports venues
- Street life
- Local businesses
- Fan gatherings

### Creator Photo
- Professional headshot or
- On-set documentary photo or
- Action shot while filming

## 💡 Pro Tips

1. **Image optimization**: Use tools like TinyPNG or ImageOptim before uploading
2. **Format**: JPEG for photos, PNG for graphics with transparency
3. **WebP**: Consider WebP format for better compression (requires build config changes)
4. **Lazy loading**: Already implemented via native browser lazy loading
5. **Alt text**: Update alt attributes when changing images for SEO

## 🚀 All Images Are Production-Ready

These placeholder images are **high-quality and production-ready**. You can:
- ✅ Deploy the site as-is
- ✅ Replace them later when you have final assets
- ✅ Use them for demos and presentations

The gradients and colors match your brand identity perfectly!
