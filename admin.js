const initialData = 
{
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
      "amenities": ["Pet-Friendly", "Outdoor Seating", "Live Music", "Food Available"],
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
      "amenities": ["Free", "Kid-Friendly", "Scenic Views", "Photography"],
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
      "amenities": ["Kid-Friendly", "Seasonal", "Wheelchair Accessible", "Lessons Available"],
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
      "amenities": ["Pet-Friendly", "Outdoor Seating", "Food Available", "Live Music"],
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
      "amenities": ["Kid-Friendly", "Seasonal", "Wheelchair Accessible", "Lifeguards"],
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
      "amenities": ["Free", "Kid-Friendly", "Pet-Friendly", "Wheelchair Accessible", "Biking"],
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
      "amenities": ["Kid-Friendly", "Pet-Friendly", "Outdoor Seating", "Food Available", "Live Music"],
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
      "amenities": ["Seasonal", "Pro Shop", "Lessons Available", "Cart Rental"],
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
      "amenities": ["Free", "Scenic Views", "Photography", "Appalachian Trail"],
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
      "amenities": ["Pet-Friendly", "Outdoor Seating", "Tours Available", "Events"],
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
      "amenities": ["Pet-Friendly", "Outdoor Seating", "Live Music", "Kid-Friendly", "Tours Available", "Food Available"],
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
      "amenities": ["Free", "Scenic Views", "Photography", "Kid-Friendly"],
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
      "amenities": ["Kid-Friendly", "Tours Available", "Events", "Seasonal", "Free"],
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
      "amenities": ["Tours Available", "Photography", "Scenic Views", "Wheelchair Accessible"],
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
      "amenities": ["Free", "Pet-Friendly", "Kid-Friendly", "Scenic Views", "Seasonal"],
      "featured": false
    }
  ],
  "filterOptions": {
    "types": ["Brewery", "Winery", "Cidery", "Hiking", "Outdoor", "Indoor Activity", "Attraction", "Farm & Orchard"],
    "areas": ["Afton", "Wintergreen", "Lovingston", "Nellysford", "Montebello", "Arrington", "Roseland"],
    "amenities": ["Kid-Friendly", "Pet-Friendly", "Wheelchair Accessible", "Free", "Seasonal", "Outdoor Seating", "Food Available", "Live Music", "Tours Available", "Events", "Photography", "Scenic Views", "Biking", "Appalachian Trail", "Pro Shop", "Lessons Available", "Cart Rental", "Lifeguards"]
  }
}
;

