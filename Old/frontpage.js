// EMBEDDED FALLBACK DATA
// This data is used if GitHub fetch fails or until you save to GitHub
const fallbackData = {
  "listings": [
    {
      "id": "1",
      "name": "Devil's Backbone Brewing Company",
      "type": "Brewery",
      "area": "Wintergreen",
      "description": "Award-winning craft brewery nestled at the base of the Blue Ridge Mountains. Enjoy locally-brewed beers, live music, and mountain views from the outdoor beer garden.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://dbbrewingcompany.com",
      "phone": "(434) 361-1001",
      "address": "200 Mosbys Run, Roseland, VA 22967",
      "amenities": [
        "Pet-Friendly",
        "Outdoor Seating",
        "Live Music",
        "Food Available"
      ],
      "featured": true
    },
    {
      "id": "2",
      "name": "Crabtree Falls Trail",
      "type": "Hiking",
      "area": "Montebello",
      "description": "Virginia's highest vertical-drop cascading waterfall. This moderate 3-mile round trip hike features stunning overlooks and is especially beautiful in fall foliage season.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.fs.usda.gov/recarea/gwj/recarea/?recid=73957",
      "phone": "(540) 291-2188",
      "address": "Crabtree Falls Hwy, Montebello, VA 24464",
      "amenities": [
        "Free",
        "Kid-Friendly",
        "Scenic Views",
        "Photography"
      ],
      "featured": true
    },
    {
      "id": "3",
      "name": "Wintergreen Resort",
      "type": "Outdoor",
      "area": "Wintergreen",
      "description": "Four-season mountain resort offering skiing, snowboarding, mountain biking, hiking, golf, and spa services. Stunning Blue Ridge Mountain views year-round.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.wintergreenresort.com",
      "phone": "(434) 325-2200",
      "address": "39 Mountain Inn Loop, Wintergreen, VA 22958",
      "amenities": [
        "Kid-Friendly",
        "Seasonal",
        "Wheelchair Accessible",
        "Lessons Available"
      ],
      "featured": true
    },
    {
      "id": "4",
      "name": "Blue Mountain Brewery",
      "type": "Brewery",
      "area": "Afton",
      "description": "Farm brewery and taproom with an on-site hop yard. Full restaurant menu featuring locally-sourced ingredients and spectacular mountain views from multiple decks.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.bluemountainbrewery.com",
      "phone": "(540) 456-8020",
      "address": "9519 Critzers Shop Rd, Afton, VA 22920",
      "amenities": [
        "Pet-Friendly",
        "Outdoor Seating",
        "Food Available",
        "Live Music"
      ],
      "featured": false
    },
    {
      "id": "5",
      "name": "The Plunge at Wintergreen",
      "type": "Outdoor",
      "area": "Wintergreen",
      "description": "Outdoor aquatic complex featuring water slides, lazy river, zero-entry pool, and lap pool. Perfect family summer destination with mountain views.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.wintergreenresort.com/play/the-plunge",
      "phone": "(434) 325-8169",
      "address": "Wintergreen Dr, Wintergreen, VA 22958",
      "amenities": [
        "Kid-Friendly",
        "Seasonal",
        "Wheelchair Accessible",
        "Lifeguards"
      ],
      "featured": false
    },
    {
      "id": "6",
      "name": "Rockfish Valley Trail",
      "type": "Hiking",
      "area": "Nellysford",
      "description": "Easy 2-mile paved trail perfect for walking, jogging, or biking. Follows Rockfish River with mountain views and connects to local breweries and shops.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.nelsoncounty-va.gov/facilities/facility/details/Rockfish-Valley-Trail-25",
      "phone": "(434) 263-7015",
      "address": "Rockfish Valley Hwy, Nellysford, VA 22958",
      "amenities": [
        "Free",
        "Kid-Friendly",
        "Pet-Friendly",
        "Wheelchair Accessible",
        "Biking"
      ],
      "featured": false
    },
    {
      "id": "7",
      "name": "Wild Wolf Brewing Company",
      "type": "Brewery",
      "area": "Nellysford",
      "description": "Craft brewery with full kitchen, outdoor patio, and kid-friendly atmosphere. Known for creative seasonal beers and live music on weekends.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.wildwolfbeer.com",
      "phone": "(434) 361-0088",
      "address": "2773 Rockfish Valley Hwy, Nellysford, VA 22958",
      "amenities": [
        "Kid-Friendly",
        "Pet-Friendly",
        "Outdoor Seating",
        "Food Available",
        "Live Music"
      ],
      "featured": false
    },
    {
      "id": "8",
      "name": "Stoney Creek Golf Course",
      "type": "Outdoor",
      "area": "Wintergreen",
      "description": "Championship 18-hole golf course designed by Rees Jones. Features dramatic elevation changes, mountain views, and challenging play for all skill levels.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.wintergreenresort.com/play/golf",
      "phone": "(434) 325-8250",
      "address": "Wintergreen Dr, Wintergreen, VA 22958",
      "amenities": [
        "Seasonal",
        "Pro Shop",
        "Lessons Available",
        "Cart Rental"
      ],
      "featured": false
    },
    {
      "id": "9",
      "name": "Humpback Rocks Trail",
      "type": "Hiking",
      "area": "Afton",
      "description": "Challenging 2-mile hike to stunning 360-degree Blue Ridge views. Part of the Appalachian Trail with rocky terrain and rewarding summit panoramas.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.nps.gov/blri/planyourvisit/humpback-rocks.htm",
      "phone": "(540) 943-5187",
      "address": "Milepost 5.8, Blue Ridge Parkway, Afton, VA 22920",
      "amenities": [
        "Free",
        "Scenic Views",
        "Photography",
        "Appalachian Trail"
      ],
      "featured": true
    },
    {
      "id": "10",
      "name": "Veritas Vineyards",
      "type": "Winery",
      "area": "Afton",
      "description": "Award-winning winery with stunning views of the Blue Ridge foothills. Offers tastings, tours, and a beautiful outdoor pavilion for events.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.veritaswines.com",
      "phone": "(540) 456-8000",
      "address": "151 Veritas Ln, Afton, VA 22920",
      "amenities": [
        "Pet-Friendly",
        "Outdoor Seating",
        "Tours Available",
        "Events"
      ],
      "featured": false
    },
    {
      "id": "11",
      "name": "Bold Rock Hard Cider",
      "type": "Cidery",
      "area": "Nellysford",
      "description": "Virginia's first cidery and taproom featuring handcrafted hard ciders made from fresh-pressed Virginia apples. Enjoy live music on the outdoor stage with mountain views, lawn games, and seasonal cider releases. The expansive grounds include a tasting room, outdoor pavilion, and food trucks.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.boldrock.com",
      "phone": "(434) 361-1030",
      "address": "1020 Rockfish Valley Hwy, Nellysford, VA 22958",
      "amenities": [
        "Pet-Friendly",
        "Outdoor Seating",
        "Live Music",
        "Kid-Friendly",
        "Tours Available",
        "Food Available"
      ],
      "featured": true
    },
    {
      "id": "12",
      "name": "Spy Rock",
      "type": "Hiking",
      "area": "Montebello",
      "description": "A moderately challenging 3.7-mile out-and-back trail leading to stunning 360-degree views from a rocky outcrop. Popular spot for sunrise and sunset photography. The trail passes through beautiful hardwood forest and offers glimpses of wildlife. Best visited in spring for wildflowers or fall for foliage.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.hikingupward.com/GWNF/SpyRock",
      "phone": "(540) 291-2188",
      "address": "Spy Rock Rd, Montebello, VA 24464",
      "amenities": [
        "Free",
        "Scenic Views",
        "Photography",
        "Kid-Friendly"
      ],
      "featured": false
    },
    {
      "id": "13",
      "name": "Pharsalia",
      "type": "Farm & Orchard",
      "area": "Lovingston",
      "description": "Working farm and educational center offering farm tours, workshops, and seasonal events. Visit the farm store for locally-raised grass-fed beef, pastured pork, and farm-fresh eggs. Popular destination for school field trips and agritourism. Beautiful historic property with walking trails and picnic areas.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.pharsalia.org",
      "phone": "(434) 277-5050",
      "address": "3735 Variety Mills Rd, Lovingston, VA 22949",
      "amenities": [
        "Kid-Friendly",
        "Tours Available",
        "Events",
        "Seasonal",
        "Free"
      ],
      "featured": false
    },
    {
      "id": "14",
      "name": "Swannanoa Palace",
      "type": "Attraction",
      "area": "Afton",
      "description": "Historic Italian Renaissance-style marble mansion built in 1912 atop Afton Mountain. Offers guided tours showcasing Tiffany stained glass windows, marble columns, and panoramic mountain views. Rich history includes its time as a country club and art school. Perfect for architecture enthusiasts and history buffs.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.swannanoavalley.org",
      "phone": "(434) 325-5539",
      "address": "3051 Swannanoa Dr, Afton, VA 22920",
      "amenities": [
        "Tours Available",
        "Photography",
        "Scenic Views",
        "Wheelchair Accessible"
      ],
      "featured": false
    },
    {
      "id": "15",
      "name": "Tye River Gap Trail",
      "type": "Hiking",
      "area": "Roseland",
      "description": "Moderate 2.4-mile trail following the historic Tye River through scenic forest. Features multiple creek crossings, swimming holes, and remnants of old railroad grade. Great for families and dogs. Less crowded than other area trails. Best visited in summer for swimming and wading opportunities.",
      "image1": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "image2": "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg",
      "website": "https://www.nelsoncounty-va.gov/trails",
      "phone": "(434) 263-7015",
      "address": "Tye River Gap, VA-56, Roseland, VA 22967",
      "amenities": [
        "Free",
        "Pet-Friendly",
        "Kid-Friendly",
        "Scenic Views",
        "Seasonal"
      ],
      "featured": false
    }
  ],
  "filterOptions": {
    "types": [
      "Brewery",
      "Winery",
      "Cidery",
      "Hiking",
      "Outdoor",
      "Indoor Activity",
      "Attraction",
      "Farm & Orchard"
    ],
    "areas": [
      "Afton",
      "Wintergreen",
      "Lovingston",
      "Nellysford",
      "Montebello",
      "Arrington",
      "Roseland",
      "Seymour"
    ],
    "amenities": [
      "Kid-Friendly",
      "Pet-Friendly",
      "Wheelchair Accessible",
      "Free",
      "Seasonal",
      "Outdoor Seating",
      "Food Available",
      "Live Music",
      "Tours Available",
      "Events",
      "Photography",
      "Scenic Views",
      "Biking",
      "Appalachian Trail",
      "Pro Shop",
      "Lessons Available",
      "Cart Rental",
      "Lifeguards"
    ]
  }
};

