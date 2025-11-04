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
      "Roseland"
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

// Fetch adventure data from GitHub
const GITHUB_JSON_URL = 'https://raw.githubusercontent.com/ernestdarrow/nelsoncounty/main/data/config.json';

console.log('🔍 Adventure Directory Loading...');
console.log('📍 GitHub URL:', GITHUB_JSON_URL);
console.log('💾 Fallback data available:', fallbackData ? 'YES' : 'NO');
console.log('📦 Fallback listings count:', fallbackData?.listings?.length || 0);

// Global data variable
let data = null;
let currentTypeFilter = '';
let currentFeaturedOnly = false;

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
fetch(GITHUB_JSON_URL)
    .then(response => {
        console.log('📡 GitHub Response Status:', response.status, response.statusText);
        if (!response.ok) {
            console.warn('⚠️ Could not fetch from GitHub (status ' + response.status + '), using embedded fallback data');
            return fallbackData;
        }
        console.log('✅ Successfully fetched from GitHub');
        return response.json();
    })
    .then(loadedData => {
        data = loadedData;
        console.log('✅ Adventure data loaded:', data);
        console.log('📊 Listings count:', data?.listings?.length || 0);
        renderPreview();
        
        // Handle URL parameters after data is loaded and rendered
        setTimeout(function() {
            handleUrlParameters();
        }, 100);
    })
    .catch(error => {
        console.error('❌ Error loading from GitHub:', error);
        console.warn('🔄 Falling back to embedded data');
        data = fallbackData;
        console.log('💾 Using fallback data with', data?.listings?.length || 0, 'listings');
        renderPreview();
        
        // Handle URL parameters after fallback data is loaded
        setTimeout(function() {
            handleUrlParameters();
        }, 100);
    });

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
        'Cabin': 'icon-cabin', 'Camping': 'icon-camping', 'Park': 'icon-park'
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
        currentTypeFilter = value;
        document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
            btn.classList.remove('active');
            if (btn.dataset.type === value) {
                btn.classList.add('active');
            }
        });
    } else if (filterType === 'area') {
        const areaFilter = document.getElementById('previewAreaFilter');
        if (areaFilter) areaFilter.value = value;
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
    if (amenityFilter) {
        amenityFilter.value = amenity;
    }
    
    filterPreview();
}

// Main filter function
function filterPreview() {
    if (!data) return;
    
    const searchInput = document.getElementById('previewSearchInput');
    const areaFilter = document.getElementById('previewAreaFilter');
    const amenityFilter = document.getElementById('previewAmenityFilter');
    
    const searchTerm = (searchInput ? searchInput.value : '').toLowerCase();
    const selectedArea = areaFilter ? areaFilter.value : '';
    const selectedAmenity = amenityFilter ? amenityFilter.value : '';
    
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
        
        const matchesType = !currentTypeFilter || listing.type === currentTypeFilter;
        const matchesArea = !selectedArea || listing.area === selectedArea;
        const matchesAmenity = !selectedAmenity || (listing.amenities && listing.amenities.includes(selectedAmenity));
        const matchesFeatured = !currentFeaturedOnly || !!listing.featured;
        
        return matchesSearch && matchesType && matchesArea && matchesAmenity && matchesFeatured;
    });
    
    // Show/hide clear button based on whether any filters are active
    const clearBtn = document.getElementById('clearFiltersBtn');
    const hasActiveFilters = searchTerm || currentTypeFilter || selectedArea || selectedAmenity || currentFeaturedOnly;
    if (clearBtn) {
        clearBtn.style.display = hasActiveFilters ? 'block' : 'none';
    }
    
    renderPreview(filtered);
}

