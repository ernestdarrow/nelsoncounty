#!/usr/bin/env python3
"""
Remove nelsoncounty.com URLs from website column, leaving them blank.
"""

import csv
import sys
from pathlib import Path

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
        
        name_idx = header.index('name')
        website_idx = header.index('website')
        
        for row_num, row in enumerate(reader, start=2):
            if len(row) > website_idx:
                website = row[website_idx].strip()
                name = row[name_idx].strip() if len(row) > name_idx else ''
                
                # Check if website contains nelsoncounty.com (case-insensitive)
                if website and 'nelsoncounty.com' in website.lower():
                    old_website = website
                    row[website_idx] = ''  # Clear the website
                    
                    updates.append({
                        'row': row_num,
                        'name': name,
                        'old_website': old_website
                    })
            
            rows.append(row)
    
    if not updates:
        print("✅ No listings found with nelsoncounty.com in website.")
        return
    
    print(f"\nFound {len(updates)} listings with nelsoncounty.com in website:\n")
    for update in updates:
        print(f"  Row {update['row']}: '{update['name']}'")
        print(f"    Website: '{update['old_website']}' → (blank)\n")
    
    # Write updated CSV
    print(f"Writing updated CSV to {output_file.name}...")
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(rows)
    
    print(f"\n✅ Done! Cleared website field for {len(updates)} listings.")

if __name__ == '__main__':
    main()

