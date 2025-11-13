# Framer Override Setup Instructions

## How to Add the Amenity Pills Override to Framer

### Step 1: Create a Code File in Framer

1. Open your Framer project
2. Click on the **"Code"** tab in the top menu (next to Design, Prototype, etc.)
3. Click the **"+ New File"** button
4. Name the file: `amenityPills.tsx` (or `amenityPills.js` if you prefer JavaScript)
5. Click **"Create"**

### Step 2: Copy the Code

1. Open the file `framer-amenity-pills-override.tsx` from this repository
2. Copy **ALL** the code from that file
3. Paste it into the new file you just created in Framer
4. Click **"Save"** (or Cmd/Ctrl + S)

### Step 3: Apply the Override

#### Option A: Apply to Individual Text Components

1. Select a **Text** component in your Framer canvas that contains amenity text (e.g., "Pet-Friendly", "Outdoor Seating")
2. In the right panel, scroll down to find the **"Override"** section
3. Click the dropdown next to **"style"** (or **"props"**)
4. You should see **"AmenityPillOverride"** or **"AmenityPillStyle"** in the list
5. Select it
6. The text should now be styled as a pill!

#### Option B: Apply to Entire Page (Recommended)

1. Select your **Page** or **Frame** component (the top-level container)
2. In the right panel, find the **"Override"** section
3. Click the dropdown next to **"props"**
4. Select **"AmenityPillPage"**
5. This will automatically find and style ALL amenity text elements on the page

### Troubleshooting

**If the override doesn't show up:**

1. Make sure you saved the code file in Framer
2. Try refreshing Framer (close and reopen)
3. Check that the file is named correctly (`.tsx` or `.js` extension)
4. Make sure you're looking in the right override dropdown (try both "style" and "props")
5. Verify the code file has no errors (check the Code tab for red error indicators)

**If the styling doesn't work:**

1. Make sure the text content exactly matches one of the amenity keywords:
   - Pet-Friendly
   - Outdoor Seating
   - Tours Available
   - Events
   - Food Available
   - (and others listed in the code)

2. The text must match exactly (case-sensitive, including hyphens)

3. For the page-level override, wait a moment after applying - it scans the page on load

### Customizing the Styles

To change the pill appearance, edit the `defaultStyles` object in the code file:

```typescript
const defaultStyles = {
    backgroundColor: '#f3f4f6',  // Change pill background color
    textColor: '#374151',         // Change text color
    padding: '6px 12px',          // Change padding
    borderRadius: '20px',         // Change border radius (pill shape)
    fontSize: '13px',              // Change font size
    fontWeight: '500',               // Change font weight
    margin: '0 4px 4px 0'         // Change spacing
}
```

Save the file after making changes, and the updates will apply automatically.