// Google Sheets Configuration
// Using the published CSV URL from "Publish to web" feature
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTjIYDylHAm_j9b4rwGOjfPe0aoPRA1rcqsZ8NZg8ugT97pkM83n87NrDVhx7NU63-whpia-hRscywD/pub?gid=0&single=true&output=csv';

// Fetch adventure data from Google Sheets (or GitHub as fallback)
const GITHUB_JSON_URL = 'https://raw.githubusercontent.com/odd-even/nelsoncounty/main/data/config.json';

console.log('🔍 Adventure Directory Loading...');
console.log('📍 Google Sheet URL:', GOOGLE_SHEET_CSV_URL);
console.log('📍 GitHub URL (fallback):', GITHUB_JSON_URL);
console.log('💾 Fallback data available:', fallbackData ? 'YES' : 'NO');
console.log('📦 Fallback listings count:', fallbackData?.listings?.length || 0);

// Global data variable
let data = null;
let currentTypeFilter = []; // Changed to array to support multiple selections
let currentFeaturedOnly = false;

// Helper function to parse CSV text into array of objects
function parseCSV(csvText) {
    // Parse CSV row by row, handling quoted fields that may contain newlines
    const rows = [];
    let currentRow = '';
    let inQuotes = false;
    
    // Process character by character to properly handle quoted fields
    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const nextChar = csvText[i + 1];
        
        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Escaped quote (double quote)
                currentRow += '"';
                i++; // Skip next quote
            } else {
                // Toggle quote state
                inQuotes = !inQuotes;
                currentRow += char; // Keep quote for parsing
            }
        } else if (char === '\n' || char === '\r') {
            if (inQuotes) {
                // Newline inside quoted field - keep it as part of the field
                currentRow += char;
            } else {
                // End of row
                if (char === '\r' && nextChar === '\n') {
                    i++; // Skip \n after \r
                }
                if (currentRow.trim()) {
                    rows.push(currentRow.trim());
                }
                currentRow = '';
            }
        } else {
            currentRow += char;
        }
    }
    
    // Add final row if there's content
    if (currentRow.trim()) {
        rows.push(currentRow.trim());
    }
    
    // Filter out completely empty lines
    const filteredRows = rows.filter(row => row.trim());
    
    console.log('📋 Total rows found (including header):', filteredRows.length);
    
    if (filteredRows.length === 0) return [];
    
    // Parse header row
    const headers = parseCSVLine(filteredRows[0]).map(h => h.trim()).filter(h => h); // Remove empty headers
    console.log('📋 CSV Headers found:', headers);
    
    const dataRows = [];
    
    // Parse data rows
    for (let i = 1; i < filteredRows.length; i++) {
        const values = parseCSVLine(filteredRows[i]);
        // Check if row has any meaningful data (at least Title/Name field should exist)
        if (values.length === 0) {
            console.log(`⚠️ Skipping row ${i + 1}: empty values array`);
            continue;
        }
        // Check if Title field (first column) exists and has content
        const titleField = values[0] ? values[0].trim() : '';
        if (!titleField) {
            console.log(`⚠️ Skipping row ${i + 1}: empty title field`);
            continue;
        }
        
        const row = {};
        headers.forEach((header, index) => {
            row[header] = (values[index] || '').trim();
        });
        dataRows.push(row);
        
        // Log progress for debugging (first few and last few)
        if (i <= 5 || i > filteredRows.length - 5) {
            console.log(`✅ Parsed row ${i + 1}/${filteredRows.length - 1}:`, titleField.substring(0, 50));
        }
    }
    
    console.log('📋 Total data rows parsed:', dataRows.length);
    console.log('📋 Expected data rows (excluding header):', filteredRows.length - 1);
    return dataRows;
}

// Helper function to parse a single CSV line (handles quoted fields with commas)
function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                // Escaped quote
                current += '"';
                i++; // Skip next quote
            } else {
                // Toggle quote state
                inQuotes = !inQuotes;
                // Don't include the quote characters in the value
                continue;
            }
        } else if (char === ',' && !inQuotes) {
            // Field separator
            values.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    
    // Add last field
    values.push(current);
    
    return values;
}

// Helper function to convert CSV row to listing object
function mapCSVRowToListing(row, index) {
    // Handle various column name variations
    const getField = (fieldName, altNames = []) => {
        const names = [fieldName, ...altNames];
        for (const name of names) {
            if (row[name]) return row[name].trim();
        }
        return '';
    };
    
    // Parse amenities (can be comma or semicolon separated)
    const amenitiesStr = getField('Amenities', ['amenities', 'Amenity']);
    const amenities = amenitiesStr 
        ? amenitiesStr.split(/[,;]/).map(a => a.trim()).filter(a => a)
        : [];
    
    // Parse featured (handle various formats)
    const featuredStr = getField('Featured', ['featured']);
    const featured = featuredStr === 'TRUE' || featuredStr === 'true' || featuredStr === '1' || featuredStr === 'Yes' || featuredStr === 'yes';
    
    return {
        id: getField('ID', ['id', 'Id']) || String(index + 1),
        name: getField('Title', ['Name', 'name', 'title']) || 'Unnamed',
        type: getField('Type', ['type']) || '',
        area: getField('Area', ['area']) || '',
        description: getField('Description', ['description', 'Desc', 'desc']) || '',
        image1: getField('Photo', ['photo', 'Image', 'image', 'Image1', 'image1', 'Image 1']) || '',
        // Support multiple second-image header variants from the sheet
        image2: getField('Image2', ['image2', 'Image 2', 'Photo 2', 'photo2', 'Photo2', 'Second Photo', 'Secondary Photo']) || '',
        website: getField('External Website', ['Website', 'website', 'URL', 'url']) || '',
        phone: getField('Phone', ['phone']) || '',
        address: getField('Address', ['address']) || '',
        amenities: amenities,
        featured: featured
    };
}

// Helper function to extract filter options from listings
function extractFilterOptions(listings) {
    const types = [...new Set(listings.map(l => l.type).filter(Boolean))].sort();
    const areas = [...new Set(listings.map(l => l.area).filter(Boolean))].sort();
    const amenities = [...new Set(listings.flatMap(l => l.amenities || []).filter(Boolean))].sort();
    
    return { types, areas, amenities };
}

