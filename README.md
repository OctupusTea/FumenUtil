# MirrorFumen
Mirrors a fumen

Does every page, mirrors the board along with mirrored colors and mirrored piece placements


# UngluingFumens
Turning multi-page fumens into single-paged fumens with color coded pieces

# Command
```node unglueFumen.js fumencode [fumenCode...]```

Example:
```node unglueFumen.js v115@7gD8CeG8CeH8BeH8BeE8JeT1IvhFmXBCZBxbB0bBdr?B/qB```
Would output
```v115@pgRpBti0ilRpzhg0glD8Q4BtG8R4wwH8xwH8Q4wwE8?JeAgH```

# GluingFumens
Turning single page fumens with color coded pieces into multipage fumens with a piece on each page  

Supports multipage fumens and multiple fumen inputs  
Note: if there's multiple ways to cover the colored minos then all are outputed  
# Command
```node glueFumen.js fumenCode [fumenCode...]```  

Example:  
```node glueFumen.js v115@9gA8ywg0glR4RpB8wwklRpD8i0glG8R4glB8JeAgH```  
Would output  
```v115@9gA8IeB8HeD8DeG8CeB8JeFAJvhESmBTjB6sB2rBXs?B```  

# Dependencies  
```npm install hashmap``` - hashmap  
```npm install tetris-fumen``` - [fumen api](https://github.com/knewjade/tetris-fumen)   
