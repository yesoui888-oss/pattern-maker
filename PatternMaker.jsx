import re

# Read the file text
with open('PatternMaker (1).jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Since the file is huge and has a large base64 string, we want to extract the React component logic
# and convert it into a static HTML application using React from CDN or standard vanilla JS if simpler,
# but keeping all styling, user interface, and functional features.

# Let's see the structure of the file by stripping out or looking at parts after the CAT_SRC
print("Code length:", len(code))
# Let's find the main React component body.
# We know it imports useState, useRef, useEffect, useCallback from "react".
# Let's find where the component definition starts or print some text after the large base64.
lines = code.split('\n')
for i, line in enumerate(lines[:15]):
    if 'CAT_SRC' in line:
        print(f"Line {i}: {line[:100]}...")
    else:
        print(f"Line {i}: {line}")

# Find lines after the CAT_SRC definition
for i, line in enumerate(lines):
    if i > 5 and len(line) < 500 and ('export' in line or 'const' in line or 'function' in line or 'return' in line):
        print(f"Line {i}: {line}")
        if i > 50: # just sample a few
            break