// Clear all filters
function clearPreviewFilters() {
    const searchInput = document.getElementById('previewSearchInput');
    const areaFilter = document.getElementById('previewAreaFilter');
    const amenityFilter = document.getElementById('previewAmenityFilter');
    const clearBtn = document.getElementById('clearFiltersBtn');
    
    if (searchInput) searchInput.value = '';
    if (areaFilter) areaFilter.value = '';
    if (amenityFilter) amenityFilter.value = '';
    currentTypeFilter = '';
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
    currentTypeFilter = '';
    
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
    if (!data) return;
    
    const listings = filteredListings || data.listings;
    const grid = document.getElementById('previewGrid');
    if (!grid) return;
    
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
    
    // Update results count
    const countEl = document.getElementById('previewResultsCount');
    if (countEl) {
        countEl.textContent = 'Showing ' + listings.length + ' listing' + (listings.length !== 1 ? 's' : '');
    }
    
    // Update map markers
    updateMapMarkers(listings);
    
    // Render cards
    listings.forEach(function(listing) {
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
        imgContainer.style.cssText = 'position: relative; width: 100%; height: 200px; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none;';
        imgContainer.style.setProperty('-ms-overflow-style', 'none');
        
        const imgWrapper = document.createElement('div');
        imgWrapper.style.cssText = 'display: flex; width: auto; height: 100%;';
        
        // Add image1 if it exists
        if (listing.image1) {
            const img1 = document.createElement('img');
            img1.src = listing.image1;
            img1.style.cssText = 'min-width: 100%; width: 100%; height: 200px; object-fit: cover; flex-shrink: 0; scroll-snap-align: start; display: block;';
            img1.onerror = function() {
                this.src = FALLBACK_IMG;
            };
            imgWrapper.appendChild(img1);
        }
        
        // Add image2 if it exists
        if (listing.image2) {
            const img2 = document.createElement('img');
            img2.src = listing.image2;
            img2.style.cssText = 'min-width: 100%; width: 100%; height: 200px; object-fit: cover; flex-shrink: 0; scroll-snap-align: start; display: block;';
            img2.onerror = function() {
                this.src = FALLBACK_IMG;
            };
            imgWrapper.appendChild(img2);
        }
        
        // If no images, add fallback
        if (!listing.image1 && !listing.image2) {
            const img = document.createElement('img');
            img.src = FALLBACK_IMG;
            img.style.cssText = 'min-width: 100%; width: 100%; height: 200px; object-fit: cover; flex-shrink: 0; scroll-snap-align: start; display: block;';
            imgWrapper.appendChild(img);
        }
        
        imgContainer.appendChild(imgWrapper);
        front.appendChild(imgContainer);
        
        // Add scroll arrow if there are multiple images (append to front, outside scroll container)
        const imageCount = (listing.image1 ? 1 : 0) + (listing.image2 ? 1 : 0);
        if (imageCount > 1) {
            let currentIndex = 0;
            const totalImages = imageCount;
            
            // Right arrow (loops infinitely)
            const rightArrow = document.createElement('div');
            rightArrow.className = 'scroll-arrow scroll-arrow-right';
            
            rightArrow.addEventListener('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % totalImages;
                imgContainer.scrollTo({ left: currentIndex * imgContainer.offsetWidth, behavior: 'smooth' });
            });
            
            front.appendChild(rightArrow);
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'padding: 20px;';
        contentDiv.innerHTML = 
            '<h3 style="font-size: 20px; margin-bottom: 10px; color: var(--text-primary);">' + listing.name + '</h3>' +
            '<div style="display: flex; gap: 8px; margin-bottom: 10px;">' +
            '<span class="badge-type ' + getIconClass(listing.type) + '" data-type="' + listing.type + '" onclick="filterByBadge(event, \'type\', \'' + listing.type + '\')">' + listing.type + '</span>' +
            '<span class="badge-area" data-area="' + listing.area + '" onclick="filterByBadge(event, \'area\', \'' + listing.area + '\')">' + listing.area + '</span>' +
            '</div>' +
            '<p style="font-size: 14px; color: var(--text-secondary); line-height: 1.5;">' + listing.description + '</p>';
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
            '<div class="back-content" style="padding: 30px; height: 100%; display: flex; flex-direction: column; overflow-y: auto;">' +
            '<h3 class="back-title" style="font-size: 26px; margin-bottom: 15px; color: var(--text-primary); font-weight: 700; line-height: 1.2;">' + listing.name + '</h3>' +
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
            '<p style="font-size: 13px; color: var(--text-primary); line-height: 1.4; margin-bottom: 15px;">' + listing.description + '</p>' +
            amenitiesHTML +
            '<div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 12px;">' +
            '<div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-secondary);">' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; flex-shrink: 0; color: #D65052;">' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />' +
            '</svg>' +
            '<span style="line-height: 1.5;">' + listing.address + '</span>' +
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
            '<path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.382V5a2 2 0 012-2h10.382a2 2 0 011.894 1.316L20 9" />' +
            '<path stroke-linecap="round" stroke-linejoin="round" d="M16 12l-4 4m0 0l-4-4m4 4V8" />' +
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
}

// Map functionality
let map = null;
let markers = [];
let mapVisible = true;
let infoWindow = null;

function initMap() {
    if (!map) {
        // Initialize Google Map centered on Nelson County, VA
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 37.8, lng: -79.0 },
            zoom: 10,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
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
                    featureType: "transit",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "transit.station",
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
                    featureType: "road.local",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                },
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
        
        // Create single info window to reuse
        infoWindow = new google.maps.InfoWindow();
    }
}