// Get URL parameters helper
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Find listing by legacy WordPress URL
function findListingByLegacyUrl(url) {
    if (!data || !data.listings) return null;
    
    // Normalize URL (remove trailing slashes, protocol, www)
    var normalizeUrl = function(u) {
        return (u || '').toLowerCase()
            .replace(/^https?:\/\//, '')
            .replace(/^www\./, '')
            .replace(/\/$/, '')
            .trim();
    };
    
    var normalizedParam = normalizeUrl(url);
    
    // Try exact match first
    for (var i = 0; i < data.listings.length; i++) {
        var listing = data.listings[i];
        var legacyUrl = listing.legacyUrl || listing.wordpressUrl || '';
        if (legacyUrl && normalizeUrl(legacyUrl) === normalizedParam) {
            return listing;
        }
    }
    
    // Try partial match (for URLs with query strings or fragments)
    for (var i = 0; i < data.listings.length; i++) {
        var listing = data.listings[i];
        var legacyUrl = listing.legacyUrl || listing.wordpressUrl || '';
        var normalizedLegacy = normalizeUrl(legacyUrl);
        
        if (normalizedLegacy && (
            normalizedParam.includes(normalizedLegacy) || 
            normalizedLegacy.includes(normalizedParam) ||
            normalizedParam.indexOf(normalizedLegacy) === 0 ||
            normalizedLegacy.indexOf(normalizedParam) === 0
        )) {
            return listing;
        }
    }
    
    // Try matching by path segment (e.g., "/breweries/devils-backbone" matches)
    var pathSegments = normalizedParam.split('/').filter(function(s) { return s.length > 0; });
    if (pathSegments.length > 1) {
        var lastSegment = pathSegments[pathSegments.length - 1]; // Get last part of URL
        
        for (var i = 0; i < data.listings.length; i++) {
            var listing = data.listings[i];
            var legacyUrl = listing.legacyUrl || listing.wordpressUrl || '';
            var normalizedLegacy = normalizeUrl(legacyUrl);
            
            // Check if last segment of URL matches slug from listing name
            var listingSlug = listing.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
            
            if (lastSegment === listingSlug || normalizedLegacy.includes(lastSegment) || lastSegment.includes(listingSlug)) {
                return listing;
            }
        }
    }
    
    return null;
}

// Find listing by ID or slug
function findListingByIdentifier(idOrSlug) {
    if (!data || !data.listings) return null;
    
    // Try ID match
    for (var i = 0; i < data.listings.length; i++) {
        if (data.listings[i].id === idOrSlug || data.listings[i].id === String(idOrSlug)) {
            return data.listings[i];
        }
        
        // Try slug match (create slug from name)
        var nameSlug = data.listings[i].name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        if (nameSlug === idOrSlug.toLowerCase()) {
            return data.listings[i];
        }
    }
    
    return null;
}

// Handle URL parameters to filter to specific listing
function handleUrlParameters() {
    if (!data) return;
    
    var listing = null;
    
    // Check for ?listing= parameter (can be ID, slug, or name)
    var listingParam = getUrlParameter('listing');
    if (listingParam) {
        listing = findListingByIdentifier(listingParam);
        if (!listing) {
            // Try matching by name (partial)
            listing = data.listings.find(function(l) {
                return l.name.toLowerCase().includes(listingParam.toLowerCase()) ||
                       listingParam.toLowerCase().includes(l.name.toLowerCase());
            });
        }
    }
    
    // Check for ?legacy_url= or ?wordpress_url= parameter
    if (!listing) {
        var legacyUrlParam = getUrlParameter('legacy_url') || getUrlParameter('wordpress_url') || getUrlParameter('url');
        if (legacyUrlParam) {
            listing = findListingByLegacyUrl(legacyUrlParam);
        }
    }
    
    // If we found a listing, filter to it and auto-flip the card
    if (listing) {
        console.log('📍 Found listing from URL parameter:', listing.name);
        filterByListingName(listing.name);
    }
}

// Fetch data from GitHub and initialize
// Function to load data from Google Sheets
function loadDataFromGoogleSheets() {
    // Check if Google Sheet CSV URL is configured
    if (!GOOGLE_SHEET_CSV_URL || GOOGLE_SHEET_CSV_URL.includes('YOUR_SHEET_ID')) {
        console.log('⚠️ Google Sheet URL not configured, trying GitHub...');
        return loadDataFromGitHub();
    }
    
    console.log('📊 Attempting to load from Google Sheets...');
    const cacheBustUrl = GOOGLE_SHEET_CSV_URL + (GOOGLE_SHEET_CSV_URL.includes('?') ? '&' : '?') + 't=' + Date.now();
    console.log('🔗 URL:', cacheBustUrl);

    // For file:// origins, use a proxy immediately (CORS doesn't work with file://)
    // Check if we're running from file:// protocol
    const isFileProtocol = window.location.protocol === 'file:';
    
    let fetchPromise;
    
    if (isFileProtocol) {
        console.log('📁 Detected file:// protocol - using CORS proxy');
        // Try multiple CORS proxy options
        function buildProxyUrl(base, url) {
            if (base.includes('corsproxy.io')) {
                return base + encodeURIComponent(url);
            } else if (base.includes('allorigins')) {
                return base + encodeURIComponent(url);
            } else {
                return base + encodeURIComponent(url);
            }
        }
        
        const proxies = [
            'https://corsproxy.io/?',
            'https://api.allorigins.win/raw?url=',
            'https://corsproxy.herokuapp.com/'
        ];
        
        let proxyIndex = 0;
        function tryProxy() {
            const proxyUrl = buildProxyUrl(proxies[proxyIndex], cacheBustUrl);
            console.log('🔁 Trying proxy', proxyIndex + 1, ':', proxyUrl.substring(0, 100) + '...');
            
            return fetch(proxyUrl, { 
                method: 'GET', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'omit' 
            })
            .catch(function(err) {
                console.warn('⚠️ Proxy', proxyIndex + 1, 'failed:', err && err.message);
                proxyIndex++;
                if (proxyIndex < proxies.length) {
                    return tryProxy();
                } else {
                    throw new Error('All CORS proxies failed. Try running from a web server instead of file://');
                }
            });
        }
        
        fetchPromise = tryProxy();
    } else {
        // For http/https, try direct first, fallback to proxy if needed
        fetchPromise = fetch(cacheBustUrl, { 
            method: 'GET', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'omit' 
        })
        .catch(function(err) {
            console.warn('⚠️ Direct CSV fetch failed, retrying via CORS proxy:', err && err.message);
            const proxied = 'https://corsproxy.io/?' + encodeURIComponent(cacheBustUrl);
            console.log('🔁 Proxy URL:', proxied);
            return fetch(proxied, { 
                method: 'GET', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'omit' 
            });
        });
    }
    
    return fetchPromise
        .then(response => {
            console.log('📡 Response status:', response.status, response.statusText);
            console.log('📡 Response headers:', response.headers.get('content-type'));
            if (!response.ok) {
                throw new Error(`Google Sheets fetch failed: ${response.status} ${response.statusText}`);
            }
            console.log('✅ Successfully fetched CSV from Google Sheets');
            return response.text();
        })
        .then(csvText => {
            console.log('📄 CSV Text received, length:', csvText.length);
            console.log('📄 First 500 chars:', csvText.substring(0, 500));
            
            // Parse CSV
            const rows = parseCSV(csvText);
            console.log('📋 Parsed CSV rows:', rows.length);
            
            if (rows.length === 0) {
                throw new Error('No data rows found in Google Sheet');
            }
            
            // Log first row to verify structure
            if (rows.length > 0) {
                console.log('📋 First row keys:', Object.keys(rows[0]));
                console.log('📋 First row sample:', JSON.stringify(rows[0]).substring(0, 200));
            }
            
            // Convert CSV rows to listings
            const listings = rows.map((row, index) => mapCSVRowToListing(row, index));
            console.log('✅ Converted to listings:', listings.length);
            console.log('📊 Listing names (first 5):', listings.slice(0, 5).map(l => l.name || 'NO NAME'));
            console.log('📊 Listing names (last 5):', listings.slice(-5).map(l => l.name || 'NO NAME'));
            console.log('📊 Listing count breakdown:', {
                total: listings.length,
                withNames: listings.filter(l => l.name && l.name.trim()).length,
                withoutNames: listings.filter(l => !l.name || !l.name.trim()).length
            });
            
            if (listings.length > 0) {
                console.log('📋 First listing:', JSON.stringify(listings[0]).substring(0, 300));
                console.log('📋 Last listing:', JSON.stringify(listings[listings.length - 1]).substring(0, 300));
            }
            
            // Extract filter options
            const filterOptions = extractFilterOptions(listings);
            console.log('📊 Filter options - Types:', filterOptions.types.length, 'Areas:', filterOptions.areas.length, 'Amenities:', filterOptions.amenities.length);
            
            return {
                listings: listings,
                filterOptions: filterOptions
            };
        })
        .catch(error => {
            console.error('❌ Google Sheets fetch failed:', error);
            console.error('❌ Error message:', error.message);
            console.error('❌ Error stack:', error.stack);
            console.log('📡 Falling back to GitHub...');
            return loadDataFromGitHub();
        });
}

// Function to load data from GitHub (fallback)
function loadDataFromGitHub() {
    console.log('📡 Attempting to load from GitHub...');
    return fetch(GITHUB_JSON_URL)
        .then(response => {
            console.log('📡 GitHub Response Status:', response.status, response.statusText);
            if (!response.ok) {
                console.warn('⚠️ Could not fetch from GitHub (status ' + response.status + '), using embedded fallback data');
                return fallbackData;
            }
            console.log('✅ Successfully fetched from GitHub');
            // Ensure UTF-8 encoding is handled properly
            return response.text().then(text => {
                try {
                    return JSON.parse(text);
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                    // Try to fix common encoding issues
                    const fixedText = text
                        .replace(/\u00C3\u00A9/g, '\u00E9') // Fix é if double-encoded
                        .replace(/\u00C3\u00A1/g, '\u00E1') // Fix á
                        .replace(/\u00C3\u00AD/g, '\u00ED') // Fix í
                        .replace(/\u00C3\u00B3/g, '\u00F3') // Fix ó
                        .replace(/\u00C3\u00BA/g, '\u00FA') // Fix ú
                        .replace(/\u00C3\u00B1/g, '\u00F1') // Fix ñ
                        .replace(/\u00C3\u00BC/g, '\u00FC') // Fix ü
                        .replace(/\u00C3\u00B6/g, '\u00F6'); // Fix ö
                    return JSON.parse(fixedText);
                }
            });
        })
        .catch(error => {
            console.warn('⚠️ GitHub fetch failed:', error);
            console.log('💾 Using embedded fallback data');
            return fallbackData;
        });
}

// Load data: Try Google Sheets first, then GitHub, then fallback
loadDataFromGoogleSheets()
    .then(loadedData => {
        if (!loadedData || !loadedData.listings) {
            throw new Error('Loaded data is empty or missing listings');
        }
        
        data = loadedData;
        console.log('✅ Adventure data loaded successfully');
        console.log('📊 Source: Google Sheets');
        console.log('📊 Listings count:', data.listings.length);
        console.log('📊 First listing name:', data.listings[0]?.name || 'N/A');
        console.log('📊 Last listing name:', data.listings[data.listings.length - 1]?.name || 'N/A');
        
        // Ensure filterOptions exist (if loaded from CSV, they're already there)
        if (!data.filterOptions && data.listings) {
            data.filterOptions = extractFilterOptions(data.listings);
        }
        
        // Verify we're NOT using fallback data
        if (data.listings.length === 20 && data.listings[0]?.name === 'Devil\'s Backbone Brewing Company') {
            console.warn('⚠️ WARNING: This looks like fallback data! Something went wrong with Google Sheets fetch.');
        }
        
        // Update head meta from fresh data
        updateHeadFromData(data);
        
        // Force clear any cached/stale grid content
        const grid = document.getElementById('previewGrid');
        if (grid) {
            grid.innerHTML = '';
            console.log('🧹 Cleared previewGrid innerHTML');
        }
        
        console.log('🎯 About to render', data.listings.length, 'listings');
        renderPreview();
        
        // Handle URL parameters after data is loaded and rendered
        setTimeout(function() {
            handleUrlParameters();
        }, 100);
    })
    .catch(error => {
        console.error('❌ Error loading data:', error);
        console.error('❌ Error details:', error.message, error.stack);
        console.warn('🔄 Falling back to embedded data');
        data = fallbackData;
        // Ensure filterOptions exist for fallback data
        if (!data.filterOptions && data.listings) {
            data.filterOptions = extractFilterOptions(data.listings);
        }
        console.log('💾 Using fallback data with', data?.listings?.length || 0, 'listings');
        console.warn('⚠️ NOTE: You are seeing FALLBACK DATA (20 items). Google Sheets fetch failed!');
        // Update head meta from fallback so head isn't stale
        updateHeadFromData(data);
        renderPreview();
        
        // Handle URL parameters after fallback data is loaded
        setTimeout(function() {
            handleUrlParameters();
        }, 100);
    });

// Function to escape HTML special characters
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Function to fix character encoding issues
function fixEncoding(text) {
    if (!text) return text;
    return String(text)
        .replace(/\u00C3\u00A9/g, '\u00E9') // Fix é if double-encoded
        .replace(/\u00C3\u00A1/g, '\u00E1') // Fix á
        .replace(/\u00C3\u00AD/g, '\u00ED') // Fix í
        .replace(/\u00C3\u00B3/g, '\u00F3') // Fix ó
        .replace(/\u00C3\u00BA/g, '\u00FA') // Fix ú
        .replace(/\u00C3\u00B1/g, '\u00F1') // Fix ñ
        .replace(/\u00C3\u00BC/g, '\u00FC') // Fix ü
        .replace(/\u00C3\u00B6/g, '\u00F6') // Fix ö
        .replace(/\u00C3\u00A0/g, '\u00E0') // Fix à
        .replace(/\u00C3\u00A8/g, '\u00E8') // Fix è
        .replace(/\u00C3\u00AC/g, '\u00EC') // Fix ì
        .replace(/\u00C3\u00B2/g, '\u00F2') // Fix ò
        .replace(/\u00C3\u00B9/g, '\u00F9') // Fix ù
        .replace(/\u00C3\u00A7/g, '\u00E7') // Fix ç
        .replace(/Caf[^\u00E9]|Cafe[^s]/g, 'Café') // Fix "Cafe" without accent (but not "Cafes")
        .replace(/caf[^\u00E9]|cafe[^s]/g, 'café'); // Fix "cafe" without accent (but not "cafes")
}

// Update head <title> and meta tags from loaded data
function updateHeadFromData(loadedData) {
    try {
        if (!loadedData || !loadedData.listings || loadedData.listings.length === 0) return;
        var listings = loadedData.listings;
        // Collect unique areas and types
        var areaSet = {};
        var typeSet = {};
        for (var i = 0; i < listings.length; i++) {
            var l = listings[i] || {};
            if (l.area) areaSet[l.area] = true;
            if (l.type) typeSet[l.type] = true;
        }
        var areas = Object.keys(areaSet);
        var types = Object.keys(typeSet);

        // Compose title and description
        var titleBase = 'Nelson County Adventures';
        var title = titleBase + ' - ' + listings.length + ' listings across ' + (areas.length || 1) + ' areas';
        var typePreview = types.slice(0, 3).join(', ');
        var areaPreview = areas.slice(0, 3).join(', ');
        var description = 'Explore ' + listings.length + ' adventures in Nelson County, VA — including ' + (typePreview || 'local attractions') + (areaPreview ? (' — in ' + areaPreview) : '') + '. Find your perfect brewery, winery, hike, and more.';

        // Helpers to set or create meta tags
        function setMetaByName(name, content) {
            if (!content) return;
            var el = document.querySelector('meta[name="' + name + '"]');
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('name', name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        }
        function setMetaByProperty(prop, content) {
            if (!content) return;
            var el = document.querySelector('meta[property="' + prop + '"]');
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('property', prop);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        }

        // Apply updates
        if (document && document.title) { document.title = title; }
        setMetaByName('title', title);
        setMetaByName('description', description);
        setMetaByProperty('og:title', title);
        setMetaByProperty('og:description', description);
        setMetaByProperty('twitter:title', title);
        setMetaByProperty('twitter:description', description);
        
        // Update structured data (JSON-LD)
        updateStructuredData(listings);
    } catch (e) {
        console.warn('⚠️ Failed to update head metadata from data:', e);
    }
}

// Update structured data (Schema.org JSON-LD) from loaded listings
function updateStructuredData(listings) {
    try {
        if (!listings || listings.length === 0) return;
        
        // Map types to Schema.org types
        function getSchemaType(listing) {
            var type = (listing.type || '').toLowerCase();
            if (type.includes('brewery') || type === 'beer') return 'Brewery';
            if (type.includes('winery') || type === 'wine') return 'Winery';
            if (type.includes('distillery') || type === 'spirits') return 'Distillery';
            if (type.includes('hiking') || type.includes('trail') || type.includes('outdoor')) return 'TouristAttraction';
            if (type.includes('restaurant') || type.includes('dining')) return 'Restaurant';
            if (type.includes('resort') || type.includes('lodging')) return 'Resort';
            if (type.includes('spa')) return 'Spa';
            if (type.includes('market')) return 'LocalBusiness';
            return 'TouristAttraction';
        }
        
        // Parse address components
        function parseAddress(addressStr) {
            if (!addressStr) return null;
            var parts = addressStr.split(',');
            var streetAddress = parts[0] ? parts[0].trim() : '';
            var locality = parts.length > 1 ? parts[parts.length - 2].trim() : '';
            var stateZip = parts.length > 0 ? parts[parts.length - 1].trim() : '';
            var stateMatch = stateZip.match(/([A-Z]{2})\s*(\d{5})/);
            var state = stateMatch ? stateMatch[1] : 'VA';
            var postalCode = stateMatch ? stateMatch[2] : '';
            
            return {
                '@type': 'PostalAddress',
                streetAddress: streetAddress,
                addressLocality: locality || '',
                addressRegion: state,
                postalCode: postalCode
            };
        }
        
        // Build containsPlace array (limit to first 50 for performance)
        var containsPlace = listings.slice(0, 50).map(function(listing) {
            var place = {
                '@type': getSchemaType(listing),
                name: listing.name || 'Unnamed'
            };
            
            if (listing.description) {
                place.description = listing.description;
            }
            
            var addr = parseAddress(listing.address);
            if (addr && addr.streetAddress) {
                place.address = addr;
            }
            
            if (listing.phone) {
                place.telephone = listing.phone;
            }
            
            if (listing.website) {
                place.url = listing.website;
            }
            
            return place;
        });
        
        // Build the full structured data object
        var structuredData = {
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: 'Nelson County',
            description: 'Explore ' + listings.length + ' adventures in Nelson County, Virginia including breweries, wineries, hiking trails, and outdoor activities in the Blue Ridge Mountains.',
            url: 'https://nelsoncounty-va.gov/',
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '37.8',
                longitude: '-79.0'
            },
            containsPlace: containsPlace
        };
        
        // Update or create the script tag
        var scriptEl = document.getElementById('schemaOrgData');
        if (scriptEl) {
            scriptEl.textContent = JSON.stringify(structuredData, null, 2);
        } else {
            scriptEl = document.createElement('script');
            scriptEl.type = 'application/ld+json';
            scriptEl.id = 'schemaOrgData';
            scriptEl.textContent = JSON.stringify(structuredData, null, 2);
            document.head.appendChild(scriptEl);
        }
        
        console.log('📊 Updated structured data with', containsPlace.length, 'places');
    } catch (e) {
        console.warn('⚠️ Failed to update structured data:', e);
    }
}

// Icon mapping function
function getIconClass(type) {
    const typeMap = {
        'Wine': 'icon-wine', 'Winery': 'icon-wine', 'Beer': 'icon-beer', 'Brewery': 'icon-beer',
        'Spirits': 'icon-spirits', 'Distillery': 'icon-spirits', 'Cocktails': 'icon-cocktail',
        'Cocktail Bar': 'icon-cocktail', 'Coffee': 'icon-coffee', 'Coffee Shop': 'icon-coffee',
        'Café': 'icon-coffee', 'Tea': 'icon-tea', 'Tea Room': 'icon-tea',
        'Restaurant': 'icon-restaurant', 'Dining': 'icon-restaurant', 'Bakery': 'icon-bakery',
        'Patisserie': 'icon-bakery', 'Cheese': 'icon-cheese', 'Fromagerie': 'icon-cheese',
        'Chocolate': 'icon-chocolate', 'Chocolatier': 'icon-chocolate', 'Museum': 'icon-museum',
        'Art': 'icon-art', 'Art Gallery': 'icon-gallery', 'Gallery': 'icon-gallery',
        'Hiking': 'icon-hiking', 'Hike': 'icon-hiking', 'Trail': 'icon-hiking',
        'Cycling': 'icon-cycling', 'Bike': 'icon-cycling', 'Activity': 'icon-activity',
        'Activities': 'icon-activity', 'Outdoor': 'icon-outdoor', 'Outdoor Activity': 'icon-outdoor',
        'Kayaking': 'icon-kayaking', 'Kayak': 'icon-kayaking',
        'Spa': 'icon-spa', 'Wellness': 'icon-wellness', 'Health': 'icon-wellness',
        'Shopping': 'icon-shopping', 'Shop': 'icon-shopping', 'Market': 'icon-market',
        'Farmers Market': 'icon-market', 'Concert': 'icon-concert', 'Music': 'icon-concert',
        'Theater': 'icon-theater', 'Theatre': 'icon-theater', 'Cinema': 'icon-cinema',
        'Movie': 'icon-cinema', 'Film': 'icon-cinema', 'Lodging': 'icon-lodging',
        'Hotel': 'icon-lodging', 'Inn': 'icon-lodging', 'BnB': 'icon-lodging',
        'Cabin': 'icon-cabin', 'Camping': 'icon-camping', 'Park': 'icon-park',
        'Cidery': 'icon-cidery', 'Cider': 'icon-cidery',
        'Indoor Activity': 'icon-indoor', 'Indoor': 'icon-indoor',
        'Attraction': 'icon-attraction', 'Attractions': 'icon-attraction',
        'Farm & Orchard': 'icon-farm', 'Farm': 'icon-farm', 'Orchard': 'icon-farm'
    };
    return typeMap[type] || 'icon-default';
}

// Fallback placeholder image (SVG data URI) - forest green background with white camera icon
const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%232d6a4f'/%3E%3Cg transform='translate(400, 300) scale(1)'%3E%3Cpath d='M208,60H178.13477l-14.8125-22.21875A3.99853,3.99853,0,0,0,159.99414,36h-64A3.9985,3.9985,0,0,0,92.666,37.78125L77.85352,60H48A20.02229,20.02229,0,0,0,28,80V192a20.02229,20.02229,0,0,0,20,20H208a20.02229,20.02229,0,0,0,20-20V80A20.02229,20.02229,0,0,0,208,60Zm12,132a12.01312,12.01312,0,0,1-12,12H48a12.01312,12.01312,0,0,1-12-12V80A12.01312,12.01312,0,0,1,48,68H79.99414a3.99853,3.99853,0,0,0,3.32813-1.78125L98.13477,44h59.71875L172.666,66.21875A3.9985,3.9985,0,0,0,175.99414,68H208a12.01312,12.01312,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40.04584,40.04584,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32.03667,32.03667,0,0,1,128,164Z' fill='white' transform='translate(-128, -128)'/%3E%3C/g%3E%3C/svg%3E";

// Handle image error - try image2, then fallback
function handleImageError(img, image1Src, image2Src, fallbackSrc) {
    if (!img.dataset.triedImage2 && image2Src) {
        img.dataset.triedImage2 = 'true';
        img.src = image2Src;
    } else {
        img.src = fallbackSrc;
    }
}

// Sort listings function
function sortListings() {
    const sortValue = document.getElementById('sortDropdown').value;
    const grid = document.getElementById('previewGrid');
    const cards = Array.from(grid.querySelectorAll('.flip-card'));
    
    cards.sort(function(a, b) {
        if (sortValue === 'default') return 0;
        
        // Get listing data from the cards
        const aName = a.querySelector('.flip-card-front h3').textContent;
        const bName = b.querySelector('.flip-card-front h3').textContent;
        const aArea = a.querySelector('.flip-card-front .badge-area')?.textContent || '';
        const bArea = b.querySelector('.flip-card-front .badge-area')?.textContent || '';
        const aType = a.querySelector('.flip-card-front .badge-type')?.textContent || '';
        const bType = b.querySelector('.flip-card-front .badge-type')?.textContent || '';
        
        switch(sortValue) {
            case 'name-asc':
                return aName.localeCompare(bName);
            case 'name-desc':
                return bName.localeCompare(aName);
            case 'area-asc':
                return aArea.localeCompare(bArea);
            case 'type-asc':
                return aType.localeCompare(bType);
            default:
                return 0;
        }
    });
    
    // Clear and re-append sorted cards
    grid.innerHTML = '';
    cards.forEach(function(card) {
        grid.appendChild(card);
    });
}

// Close all flipped cards
function closeAllFlippedCards() {
    document.querySelectorAll('.flip-card.flipped').forEach(function(card) {
        card.classList.remove('flipped');
    });
    const overlay = document.getElementById('flipOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Filter by badge click
function filterByBadge(event, filterType, value) {
    event.stopPropagation();
    
    // Close all flipped cards and remove overlay when filtering
    closeAllFlippedCards();
    
    if (filterType === 'type') {
        // For badge clicks, set single type (replaces current selection)
        currentTypeFilter = [value];
        const mobileTypeFilter = document.getElementById('mobileTypeFilter');
        if (mobileTypeFilter) mobileTypeFilter.value = value;
        document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
            btn.classList.remove('active');
            if (btn.dataset.type === value) {
                btn.classList.add('active');
            }
        });
    } else if (filterType === 'area') {
        const areaFilter = document.getElementById('previewAreaFilter');
        const mobileAreaFilter = document.getElementById('mobileAreaFilter');
        if (areaFilter) areaFilter.value = value;
        if (mobileAreaFilter) mobileAreaFilter.value = value;
    } else if (filterType === 'featured') {
        currentFeaturedOnly = true;
    }
    
    filterPreview();
}

// Filter by amenity click
function filterByAmenity(event, amenity) {
    event.stopPropagation();
    
    // Close all flipped cards and remove overlay when filtering
    closeAllFlippedCards();
    
    const amenityFilter = document.getElementById('previewAmenityFilter');
    const mobileAmenityFilter = document.getElementById('mobileAmenityFilter');
    if (amenityFilter) {
        amenityFilter.value = amenity;
    }
    if (mobileAmenityFilter) {
        mobileAmenityFilter.value = amenity;
    }
    
    filterPreview();
}

// Main filter function
function filterPreview() {
    if (!data) return;
    
    const searchInput = document.getElementById('previewSearchInput');
        const areaFilter = document.getElementById('previewAreaFilter');
        const amenityFilter = document.getElementById('previewAmenityFilter');
        const mobileAreaFilter = document.getElementById('mobileAreaFilter');
        const mobileAmenityFilter = document.getElementById('mobileAmenityFilter');
        
        const searchTerm = (searchInput ? searchInput.value : '').toLowerCase();
        const selectedArea = (areaFilter ? areaFilter.value : '') || (mobileAreaFilter ? mobileAreaFilter.value : '');
        const selectedAmenity = (amenityFilter ? amenityFilter.value : '') || (mobileAmenityFilter ? mobileAmenityFilter.value : '');
    
    const filtered = data.listings.filter(function(listing) {
        const amenitiesText = Array.isArray(listing.amenities) ? listing.amenities.join(' ').toLowerCase() : '';
        const addressText = (listing.address || '').toLowerCase();
        const phoneText = (listing.phone || '').toLowerCase();
        const websiteText = (listing.website || '').toLowerCase();
        const matchesSearch = !searchTerm || 
            listing.name.toLowerCase().includes(searchTerm) ||
            listing.type.toLowerCase().includes(searchTerm) ||
            listing.area.toLowerCase().includes(searchTerm) ||
            listing.description.toLowerCase().includes(searchTerm) ||
            addressText.includes(searchTerm) ||
            phoneText.includes(searchTerm) ||
            websiteText.includes(searchTerm) ||
            amenitiesText.includes(searchTerm);
        
        // Handle type matching - treat "Activity" and "Outdoor" as equivalent
        const matchesType = currentTypeFilter.length === 0 || currentTypeFilter.some(function(filterType) {
            if (filterType === listing.type) return true;
            // Handle Activity/Outdoor equivalence
            if ((filterType === 'Activity' || filterType === 'Outdoor') && 
                (listing.type === 'Activity' || listing.type === 'Outdoor')) {
                return true;
            }
            return false;
        });
        const matchesArea = !selectedArea || listing.area === selectedArea;
        const matchesAmenity = !selectedAmenity || (listing.amenities && listing.amenities.includes(selectedAmenity));
        const matchesFeatured = !currentFeaturedOnly || !!listing.featured;
        
        return matchesSearch && matchesType && matchesArea && matchesAmenity && matchesFeatured;
    });
    
    // Show/hide clear button based on whether any filters are active
    const clearBtn = document.getElementById('clearFiltersBtn');
    const mobileClearBtn = document.getElementById('mobileClearFiltersBtn');
    const hasActiveFilters = searchTerm || currentTypeFilter.length > 0 || selectedArea || selectedAmenity || currentFeaturedOnly;
    if (clearBtn) {
        clearBtn.style.display = hasActiveFilters ? 'block' : 'none';
    }
    if (mobileClearBtn) {
        mobileClearBtn.style.display = hasActiveFilters ? 'block' : 'none';
    }
    
    renderPreview(filtered);
}

// Clear all filters
function clearPreviewFilters() {
    const searchInput = document.getElementById('previewSearchInput');
    const areaFilter = document.getElementById('previewAreaFilter');
    const amenityFilter = document.getElementById('previewAmenityFilter');
    const clearBtn = document.getElementById('clearFiltersBtn');
    
    const mobileTypeFilter = document.getElementById('mobileTypeFilter');
    const mobileAreaFilter = document.getElementById('mobileAreaFilter');
    const mobileAmenityFilter = document.getElementById('mobileAmenityFilter');
    
    if (searchInput) searchInput.value = '';
    if (areaFilter) areaFilter.value = '';
    if (amenityFilter) amenityFilter.value = '';
    if (mobileTypeFilter) mobileTypeFilter.value = '';
    if (mobileAreaFilter) mobileAreaFilter.value = '';
    if (mobileAmenityFilter) mobileAmenityFilter.value = '';
    currentTypeFilter = [];
    currentFeaturedOnly = false;
    
    document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.dataset.type === '') btn.classList.add('active');
    });
    
    // Hide clear button after clearing
    if (clearBtn) clearBtn.style.display = 'none';
    
    if (data) {
        renderPreview(data.listings);
    }
}

