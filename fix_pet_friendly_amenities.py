#!/usr/bin/env python3
"""
Ensure all listings that previously had 'Pet Friendly' as type now have 
'Pet Friendly' in their amenities column.
"""

import csv
import sys
from pathlib import Path

def normalize_name(name):
    """Normalize name for matching"""
    return str(name).strip()

def update_amenities(amenities_str, new_amenity):
    """Add an amenity to the amenities string if not already present"""
    if not amenities_str or amenities_str.strip() == '':
        return new_amenity
    
    amenities = [a.strip() for a in amenities_str.split(';')]
    
    # Check if already present (case-insensitive)
    new_lower = new_amenity.lower()
    if any(a.lower() == new_lower for a in amenities):
        return amenities_str  # Already present
    
    # Add to the beginning
    amenities.insert(0, new_amenity)
    return '; '.join(amenities)

def main():
    input_file = Path('listings-2025-11-13-14-merged.csv')
    output_file = Path('listings-2025-11-13-14-merged.csv')
    
    # List of names that were changed from Pet Friendly to other types
    # These are the 26 listings we fixed earlier
    pet_friendly_names = [
        'Meili Mountain',
        'Wintergreen Ridge Retreat',
        'Ethan\'s Den',
        'Slipper Slope',
        'Mountain Dacha',
        'Eagles Court Ski In/Ski Out Condo',
        'Cozy & Clean Wintergreen Condo (Tanners Ridge)',
        'Wintergreen Getaway for Families',
        'Wintergreen - Fairway Woods',
        'Tupelo',
        'Peaceful Mountain Getaway',
        'Three Ridge Retreat',
        'Arrowwood Lane',
        '779 Blue Ridge Drive',
        'Time Out',
        'Wintergreen 19 Ivy Glen Lane',
        'Spy Run Hideaway',
        'Marigold on the Mountain',
        'Top of The Mountain Hideaway',
        'On The Rocks',
        'Slopes At Tyro',
        'Peppers Mountain Pad',
        'Rockfish Valley Retreat',
        'Nectar Landing',
        '1639 Overlook',
        'Blue Sky Retreat'
    ]
    
    if not input_file.exists():
        print(f"Error: {input_file} not found")
        sys.exit(1)
    
    print(f"Reading {input_file.name}...")
    
    rows = []
    header = None
    updates = []
    
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader)
        
        type_idx = header.index('type')
        name_idx = header.index('name')
        amen_idx = header.index('amenities')
        
        for row_num, row in enumerate(reader, start=2):
            if len(row) > name_idx:
                name = row[name_idx].strip()
                
                # Check if this is one of the listings that had Pet Friendly as type
                if name in pet_friendly_names:
                    amenities = row[amen_idx].strip() if len(row) > amen_idx else ''
                    amenities_lower = amenities.lower()
                    
                    # Check if Pet Friendly is already in amenities (case-insensitive)
                    if 'pet friendly' not in amenities_lower and 'pet-friendly' not in amenities_lower:
                        # Add Pet Friendly to amenities
                        updated_amenities = update_amenities(amenities, 'Pet Friendly')
                        row[amen_idx] = updated_amenities
                        
                        updates.append({
                            'row': row_num,
                            'name': name,
                            'old_amenities': amenities[:60] + '...' if len(amenities) > 60 else amenities,
                            'new_amenities': updated_amenities[:60] + '...' if len(updated_amenities) > 60 else updated_amenities
                        })
            
            rows.append(row)
    
    if not updates:
        print("✅ All listings already have 'Pet Friendly' in amenities.")
        return
    
    print(f"\nFound {len(updates)} listings that need Pet Friendly added:\n")
    for update in updates:
        print(f"  Row {update['row']}: '{update['name']}'")
        print(f"    Old: {update['old_amenities']}")
        print(f"    New: {update['new_amenities']}\n")
    
    # Write updated CSV
    print(f"Writing updated CSV to {output_file.name}...")
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(rows)
    
    print(f"\n✅ Done! Added 'Pet Friendly' to amenities for {len(updates)} listings.")

if __name__ == '__main__':
    main()