// =================================
// GOOGLE SHEETS CONFIGURATION
// =================================
        // Step 1: Get your Google Sheet's published CSV URL (optional - used as fallback)
        // File → Share → Publish to web → CSV → Copy URL
        const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?gid=0&single=true&output=csv';
        
        // Step 2: Your Google Apps Script Web App URL (REQUIRED for read/write)
        // This URL is already configured and working!
        const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNH8P5P8iorzRTTx3FpVbYPFNBo1qUWIU630v7ymLJWypvJpSEfPZC5nfxJpjjwjF-Jg/exec';
        
        // Initialize data with initialData (will be updated from Google Sheets on load)
        let data = JSON.parse(JSON.stringify(initialData));
        
        // Load saved filterOptions from localStorage if available
        const savedFilterOptions = localStorage.getItem('nelsonCounty_filterOptions');
        if (savedFilterOptions) {
            try {
                data.filterOptions = JSON.parse(savedFilterOptions);
            } catch (e) {
                console.error('Error loading saved filterOptions:', e);
            }
        }
        
        let deleteConfirmId = null;
        let deleteConfirmTimeout = null;
        
        // Helper function to parse CSV text into array of objects
        function parseCSV(csvText) {
            const rows = [];
            let currentRow = '';
            let inQuotes = false;
            
            for (let i = 0; i < csvText.length; i++) {
                const char = csvText[i];
                const nextChar = csvText[i + 1];
                
                if (char === '"') {
                    if (inQuotes && nextChar === '"') {
                        currentRow += '"';
                        i++;
                    } else {
                        inQuotes = !inQuotes;
                    }
                } else if (char === '\n' && !inQuotes) {
                    if (currentRow.trim()) rows.push(currentRow);
                    currentRow = '';
                } else {
                    currentRow += char;
                }
            }
            if (currentRow.trim()) rows.push(currentRow);
            
            if (rows.length === 0) return [];
            
            const headers = rows[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
            const dataRows = [];
            
            for (let i = 1; i < rows.length; i++) {
                const values = [];
                let current = '';
                let inQuotes = false;
                
                for (let j = 0; j < rows[i].length; j++) {
                    const char = rows[i][j];
                    if (char === '"') {
                        if (inQuotes && rows[i][j + 1] === '"') {
                            current += '"';
                            j++;
                        } else {
                            inQuotes = !inQuotes;
                        }
                    } else if (char === ',' && !inQuotes) {
                        values.push(current.trim().replace(/^"|"$/g, ''));
                        current = '';
                    } else {
                        current += char;
                    }
                }
                values.push(current.trim().replace(/^"|"$/g, ''));
                
                if (values[0]) { // Only add rows with a title/ID
                    const row = {};
                    headers.forEach((header, idx) => {
                        row[header] = values[idx] || '';
                    });
                    dataRows.push(row);
                }
            }
            
            return { headers, dataRows };
        }
        
        // Map CSV row to listing object
        function mapCSVRowToListing(row, headers) {
            const listing = {};
            
            headers.forEach(header => {
                const value = row[header] || '';
                const headerLower = header.toLowerCase().trim();
                
                if (headerLower === 'id' || headerLower === 'slug') {
                    listing.id = String(value || '');
                } else if (headerLower === 'title' || headerLower === 'name') {
                    listing.name = String(value || '');
                } else if (headerLower === 'type') {
                    listing.type = String(value || '');
                } else if (headerLower === 'area') {
                    listing.area = String(value || '');
                } else if (headerLower === 'description') {
                    listing.description = String(value || '');
                } else if (headerLower === 'photo' || headerLower === 'image1' || headerLower === 'image 1') {
                    listing.image1 = String(value || '');
                } else if (headerLower === 'image2' || headerLower === 'image 2') {
                    listing.image2 = String(value || '');
                } else if (headerLower === 'external website' || headerLower === 'website' || headerLower === 'url') {
                    listing.website = String(value || '');
                } else if (headerLower === 'phone') {
                    listing.phone = String(value || '');
                } else if (headerLower === 'address') {
                    listing.address = String(value || '');
                } else if (headerLower === 'amenities') {
                    const amenityStr = String(value || '');
                    listing.amenities = amenityStr.split(/[,;]/).map(a => a.trim()).filter(a => a);
                } else if (headerLower === 'featured') {
                    const featuredVal = String(value || '').toLowerCase();
                    listing.featured = featuredVal === 'true' || featuredVal === 'yes' || featuredVal === '1';
                }
            });
            
            // Generate ID if missing
            if (!listing.id && listing.name) {
                listing.id = listing.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            }
            
            return listing;
        }
        
        // Update sync status UI
        function updateSyncStatus(success, message) {
            const statusBadge = document.getElementById('sheetsStatusBadge');
            const statusIcon = document.getElementById('sheetsStatusIcon');
            const statusText = document.getElementById('sheetsStatusText');
            const actionStatus = document.getElementById('sheetsActionStatus');
            const lastSync = document.getElementById('lastSyncTime');
            
            if (success) {
                statusBadge.style.background = '#34a853';
                statusIcon.textContent = '✓';
                statusText.textContent = 'Connected';
                lastSync.textContent = new Date().toLocaleTimeString();
            } else {
                statusBadge.style.background = '#ea4335';
                statusIcon.textContent = '✗';
                statusText.textContent = 'Error';
            }
            
            if (message) {
                actionStatus.textContent = message;
                setTimeout(() => {
                    actionStatus.textContent = '';
                }, 3000);
            }
        }
        
        // Load data from Google Sheets on page load
        // Tries Apps Script first (preferred), then CSV as fallback
        async function loadDataFromGoogleSheets() {
            updateSyncStatus(true, '🔄 Loading...');
            
            // Check if running from file:// protocol (local file)
            const isFileProtocol = window.location.protocol === 'file:';
            
            // Try Apps Script first (better format, already working)
            if (GOOGLE_APPS_SCRIPT_URL && !GOOGLE_APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
                try {
                    console.log('📊 Loading data from Google Sheets via Apps Script...');
                    const url = GOOGLE_APPS_SCRIPT_URL + '?t=' + Date.now();
                    let response;
                    
                    // If file:// protocol, use proxy immediately (CORS doesn't work with file://)
                    if (isFileProtocol) {
                        console.log('⚠️ Running from file://, using proxy...');
                        console.warn('⚠️ Note: Opening HTML files directly (file://) has CORS limitations.');
                        console.warn('   For best results, host this file on a web server (e.g., GitHub Pages, Netlify, or local server).');
                        
                        try {
                            const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
                            response = await fetch(proxyUrl, {
                                method: 'GET',
                                mode: 'cors',
                                cache: 'no-cache'
                            });
                            
                            if (!response || !response.ok) {
                                throw new Error('Proxy request failed');
                            }
                        } catch (proxyError) {
                            console.error('❌ Proxy also failed due to CORS:', proxyError);
                            throw new Error('Cannot load from Apps Script when opening file directly. Please host on a web server or use CSV fallback.');
                        }
                    } else {
                        // Try direct fetch first (Apps Script should be configured for CORS)
                        try {
                            response = await fetch(url, {
                                method: 'GET',
                                mode: 'cors',
                                cache: 'no-cache',
                                credentials: 'omit'
                            });
                            
                            if (!response || !response.ok) {
                                throw new Error('Failed to fetch from Apps Script');
                            }
                        } catch (fetchError) {
                            // Check if it's a CORS error or network error
                            const isCorsError = fetchError.message.includes('CORS') || 
                                              fetchError.message.includes('access control') ||
                                              fetchError.message.includes('Failed to fetch') ||
                                              fetchError.name === 'TypeError';
                            
                            if (isCorsError) {
                                // Try proxy as fallback
                                try {
                                    const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
                                    response = await fetch(proxyUrl, {
                                        method: 'GET',
                                        mode: 'cors',
                                        cache: 'no-cache'
                                    });
                                    
                                    if (!response || !response.ok) {
                                        throw new Error('Proxy also failed');
                                    }
                                } catch (proxyError) {
                                    console.error('Proxy also failed:', proxyError);
                                    throw new Error('Unable to fetch from Apps Script. Please check CORS configuration.');
                                }
                            } else {
                                throw fetchError;
                            }
                        }
                    }
                    
                    if (!response.ok) {
                        // Try to get error message from response
                        let errorMessage = `Failed to fetch from Apps Script (Status: ${response.status})`;
                        try {
                            const errorText = await response.text();
                            if (errorText) {
                                const errorJson = JSON.parse(errorText);
                                errorMessage = errorJson.error || errorMessage;
                            }
                        } catch (e) {
                            // If we can't parse error, use status code
                            if (response.status === 500) {
                                errorMessage = 'Apps Script returned 500 error - check your script for errors';
                            } else if (response.status === 403) {
                                errorMessage = 'Apps Script access denied - check permissions';
                            } else if (response.status === 404) {
                                errorMessage = 'Apps Script URL not found - check your URL';
                            }
                        }
                        throw new Error(errorMessage);
                    }
                    
                    const result = await response.json();
                    
                    if (result.success && result.listings && result.listings.length > 0) {
                        const listings = result.listings;
                        
                        // Preserve existing filterOptions when loading from Sheets
                        // Ensure data is initialized before accessing it
                        if (typeof data === 'undefined' || !data) {
                            data = JSON.parse(JSON.stringify(initialData));
                        }
                        const existingFilterOptions = data.filterOptions || initialData.filterOptions;
                        // Extract filter options from listings (for merging)
                        const types = [...new Set(listings.map(l => l.type).filter(Boolean))].sort();
                        const areas = [...new Set(listings.map(l => l.area).filter(Boolean))].sort();
                        const amenities = [...new Set(listings.flatMap(l => l.amenities || []).filter(Boolean))].sort();
                        
                        // Merge saved options with extracted ones (preserve all, remove duplicates)
                        const mergedTypes = [...new Set([...(existingFilterOptions.types || []), ...types])].sort();
                        const mergedAreas = [...new Set([...(existingFilterOptions.areas || []), ...areas])].sort();
                        const mergedAmenities = [...new Set([...(existingFilterOptions.amenities || []), ...amenities])].sort();
                        
                        data = {
                            listings: listings,
                            filterOptions: {
                                types: mergedTypes,
                                areas: mergedAreas,
                                amenities: mergedAmenities
                            }
                        };
                        // Save filterOptions to localStorage
                        saveFilterOptions();
                        
                        console.log('✅ Loaded ' + listings.length + ' listings from Google Sheets (Apps Script)');
                        updateSyncStatus(true, `✅ Loaded ${listings.length} listings`);
                        renderListings();
                        populateAdminFilters();
                        updateStats();
                        return;
                    }
                } catch (error) {
                    console.error('❌ Error loading from Apps Script:', error);
                    
                    // Check what type of error it is
                    if (error.message.includes('500')) {
                        updateSyncStatus(false, '❌ Apps Script error (500) - falling back to CSV');
                        console.error('⚠️ Your Google Apps Script has an internal error. Check the Apps Script execution logs.');
                        console.error('   Error:', error.message);
                    } else if (error.message.includes('CORS') || error.message.includes('access control') || error.message.includes('Origin null')) {
                        updateSyncStatus(false, '⚠️ CORS error - retrying...');
                        // Only log CORS warning if it's a persistent issue
                        // (Suppress on first attempt, will retry via CSV fallback)
                        if (error.message.includes('Proxy also failed')) {
                            console.warn('⚠️ CORS Error: Your Google Apps Script may need CORS headers configured.\n' +
                                        'If this persists, add to your doGet function:\n' +
                                        'return ContentService\n' +
                                        '  .createTextOutput(JSON.stringify({success: true, listings: [...]}))\n' +
                                        '  .setMimeType(ContentService.MimeType.JSON);');
                        } else {
                            // First CORS attempt - just log briefly, will retry
                            console.log('⚠️ CORS blocked, trying proxy...');
                        }
                    } else {
                        updateSyncStatus(false, '❌ Connection error - falling back to CSV');
                        console.error('   Error:', error.message);
                    }
                    
                    console.log('⚠️ Falling back to CSV...');
                }
            }
            
            // Fallback to CSV if Apps Script fails or not configured
            if (GOOGLE_SHEET_CSV_URL && !GOOGLE_SHEET_CSV_URL.includes('YOUR_SHEET_ID')) {
                try {
                    const cacheBustUrl = GOOGLE_SHEET_CSV_URL + (GOOGLE_SHEET_CSV_URL.includes('?') ? '&' : '?') + 't=' + Date.now();
                    console.log('📊 Loading data from Google Sheets CSV...');
                    
                    let response;
                    // If file:// protocol, try multiple approaches
                    if (isFileProtocol) {
                        // Try different proxy services
                        const proxies = [
                            'https://api.allorigins.win/raw?url=',
                            'https://corsproxy.io/?',
                            'https://cors-anywhere.herokuapp.com/'
                        ];
                        
                        let proxySuccess = false;
                        for (let i = 0; i < proxies.length && !proxySuccess; i++) {
                            try {
                                const proxyUrl = proxies[i] + encodeURIComponent(cacheBustUrl);
                                console.log(`🔄 Trying proxy ${i + 1}/${proxies.length}...`);
                                response = await fetch(proxyUrl, {
                                    method: 'GET',
                                    mode: 'cors',
                                    cache: 'no-cache'
                                });
                                
                                if (response && response.ok) {
                                    proxySuccess = true;
                                    console.log('✅ Proxy succeeded!');
                                    break;
                                }
                            } catch (proxyError) {
                                console.warn(`⚠️ Proxy ${i + 1} failed:`, proxyError.message);
                                continue;
                            }
                        }
                        
                        if (!proxySuccess) {
                            // Last resort: try direct fetch (will likely fail but worth trying)
                            console.warn('⚠️ All proxies failed, trying direct CSV fetch...');
                            try {
                                response = await fetch(cacheBustUrl, {
                                    method: 'GET',
                                    mode: 'no-cors'
                                });
                                // If no-cors, we can't verify success, so throw
                                throw new Error('Direct CSV fetch from file:// not possible');
                            } catch (directError) {
                                throw new Error('Cannot load CSV from file:// protocol. All methods failed.');
                            }
                        }
                    } else {
                        response = await fetch(cacheBustUrl);
                    }
                    
                    if (!response || !response.ok) {
                        throw new Error(`Failed to fetch CSV (Status: ${response?.status || 'unknown'})`);
                    }
                    
                    const csvText = await response.text();
                    const parsed = parseCSV(csvText);
                    
                    if (parsed.dataRows && parsed.dataRows.length > 0) {
                        const listings = parsed.dataRows
                            .map(row => mapCSVRowToListing(row, parsed.headers))
                            .filter(listing => listing.name); // Only keep listings with names
                        
                        // Extract filter options from listings
                        // Preserve existing filterOptions when loading from CSV
                        // Ensure data is initialized before accessing it
                        if (typeof data === 'undefined' || !data) {
                            data = JSON.parse(JSON.stringify(initialData));
                        }
                        const existingFilterOptions = data.filterOptions || initialData.filterOptions;
                        // Extract filter options from listings (for merging)
                        const types = [...new Set(listings.map(l => l.type).filter(Boolean))].sort();
                        const areas = [...new Set(listings.map(l => l.area).filter(Boolean))].sort();
                        const amenities = [...new Set(listings.flatMap(l => l.amenities || []).filter(Boolean))].sort();
                        
                        // Merge saved options with extracted ones (preserve all, remove duplicates)
                        const mergedTypes = [...new Set([...(existingFilterOptions.types || []), ...types])].sort();
                        const mergedAreas = [...new Set([...(existingFilterOptions.areas || []), ...areas])].sort();
                        const mergedAmenities = [...new Set([...(existingFilterOptions.amenities || []), ...amenities])].sort();
                        
                        data = {
                            listings: listings,
                            filterOptions: {
                                types: mergedTypes,
                                areas: mergedAreas,
                                amenities: mergedAmenities
                            }
                        };
                        // Save filterOptions to localStorage
                        saveFilterOptions();
                        console.log('✅ Loaded ' + listings.length + ' listings from Google Sheets (CSV)');
                        updateSyncStatus(true, `✅ Loaded ${listings.length} listings (CSV)`);
                        renderListings();
                        populateAdminFilters();
                        updateStats();
                        return;
                    }
                } catch (error) {
                    console.error('❌ Error loading from CSV:', error);
                    updateSyncStatus(false, '❌ CSV fetch failed');
                }
            }
            
            // If both fail, use initial data
            console.log('⚠️ Could not load from Google Sheets, using initial data');
            updateSyncStatus(false, '⚠️ Using local data only');
            
            // Show warning if running from file://
            if (isFileProtocol) {
                console.error('❌ IMPORTANT: Opening from file:// protocol has CORS restrictions.');
                console.error('   To fix this, run a local web server:');
                console.error('   1. Open Terminal in this folder');
                console.error('   2. Run: python3 -m http.server 8000');
                console.error('   3. Open: http://localhost:8000/index-sheets.html');
                console.error('   OR host on GitHub Pages / Netlify / etc.');
                
                // Show alert to user
                setTimeout(() => {
                    alert('⚠️ CORS Error\n\n' +
                          'Opening HTML files directly (file://) has browser restrictions.\n\n' +
                          'To fix:\n' +
                          '1. Open Terminal in this folder\n' +
                          '2. Run: python3 -m http.server 8000\n' +
                          '3. Open: http://localhost:8000/index-sheets.html\n\n' +
                          'For now, using local data only.');
                }, 1000);
            }
        }
        
        // Reload data from Google Sheets (manual refresh)
        window.reloadFromSheets = async function reloadFromSheets() {
            const confirmed = confirm('⚠️ Warning: Reloading from Google Sheets\n\n' +
                                    'This will override all changes you\'ve made in this admin panel.\n' +
                                    'Any unsaved changes will be lost.\n\n' +
                                    'Click OK to reload from Google Sheets and override local changes\n' +
                                    'Click Cancel to keep your local changes');
            if (!confirmed) {
                return;
            }
            // Status will be updated by loadDataFromGoogleSheets()
            await loadDataFromGoogleSheets();
        }
        
        /**
         * Shows a confirmation dialog recommending CSV backup before saving to Sheets
         * @param {number} listingCount - Number of listings to be saved
         * @returns {Promise<boolean>} - true if user confirmed, false if cancelled
         */
        function showBackupConfirmation(listingCount) {
            return new Promise((resolve) => {
                // Create modal overlay
                const overlay = document.createElement('div');
                overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;';
                
                // Create modal dialog
                const modal = document.createElement('div');
                modal.style.cssText = 'background: white; padding: 30px; border-radius: 8px; max-width: 500px; width: 90%; box-shadow: 0 4px 20px rgba(0,0,0,0.3);';
                
                modal.innerHTML = `
                    <div style="margin-bottom: 20px;">
                        <h2 style="margin: 0 0 15px 0; color: #212529; font-size: 24px;">⚠️ Backup Recommended</h2>
                        <p style="margin: 0 0 15px 0; color: #6c757d; line-height: 1.6;">
                            You're about to replace <strong>all existing data</strong> in Google Sheets with ${listingCount} listing(s).
                        </p>
                        <p style="margin: 0 0 20px 0; color: #6c757d; line-height: 1.6;">
                            <strong>We recommend downloading a CSV backup first</strong> in case you need to restore the previous data.
                        </p>
                    </div>
                    <div style="display: flex; gap: 10px; justify-content: flex-end; flex-wrap: wrap;">
                        <button id="backupCancelBtn" style="padding: 10px 20px; border: 1px solid #dee2e6; background: white; color: #212529; border-radius: 4px; cursor: pointer; font-weight: 500;">
                            Cancel
                        </button>
                        <button id="backupDownloadBtn" style="padding: 10px 20px; border: none; background: #4E6B52; color: white; border-radius: 4px; cursor: pointer; font-weight: 600;">
                            📥 Download CSV Backup First
                        </button>
                        <button id="backupProceedBtn" style="padding: 10px 20px; border: none; background: #34a853; color: white; border-radius: 4px; cursor: pointer; font-weight: 600;">
                            Proceed Without Backup
                        </button>
                    </div>
                `;
                
                overlay.appendChild(modal);
                document.body.appendChild(overlay);
                
                // Button handlers
                document.getElementById('backupCancelBtn').onclick = () => {
                    document.body.removeChild(overlay);
                    resolve(false);
                };
                
                document.getElementById('backupDownloadBtn').onclick = () => {
                    // Download CSV backup
                    downloadCSV();
                    // Wait a moment for download to start, then proceed
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                        resolve(true);
                    }, 500);
                };
                
                document.getElementById('backupProceedBtn').onclick = () => {
                    document.body.removeChild(overlay);
                    resolve(true);
                };
                
                // Close on overlay click
                overlay.onclick = (e) => {
                    if (e.target === overlay) {
                        document.body.removeChild(overlay);
                        resolve(false);
                    }
                };
            });
        }
        
        window.saveAllToSheets = async function saveAllToSheets() {
            if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
                alert('⚠️ Google Sheets not configured. Please set up your Apps Script URL.');
                return;
            }
            
            if (!data.listings || data.listings.length === 0) {
                alert('⚠️ No listings to save.');
                return;
            }
            
            // Show confirmation dialog asking if they want to download CSV backup first
            const wantBackup = confirm('⚠️ You are about to replace ALL data in Google Sheets.\n\n' +
                                 'Would you like to download a CSV backup first?\n\n' +
                                 'Click OK to download CSV backup before saving\n' +
                                 'Click Cancel to skip backup and continue');
            
            if (wantBackup) {
                // Download CSV backup
                downloadCSV();
                // Wait a moment for download to start
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            
            // Now ask for confirmation to overwrite
            const confirmed = confirm('⚠️ Final Confirmation\n\n' +
                                    `You are about to replace all data in Google Sheets with ${data.listings.length} listing(s).\n\n` +
                                    'This action cannot be undone.\n\n' +
                                    'Click OK to save all listings to Google Sheets and overwrite existing data\n' +
                                    'Click Cancel to abort and keep Google Sheets unchanged');
            if (!confirmed) {
                return; // User cancelled
            }
            
            // Show "in progress" status
            updateSyncStatus(true, `💾 Saving ${data.listings.length} listings...`);
            
            try {
                // Send all listings at once with a "replaceAll" action
                // This tells the Apps Script to clear the sheet and replace with these listings
                const postData = JSON.stringify({
                    action: 'replaceAllListings',
                    listings: data.listings
                });
                
                let result = { success: false };
                
                // Try direct fetch first
                try {
                    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                        method: 'POST',
                        mode: 'cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: postData
                    });
                    
                    try {
                        const responseText = await response.text();
                        result = responseText ? JSON.parse(responseText) : { success: true };
                    } catch (e) {
                        result = { success: true }; // Assume success if no response
                    }
                } catch (corsError) {
                    console.log('Direct POST failed due to CORS, trying no-cors mode...');
                    
                    // Try no-cors mode - sends request but can't read response
                    try {
                        await fetch(GOOGLE_APPS_SCRIPT_URL, {
                            method: 'POST',
                            mode: 'no-cors',
                            body: postData  // Send raw JSON string
                        });
                        
                        // With no-cors, we can't read response, so assume success
                        result = { success: true };
                        console.log('Sent via no-cors mode (can\'t verify response)');
                    } catch (e) {
                        console.error('No-cors also failed:', e);
                        result = { success: false, error: 'Failed to connect to Google Sheets' };
                        alert('⚠️ Unable to save to Google Sheets. Changes saved locally only.\n\n' +
                              'This may be due to CORS restrictions. Your Apps Script may need to be configured to allow CORS.');
                    }
                }
                
                if (result.success) {
                    updateSyncStatus(true, `✅ Replaced all data in Google Sheets with ${data.listings.length} listings`);
                    alert(`✅ Successfully saved all ${data.listings.length} listings to Google Sheets!`);
                } else {
                    updateSyncStatus(false);
                    alert('❌ Error saving to Google Sheets: ' + (result.error || 'Unknown error'));
                }
            } catch (error) {
                console.error('Error saving to Google Sheets:', error);
                updateSyncStatus(false, '❌ Save failed');
                alert('❌ Error saving to Google Sheets: ' + error.message);
            }
        }
        
        function renderListings(listings) {
            if (!listings) listings = data.listings;
            const grid = document.getElementById('listingsGrid');
            grid.innerHTML = '';
            
            listings.forEach(function(listing) {
                const card = document.createElement('div');
                card.className = 'listing-card';
                if (listing.featured) {
                    const badge = document.createElement('div');
                    badge.className = 'featured-badge';
                    badge.textContent = 'FEATURED';
                    card.appendChild(badge);
                }
                
                const img = document.createElement('img');
                img.src = listing.image1;
                img.alt = listing.name;
                img.className = 'listing-image';
                card.appendChild(img);
                
                const content = document.createElement('div');
                content.className = 'listing-content';
                content.innerHTML = 
                    '<h3>' + listing.name + '</h3>' +
                    '<div class="listing-meta">' +
                    '<span class="badge badge-type ' + getIconClass(listing.type) + '">' + listing.type + '</span>' +
                    '<span class="badge badge-area">' + listing.area + '</span>' +
                    '</div>' +
                    '<p class="listing-desc">' + listing.description.substring(0, 120) + '...</p>' +
                    '<div class="listing-amenities">' +
                    listing.amenities.slice(0, 4).map(function(a) { return '<span class="amenity">' + a + '</span>'; }).join('') +
                    (listing.amenities.length > 4 ? '<span class="amenity">+' + (listing.amenities.length - 4) + ' more</span>' : '') +
                    '</div>' +
                    '<div class="listing-contact">' +
                    (listing.phone ? 'Phone: ' + listing.phone + '<br>' : '') +
                    'Address: ' + listing.address +
                    '</div>';
                
                const actions = document.createElement('div');
                actions.className = 'listing-actions';
                
                const editBtn = document.createElement('button');
                editBtn.className = 'btn-edit';
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', function() { 
                    editListing(listing.id); 
                });
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn-delete';
                
                // Check if this listing is waiting for confirmation
                if (deleteConfirmId === listing.id) {
                    deleteBtn.textContent = 'Confirm Delete?';
                    deleteBtn.style.background = '#dc2626';
                } else {
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.style.background = '#E3795C';
                }
                
                deleteBtn.addEventListener('click', function() { 
                    deleteListing(listing.id); 
                });
                
                actions.appendChild(editBtn);
                actions.appendChild(deleteBtn);
                content.appendChild(actions);
                card.appendChild(content);
                grid.appendChild(card);
            });
            
            updateStats(listings);
        }
        
        function updateStats(listings) {
            if (!listings) listings = data.listings;
            document.getElementById('totalListings').textContent = listings.length;
            document.getElementById('featuredCount').textContent = listings.filter(function(l) { return l.featured; }).length;
            const uniqueAreas = {};
            listings.forEach(function(l) { uniqueAreas[l.area] = true; });
            document.getElementById('areasCount').textContent = Object.keys(uniqueAreas).length;
            const uniqueTypes = {};
            listings.forEach(function(l) { uniqueTypes[l.type] = true; });
            document.getElementById('typesCount').textContent = Object.keys(uniqueTypes).length;
        }
        
        let currentAdminTypeFilter = '';
        
        function filterListings() {
            const searchTerm = document.getElementById('adminSearchInput').value.toLowerCase().trim();
            const areaFilter = document.getElementById('adminAreaFilter').value;
            const amenityFilter = document.getElementById('adminAmenityFilter').value;
            
            const filtered = data.listings.filter(function(listing) {
                const searchableText = [
                    listing.name,
                    listing.type,
                    listing.area,
                    listing.description,
                    listing.amenities.join(' ')
                ].join(' ').toLowerCase();
                
                const matchesSearch = !searchTerm || searchableText.indexOf(searchTerm) > -1;
                const matchesType = !currentAdminTypeFilter || listing.type === currentAdminTypeFilter;
                const matchesArea = !areaFilter || listing.area === areaFilter;
                const matchesAmenity = !amenityFilter || listing.amenities.indexOf(amenityFilter) > -1;
                
                return matchesSearch && matchesType && matchesArea && matchesAmenity;
            });
            
            renderListings(filtered);
        }
        
        window.filterAdminByType = function filterAdminByType(type) {
            currentAdminTypeFilter = type;
            
            // Update button active states
            const buttons = document.querySelectorAll('#adminTab .type-filter-btn');
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
                if (btn.dataset.type === type) {
                    btn.classList.add('active');
                }
            });
            
            filterListings();
        }
        
        function clearAdminFilters() {
            document.getElementById('adminSearchInput').value = '';
            document.getElementById('adminAreaFilter').value = '';
            document.getElementById('adminAmenityFilter').value = '';
            currentAdminTypeFilter = '';
            
            // Reset quick filter buttons
            const buttons = document.querySelectorAll('#adminTab .type-filter-btn');
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
                if (btn.dataset.type === '') {
                    btn.classList.add('active');
                }
            });
            
            renderListings(data.listings);
        }
        
        function populateAdminFilters() {
            const areaFilter = document.getElementById('adminAreaFilter');
            if (areaFilter && areaFilter.options.length === 1) {
                data.filterOptions.areas.forEach(function(area) {
                    const option = document.createElement('option');
                    option.value = area;
                    option.textContent = area;
                    areaFilter.appendChild(option);
                });
            }
            
            const amenityFilter = document.getElementById('adminAmenityFilter');
            if (amenityFilter && amenityFilter.options.length === 1) {
                data.filterOptions.amenities.forEach(function(amenity) {
                    const option = document.createElement('option');
                    option.value = amenity;
                    option.textContent = amenity;
                    amenityFilter.appendChild(option);
                });
            }
        }
        
        function renderAmenitiesCheckboxes() {
            const container = document.getElementById('amenitiesCheckboxes');
            if (!container) return;
            
            // Ensure data is initialized
            if (typeof data === 'undefined' || !data || !data.filterOptions || !data.filterOptions.amenities) {
                console.warn('Data not initialized yet, skipping renderAmenitiesCheckboxes');
                return;
            }
            
            const amenities = data.filterOptions.amenities;
            container.innerHTML = amenities.map(function(amenity) {
                const id = 'amenity-' + amenity.replace(/\s+/g, '-');
                return '<div class="checkbox-item">' +
                    '<input type="checkbox" id="' + id + '" value="' + amenity + '" />' +
                    '<label for="' + id + '" style="font-weight: normal; margin: 0;">' + amenity + '</label>' +
                    '</div>';
            }).join('');
        }
        
        window.openAddModal = function openAddModal() {
            document.getElementById('modalTitle').textContent = 'Add New Listing';
            document.getElementById('listingForm').reset();
            document.getElementById('editingId').value = '';
            // Ensure dropdowns are populated with current options
            updateTypeDropdown();
            updateAreaDropdown();
            renderAmenitiesCheckboxes();
            document.getElementById('listingModal').classList.add('active');
        }
        
        function editListing(id) {
            const listing = data.listings.find(function(l) { return l.id === id; });
            if (!listing) return;
            
            // Ensure dropdowns are populated with current options
            updateTypeDropdown();
            updateAreaDropdown();
            renderAmenitiesCheckboxes();
            
            document.getElementById('modalTitle').textContent = 'Edit Listing';
            document.getElementById('editingId').value = id;
            document.getElementById('listingName').value = listing.name;
            document.getElementById('listingType').value = listing.type;
            document.getElementById('listingArea').value = listing.area;
            document.getElementById('listingDescription').value = listing.description;
            document.getElementById('listingImage1').value = listing.image1;
            document.getElementById('listingImage2').value = listing.image2 || '';
            document.getElementById('listingWebsite').value = listing.website;
            document.getElementById('listingPhone').value = listing.phone || '';
            document.getElementById('listingAddress').value = listing.address;
            document.getElementById('listingFeatured').checked = listing.featured || false;
            
            const checkboxes = document.querySelectorAll('#amenitiesCheckboxes input[type="checkbox"]');
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = listing.amenities.indexOf(checkbox.value) > -1;
            });
            
            document.getElementById('listingModal').classList.add('active');
        }
        
        async function deleteListing(id) {
            const listing = data.listings.find(function(l) { return l.id === id; });
            
            if (!listing) {
                alert('Listing not found!');
                return;
            }
            
            // Check if this is the confirmation click
            if (deleteConfirmId === id) {
                // Confirmed - delete it
                deleteConfirmId = null;
                if (deleteConfirmTimeout) clearTimeout(deleteConfirmTimeout);
                
                // Delete from Google Sheets if configured
                if (GOOGLE_APPS_SCRIPT_URL && !GOOGLE_APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
                    try {
                        // Try direct POST, fallback to form submission
                        const postData = JSON.stringify({
                            action: 'deleteListing',
                            listingId: id
                        });
                        
                        let result = { success: false };
                        
                        // Try direct fetch first
                        try {
                            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                                method: 'POST',
                                mode: 'cors',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: postData
                            });
                            
                            const responseText = await response.text();
                            result = responseText ? JSON.parse(responseText) : { success: true };
                        } catch (corsError) {
                            // Use no-cors mode as fallback
                            try {
                                await fetch(GOOGLE_APPS_SCRIPT_URL, {
                                    method: 'POST',
                                    mode: 'no-cors',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: postData
                                });
                                result = { success: true };
                                console.log('Using no-cors mode for delete, assuming success');
                            } catch (e) {
                                result = { success: false, error: 'Failed to connect' };
                            }
                        }
                        
                        if (result.success) {
                            // Update local data
                            data.listings = data.listings.filter(function(l) { return l.id !== id; });
                            updateSyncStatus(true, '✅ Deleted from Google Sheets');
                            
                            // Reload from Google Sheets to sync
                            setTimeout(() => loadDataFromGoogleSheets(), 1000);
                        } else {
                            throw new Error(result.error || 'Delete failed');
                        }
                    } catch (error) {
                        console.error('Error deleting from Google Sheets:', error);
                        updateSyncStatus(false, '❌ Delete failed');
                        alert('⚠️ Failed to delete from Google Sheets: ' + error.message + '\n\nDeleted locally only.');
                        
                        // Still delete locally
                        data.listings = data.listings.filter(function(l) { return l.id !== id; });
                    }
                } else {
                    // No Google Sheets configured - delete locally only
                    data.listings = data.listings.filter(function(l) { return l.id !== id; });
                    alert('Deleted "' + listing.name + '" (Local only - configure Google Sheets to sync)');
                }
                
                renderListings();
                
                const previewTab = document.getElementById('previewTab');
                if (previewTab && previewTab.classList.contains('active')) {
                    renderPreview();
                }
            } else {
                // First click - set confirmation needed
                deleteConfirmId = id;
                
                // Clear any existing timeout
                if (deleteConfirmTimeout) clearTimeout(deleteConfirmTimeout);
                
                // Re-render to update button text
                renderListings();
                
                // Reset after 3 seconds
                deleteConfirmTimeout = setTimeout(function() {
                    deleteConfirmId = null;
                    renderListings();
                }, 3000);
            }
        }
        
        function saveListing(event) {
            event.preventDefault();
            
            const checkboxes = document.querySelectorAll('#amenitiesCheckboxes input[type="checkbox"]:checked');
            const selectedAmenities = [];
            checkboxes.forEach(function(cb) { selectedAmenities.push(cb.value); });
            
            const listing = {
                id: document.getElementById('editingId').value || Date.now().toString(),
                name: document.getElementById('listingName').value,
                type: document.getElementById('listingType').value,
                area: document.getElementById('listingArea').value,
                description: document.getElementById('listingDescription').value,
                image1: document.getElementById('listingImage1').value,
                image2: document.getElementById('listingImage2').value,
                website: document.getElementById('listingWebsite').value,
                phone: document.getElementById('listingPhone').value,
                address: document.getElementById('listingAddress').value,
                amenities: selectedAmenities,
                featured: document.getElementById('listingFeatured').checked
            };
            
            const editingId = document.getElementById('editingId').value;
            const isUpdate = !!editingId;
            
            // Save locally only - user must click "Save All to Google Sheets" to sync
                        if (isUpdate) {
                            const index = data.listings.findIndex(function(l) { return l.id === editingId; });
                            if (index >= 0) {
                                data.listings[index] = listing;
                    alert('"' + listing.name + '" has been updated locally!\n\n💾 Click "Save All to Google Sheets" to sync changes.');
                        } else {
                            data.listings.push(listing);
                    alert('"' + listing.name + '" has been added locally!\n\n💾 Click "Save All to Google Sheets" to sync changes.');
                }
                    } else {
                        data.listings.push(listing);
                alert('"' + listing.name + '" has been added locally!\n\n💾 Click "Save All to Google Sheets" to sync changes.');
            }
            
            // Update the display and close modal
            renderListings();
            closeModal();
        }
        
        window.closeModal = function closeModal() {
            document.getElementById('listingModal').classList.remove('active');
        }
        
        function exportData() {
            const format = confirm('Choose Export Format\n\n' +
                                'Click OK to export as JSON data file\n' +
                                'Click Cancel to export full HTML admin backup');
            
            if (format) {
                const dataStr = JSON.stringify(data, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'adventure-directory-data-' + new Date().toISOString().split('T')[0] + '.json';
                link.click();
                URL.revokeObjectURL(url);
                alert('JSON data exported! Check your downloads folder.');
            } else {
                const htmlContent = document.documentElement.outerHTML;
                const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
                const url = URL.createObjectURL(htmlBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'adventure-directory-admin-backup-' + new Date().toISOString().split('T')[0] + '.html';
                link.click();
                URL.revokeObjectURL(url);
                alert('Full admin backup exported! You can open this HTML file anytime to continue editing.');
            }
        }
        
        function quickExportJSON() {
            const dataStr = JSON.stringify(data, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'data-' + new Date().toISOString().split('T')[0] + '.json';
            link.click();
            URL.revokeObjectURL(url);
            alert('JSON file downloaded! This contains all your listing data.');
        }
        
        // Download JSON backup (same as quickExportJSON but with different naming)
        function downloadJSON() {
            const dataStr = JSON.stringify(data, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'nelson-county-listings-' + new Date().toISOString().split('T')[0] + '.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            // Update status AFTER download completes
            setTimeout(() => {
                updateSyncStatus(true, '💾 JSON backup downloaded');
            }, 100);
        }
        
        document.getElementById('listingModal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
        
        window.switchTab = function switchTab(tab) {
            document.querySelectorAll('.tab-btn').forEach(function(btn) { btn.classList.remove('active'); });
            document.querySelectorAll('.tab-content').forEach(function(content) { content.classList.remove('active'); });
            
            const header = document.querySelector('.header');
            
            if (tab === 'admin') {
                document.querySelectorAll('.tab-btn')[0].classList.add('active');
                document.getElementById('adminTab').classList.add('active');
                header.style.display = 'block';
            } else if (tab === 'data') {
                document.querySelectorAll('.tab-btn')[1].classList.add('active');
                document.getElementById('dataTab').classList.add('active');
                header.style.display = 'block';
                renderDataTable();
            } else if (tab === 'settings') {
                document.querySelectorAll('.tab-btn')[2].classList.add('active');
                document.getElementById('settingsTab').classList.add('active');
                header.style.display = 'block';
                renderSettings();
            } else if (tab === 'code') {
                document.querySelectorAll('.tab-btn')[3].classList.add('active');
                document.getElementById('codeTab').classList.add('active');
                header.style.display = 'block';
                generateCode();
            } else if (tab === 'preview') {
                document.querySelectorAll('.tab-btn')[4].classList.add('active');
                document.getElementById('previewTab').classList.add('active');
                header.style.display = 'none';
                renderPreview();
            } else if (tab === 'learn') {
                document.querySelectorAll('.tab-btn')[5].classList.add('active');
                document.getElementById('learnTab').classList.add('active');
                header.style.display = 'block';
            }
        }
        
        // ===========================================
        // SETTINGS MANAGEMENT FUNCTIONS
        // ===========================================
        function renderSettings() {
            renderTypesList();
            renderAreasList();
            renderAmenitiesList();
        }
        
        function renderTypesList() {
            const container = document.getElementById('typesList');
            if (!container) return;
            
            container.innerHTML = data.filterOptions.types.map(function(type, index) {
                return '<div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; background: #f8f9fa; border-radius: 4px; margin-bottom: 8px;">' +
                    '<span>' + type + '</span>' +
                    '<button onclick="removeType(' + index + ')" style="background: #dc3545; color: white; border: none; padding: 4px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Remove</button>' +
                    '</div>';
            }).join('');
        }
        
        function renderAreasList() {
            const container = document.getElementById('areasList');
            if (!container) return;
            
            container.innerHTML = data.filterOptions.areas.map(function(area, index) {
                return '<div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; background: #f8f9fa; border-radius: 4px; margin-bottom: 8px;">' +
                    '<span>' + area + '</span>' +
                    '<button onclick="removeArea(' + index + ')" style="background: #dc3545; color: white; border: none; padding: 4px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Remove</button>' +
                    '</div>';
            }).join('');
        }
        
        function renderAmenitiesList() {
            const container = document.getElementById('amenitiesList');
            if (!container) return;
            
            container.innerHTML = data.filterOptions.amenities.map(function(amenity, index) {
                return '<div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; background: #f8f9fa; border-radius: 4px;">' +
                    '<span>' + amenity + '</span>' +
                    '<button onclick="removeAmenity(' + index + ')" style="background: #dc3545; color: white; border: none; padding: 4px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Remove</button>' +
                    '</div>';
            }).join('');
        }
        
        function addType() {
            const input = document.getElementById('newTypeInput');
            const value = input.value.trim();
            if (!value) return;
            
            if (data.filterOptions.types.indexOf(value) === -1) {
                data.filterOptions.types.push(value);
                saveFilterOptions();
                renderTypesList();
                updateTypeDropdown();
                input.value = '';
            } else {
                alert('This type already exists.');
            }
        }
        
        function removeType(index) {
            const confirmed = confirm('Remove Filter Type: "' + data.filterOptions.types[index] + '"\n\n' +
                                    'This will remove it from filter options but will not affect existing listings.\n\n' +
                                    'Click OK to remove this filter type\n' +
                                    'Click Cancel to keep it');
            if (confirmed) {
                data.filterOptions.types.splice(index, 1);
                saveFilterOptions();
                renderTypesList();
                updateTypeDropdown();
            }
        }
        
        function addArea() {
            const input = document.getElementById('newAreaInput');
            const value = input.value.trim();
            if (!value) return;
            
            if (data.filterOptions.areas.indexOf(value) === -1) {
                data.filterOptions.areas.push(value);
                saveFilterOptions();
                renderAreasList();
                updateAreaDropdown();
                input.value = '';
            } else {
                alert('This area already exists.');
            }
        }
        
        function removeArea(index) {
            const confirmed = confirm('Remove Filter Area: "' + data.filterOptions.areas[index] + '"\n\n' +
                                    'This will remove it from filter options but will not affect existing listings.\n\n' +
                                    'Click OK to remove this filter area\n' +
                                    'Click Cancel to keep it');
            if (confirmed) {
                data.filterOptions.areas.splice(index, 1);
                saveFilterOptions();
                renderAreasList();
                updateAreaDropdown();
            }
        }
        
        function addAmenity() {
            const input = document.getElementById('newAmenityInput');
            const value = input.value.trim();
            if (!value) return;
            
            if (data.filterOptions.amenities.indexOf(value) === -1) {
                data.filterOptions.amenities.push(value);
                saveFilterOptions();
                renderAmenitiesList();
                updateAmenitiesCheckboxes();
                input.value = '';
            } else {
                alert('This amenity already exists.');
            }
        }
        
        function removeAmenity(index) {
            const confirmed = confirm('Remove Filter Amenity: "' + data.filterOptions.amenities[index] + '"\n\n' +
                                    'This will remove it from filter options but will not affect existing listings.\n\n' +
                                    'Click OK to remove this filter amenity\n' +
                                    'Click Cancel to keep it');
            if (confirmed) {
                data.filterOptions.amenities.splice(index, 1);
                saveFilterOptions();
                renderAmenitiesList();
                updateAmenitiesCheckboxes();
            }
        }
        
        function saveFilterOptions() {
            // Save to localStorage
            localStorage.setItem('nelsonCounty_filterOptions', JSON.stringify(data.filterOptions));
        }
        
        function updateTypeDropdown() {
            const select = document.getElementById('listingType');
            if (!select) return;
            
            // Ensure data is initialized
            if (typeof data === 'undefined' || !data || !data.filterOptions || !data.filterOptions.types) {
                console.warn('Data not initialized yet, skipping updateTypeDropdown');
                return;
            }
            
            const currentValue = select.value;
            select.innerHTML = '<option value="">Select Type</option>' +
                data.filterOptions.types.map(function(type) {
                    return '<option value="' + type + '">' + type + '</option>';
                }).join('');
            select.value = currentValue;
        }
        
        function updateAreaDropdown() {
            const select = document.getElementById('listingArea');
            if (!select) return;
            
            // Ensure data is initialized
            if (typeof data === 'undefined' || !data || !data.filterOptions || !data.filterOptions.areas) {
                console.warn('Data not initialized yet, skipping updateAreaDropdown');
                return;
            }
            
            const currentValue = select.value;
            select.innerHTML = '<option value="">Select Area</option>' +
                data.filterOptions.areas.map(function(area) {
                    return '<option value="' + area + '">' + area + '</option>';
                }).join('');
            select.value = currentValue;
        }
        
        function updateAmenitiesCheckboxes() {
            renderAmenitiesCheckboxes();
        }
        
        // Icon mapping function - maps activity types to centralized icon library
        function getIconClass(type) {
            const typeMap = {
                'Wine': 'icon-wine',
                'Winery': 'icon-wine',
                'Beer': 'icon-beer',
                'Brewery': 'icon-beer',
                'Spirits': 'icon-spirits',
                'Distillery': 'icon-spirits',
                'Cocktails': 'icon-cocktail',
                'Cocktail Bar': 'icon-cocktail',
                'Coffee': 'icon-coffee',
                'Coffee Shop': 'icon-coffee',
                'Café': 'icon-coffee',
                'Tea': 'icon-tea',
                'Tea Room': 'icon-tea',
                'Restaurant': 'icon-restaurant',
                'Dining': 'icon-restaurant',
                'Bakery': 'icon-bakery',
                'Patisserie': 'icon-bakery',
                'Cheese': 'icon-cheese',
                'Fromagerie': 'icon-cheese',
                'Chocolate': 'icon-chocolate',
                'Chocolatier': 'icon-chocolate',
                'Museum': 'icon-museum',
                'Art': 'icon-art',
                'Art Gallery': 'icon-gallery',
                'Gallery': 'icon-gallery',
                'Hiking': 'icon-hiking',
                'Hike': 'icon-hiking',
                'Trail': 'icon-hiking',
                'Cycling': 'icon-cycling',
                'Bike': 'icon-cycling',
                'Activity': 'icon-activity',
                'Activities': 'icon-activity',
                'Kayaking': 'icon-kayaking',
                'Kayak': 'icon-kayaking',
                'Spa': 'icon-spa',
                'Wellness': 'icon-wellness',
                'Health': 'icon-wellness',
                'Shopping': 'icon-shopping',
                'Shop': 'icon-shopping',
                'Market': 'icon-market',
                'Farmers Market': 'icon-market',
                'Concert': 'icon-concert',
                'Music': 'icon-concert',
                'Theater': 'icon-theater',
                'Theatre': 'icon-theater',
                'Cinema': 'icon-cinema',
                'Movie': 'icon-cinema',
                'Film': 'icon-cinema',
                'Festival': 'icon-festival',
                'Event': 'icon-festival',
                'Hotel': 'icon-hotel',
                'Lodging': 'icon-lodging',
                'B&B': 'icon-lodging',
                'Inn': 'icon-lodging',
                'Transport': 'icon-transport',
                'Transportation': 'icon-transport',
                'Train': 'icon-train',
                'Railway': 'icon-train',
                'Boat': 'icon-boat',
                'Ferry': 'icon-boat',
                'Scenic': 'icon-scenic',
                'Viewpoint': 'icon-viewpoint',
                'Lookout': 'icon-viewpoint',
                'Park': 'icon-park',
                'Garden': 'icon-garden',
                'Beach': 'icon-beach',
                'History': 'icon-history',
                'Historical': 'icon-history',
                'Heritage': 'icon-history',
                'Culture': 'icon-culture',
                'Cultural': 'icon-culture',
                'Architecture': 'icon-architecture',
                'Building': 'icon-architecture',
                'Local': 'icon-local',
                'Tour': 'icon-tour',
                'Guided Tour': 'icon-tour',
                'Workshop': 'icon-workshop',
                'Class': 'icon-class',
                'Course': 'icon-class',
                'Food': 'icon-food',
                'Cuisine': 'icon-food'
            };
            return typeMap[type] || 'icon-default';
        }
        
        function renderPreview(filteredListings) {
            const listings = filteredListings || data.listings;
            const grid = document.getElementById('previewGrid');
            grid.innerHTML = '';
            
            // Populate filter dropdowns if not already done
            const areaFilter = document.getElementById('previewAreaFilter');
            if (areaFilter.options.length === 1) {
                data.filterOptions.areas.forEach(function(area) {
                    const option = document.createElement('option');
                    option.value = area;
                    option.textContent = area;
                    areaFilter.appendChild(option);
                });
            }
            
            const amenityFilter = document.getElementById('previewAmenityFilter');
            if (amenityFilter.options.length === 1) {
                data.filterOptions.amenities.forEach(function(amenity) {
                    const option = document.createElement('option');
                    option.value = amenity;
                    option.textContent = amenity;
                    amenityFilter.appendChild(option);
                });
            }
            
            // Update results count
            document.getElementById('previewResultsCount').textContent = 'Showing ' + listings.length + ' listing' + (listings.length !== 1 ? 's' : '');
            
            listings.forEach(function(listing) {
                const card = document.createElement('div');
                card.className = 'flip-card';
                
                let flipBackTimeout = null;
                
                card.onclick = function(e) {
                    // Don't flip if clicking on links or buttons inside
                    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                        return;
                    }
                    
                    // Close all other flipped cards
                    document.querySelectorAll('.flip-card.flipped').forEach(function(otherCard) {
                        if (otherCard !== card) {
                            otherCard.classList.remove('flipped');
                        }
                    });
                    
                    this.classList.toggle('flipped');
                    const overlay = document.getElementById('flipOverlay');
                    if (this.classList.contains('flipped')) {
                        overlay.classList.add('active');
                        document.body.style.overflow = 'hidden'; // Prevent scrolling
                    } else {
                        overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    
                    if (flipBackTimeout) {
                        clearTimeout(flipBackTimeout);
                        flipBackTimeout = null;
                    }
                };
                
                const inner = document.createElement('div');
                inner.className = 'flip-card-inner';
                
                const front = document.createElement('div');
                front.className = 'flip-card-front';
                front.innerHTML = 
                    '<img src="' + listing.image1 + '" style="width: 100%; height: 200px; object-fit: cover;" />' +
                    '<div style="padding: 20px;">' +
                    '<h3 style="font-size: 20px; margin-bottom: 10px; color: var(--text-primary);">' + listing.name + '</h3>' +
                    '<div style="display: flex; gap: 8px; margin-bottom: 10px;">' +
                    '<span class="badge-type ' + getIconClass(listing.type) + '" data-type="' + listing.type + '" onclick="filterByBadge(event, \'type\', \'' + listing.type + '\')">' + listing.type + '</span>' +
                    '<span class="badge-area" data-area="' + listing.area + '" onclick="filterByBadge(event, \'area\', \'' + listing.area + '\')">' + listing.area + '</span>' +
                    '</div>' +
                    '<p style="font-size: 14px; color: var(--text-secondary); line-height: 1.5;">' + listing.description.substring(0, 100) + '...</p>' +
                    '</div>';
                
                const back = document.createElement('div');
                back.className = 'flip-card-back';
                
                // Build images HTML
                let imagesHTML = '<div class="flip-back-images">';
                imagesHTML += '<img src="' + listing.image1 + '" class="flip-back-image" />';
                if (listing.image2) {
                    imagesHTML += '<img src="' + listing.image2 + '" class="flip-back-image" />';
                }
                imagesHTML += '</div>';
                
                // Build amenities HTML if they exist
                let amenitiesHTML = '';
                if (listing.amenities && listing.amenities.length > 0) {
                    amenitiesHTML = 
                        '<div class="flip-tags-container">' +
                        '<div class="flip-tags-title">Amenities</div>' +
                        '<div class="flip-tags-list">' +
                        listing.amenities.map(function(amenity) {
                            return '<span class="badge-type" style="font-size: 10px; padding: 3px 8px;">' + amenity + '</span>';
                        }).join('') +
                        '</div>' +
                        '</div>';
                }
                
                back.innerHTML = 
                    '<button class="flip-close-btn" onclick="event.stopPropagation(); this.closest(\'.flip-card\').classList.remove(\'flipped\'); document.getElementById(\'flipOverlay\').classList.remove(\'active\'); document.body.style.overflow = \'\';">&times;</button>' +
                    imagesHTML +
                    '<h3 style="font-size: 22px; margin-bottom: 12px; color: var(--text-primary);">' + listing.name + '</h3>' +
                    '<div style="display: flex; gap: 8px; margin-bottom: 15px; flex-wrap: wrap;">' +
                    '<span class="badge-type ' + getIconClass(listing.type) + '">' + listing.type + '</span>' +
                    '<span class="badge-area">' + listing.area + '</span>' +
                    (listing.featured ? '<span class="badge-featured">Featured</span>' : '') +
                    '</div>' +
                    '<p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px; line-height: 1.6;">' + listing.description + '</p>' +
                    amenitiesHTML +
                    '<a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(listing.address) + '" target="_blank" class="card-info-item" style="text-decoration: none; cursor: pointer;" onclick="event.stopPropagation();">' +
                    '<div class="card-info-icon">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />' +
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />' +
                    '</svg>' +
                    '</div>' +
                    '<div class="card-info-text" style="color: var(--text-secondary);">' + listing.address + '</div>' +
                    '</a>' +
                    (listing.phone ? 
                    '<a href="tel:' + listing.phone.replace(/[^0-9+]/g, '') + '" class="card-info-item" style="text-decoration: none; cursor: pointer;" onclick="event.stopPropagation();">' +
                    '<div class="card-info-icon">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />' +
                    '</svg>' +
                    '</div>' +
                    '<div class="card-info-text" style="color: var(--text-secondary);">' + listing.phone + '</div>' +
                    '</a>' : '') +
                    '<div style="margin-top: auto; display: flex; gap: 10px; padding-top: 15px;">' +
                    '<a href="' + listing.website + '" target="_blank" style="flex: 1; background: #4E6B52; color: white; padding: 12px; text-align: center; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 6px;" onclick="event.stopPropagation();">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />' +
                    '</svg>' +
                    'Website' +
                    '</a>' +
                    '<a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(listing.address) + '" target="_blank" style="flex: 1; background: #E3795C; color: white; padding: 12px; text-align: center; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 6px;" onclick="event.stopPropagation();">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />' +
                    '</svg>' +
                    'Directions' +
                    '</a>' +
                    '</div>';
                
                inner.appendChild(front);
                inner.appendChild(back);
                card.appendChild(inner);
                grid.appendChild(card);
            });
        }
        
        let currentTypeFilter = '';
        
        function closeAllFlippedCards() {
            document.querySelectorAll('.flip-card.flipped').forEach(function(card) {
                card.classList.remove('flipped');
            });
            document.getElementById('flipOverlay').classList.remove('active');
            document.body.style.overflow = '';
        }
        
        function filterByBadge(event, filterType, value) {
            event.stopPropagation(); // Prevent card flip
            
            if (filterType === 'type') {
                currentTypeFilter = value;
                
                // Update button active states
                document.querySelectorAll('#previewTab .type-filter-btn').forEach(function(btn) {
                    btn.classList.remove('active');
                    if (btn.dataset.type === value) {
                        btn.classList.add('active');
                    }
                });
            } else if (filterType === 'area') {
                document.getElementById('previewAreaFilter').value = value;
            }
            
            filterPreview();
        }
        
        function filterPreview() {
            const searchTerm = document.getElementById('previewSearchInput').value.toLowerCase().trim();
            const areaFilter = document.getElementById('previewAreaFilter').value;
            const amenityFilter = document.getElementById('previewAmenityFilter').value;
            
            const filtered = data.listings.filter(function(listing) {
                // Search text
                const searchableText = [
                    listing.name,
                    listing.type,
                    listing.area,
                    listing.description,
                    listing.amenities.join(' ')
                ].join(' ').toLowerCase();
                
                const matchesSearch = !searchTerm || searchableText.indexOf(searchTerm) > -1;
                const matchesType = !currentTypeFilter || listing.type === currentTypeFilter;
                const matchesArea = !areaFilter || listing.area === areaFilter;
                const matchesAmenity = !amenityFilter || listing.amenities.indexOf(amenityFilter) > -1;
                
                return matchesSearch && matchesType && matchesArea && matchesAmenity;
            });
            
            renderPreview(filtered);
        }
        
        function clearPreviewFilters() {
            document.getElementById('previewSearchInput').value = '';
            document.getElementById('previewAreaFilter').value = '';
            document.getElementById('previewAmenityFilter').value = '';
            currentTypeFilter = '';
            
            // Reset quick filter buttons
            document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
                btn.classList.remove('active');
                if (btn.dataset.type === '') {
                    btn.classList.add('active');
                }
            });
            
            renderPreview();
        }
        
        function generateCode() {
            const jsonData = JSON.stringify(data, null, 2);
            document.getElementById('jsonCode').value = jsonData;
            
            const embedCode = '<div id="adventure-directory"><\/div>\n<scr' + 'ipt src="https:\/\/your-domain.com\/directory.js"><\/scr' + 'ipt>\n<link rel="stylesheet" href="https:\/\/your-domain.com\/directory.css">';
            document.getElementById('embedCode').value = embedCode;
            
            // Extract all CSS from the style tag
            const styleTag = document.querySelector('style');
            const cssCode = styleTag ? styleTag.textContent : '';
            document.getElementById('cssCode').value = cssCode;
            
            const jsCode = 'const listings = ' + jsonData + ';\n\nfunction renderListings() {\n  const container = document.getElementById("adventure-directory");\n  listings.forEach(function(listing) {\n    const card = document.createElement("div");\n    card.className = "listing-card";\n    card.innerHTML = "<h3>" + listing.name + "</h3>";\n    container.appendChild(card);\n  });\n}\n\nrenderListings();';
            document.getElementById('jsCode').value = jsCode;
        }
        
        function copyCode(type) {
            let textarea;
            if (type === 'embed') textarea = document.getElementById('embedCode');
            else if (type === 'json') textarea = document.getElementById('jsonCode');
            else if (type === 'css') textarea = document.getElementById('cssCode');
            else if (type === 'js') textarea = document.getElementById('jsCode');
            
            textarea.select();
            document.execCommand('copy');
            alert('Copied to clipboard!');
        }
        
        function renderDataTable() {
            const tbody = document.getElementById('dataTableBody');
            tbody.innerHTML = '';
            
            data.listings.forEach(function(listing, index) {
                const row = document.createElement('tr');
                row.setAttribute('data-index', index);
                row.innerHTML = 
                    '<td class="cell-id">' + listing.id + '</td>' +
                    '<td class="cell-name"><input type="text" value="' + listing.name + '" data-field="name" /></td>' +
                    '<td class="cell-type"><select data-field="type">' +
                        data.filterOptions.types.map(function(t) { return '<option value="' + t + '" ' + (listing.type === t ? 'selected' : '') + '>' + t + '</option>'; }).join('') +
                    '</select></td>' +
                    '<td class="cell-area"><select data-field="area">' +
                        data.filterOptions.areas.map(function(a) { return '<option value="' + a + '" ' + (listing.area === a ? 'selected' : '') + '>' + a + '</option>'; }).join('') +
                    '</select></td>' +
                    '<td class="cell-description"><textarea data-field="description">' + listing.description + '</textarea></td>' +
                    '<td class="cell-image"><input type="text" value="' + (listing.image1 || '') + '" data-field="image1" placeholder="Image URL or base64" /></td>' +
                    '<td class="cell-image"><input type="text" value="' + (listing.image2 || '') + '" data-field="image2" placeholder="Image URL or base64" /></td>' +
                    '<td class="cell-website"><input type="url" value="' + listing.website + '" data-field="website" /></td>' +
                    '<td class="cell-phone"><input type="tel" value="' + (listing.phone || '') + '" data-field="phone" /></td>' +
                    '<td class="cell-address"><input type="text" value="' + listing.address + '" data-field="address" /></td>' +
                    '<td class="cell-amenities"><textarea data-field="amenities">' + listing.amenities.join(', ') + '</textarea></td>' +
                    '<td class="cell-featured"><input type="checkbox" ' + (listing.featured ? 'checked' : '') + ' data-field="featured" /></td>' +
                    '<td class="cell-actions">' +
                        '<button class="btn-table-delete" onclick="deleteFromTable(' + index + ')" style="background: ' + (deleteConfirmId === listing.id ? '#dc2626' : '#E3795C') + ';">' +
                        (deleteConfirmId === listing.id ? 'Confirm?' : 'Delete') +
                        '</button>' +
                    '</td>';
                tbody.appendChild(row);
            });
        }
        
        function saveTableChanges() {
            const rows = Array.from(document.querySelectorAll('#dataTableBody tr'));
            let changeCount = 0;
            
            rows.forEach(function(row) {
                const index = parseInt(row.getAttribute('data-index'));
                const listing = data.listings[index];
                
                // Get all input fields
                const inputs = row.querySelectorAll('[data-field]');
                inputs.forEach(function(input) {
                    const field = input.getAttribute('data-field');
                    let newValue;
                    
                    if (input.type === 'checkbox') {
                        newValue = input.checked;
                    } else if (field === 'amenities') {
                        // Convert comma-separated string to array
                        newValue = input.value.split(',').map(function(a) { return a.trim(); }).filter(function(a) { return a.length > 0; });
                    } else {
                        newValue = input.value;
                    }
                    
                    // Compare arrays properly for amenities
                    if (field === 'amenities') {
                        if (JSON.stringify(listing[field]) !== JSON.stringify(newValue)) {
                            listing[field] = newValue;
                            changeCount++;
                        }
                    } else if (listing[field] !== newValue) {
                        listing[field] = newValue;
                        changeCount++;
                    }
                });
            });
            
            // Update all views
            renderListings();
            const previewTab = document.getElementById('previewTab');
            if (previewTab.classList.contains('active')) {
                renderPreview();
            }
            
            // Changes saved locally only - user must click "Save All to Google Sheets" to sync
            if (changeCount > 0) {
                alert('Table updated! ' + changeCount + ' field(s) changed locally.\n\n💾 Click "Save All to Google Sheets" to sync changes.');
            } else {
                alert('No changes detected.');
            }
        }
        
        function deleteFromTable(index) {
            const listing = data.listings[index];
            
            // Check if this is the confirmation click
            if (deleteConfirmId === listing.id) {
                // Confirmed - delete it
                data.listings.splice(index, 1);
                deleteConfirmId = null;
                if (deleteConfirmTimeout) clearTimeout(deleteConfirmTimeout);
                
                renderDataTable();
                renderListings();
                
                const previewTab = document.getElementById('previewTab');
                if (previewTab.classList.contains('active')) {
                    renderPreview();
                }
                
                alert('Deleted: ' + listing.name);
            } else {
                // First click - set confirmation needed
                deleteConfirmId = listing.id;
                
                // Clear any existing timeout
                if (deleteConfirmTimeout) clearTimeout(deleteConfirmTimeout);
                
                // Re-render to update button text
                renderDataTable();
                
                // Reset after 3 seconds
                deleteConfirmTimeout = setTimeout(function() {
                    deleteConfirmId = null;
                    renderDataTable();
                }, 3000);
            }
        }
        
        window.downloadCSV = function downloadCSV() {
            try {
                const headers = ['ID', 'Name', 'Type', 'Area', 'Description', 'Image1', 'Image2', 'Website', 'Phone', 'Address', 'Amenities', 'Featured'];
                const rows = data.listings.map(function(listing) {
                    return [
                        listing.id,
                        '"' + (listing.name || '').replace(/"/g, '""') + '"',
                        listing.type,
                        listing.area,
                        '"' + (listing.description || '').replace(/"/g, '""') + '"',
                        '"' + (listing.image1 || '').replace(/"/g, '""') + '"',
                        '"' + (listing.image2 || '').replace(/"/g, '""') + '"',
                        listing.website,
                        listing.phone || '',
                        '"' + (listing.address || '').replace(/"/g, '""') + '"',
                        '"' + listing.amenities.join('; ') + '"',
                        listing.featured ? 'true' : 'false'
                    ].join(',');
                });
                
                const csv = [headers.join(',')].concat(rows).join('\n');
                
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'listings-' + new Date().toISOString().split('T')[0] + '.csv';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                
                // Update status AFTER download completes
                // Use setTimeout to ensure download has started
                setTimeout(() => {
                    updateSyncStatus(true, '✅ CSV backup downloaded');
                }, 100);
            } catch (error) {
                console.error('Error downloading CSV:', error);
                updateSyncStatus(false, '❌ CSV download failed');
                alert('Error downloading CSV: ' + error.message);
            }
        }
        
        function handleCSVUpload(event) {
            try {
                console.log('CSV upload started');
                const file = event.target.files[0];
                if (!file) {
                    console.log('No file selected');
                    return;
                }
                
                console.log('Reading file:', file.name);
                const reader = new FileReader();
                
                reader.onerror = function(error) {
                    console.error('File read error:', error);
                    alert('Error reading file: ' + error);
                };
                
                reader.onload = function(e) {
                    try {
                        console.log('File loaded, parsing CSV...');
                        const text = e.target.result;
                        const lines = text.split('\n');
                        console.log('Total lines:', lines.length);
                        
                        const headers = lines[0].split(',');
                        console.log('Headers:', headers);
                        
                        const newListings = [];
                        for (let i = 1; i < lines.length; i++) {
                            if (!lines[i].trim()) continue;
                            
                            // Simple CSV parsing (handles quoted fields)
                            const values = [];
                            let currentValue = '';
                            let inQuotes = false;
                            
                            for (let j = 0; j < lines[i].length; j++) {
                                const char = lines[i][j];
                                if (char === '"') {
                                    inQuotes = !inQuotes;
                                } else if (char === ',' && !inQuotes) {
                                    values.push(currentValue.trim());
                                    currentValue = '';
                                } else {
                                    currentValue += char;
                                }
                            }
                            values.push(currentValue.trim());
                            
                            // Clean values
                            const cleanValues = values.map(function(v) {
                                return v.replace(/^"/, '').replace(/"$/, '').replace(/""/g, '"');
                            });
                            
                            const listing = {
                                id: cleanValues[0] || Date.now().toString() + '-' + i,
                                name: cleanValues[1] || 'Unnamed',
                                type: cleanValues[2] || 'Brewery',
                                area: cleanValues[3] || 'Afton',
                                description: cleanValues[4] || '',
                                image1: cleanValues[5] || '',
                                image2: cleanValues[6] || '',
                                website: cleanValues[7] || '',
                                phone: cleanValues[8] || '',
                                address: cleanValues[9] || '',
                                amenities: cleanValues[10] ? cleanValues[10].split(';').map(function(a) { return a.trim(); }).filter(function(a) { return a; }) : [],
                                featured: cleanValues[11] === 'true'
                            };
                            
                            newListings.push(listing);
                        }
                        
                        console.log('Parsed listings:', newListings.length);
                        
                        if (newListings.length === 0) {
                            alert('No valid listings found in CSV file.');
                            return;
                        }
                        
                        const confirmed = confirm('Upload CSV with ' + newListings.length + ' listings?\n\n' +
                                                '⚠️ This will replace all current listings with the CSV data.\n\n' +
                                                'Click OK to upload CSV and replace all current listings\n' +
                                                'Click Cancel to keep current listings unchanged');
                        if (confirmed) {
                            data.listings = newListings;
                            renderDataTable();
                            renderListings();
                            
                            // Update preview if active
                            const previewTab = document.getElementById('previewTab');
                            if (previewTab.classList.contains('active')) {
                                renderPreview();
                            }
                            
                            // CSV imported locally only - user must click "Save All to Google Sheets" to sync
                            alert('CSV uploaded successfully! ' + newListings.length + ' listings imported locally.\n\n💾 Click "Save All to Google Sheets" to sync changes.');
                        }
                        
                        // Reset file input
                        event.target.value = '';
                        
                    } catch (parseError) {
                        console.error('Error parsing CSV:', parseError);
                        alert('Error parsing CSV file: ' + parseError.message);
                    }
                };
                
                reader.readAsText(file);
                
            } catch (error) {
                console.error('Error in handleCSVUpload:', error);
                alert('Error uploading CSV: ' + error.message);
            }
        }
        
        window.addEventListener("DOMContentLoaded", async function() {
            // Small delay to ensure everything is ready (especially important when script is external)
            await new Promise(resolve => setTimeout(resolve, 100));
            await loadDataFromGoogleSheets();
            
            // Initialize form dropdowns with dynamic options
            updateTypeDropdown();
            updateAreaDropdown();
            renderAmenitiesCheckboxes();
            renderListings();
            updateStats();
            populateAdminFilters();
            
            // Add event listeners to quick filter buttons
            document.querySelectorAll('.type-filter-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    document.querySelectorAll('.type-filter-btn').forEach(function(b) {
                        b.classList.remove('active');
                    });
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Set the current type filter
                    currentTypeFilter = this.dataset.type;
                    
                    // Apply filter
                    filterPreview();
                });
            });
        });
        
        // ===========================================
        // GITHUB INTEGRATION FUNCTIONS
        // ===========================================
        async function saveToGitHub() {
            const token = document.getElementById('githubToken').value.trim();
            const username = document.getElementById('githubUsername').value.trim();
            const repo = document.getElementById('githubRepo').value.trim();
            const path = document.getElementById('githubPath').value.trim();
            const statusDiv = document.getElementById('githubStatus');
            
            // Validation
            if (!token) {
                statusDiv.textContent = '❌ Please enter your GitHub token';
                statusDiv.style.color = '#dc3545';
                return;
            }
            if (!username || !repo || !path) {
                statusDiv.textContent = '❌ Please fill in all fields';
                statusDiv.style.color = '#dc3545';
                return;
            }
            
            try {
                statusDiv.textContent = '⏳ Saving to GitHub...';
                statusDiv.style.color = '#ffc107';
                
                // Get your data object (this already exists in your admin panel)
                const jsonData = data;
                
                // Convert to base64 (required by GitHub API)
                let content;
                try {
                    content = btoa(JSON.stringify(jsonData, null, 2));
                } catch (e) {
                    // If btoa fails due to special characters, use UTF-8 encoding
                    const jsonString = JSON.stringify(jsonData, null, 2);
                    content = btoa(unescape(encodeURIComponent(jsonString)));
                }
                
                // Check if file exists to get SHA (required for updates)
                const getUrl = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;
                let sha = null;
                
                try {
                    const getRes = await fetch(getUrl, {
                        headers: { 
                            'Authorization': `token ${token}`,
                            'Accept': 'application/vnd.github.v3+json'
                        }
                    });
                    
                    if (getRes.ok) {
                        const fileData = await getRes.json();
                        sha = fileData.sha;
                    }
                } catch (e) {
                    console.log('File does not exist yet, will create new file');
                }
                
                // Commit the file
                const commitMessage = `Update from admin panel - ${new Date().toISOString()}`;
                const putRes = await fetch(getUrl, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `token ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/vnd.github.v3+json'
                    },
                    body: JSON.stringify({
                        message: commitMessage,
                        content: content,
                        sha: sha
                    })
                });
                
                if (putRes.ok) {
                    const result = await putRes.json();
                    statusDiv.textContent = '✅ Successfully saved to GitHub!';
                    statusDiv.style.color = '#28a745';
                    
                    // Save config to localStorage so user doesn't have to re-enter
                    localStorage.setItem('github_username', username);
                    localStorage.setItem('github_repo', repo);
                    localStorage.setItem('github_path', path);
                    
                    console.log('File saved at:', result.content.html_url);
                } else {
                    const error = await putRes.json();
                    console.error('GitHub API Error:', error);
                    statusDiv.textContent = `❌ Error: ${error.message}`;
                    statusDiv.style.color = '#dc3545';
                }
                
            } catch (error) {
                console.error('Save to GitHub error:', error);
                statusDiv.textContent = `❌ Error: ${error.message}`;
                statusDiv.style.color = '#dc3545';
            }
        }
        
        function downloadJSON() {
            const dataStr = JSON.stringify(data, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'adventure-directory-data-' + new Date().toISOString().split('T')[0] + '.json';
            link.click();
            URL.revokeObjectURL(url);
            
            const statusDiv = document.getElementById('githubStatus');
            if (statusDiv) {
                statusDiv.textContent = '✅ JSON file downloaded!';
                statusDiv.style.color = '#28a745';
                setTimeout(() => { statusDiv.textContent = ''; }, 3000);
            }
        }
        
        // Load saved GitHub config from localStorage on page load
        document.addEventListener('DOMContentLoaded', function() {
            const savedUsername = localStorage.getItem('github_username');
            const savedRepo = localStorage.getItem('github_repo');
            const savedPath = localStorage.getItem('github_path');
            
            if (savedUsername) document.getElementById('githubUsername').value = savedUsername;
            if (savedRepo) document.getElementById('githubRepo').value = savedRepo;
            if (savedPath) document.getElementById('githubPath').value = savedPath;
        });
        
        // ===========================================        // GOOGLE OAUTH AUTHENTICATION
        // ===========================================
        // 🔧 TESTING: Set to false to disable Google OAuth temporarily
        // Set to true to re-enable authentication
        const ENABLE_GOOGLE_AUTH = false; // 👈 Change to false to skip login
        
        // 🔐 CONFIGURATION: Google OAuth Client ID
        // Get this from: https://console.cloud.google.com/apis/credentials
        // 1. Create OAuth 2.0 Client ID
        // 2. Application type: Web application
        // 3. Authorized JavaScript origins: Add your domain (e.g., https://yourdomain.com)
        // 4. Authorized redirect URIs: Add your domain
        const GOOGLE_OAUTH_CLIENT_ID = '1087570888908-4g9jboc2hoi1dl9t9qs5hmnak6ct1t24.apps.googleusercontent.com';
        
        // 🔐 AUTHORIZED EMAILS: List of Google email addresses that can access the admin panel
        // SECURITY NOTE: For better security, move this list to your Google Apps Script
        // and fetch it via an API call instead of storing it in the client code.
        const AUTHORIZED_EMAILS = [
            'ernest@oddplusevenstudio.com',
            // Add more authorized emails here (one per line, comma-separated)
            // Example: 'admin@example.com',
            // Example: 'user@example.com',
            // Example: 'team-member@example.com',
        ];
        
        // Parse JWT token to get user info
        function parseJwt(token) {
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                return JSON.parse(jsonPayload);
            } catch (e) {
                console.error('Error parsing JWT:', e);
                return null;
            }
        }
        
        // Handle Google OAuth callback
        function handleCredentialResponse(response) {
            const errorDiv = document.getElementById('loginError');
            const errorText = document.getElementById('loginErrorText');
            
            try {
                // Parse the JWT token
                const payload = parseJwt(response.credential);
                
                if (!payload || !payload.email) {
                    throw new Error('Invalid token - missing email');
                }
                
                const userEmail = payload.email;
                const userName = payload.name || userEmail;
                
                console.log('Google Sign-In successful:', userEmail);
                
                // Check if email is authorized
                if (AUTHORIZED_EMAILS.includes(userEmail)) {
                    // Authorized - hide login overlay
                document.getElementById('loginOverlay').style.display = 'none';
                
                    // Store session info
                sessionStorage.setItem('adminLoggedIn', 'true');
                    sessionStorage.setItem('adminEmail', userEmail);
                    sessionStorage.setItem('adminName', userName);
                    
                    // Show success message briefly
                    const overlay = document.getElementById('loginOverlay');
                    const overlayContent = overlay.querySelector('div');
                    overlayContent.innerHTML = `
                        <div style="text-align: center; padding: 40px;">
                            <div style="color: #22c55e; font-size: 48px; margin-bottom: 20px;">✓</div>
                            <h2 style="color: #4E6B52; margin: 0 0 10px 0;">Welcome, ${userName}!</h2>
                            <p style="color: #6c757d; margin: 0;">Loading admin panel...</p>
                        </div>
                    `;
                    
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 1000);
                
            } else {
                    // Not authorized
                    errorText.textContent = `Access denied. ${userEmail} is not authorized to access this admin panel.`;
                errorDiv.style.display = 'block';
                
                // Shake animation
                const overlay = document.getElementById('loginOverlay');
                overlay.style.animation = 'shake 0.5s';
                setTimeout(() => { overlay.style.animation = ''; }, 500);
                    
                    // Log the unauthorized attempt
                    console.warn('Unauthorized access attempt:', userEmail);
                }
            } catch (error) {
                console.error('Error processing Google Sign-In:', error);
                errorText.textContent = 'Authentication failed. Please try again.';
                errorDiv.style.display = 'block';
            }
        }
        
        // Initialize Google Sign-In
        let initAttempts = 0;
        const MAX_INIT_ATTEMPTS = 50; // 5 seconds max wait
        
        function initializeGoogleSignIn() {
            initAttempts++;
            const loadingMessage = document.getElementById('loadingMessage');
            const errorDiv = document.getElementById('loginError');
            const errorText = document.getElementById('loginErrorText');
            const buttonContainer = document.getElementById('googleSignInContainer');
            const fallbackContainer = document.getElementById('fallbackButtonContainer');
            
            console.log('Initializing Google Sign-In, attempt:', initAttempts);
            console.log('Client ID:', GOOGLE_OAUTH_CLIENT_ID);
            console.log('Google object:', typeof google !== 'undefined' ? 'exists' : 'missing');
            
            // Check if Client ID is configured (check for undefined, empty, or placeholder)
            if (!GOOGLE_OAUTH_CLIENT_ID || 
                GOOGLE_OAUTH_CLIENT_ID === 'YOUR_CLIENT_ID.apps.googleusercontent.com' ||
                GOOGLE_OAUTH_CLIENT_ID.trim() === '') {
                if (loadingMessage) loadingMessage.style.display = 'none';
                errorText.innerHTML = `
                    <strong>⚠️ Configuration Required:</strong><br>
                    Google OAuth Client ID is not configured or is invalid.<br>
                    <small>See line ~5393 in index-sheets.html<br>
                    Replace 'YOUR_CLIENT_ID.apps.googleusercontent.com' with your actual Client ID from Google Cloud Console</small>
                `;
                errorDiv.style.display = 'block';
                // Show fallback button
                if (fallbackContainer) {
                    fallbackContainer.style.display = 'block';
                }
                return;
            }
            
            // Wait for Google Identity Services to load
            if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
                try {
                    if (loadingMessage) loadingMessage.style.display = 'none';
                    
                    console.log('✅ Google Identity Services loaded, initializing...');
                    console.log('📍 Current origin:', window.location.origin);
                    console.log('🔑 Client ID:', GOOGLE_OAUTH_CLIENT_ID);
                    
                    // Validate Client ID format before calling Google API
                    if (!GOOGLE_OAUTH_CLIENT_ID.includes('.apps.googleusercontent.com')) {
                        throw new Error('Invalid Client ID format. Must end with .apps.googleusercontent.com');
                    }
                    
                    google.accounts.id.initialize({
                        client_id: GOOGLE_OAUTH_CLIENT_ID,
                        callback: handleCredentialResponse,
                        auto_select: false,
                        cancel_on_tap_outside: true
                    });
                    
                    console.log('✅ Google Sign-In initialized successfully');
                    console.log('🎨 Rendering button...');
                    
                    // Clear container first
                    buttonContainer.innerHTML = '';
                    
                    // Render the sign-in button
                    google.accounts.id.renderButton(
                        buttonContainer,
                        {
                            theme: 'filled_blue',
                            size: 'large',
                            width: 300,
                            text: 'signin_with',
                            type: 'standard'
                        }
                    );
                    
                    console.log('✅ Google Sign-In button rendered successfully!');
                    console.log('✅ Everything looks good! The button should be visible now.');
                    
                    // Hide fallback button and loading message
                    if (fallbackContainer) fallbackContainer.style.display = 'none';
                    if (loadingMessage) loadingMessage.style.display = 'none';
                    
                } catch (error) {
                    console.error('❌ Error rendering Google Sign-In button:', error);
                    console.error('Error details:', {
                        message: error.message,
                        name: error.name,
                        stack: error.stack,
                        origin: window.location.origin,
                        clientId: GOOGLE_OAUTH_CLIENT_ID
                    });
                    
                    if (loadingMessage) loadingMessage.style.display = 'none';
                    
                    // Show fallback button
                    if (fallbackContainer) {
                        fallbackContainer.style.display = 'block';
                        errorText.innerHTML = `
                            <strong>⚠️ Error loading Google button:</strong><br>
                            ${error.message || 'Unknown error'}<br>
                            <small>This usually means your domain isn't authorized yet or Google hasn't updated (can take 1-5 minutes).<br>
                            Check the browser console (F12) for more details.<br>
                            Click the button below to try manual sign-in.</small>
                        `;
                        errorDiv.style.display = 'block';
                    } else {
                        errorText.innerHTML = `
                            <strong>❌ Error loading Google Sign-In:</strong><br>
                            ${error.message || 'Unknown error'}<br>
                            <small>Check your browser console for more details.</small>
                        `;
                        errorDiv.style.display = 'block';
                    }
                }
            } else {
                // Retry after a short delay if Google Identity Services hasn't loaded yet
                if (initAttempts < MAX_INIT_ATTEMPTS) {
                    if (loadingMessage) {
                        loadingMessage.textContent = `Loading sign-in button... (${initAttempts}/${MAX_INIT_ATTEMPTS})`;
                    }
                    setTimeout(initializeGoogleSignIn, 100);
                } else {
                    // Timeout - Google script failed to load, show fallback
                    console.error('Google Identity Services failed to load after', MAX_INIT_ATTEMPTS, 'attempts');
                    if (loadingMessage) loadingMessage.style.display = 'none';
                    
                    // Always show fallback button if Google's button doesn't load
                    if (fallbackContainer) {
                        fallbackContainer.style.display = 'block';
                        const currentOrigin = window.location.origin;
                        errorText.innerHTML = `
                            <strong>⚠️ Google Sign-In script didn't load:</strong><br>
                            <strong>Your current domain:</strong> <code style="background: #f8f9fa; padding: 2px 6px; border-radius: 3px;">${currentOrigin}</code><br>
                            <br>
                            <strong>To fix:</strong><br>
                            1. Go to: <a href="https://console.cloud.google.com/apis/credentials" target="_blank" style="color: #4285f4;">Google Cloud Console → Credentials</a><br>
                            2. Click your OAuth 2.0 Client ID<br>
                            3. Under "Authorized JavaScript origins", click "+ ADD URI"<br>
                            4. Add: <code style="background: #f8f9fa; padding: 2px 6px; border-radius: 3px;">${currentOrigin}</code><br>
                            5. Also add: <code style="background: #f8f9fa; padding: 2px 6px; border-radius: 3px;">http://localhost</code> (for local testing)<br>
                            6. Under "Authorized redirect URIs", add the same URLs<br>
                            7. Click "SAVE"<br>
                            8. Wait 1-2 minutes, then refresh this page<br>
                            <br>
                            <strong>Click the button below to try manual sign-in:</strong>
                        `;
                        errorDiv.style.display = 'block';
                    } else {
                        errorText.innerHTML = `
                            <strong>❌ Failed to load Google Sign-In:</strong><br>
                            Google Identity Services script did not load.<br>
                            <small>Please check your internet connection and try refreshing the page.</small>
                        `;
                        errorDiv.style.display = 'block';
                    }
                }
            }
        }
        
        // Fallback function to trigger Google Sign-In manually
        // Make it globally accessible for onclick handlers
        window.triggerGoogleSignIn = function triggerGoogleSignIn() {
            console.log('Triggering manual Google Sign-In');
            console.log('Client ID:', GOOGLE_OAUTH_CLIENT_ID);
            console.log('Google object:', typeof google !== 'undefined' ? 'exists' : 'missing');
            
            // Check if Client ID is configured
            if (!GOOGLE_OAUTH_CLIENT_ID || GOOGLE_OAUTH_CLIENT_ID === 'YOUR_CLIENT_ID.apps.googleusercontent.com') {
                alert('❌ Google OAuth Client ID is not configured.\n\nPlease set GOOGLE_OAUTH_CLIENT_ID in the code.');
                return;
            }
            
            // Try to use the One Tap prompt if available
            if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
                try {
                    // First, ensure Google is initialized with our Client ID
                    google.accounts.id.initialize({
                        client_id: GOOGLE_OAUTH_CLIENT_ID,
                        callback: handleCredentialResponse,
                        auto_select: false,
                        cancel_on_tap_outside: true
                    });
                    
                    // Try to show One Tap prompt
                    google.accounts.id.prompt((notification) => {
                        console.log('One Tap notification:', notification);
                        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                            // One Tap failed, try popup using renderButton
                            const buttonContainer = document.getElementById('googleSignInContainer');
                            if (buttonContainer) {
                                buttonContainer.innerHTML = '';
                                google.accounts.id.renderButton(
                                    buttonContainer,
                                    {
                                        theme: 'filled_blue',
                                        size: 'large',
                                        width: '100%',
                                        text: 'signin_with',
                                        type: 'standard',
                                        click_listener: function() {
                                            // This will trigger the callback
                                        }
                                    }
                                );
                                // Click the button programmatically
                                const button = buttonContainer.querySelector('div[role="button"]');
                                if (button) {
                                    button.click();
                                } else {
                                    // Fallback: redirect to OAuth
                                    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}&response_type=token&scope=openid%20profile%20email&nonce=${Date.now()}`;
                                }
                            } else {
                                // Fallback: redirect to OAuth
                                window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}&response_type=token&scope=openid%20profile%20email&nonce=${Date.now()}`;
                            }
                        }
                    });
                } catch (error) {
                    console.error('Error with One Tap:', error);
                    // Fallback: redirect to OAuth popup
                    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}&response_type=token&scope=openid%20profile%20email&nonce=${Date.now()}`;
                }
            } else {
                const currentOrigin = window.location.origin;
                alert('❌ Google OAuth Client ID is not configured.\n\nPlease set GOOGLE_OAUTH_CLIENT_ID in the code.');
            }
        };
        
        // Check if user is already logged in
        window.addEventListener('load', function() {
            // 🔧 TESTING: Skip authentication if disabled
            if (!ENABLE_GOOGLE_AUTH) {
                console.log('⚠️ Google OAuth disabled for testing - skipping login');
                // Set flag in localStorage for immediate hiding on next page load
                localStorage.setItem('skipAuth', 'true');
                const overlay = document.getElementById('loginOverlay');
                if (overlay) {
                    overlay.style.display = 'none';
                }
                document.body.classList.add('logged-in');
                return; // Skip all auth checks
            } else {
                // Auth is enabled, clear the skip flag
                localStorage.removeItem('skipAuth');
            }
            
            const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
            const adminEmail = sessionStorage.getItem('adminEmail');
            
            // Check if running from file:// protocol (won't work with Google OAuth)
            const isFileProtocol = window.location.protocol === 'file:';
            
            // Get current origin for helpful error messages
            const currentOrigin = window.location.origin;
            const currentHost = window.location.host;
            
            if (isFileProtocol) {
                const errorDiv = document.getElementById('loginError');
                const errorText = document.getElementById('loginErrorText');
                const loadingMessage = document.getElementById('loadingMessage');
                const fallbackContainer = document.getElementById('fallbackButtonContainer');
                
                if (loadingMessage) loadingMessage.style.display = 'none';
                errorText.innerHTML = `
                    <strong>⚠️ File Protocol Detected:</strong><br>
                    Google OAuth doesn't work with file:// protocol.<br>
                    <strong>Solution:</strong> Run a local web server:<br>
                    <code style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; display: block; margin: 10px 0;">
                        python3 -m http.server 8000
                    </code>
                    Then open: <code>http://localhost:8000/index-sheets.html</code>
                `;
                errorDiv.style.display = 'block';
                
                // Show fallback button that explains the issue
                if (fallbackContainer) {
                    fallbackContainer.innerHTML = `
                        <button disabled style="width: 100%; background: #ccc; color: #666; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: not-allowed;">
                            Sign in with Google (Not Available - Use Local Server)
                        </button>
                    `;
                    fallbackContainer.style.display = 'block';
                }
                return;
            }
            
            // If logged in but no email (old password-based login), force logout
            if (isLoggedIn === 'true' && !adminEmail) {
                console.log('Detected old password-based session. Forcing logout for Google OAuth.');
                sessionStorage.clear();
                localStorage.removeItem('adminLoggedIn');
                // Fall through to show login
            }
            
            // Check if properly logged in with Google OAuth
            if (isLoggedIn === 'true' && adminEmail) {
                document.getElementById('loginOverlay').style.display = 'none';
            } else {
                // Initialize Google Sign-In when page loads
                // Wait a bit for the page to fully render
                setTimeout(function() {
                    initializeGoogleSignIn();
                    // Update diagnostics after a moment
                    setTimeout(updateDiagnostics, 1000);
                }, 500);
            }
        });
        
        // Test and diagnostic functions
        function testGoogleSignIn() {
            console.log('🧪 Testing Google Sign-In configuration...');
            const origin = window.location.origin;
            const clientId = GOOGLE_OAUTH_CLIENT_ID;
            
            console.log('📍 Current origin:', origin);
            console.log('🔑 Client ID:', clientId);
            console.log('🌐 Google script loaded:', typeof google !== 'undefined' ? '✅ Yes' : '❌ No');
            
            if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
                try {
                    google.accounts.id.initialize({
                        client_id: clientId,
                        callback: function(response) {
                            console.log('✅ Test successful! Got credential response');
                            alert('✅ Test successful! Google Sign-In is working.\n\nIf you see this, your configuration is correct!');
                        },
                        auto_select: false
                    });
                    
                    // Try to render a test button
                    const testDiv = document.createElement('div');
                    document.body.appendChild(testDiv);
                    
                    google.accounts.id.renderButton(testDiv, {
                        theme: 'filled_blue',
                        size: 'large',
                        text: 'signin_with'
                    });
                    
                    console.log('✅ Test button rendered - configuration is correct!');
                    alert('✅ Test successful! Google Sign-In button rendered.\n\nYour configuration is working correctly!\n\nIf you still don\'t see the button on the login screen, wait 1-2 minutes for Google\'s servers to update.');
                    
                    // Remove test button
                    setTimeout(() => testDiv.remove(), 5000);
                } catch (error) {
                    console.error('❌ Test failed:', error);
                    alert('❌ Test failed: ' + error.message + '\n\nThis usually means:\n1. Your domain isn\'t authorized yet (wait 1-5 minutes)\n2. Or there\'s a configuration issue\n\nCheck the console for details.');
                }
            } else {
                alert('❌ Google Identity Services script not loaded.\n\nCheck:\n1. Your internet connection\n2. Browser console for errors\n3. That the script tag is in the HTML');
            }
        }
        
        function checkOAuthConfig() {
            const origin = window.location.origin;
            const clientId = GOOGLE_OAUTH_CLIENT_ID;
            
            const config = {
                origin: origin,
                clientId: clientId,
                googleLoaded: typeof google !== 'undefined',
                buttonContainer: document.getElementById('googleSignInContainer') ? 'exists' : 'missing',
                authorizedEmails: AUTHORIZED_EMAILS.length
            };
            
            console.log('📋 OAuth Configuration Check:', config);
            
            let message = '📋 OAuth Configuration:\n\n';
            message += `Domain: ${origin}\n`;
            message += `Client ID: ${clientId.substring(0, 20)}...\n`;
            message += `Google Script: ${config.googleLoaded ? '✅ Loaded' : '❌ Not loaded'}\n`;
            message += `Button Container: ${config.buttonContainer}\n`;
            message += `Authorized Emails: ${config.authorizedEmails}\n\n`;
            
            if (config.googleLoaded) {
                message += '✅ Google script is loaded\n';
            } else {
                message += '❌ Google script not loaded - check internet connection\n';
            }
            
            message += `\nMake sure "${origin}" is added to Google Cloud Console → Authorized JavaScript origins`;
            
            alert(message);
            console.log('Full config:', config);
        }
        
        // Update diagnostic info on load
        function updateDiagnostics() {
            const diagSection = document.getElementById('diagnosticSection');
            if (diagSection) {
                document.getElementById('diagOrigin').textContent = window.location.origin;
                document.getElementById('diagClientId').textContent = GOOGLE_OAUTH_CLIENT_ID.substring(0, 30) + '...';
                document.getElementById('diagGoogleLoaded').textContent = typeof google !== 'undefined' ? '✅ Yes' : '❌ No';
                document.getElementById('diagContainer').textContent = document.getElementById('googleSignInContainer') ? '✅ Found' : '❌ Missing';
                
                const status = typeof google !== 'undefined' && document.getElementById('googleSignInContainer') ? '✅ Ready' : '⏳ Waiting...';
                document.getElementById('diagStatus').textContent = status;
                
                // Show diagnostic section
                diagSection.style.display = 'block';
            }
        }
        
        // Logout function
        window.logout = function logout() {
            // Revoke Google token if available
            if (typeof google !== 'undefined' && google.accounts) {
                google.accounts.id.disableAutoSelect();
            }
            
            // Clear session data
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('adminEmail');
            sessionStorage.removeItem('adminName');
            localStorage.removeItem('adminLoggedIn');
            
            // Reload page to show login screen
            location.reload();
        }
        
        // Ensure all functions are available immediately
        console.log('✅ admin.js loaded successfully');
        console.log('✅ Functions available:', {
            reloadFromSheets: typeof window.reloadFromSheets,
            saveAllToSheets: typeof window.saveAllToSheets,
            downloadCSV: typeof window.downloadCSV,
            openAddModal: typeof window.openAddModal,
            logout: typeof window.logout,
            switchTab: typeof window.switchTab,
            filterAdminByType: typeof window.filterAdminByType,
            closeModal: typeof window.closeModal
        });