// Filter to show only a specific listing (from map popup)
function filterByListingName(listingName) {
    if (!data) return;
    
    // Clear all other filters
    const searchInput = document.getElementById('previewSearchInput');
    const areaFilter = document.getElementById('previewAreaFilter');
    const amenityFilter = document.getElementById('previewAmenityFilter');
    
    if (searchInput) searchInput.value = '';
    if (areaFilter) areaFilter.value = '';
    if (amenityFilter) amenityFilter.value = '';
    currentTypeFilter = [];
    
    // Reset type filter buttons
    document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.dataset.type === '') btn.classList.add('active');
    });
    
    // Filter to show only the clicked listing
    const filtered = data.listings.filter(function(listing) {
        return listing.name === listingName;
    });
    
    // Show clear button
    const clearBtn = document.getElementById('clearFiltersBtn');
    if (clearBtn) clearBtn.style.display = 'block';
    
    renderPreview(filtered);
    
    // Scroll to the specific card after a brief delay to let it render
    setTimeout(function() {
        const previewGrid = document.getElementById('previewGrid');
        if (previewGrid && filtered.length > 0) {
            // Find the card for this listing
            const cards = previewGrid.querySelectorAll('.flip-card');
            if (cards.length > 0) {
                cards[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Auto-flip the card to show details when coming from URL parameter
                setTimeout(function() { cards[0].click(); }, 300);
            } else {
                previewGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, 200);
}

// Main render function
function renderPreview(filteredListings) {
    if (!data) {
        console.error('❌ renderPreview called but data is null/undefined');
        return;
    }
    
    const listings = filteredListings || data.listings;
    console.log('🎨 renderPreview called with', listings ? listings.length : 0, 'listings');
    console.log('🎨 Data source check:', {
        'data.listings.length': data.listings ? data.listings.length : 0,
        'filteredListings': filteredListings ? filteredListings.length : 'none',
        'using filteredListings': !!filteredListings
    });
    
    const grid = document.getElementById('previewGrid');
    if (!grid) {
        console.error('❌ previewGrid element not found');
        return;
    }
    
    grid.innerHTML = '';
    
    // Populate filters on first render
    const areaFilter = document.getElementById('previewAreaFilter');
    if (areaFilter && areaFilter.options.length === 1 && data.filterOptions) {
        data.filterOptions.areas.forEach(function(area) {
            const option = document.createElement('option');
            option.value = area;
            option.textContent = area;
            areaFilter.appendChild(option);
        });
    }
    
    const amenityFilter = document.getElementById('previewAmenityFilter');
    if (amenityFilter && amenityFilter.options.length === 1 && data.filterOptions) {
        data.filterOptions.amenities.forEach(function(amenity) {
            const option = document.createElement('option');
            option.value = amenity;
            option.textContent = amenity;
            amenityFilter.appendChild(option);
        });
    }
    
    // Populate mobile filter dropdowns
    const mobileTypeFilter = document.getElementById('mobileTypeFilter');
    if (mobileTypeFilter && mobileTypeFilter.options.length === 1 && data.filterOptions) {
        // Get all types from visible buttons plus expanded ones
        const allTypes = ['Brewery', 'Winery', 'Hiking', 'Restaurant', 'Lodging', 'Outdoor', 
                          'Cidery', 'Indoor Activity', 'Attraction', 'Farm & Orchard'];
        allTypes.forEach(function(type) {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            mobileTypeFilter.appendChild(option);
        });
    }
    
    const mobileAreaFilter = document.getElementById('mobileAreaFilter');
    if (mobileAreaFilter && mobileAreaFilter.options.length === 1 && data.filterOptions) {
        data.filterOptions.areas.forEach(function(area) {
            const option = document.createElement('option');
            option.value = area;
            option.textContent = area;
            mobileAreaFilter.appendChild(option);
        });
    }
    
    const mobileAmenityFilter = document.getElementById('mobileAmenityFilter');
    if (mobileAmenityFilter && mobileAmenityFilter.options.length === 1 && data.filterOptions) {
        data.filterOptions.amenities.forEach(function(amenity) {
            const option = document.createElement('option');
            option.value = amenity;
            option.textContent = amenity;
            mobileAmenityFilter.appendChild(option);
        });
    }
    
    // Update results count
    const countEl = document.getElementById('previewResultsCount');
    if (countEl) {
        countEl.textContent = 'Showing ' + listings.length + ' listing' + (listings.length !== 1 ? 's' : '');
    }
    
    // Update map markers
    updateMapMarkers(listings);
    
    // Render cards
    console.log('🎨 About to render', listings.length, 'cards');
    listings.forEach(function(listing, index) {
        if (index < 3 || index >= listings.length - 3) {
            console.log(`🎨 Rendering card ${index + 1}/${listings.length}:`, listing.name);
        }
        const card = document.createElement('div');
        card.className = 'flip-card';
        
        // Smooth flip + expand on click
        card.addEventListener('click', function(e) {
            // Only prevent if clicking on interactive elements
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            // Prevent flip if clicking inside the scrollable back content
            const backCard = e.target.closest('.flip-card-back');
            if (backCard && e.target !== backCard && backCard.scrollHeight > backCard.clientHeight) {
                const scrollableContent = backCard.querySelector('div[style*="overflow-y: auto"]');
                if (scrollableContent && (e.target === scrollableContent || scrollableContent.contains(e.target))) {
                    return;
                }
            }
            
            document.querySelectorAll('.flip-card.flipped').forEach(function(otherCard) {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
            
            // Toggle flip state
            const isFlipped = card.classList.contains('flipped');
            card.classList.toggle('flipped');
            
            // Toggle expanded modal-like view and overlay
            const overlay = document.querySelector('.flip-overlay') || (function(){
                const el = document.createElement('div');
                el.className = 'flip-overlay';
                document.body.appendChild(el);
                return el;
            })();
            
            if (!isFlipped) {
                // Expanding
                overlay.classList.add('active');
                card.classList.add('expanded');
                overlay.onclick = function() {
                    overlay.classList.remove('active');
                    card.classList.remove('expanded');
                    card.classList.remove('flipped');
                };
            } else {
                // Collapsing
                overlay.classList.remove('active');
                card.classList.remove('expanded');
            }
        }, { passive: true });
        
        const inner = document.createElement('div');
        inner.className = 'flip-card-inner';
        
        const front = document.createElement('div');
        front.className = 'flip-card-front';
        
        // Create scrollable image container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'card-front-image-scroll';
        imgContainer.style.cssText = 'position: relative; width: 100%; height: 0; padding-bottom: 100%; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none;';
        imgContainer.style.setProperty('-ms-overflow-style', 'none');
        
        const imgWrapper = document.createElement('div');
        imgWrapper.style.cssText = 'position: absolute; top: 0; left: 0; width: auto; height: 100%; display: flex;';
        
        // Add image1 if it exists
        if (listing.image1) {
            const img1 = document.createElement('img');
            img1.src = listing.image1;
            img1.style.cssText = 'position: relative; width: 100%; min-width: 100%; max-width: 100%; height: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; border-radius: 24px; flex-shrink: 0; scroll-snap-align: start;';
            img1.onerror = function() {
                this.src = FALLBACK_IMG;
            };
            imgWrapper.appendChild(img1);
        }
        
        // Add image2 if it exists
        if (listing.image2) {
            const img2 = document.createElement('img');
            img2.src = listing.image2;
            img2.style.cssText = 'position: relative; width: 100%; min-width: 100%; max-width: 100%; height: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; border-radius: 24px; flex-shrink: 0; scroll-snap-align: start;';
            img2.onerror = function() {
                this.src = FALLBACK_IMG;
            };
            imgWrapper.appendChild(img2);
        }
        
        // If no images, add fallback
        if (!listing.image1 && !listing.image2) {
            const img = document.createElement('img');
            img.src = FALLBACK_IMG;
            img.style.cssText = 'position: relative; width: 100%; min-width: 100%; max-width: 100%; height: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; border-radius: 24px; flex-shrink: 0; scroll-snap-align: start;';
            imgWrapper.appendChild(img);
        }
        
        // Set wrapper and image widths to accommodate all images side by side
        const imageCount = (listing.image1 ? 1 : 0) + (listing.image2 ? 1 : 0);
        if (imageCount > 1) {
            // Wait for container to have dimensions, then set wrapper and image widths
            setTimeout(function() {
                const containerWidth = imgContainer.offsetWidth || imgContainer.clientWidth;
                if (containerWidth > 0) {
                    imgWrapper.style.width = (containerWidth * imageCount) + 'px';
                    // Set each image to be exactly the container width
                    const images = imgWrapper.querySelectorAll('img');
                    images.forEach(function(img) {
                        img.style.width = containerWidth + 'px';
                        img.style.minWidth = containerWidth + 'px';
                        img.style.maxWidth = containerWidth + 'px';
                    });
                }
            }, 10);
        }
        
        imgContainer.appendChild(imgWrapper);
        front.appendChild(imgContainer);
        
        // Add scroll arrow if there are multiple images (append to front, position dynamically)
        if (imageCount > 1) {
            let currentIndex = 0;
            const totalImages = imageCount;
            
            // Right arrow (loops infinitely)
            const rightArrow = document.createElement('div');
            rightArrow.className = 'scroll-arrow scroll-arrow-right';
            
            rightArrow.addEventListener('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % totalImages;
                // Get the container width at click time
                const containerWidth = imgContainer.offsetWidth || imgContainer.clientWidth;
                imgContainer.scrollTo({ left: currentIndex * containerWidth, behavior: 'smooth' });
            });
            
            // Position arrow at center of image (which is square, so height = width)
            setTimeout(function() {
                const containerWidth = imgContainer.offsetWidth || imgContainer.clientWidth;
                if (containerWidth > 0) {
                    // Center vertically in the square image (half the width)
                    rightArrow.style.top = (containerWidth / 2) + 'px';
                    rightArrow.style.transform = 'translateY(-50%)';
                }
            }, 10);
            
            front.appendChild(rightArrow);
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'padding: 20px 20px 20px 0; margin: 0;';
        // Fix encoding issues before displaying
        const fixedName = fixEncoding(listing.name);
        const fixedType = fixEncoding(listing.type);
        const fixedArea = fixEncoding(listing.area);
        const fixedDescription = fixEncoding(listing.description);
        
        contentDiv.innerHTML = 
            '<h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; color: var(--text-primary); line-height: 1.2;">' + escapeHtml(fixedName) + '</h3>' +
            '<div style="display: flex; gap: 8px; margin-bottom: 10px;">' +
            '<span class="badge-type ' + getIconClass(listing.type) + '" data-type="' + escapeHtml(listing.type) + '" onclick="filterByBadge(event, \'type\', \'' + escapeHtml(listing.type) + '\')">' + escapeHtml(fixedType) + '</span>' +
            '<span class="badge-area" data-area="' + escapeHtml(listing.area) + '" onclick="filterByBadge(event, \'area\', \'' + escapeHtml(listing.area) + '\')">' + escapeHtml(fixedArea) + '</span>' +
            '</div>' +
            '<p style="font-size: 14px; color: var(--text-secondary); line-height: 1.5;">' + escapeHtml(fixedDescription) + '</p>';
        front.appendChild(contentDiv);
        
        const back = document.createElement('div');
        back.className = 'flip-card-back';
        
        // Build amenities HTML if available
        let amenitiesHTML = '';
        if (listing.amenities && listing.amenities.length > 0) {
            amenitiesHTML = 
                '<div style="margin-top: 15px; padding-top: 15px; padding-bottom: 20px; border-top: 1px solid var(--border-color);">' +
                '<div style="font-size: 11px; font-weight: 700; color: var(--text-secondary); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px;">Amenities</div>' +
                '<div style="display: flex; flex-wrap: wrap; gap: 6px;">' +
                listing.amenities.map(function(amenity) {
                    return '<span class="amenity" onclick="filterByAmenity(event, \'' + amenity + '\')" style="cursor: pointer;">' + amenity + '</span>';
                }).join('') +
                '</div>' +
                '</div>';
        }
        
        back.innerHTML = 
            '<div class="back-content" style="padding: 30px 30px 50px 30px; display: flex; flex-direction: column; min-height: 100%;">' +
            '<h3 class="back-title" style="font-size: 26px; margin-bottom: 15px; color: var(--text-primary); font-weight: 700; line-height: 1.2;">' + escapeHtml(fixEncoding(listing.name)) + '</h3>' +
            (listing.image1 || listing.image2 ? '<div class="two-up">' +
                (listing.image1 ? '<img src="' + listing.image1 + '" onerror="this.onerror=null; this.src=FALLBACK_IMG;">' : '') +
                (listing.image2 ? '<img src="' + listing.image2 + '" onerror="this.onerror=null; this.src=FALLBACK_IMG;">' : '') +
            '</div>' : '') +
            '<div class="back-body">' +
            '<div style="display: flex; gap: 8px; margin-bottom: 15px; flex-wrap: wrap;">' +
            '<span class="badge-type ' + getIconClass(listing.type) + '" onclick="filterByBadge(event, \'type\', \'' + listing.type + '\')">' + listing.type + '</span>' +
            '<span class="badge-area" onclick="filterByBadge(event, \'area\', \'' + listing.area + '\')">' + listing.area + '</span>' +
            (listing.featured ? '<span class="badge-featured" onclick="filterByBadge(event, \'featured\', \'true\')">Featured</span>' : '') +
            '</div>' +
            '<p style="font-size: 13px; color: var(--text-primary); line-height: 1.4; margin-bottom: 15px;">' + escapeHtml(fixEncoding(listing.description)) + '</p>' +
            amenitiesHTML +
            '<div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 12px;">' +
            '<div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-secondary);">' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; flex-shrink: 0; color: #D65052;">' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />' +
            '</svg>' +
            '<span style="line-height: 1.5;">' + escapeHtml(fixEncoding(listing.address)) + '</span>' +
            '</div>' +
            (listing.phone ? 
            '<div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-secondary);">' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; flex-shrink: 0; color: var(--theme-primary);">' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />' +
            '</svg>' +
            '<a href="tel:' + listing.phone.replace(/[^0-9+]/g, '') + '" style="color: var(--text-secondary); text-decoration: none;" onclick="event.stopPropagation();">' + listing.phone + '</a>' +
            '</div>' : '') +
            '<a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(listing.address) + '" target="_blank" style="margin-top: 8px; background: #ffffff; color: var(--theme-primary); padding: 14px; text-align: center; border-radius: 12px; text-decoration: none; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 2px 8px var(--theme-primary-light); border: 2px solid var(--theme-primary); transition: all 0.3s;" onclick="event.stopPropagation();" onmouseover="this.style.background=\'#f7faf9\';" onmouseout="this.style.background=\'#ffffff\';">' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />' +
            '</svg>' +
            'Get Directions' +
            '</a>' +
            '<a href="' + listing.website + '" target="_blank" style="margin-top: 8px; background: linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-primary-hover) 100%); color: white; padding: 14px; text-align: center; border-radius: 12px; text-decoration: none; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 2px 8px var(--theme-primary-light); transition: all 0.3s;" onclick="event.stopPropagation();" onmouseover="this.style.background=\'linear-gradient(135deg, var(--theme-primary-hover) 0%, var(--theme-primary) 100%)\'; this.style.boxShadow=\'0 4px 12px var(--theme-primary-light)\'; this.style.transform=\'translateY(-2px)\';" onmouseout="this.style.background=\'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-primary-hover) 100%)\'; this.style.boxShadow=\'0 2px 8px var(--theme-primary-light)\'; this.style.transform=\'translateY(0)\';">' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />' +
            '</svg>' +
            'View Website' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>';
        
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        grid.appendChild(card);
    });
    
    // Adjust title sizes based on actual card width
    function adjustTitleSizes() {
        const cards = document.querySelectorAll('.flip-card');
        cards.forEach(function(card) {
            const title = card.querySelector('.flip-card-front h3');
            if (title) {
                const cardWidth = card.offsetWidth;
                let fontSize = 16; // Base size for smallest cards
                
                if (cardWidth >= 350) {
                    fontSize = 22;
                } else if (cardWidth >= 300) {
                    fontSize = 20;
                } else if (cardWidth >= 260) {
                    fontSize = 18;
                } else if (cardWidth >= 220) {
                    fontSize = 17;
                }
                
                title.style.fontSize = fontSize + 'px';
                
                // Check if title is single line and add class for description line count
                setTimeout(function() {
                    const titleHeight = title.offsetHeight;
                    const lineHeight = parseFloat(window.getComputedStyle(title).lineHeight) || 1.2 * fontSize;
                    const isSingleLine = titleHeight <= lineHeight * 1.5; // Allow small margin for rounding
                    
                    if (isSingleLine) {
                        card.classList.add('title-single-line');
                    } else {
                        card.classList.remove('title-single-line');
                    }
                }, 10);
            }
        });
    }
    
    // Adjust sizes after render
    setTimeout(adjustTitleSizes, 100);
    
    // Recalculate on window resize (debounced) - only trigger on actual resize, not scroll
    if (!window.titleSizeResizeHandler) {
        let resizeTimeout;
        let lastWindowWidth = window.innerWidth;
        let lastWindowHeight = window.innerHeight;
        window.titleSizeResizeHandler = function() {
            // Only recalculate if window dimensions actually changed
            const currentWidth = window.innerWidth;
            const currentHeight = window.innerHeight;
            if (currentWidth === lastWindowWidth && currentHeight === lastWindowHeight) {
                return; // No actual resize, skip recalculation
            }
            lastWindowWidth = currentWidth;
            lastWindowHeight = currentHeight;
            
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                adjustTitleSizes();
                adjustImageWidths();
            }, 200);
        };
        window.addEventListener('resize', window.titleSizeResizeHandler);
    }
}

// Recalculate image widths for all cards with multiple images
function adjustImageWidths() {
    const allCards = document.querySelectorAll('.flip-card');
    
    allCards.forEach(function(card) {
        const imgContainer = card.querySelector('.card-front-image-scroll');
        if (!imgContainer) return;
        
        const imgWrapper = imgContainer.querySelector('div');
        if (!imgWrapper) return;
        
        const images = imgWrapper.querySelectorAll('img');
        const imageCount = images.length;
        
        if (imageCount > 1) {
            const containerWidth = imgContainer.offsetWidth || imgContainer.clientWidth;
            if (containerWidth > 0) {
                const expectedWrapperWidth = containerWidth * imageCount;
                const expectedImageWidth = containerWidth;
                
                // Only update if dimensions have actually changed
                const currentWrapperWidth = parseFloat(imgWrapper.style.width) || 0;
                const firstImg = images[0];
                const currentImageWidth = parseFloat(firstImg.style.width) || 0;
                
                if (Math.abs(currentWrapperWidth - expectedWrapperWidth) > 1 || 
                    Math.abs(currentImageWidth - expectedImageWidth) > 1) {
                    // Update wrapper width
                    imgWrapper.style.width = expectedWrapperWidth + 'px';
                    
                    // Update each image width
                    images.forEach(function(img) {
                        img.style.width = expectedImageWidth + 'px';
                        img.style.minWidth = expectedImageWidth + 'px';
                        img.style.maxWidth = expectedImageWidth + 'px';
                    });
                    
                    // Update arrow position
                    const arrow = card.querySelector('.scroll-arrow');
                    if (arrow) {
                        arrow.style.top = (containerWidth / 2) + 'px';
                        arrow.style.transform = 'translateY(-50%)';
                    }
                }
            }
        }
    });
}

// Mobile filter handlers
function handleMobileTypeFilter() {
    const mobileTypeFilter = document.getElementById('mobileTypeFilter');
    const value = mobileTypeFilter ? mobileTypeFilter.value : '';
    // Mobile dropdown is single-select, so set as single-item array or empty
    currentTypeFilter = value ? [value] : [];
    
    // Update sidebar buttons if visible
    document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (currentTypeFilter.includes(btn.dataset.type)) {
            btn.classList.add('active');
        } else if (!value && btn.dataset.type === '') {
            btn.classList.add('active');
        }
    });
    
    filterPreview();
}

function handleMobileAreaFilter() {
    const mobileAreaFilter = document.getElementById('mobileAreaFilter');
    const areaFilter = document.getElementById('previewAreaFilter');
    const value = mobileAreaFilter ? mobileAreaFilter.value : '';
    
    if (areaFilter) areaFilter.value = value;
    filterPreview();
}

function handleMobileAmenityFilter() {
    const mobileAmenityFilter = document.getElementById('mobileAmenityFilter');
    const amenityFilter = document.getElementById('previewAmenityFilter');
    const value = mobileAmenityFilter ? mobileAmenityFilter.value : '';
    
    if (amenityFilter) amenityFilter.value = value;
    filterPreview();
}

// Sync mobile filters when sidebar filters change
function syncMobileFilters() {
    const mobileTypeFilter = document.getElementById('mobileTypeFilter');
    const mobileAreaFilter = document.getElementById('mobileAreaFilter');
    const mobileAmenityFilter = document.getElementById('mobileAmenityFilter');
    const areaFilter = document.getElementById('previewAreaFilter');
    const amenityFilter = document.getElementById('previewAmenityFilter');
    
    // For mobile dropdown, show first selected type or empty
    if (mobileTypeFilter) mobileTypeFilter.value = currentTypeFilter.length > 0 ? currentTypeFilter[0] : '';
    if (mobileAreaFilter && areaFilter) mobileAreaFilter.value = areaFilter.value || '';
    if (mobileAmenityFilter && amenityFilter) mobileAmenityFilter.value = amenityFilter.value || '';
}

// Map functionality
let map = null;
let markers = [];
let markerCluster = null;
let mapVisible = true;
let infoWindow = null;

function initMap() {
    if (!map) {
        // Initialize Google Map centered on Nelson County, VA
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 37.8, lng: -79.0 },
            zoom: 10,
            mapTypeControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            streetViewControl: false,
            fullscreenControl: false,
            keyboardShortcuts: false,
            gestureHandling: 'cooperative',
            styles: [
                // Hide all points of interest
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "poi.business",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "poi",
                    stylers: [{ visibility: "off" }]
                },
                // Hide transit
                {
                    featureType: "transit",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "transit.station",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "transit.line",
                    stylers: [{ visibility: "off" }]
                },
                // Simplify administrative boundaries - hide fine gray lines
                {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "administrative.locality",
                    elementType: "labels",
                    stylers: [{ visibility: "simplified" }]
                },
                {
                    featureType: "administrative.neighborhood",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "administrative.land_parcel",
                    stylers: [{ visibility: "off" }]
                },
                // Hide minor/local roads and their labels
                {
                    featureType: "road.local",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "road.local",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ visibility: "simplified" }]
                },
                // Hide water labels
                {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "water",
                    elementType: "labels.text",
                    stylers: [{ visibility: "off" }]
                },
                // Natural features
                {
                    featureType: "landscape.natural",
                    stylers: [
                        { color: "#E1F3C9" }
                    ]
                },
                {
                    featureType: "water",
                    stylers: [
                        { color: "#CAE8F2" }
                    ]
                }
            ]
        });
        
        // Apply rounded corners to zoom controls after map loads
        setTimeout(() => {
            const mapContainer = document.getElementById('map');
            if (mapContainer) {
                // Find all buttons in the map (zoom controls)
                const buttons = mapContainer.querySelectorAll('button');
                buttons.forEach(button => {
                    if (button.getAttribute('aria-label') && button.getAttribute('aria-label').includes('Zoom')) {
                        button.style.borderRadius = '16px';
                        button.style.borderTopLeftRadius = '16px';
                        button.style.borderTopRightRadius = '16px';
                        button.style.borderBottomLeftRadius = '16px';
                        button.style.borderBottomRightRadius = '16px';
                    }
                });
                
                // Find the zoom control container and round it
                const zoomControls = mapContainer.querySelectorAll('[aria-label*="Zoom"]');
                zoomControls.forEach(control => {
                    const parent = control.closest('div[style*="position"]');
                    if (parent) {
                        parent.style.borderRadius = '16px';
                        parent.style.overflow = 'hidden';
                    }
                });
            }
        }, 500);
        
        // Also apply on map idle event (when map is fully loaded)
        map.addListener('idle', () => {
            const mapContainer = document.getElementById('map');
            if (mapContainer) {
                const buttons = mapContainer.querySelectorAll('button');
                buttons.forEach(button => {
                    if (button.getAttribute('aria-label') && button.getAttribute('aria-label').includes('Zoom')) {
                        button.style.borderRadius = '16px';
                    }
                    // Round all map control buttons
                    const parent = button.parentElement;
                    if (parent && parent.style.position === 'absolute') {
                        parent.style.borderRadius = '16px';
                        parent.style.overflow = 'hidden';
                    }
                });
            }
        });
        
        // Create single info window to reuse
        infoWindow = new google.maps.InfoWindow();
    }
}