function updateMapMarkers(listings) {
    if (!map) return;
    
    // Clear existing markers
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
    
    // Create bounds
    var bounds = new google.maps.LatLngBounds();
    
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
                
                // Create marker
                var marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: markerIcon,
                    title: listing.name,
                    animation: google.maps.Animation.DROP
                });
                
                // Create popup content
                var imageHtml = (listing.image1)
                    ? '<img src="' + listing.image1 + '" onerror="this.onerror=null; this.src=FALLBACK_IMG;" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; display: block; margin: 0; padding: 0;">'
                    : '<img src="' + FALLBACK_IMG + '" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; display: block; margin: 0; padding: 0;">';
                
                var popupContent = 
                    '<div style="padding: 20px 16px; margin: 0; line-height: normal;">' +
                    '<div class="map-popup-title">' + listing.name + '</div>' +
                    '<div class="map-popup-badges">' +
                    '<span class="badge badge-type ' + getIconClass(listing.type) + '" onclick="filterByBadge(event, \'type\', \'' + listing.type.replace(/'/g, "\\'") + '\'); google.maps.event.trigger(map, \'click\');">' + listing.type + '</span>' +
                    '<span class="badge badge-area" onclick="filterByBadge(event, \'area\', \'' + listing.area.replace(/'/g, "\\'") + '\'); google.maps.event.trigger(map, \'click\');">' + listing.area + '</span>' +
                    '</div>' +
                    imageHtml +
                    '<div class="map-popup-desc" style="margin-top: 12px;">' + listing.description.substring(0, 100) + '...</div>' +
                    '<button class="map-popup-btn" style="width: 100%; margin-top: 16px; background: #2d6a4f !important; color: white !important; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: visible; white-space: nowrap;" onclick="filterByListingName(\'' + listing.name.replace(/'/g, "\\'") + '\'); google.maps.event.trigger(map, \'click\');">View Details</button>' +
                    '</div>';
                
                // Add click listener to show info window
                marker.addListener('click', function() {
                    infoWindow.setContent(popupContent);
                    infoWindow.open(map, marker);
                });
                
                markers.push(marker);
                bounds.extend(position);
            }
        });
    });
    
    // Fit bounds with animation if there are markers
    if (listings.length > 0) {
        setTimeout(function() {
            if (markers.length > 0) {
                map.fitBounds(bounds);
                
                // Limit max zoom
                var listener = google.maps.event.addListener(map, "idle", function() {
                    if (map.getZoom() > 13) map.setZoom(13);
                    google.maps.event.removeListener(listener);
                });
            }
        }, 300);
    }
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
    
    // Type filter buttons - allow toggling off by clicking same button
    document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const isCurrentlyActive = this.classList.contains('active');
            const filterValue = this.dataset.type;
            
            document.querySelectorAll('.type-filter-btn').forEach(function(b) {
                b.classList.remove('active');
            });
            
            if (!isCurrentlyActive) {
                this.classList.add('active');
                currentTypeFilter = filterValue;
            } else {
                currentTypeFilter = '';
                // Activate the "All" button
                document.querySelectorAll('.type-filter-btn').forEach(function(b) {
                    if (b.dataset.type === '') {
                        b.classList.add('active');
                    }
                });
            }
            
            filterPreview();
        });
    });
});
