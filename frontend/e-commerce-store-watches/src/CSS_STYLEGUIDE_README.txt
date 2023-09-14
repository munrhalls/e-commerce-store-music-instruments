COLORS PALETTE: 
#16171b / rgba(22,23,27,255) - dark navy blue
#f5cd8b / rgba(245,205,139,255) - light golden font
#640101 crimson fit color for font

HTML SELECTORS:
- as much native's (button, etc.) as possible
- as little classes as possible
- if full feature, use short name (e.g. search)
- if not feature, prefix that name (e.g. btn-search)

ORDER OF CSS PROPERTIES:
- From "FURTHEST FROM ELEMENT" to "ELEMENT CENTER"
- Don't take it literally
- But try to generally write in order:
- a) display, positioning etc.
- b) margin padding borders etc.
- c) heights widths max min heights etc.
- d) internals font color bg etc.

- THIS ORDER HAS USEFUL EFFECTS, OTHER THAN JUST CLARITY:
    - e.g., if you need to push one element from another, always choose to do so using the "FURTHER FROM ELEMENT" guideline
    - need icon pushed from text? do it in the containing element if it makes sense