function updateMapMarkers(listings) {
    if (!map) return;
    
    // Clear existing clusterer if it exists
    if (markerCluster) {
        markerCluster.clearMarkers();
        markerCluster = null;
    }
    
    // Clear existing markers
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
    
    // Create bounds
    var bounds = new google.maps.LatLngBounds();
    var markersToAdd = [];
    var geocodeCount = 0;
    var totalListings = listings.length;
    
    // Add markers for each listing
    listings.forEach(function(listing) {
        geocodeAddress(listing.address, function(lat, lng) {
            if (lat && lng) {
                var position = { lat: lat, lng: lng };
                
                // Create custom marker icon (SVG)
                var markerIcon = {
                    path: 'M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z',
                    fillColor: '#E3795C',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 2,
                    scale: 1.5,
                    anchor: new google.maps.Point(12, 22)
                };
                
                // Create marker without adding to map (clusterer will handle that)
                var marker = new google.maps.Marker({
                    position: position,
                    icon: markerIcon,
                    title: fixEncoding(listing.name),
                    animation: google.maps.Animation.DROP
                });
                
                // Create popup content
                var imageHtml = (listing.image1)
                    ? '<img src="' + listing.image1 + '" onerror="this.onerror=null; this.src=FALLBACK_IMG;" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; display: block; margin: 0; padding: 0;">'
                    : '<img src="' + FALLBACK_IMG + '" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; display: block; margin: 0; padding: 0;">';
                
                var popupContent = 
                    '<div style="padding: 20px 16px; margin: 0; line-height: normal;">' +
                    '<div class="map-popup-title">' + escapeHtml(fixEncoding(listing.name)) + '</div>' +
                    '<div class="map-popup-badges">' +
                    '<span class="badge badge-type ' + getIconClass(listing.type) + '" onclick="filterByBadge(event, \'type\', \'' + listing.type.replace(/'/g, "\\'") + '\'); google.maps.event.trigger(map, \'click\');">' + listing.type + '</span>' +
                    '<span class="badge badge-area" onclick="filterByBadge(event, \'area\', \'' + listing.area.replace(/'/g, "\\'") + '\'); google.maps.event.trigger(map, \'click\');">' + listing.area + '</span>' +
                    '</div>' +
                    imageHtml +
                    '<div class="map-popup-desc" style="margin-top: 12px;">' + escapeHtml(fixEncoding(listing.description).substring(0, 100)) + '...</div>' +
                    '<button class="map-popup-btn" style="width: 100%; margin-top: 16px; background: #2d6a4f !important; color: white !important; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: visible; white-space: nowrap;" onclick="filterByListingName(\'' + escapeHtml(fixEncoding(listing.name)).replace(/'/g, "\\'") + '\'); google.maps.event.trigger(map, \'click\');">View Details</button>' +
                    '</div>';
                
                // Add click listener to show info window
                marker.addListener('click', function() {
                    infoWindow.setContent(popupContent);
                    infoWindow.open(map, marker);
                });
                
                markers.push(marker);
                markersToAdd.push(marker);
                bounds.extend(position);
            }
            
            geocodeCount++;
            // When all geocoding is done, create the clusterer
            if (geocodeCount === totalListings) {
                // Check if MarkerClusterer library is available
                if (typeof MarkerClusterer !== 'undefined') {
                    // Create marker clusterer with the @googlemaps/js-marker-clusterer library
                    markerCluster = new MarkerClusterer({ 
                        map: map, 
                        markers: markersToAdd 
                    });
                } else {
                    // Fallback: add markers directly to map if clusterer not available
                    markersToAdd.forEach(function(marker) {
                        marker.setMap(map);
                    });
                }
                
                // Fit bounds with animation if there are markers
                if (markers.length > 0) {
                    setTimeout(function() {
                        map.fitBounds(bounds);
                        
                        // Limit max zoom
                        var listener = google.maps.event.addListener(map, "idle", function() {
                            if (map.getZoom() > 13) map.setZoom(13);
                            google.maps.event.removeListener(listener);
                        });
                    }, 500);
                }
            }
        });
    });
}

// Simple geocoding function (uses approximate coordinates for demo)
function geocodeAddress(address, callback) {
    // Approximate coordinates for Nelson County area locations
    var locations = {
        'Roseland': [37.8167, -79.0833],
        'Montebello': [37.8500, -79.1333],
        'Wintergreen': [37.9167, -79.0000],
        'Afton': [38.0333, -78.8333],
        'Lovingston': [37.7667, -78.8667],
        'Nellysford': [37.9000, -78.8833]
    };
    
    // Try to match address to known locations
    for (var loc in locations) {
        if (address.includes(loc)) {
            var coords = locations[loc];
            // Add small random offset for multiple locations in same area
            var lat = coords[0] + (Math.random() - 0.5) * 0.02;
            var lng = coords[1] + (Math.random() - 0.5) * 0.02;
            callback(lat, lng);
            return;
        }
    }
    
    // Default to center of Nelson County with random offset
    callback(37.8 + (Math.random() - 0.5) * 0.1, -79.0 + (Math.random() - 0.5) * 0.1);
}

function toggleMap() {
    var container = document.getElementById('mapContainer');
    var toggleIcon = document.getElementById('mapToggleIcon');
    
    if (mapVisible) {
        container.classList.add('map-collapsed');
        // Change to plus icon
        toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5"></path>';
        mapVisible = false;
    } else {
        container.classList.remove('map-collapsed');
        // Change to X icon
        toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>';
        mapVisible = true;
        // Trigger resize to fix display issues
        setTimeout(function() {
            if (map) google.maps.event.trigger(map, 'resize');
        }, 100);
    }
}

var sidebarVisible = true;

function toggleTypeFilters() {
    const expanded = document.querySelector('.type-filters-expanded');
    const seeMoreText = document.querySelector('.see-more-text');
    const seeLessText = document.querySelector('.see-less-text');
    
    if (expanded.style.display === 'none' || !expanded.style.display) {
        expanded.style.display = 'block';
        seeMoreText.style.display = 'none';
        seeLessText.style.display = 'inline';
    } else {
        expanded.style.display = 'none';
        seeMoreText.style.display = 'inline';
        seeLessText.style.display = 'none';
    }
}

function toggleSidebar() {
    var sidebar = document.querySelector('.preview-sidebar');
    var toggleIcon = document.getElementById('sidebarToggleIcon');
    
    if (sidebarVisible) {
        sidebar.classList.add('collapsed');
        sidebarVisible = false;
    } else {
        sidebar.classList.remove('collapsed');
        // Change back to X icon when opened
        toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>';
        sidebarVisible = true;
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    initMap();
    
    // Type filter buttons - allow multiple selections (toggle on/off)
    document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
        // Add clicking class on mousedown for visual feedback
        btn.addEventListener('mousedown', function() {
            this.classList.add('clicking');
        });
        // Remove clicking class on mouseup or mouseleave
        btn.addEventListener('mouseup', function() {
            this.classList.remove('clicking');
        });
        btn.addEventListener('mouseleave', function() {
            this.classList.remove('clicking');
        });
        btn.addEventListener('click', function() {
            // Remove clicking class after click
            this.classList.remove('clicking');
            const filterValue = this.dataset.type;
            
            // Special handling for "All Types" button (empty data-type)
            if (filterValue === '') {
                // Clear all selections and activate only "All Types"
                currentTypeFilter = [];
                document.querySelectorAll('.type-filter-btn').forEach(function(b) {
                    b.classList.remove('active');
                });
                this.classList.add('active');
            } else {
                // Toggle this type in the array
                const index = currentTypeFilter.indexOf(filterValue);
                if (index > -1) {
                    // Remove from array (deselect)
                    currentTypeFilter.splice(index, 1);
                    this.classList.remove('active');
                } else {
                    // Add to array (select)
                    currentTypeFilter.push(filterValue);
                    this.classList.add('active');
                }
                
                // If no types selected, activate "All Types" button
                if (currentTypeFilter.length === 0) {
                    document.querySelectorAll('.type-filter-btn').forEach(function(b) {
                        if (b.dataset.type === '') {
                            b.classList.add('active');
                        }
                    });
                } else {
                    // Ensure "All Types" button is not active when specific types are selected
                    document.querySelectorAll('.type-filter-btn').forEach(function(b) {
                        if (b.dataset.type === '') {
                            b.classList.remove('active');
                        }
                    });
                }
            }
            
            filterPreview();
        });
    });
});
