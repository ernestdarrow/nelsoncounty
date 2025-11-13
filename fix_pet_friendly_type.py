#!/usr/bin/env python3
"""
Fix listings where "Pet Friendly" is incorrectly set as the type.
Updates type to appropriate category and ensures Pet Friendly is in amenities.
"""

import csv
import sys
from pathlib import Path
import re

def normalize_name(name):
    """Normalize name for matching"""
    return str(name).lower().strip()

def determine_type(name, description, current_amenities):
    """Determine the appropriate type based on name and description"""
    name_lower = normalize_name(name)
    desc_lower = str(description).lower() if description else ''
    combined = name_lower + ' ' + desc_lower
    
    # Check for condo/apartment patterns
    if any(word in combined for word in ['condo', 'condominium', 'apartment', 'unit']):
        return 'Vacation Rentals'
    
    # Check for cabin/cottage patterns
    if any(word in combined for word in ['cabin', 'cottage', 'retreat', 'lodge']):
        return 'Cabins & Cottages'
    
    # Check for house/home patterns
    if any(word in combined for word in ['house', 'home', 'mansion', 'estate', 'villa', 'manor']):
        return 'Whole House Rentals'
    
    # Check for inn/b&b patterns
    if any(word in combined for word in ['inn', 'bed and breakfast', 'bed & breakfast', 'b&b', 'guesthouse']):
        return 'Bed and Breakfast'
    
    # Check for resort patterns
    if any(word in combined for word in ['resort', 'resort cabin', 'resort condo']):
        return 'Vacation Rentals'
    
    # Check for farm/farmhouse patterns
    if any(word in combined for word in ['farm', 'farmhouse', 'farm house']):
        return 'Whole House Rentals'
    
    # Default to Whole House Rentals for most rental properties
    return 'Whole House Rentals'

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
        amen_idx = header.index('amenities')
        name_idx = header.index('name')
        desc_idx = header.index('description') if 'description' in header else None
        
        for row_num, row in enumerate(reader, start=2):
            if len(row) > type_idx:
                current_type = row[type_idx].strip()
                
                # Check if type is "Pet Friendly"
                if current_type.lower() in ['pet friendly', 'pet-friendly']:
                    name = row[name_idx] if len(row) > name_idx else ''
                    description = row[desc_idx] if desc_idx and len(row) > desc_idx else ''
                    amenities = row[amen_idx] if len(row) > amen_idx else ''
                    
                    # Determine correct type
                    new_type = determine_type(name, description, amenities)
                    
                    # Ensure Pet Friendly is in amenities
                    updated_amenities = update_amenities(amenities, 'Pet Friendly')
                    
                    # Update the row
                    row[type_idx] = new_type
                    row[amen_idx] = updated_amenities
                    
                    updates.append({
                        'row': row_num,
                        'name': name,
                        'old_type': current_type,
                        'new_type': new_type,
                        'amenities_updated': amenities != updated_amenities
                    })
            
            rows.append(row)
    
    if not updates:
        print("No listings found with 'Pet Friendly' as type.")
        return
    
    print(f"\nFound {len(updates)} listings to update:\n")
    for update in updates:
        amen_status = " (added to amenities)" if update['amenities_updated'] else " (already in amenities)"
        print(f"  Row {update['row']}: '{update['name']}'")
        print(f"    Type: '{update['old_type']}' -> '{update['new_type']}'{amen_status}\n")
    
    # Write updated CSV
    print(f"Writing updated CSV to {output_file.name}...")
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(rows)
    
    print(f"\n✅ Done! Updated {len(updates)} listings.")

if __name__ == '__main__':
    main()

