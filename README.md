# FumenUtil
Fumen Utils. Commands currently supported:
canvas, split, combine, glue, unglue

Also, web interface available at https://swng.github.io/FumenUtil/

# FumenCombiner
Combines multiple fumens into a single multi-page fumens

Supports multi-page fumens a s input

# Command
```node fumenCombiner.js fumencode1 fumencode2 fumencode3...```

Example:
```node fumenCombiner.js v115@zgA8i0whilRpC8g0whglR4RpD8whR4G8whywH8wwC8JeAgH v115@zgA8zhh0AtRpC8hlg0BtRpD8glg0AtG8glywH8wwC8JeAgH v115@zgA8zhg0R4RpC8hli0RpD8glR4G8glywH8wwC8JeAgH v115@zgA8i0ilAtRpC8g0glwwBtRpD8ywG8zhH8AtC8JeAgH v115@zgA8zhQ4hlRpC8BtR4glRpD8BtQ4G8i0glH8g0C8JeAgH v115@zgA8zhQ4ywglC8BtR4ilD8BtQ4G8i0wwH8g0C8JeAgH v115@zgA8i0Q4ywRpC8g0R4wwAtRpD8ilG8glQ4BtH8AtC8JeAgH v115@zgA8i0zhRpC8g0ilAtRpD8ywG8glwwBtH8AtC8JeAgH v115@zgA8zhi0RpC8hlywRpD8glQ4wwG8glR4g0H8Q4C8JeAgH v115@zgA8i0whywRpC8g0whilRpD8whBtG8whglBtH8wwC8JeAgH v115@zgA8zhhlg0RpC8ywglg0RpD8wwR4G8R4h0H8glC8JeAgH v115@zgA8i0ilAtRpC8g0Q4ywRpD8R4wwG8glQ4BtH8AtC8JeAgH v115@zgA8zhywRpC8i0wwAtRpD8ilG8glg0BtH8AtC8JeAgH```  
Would output
```v115@zgA8i0whilRpC8g0whglR4RpD8whR4G8whywH8wwC8?JeAgHzgA8zhh0AtRpC8hlg0BtRpD8glg0AtG8glywH8wwC8?JeAgHzgA8zhg0R4RpC8hli0RpD8glR4G8glywH8wwC8JeAg?HzgA8i0ilAtRpC8g0glwwBtRpD8ywG8zhH8AtC8JeAgHzgA?8zhQ4hlRpC8BtR4glRpD8BtQ4G8i0glH8g0C8JeAgHzgA8z?hQ4ywglC8BtR4ilD8BtQ4G8i0wwH8g0C8JeAgHzgA8i0Q4y?wRpC8g0R4wwAtRpD8ilG8glQ4BtH8AtC8JeAgHzgA8i0zhR?pC8g0ilAtRpD8ywG8glwwBtH8AtC8JeAgHzgA8zhi0RpC8h?lywRpD8glQ4wwG8glR4g0H8Q4C8JeAgHzgA8i0whywRpC8g?0whilRpD8whBtG8whglBtH8wwC8JeAgHzgA8zhhlg0RpC8y?wglg0RpD8wwR4G8R4h0H8glC8JeAgHzgA8i0ilAtRpC8g0Q?4ywRpD8R4wwG8glQ4BtH8AtC8JeAgHzgA8zhywRpC8i0wwA?tRpD8ilG8glg0BtH8AtC8JeAgH```

# FumenSplitter
Splits multi-page fumens into individual single-page fumens

Supports multiple multi-page fumens

#  Command
```node fumenSplitter.js fumencode [fumenCode...]```

Example:
```node fumenSplitter.js v115@zgB8i0whilC8Btg0whglRpD8BtwhA8RpC8ywwhG8ww?F8JeAgHzgB8Q4hlzhC8R4glh0RpD8Q4glg0A8RpC8ywg0G8?wwF8JeAAAzgB8zhRpg0C8BthlRpg0D8BtglA8h0C8ywglG8?wwF8JeAAAzgB8ilwhi0C8glRpwhBtg0D8RpwhA8BtC8ywwh?G8wwF8JeAAAzgB8i0whQ4hlC8Btg0whR4glD8BtwhA8Q4gl?C8ywwhG8wwF8JeAAAzgB8Q4hlwhi0C8R4glwhBtg0D8Q4gl?whA8BtC8ywwhG8wwF8JeAAAzgB8Q4hlwhRpg0C8R4glwhRp?g0D8Q4glwhA8h0C8ywwhG8wwF8JeAAAzgB8Rpg0whQ4hlC8?Rpg0whR4glD8h0whA8Q4glC8ywwhG8wwF8JeAAAzgB8ilzh?C8glBtR4RpD8wwR4A8RpC8xwBtG8wwF8JeAAAzgB8g0Rpwh?Q4hlC8i0whR4glD8RpwhA8Q4glC8ywwhG8wwF8JeAAAzgB8?zhilC8ywg0glRpD8R4g0A8RpC8R4h0G8wwF8JeAAAzgB8h0?AtzhC8g0BtR4RpD8AtR4A8RpC8g0ilG8glF8JeAAAzgB8il?zhC8ywh0RpD8wwAtg0A8RpC8glBtg0G8AtF8JeAAAzgB8Q4?ili0C8R4RpBtg0D8Q4RpA8BtC8zhG8glF8JeAAAzgB8Q4yw?i0C8R4wwglBtg0D8ilA8BtC8zhG8Q4F8JeAAAzgB8Q4ilyw?C8R4Rpi0D8Q4RpA8wwg0C8zhG8glF8JeAAAzgB8Rphli0C8?RpAtglywD8BtglA8wwg0C8zhG8AtF8JeAAAzgB8glh0zhC8?glg0ywRpD8BtwwA8RpC8hlBtG8g0F8JeAAAzgB8Q4i0Btgl?C8zhilD8ywA8BtC8R4wwg0G8Q4F8JeAAAzgB8Q4i0ilC8yw?AtglRpD8wwBtA8RpC8R4Atg0G8Q4F8JeAAAzgB8ywAtQ4hl?C8RpBtR4glD8i0A8Q4glC8RpAtg0G8wwF8JeAAA```  
Would output  
```v115@zgB8i0whilC8Btg0whglRpD8BtwhA8RpC8ywwhG8ww?F8JeAgH
v115@zgB8Q4hlzhC8R4glh0RpD8Q4glg0A8RpC8ywg0G8ww?F8JeAAA
v115@zgB8zhRpg0C8BthlRpg0D8BtglA8h0C8ywglG8wwF8?JeAAA
v115@zgB8ilwhi0C8glRpwhBtg0D8RpwhA8BtC8ywwhG8ww?F8JeAAA
v115@zgB8i0whQ4hlC8Btg0whR4glD8BtwhA8Q4glC8ywwh?G8wwF8JeAAA
v115@zgB8Q4hlwhi0C8R4glwhBtg0D8Q4glwhA8BtC8ywwh?G8wwF8JeAAA
v115@zgB8Q4hlwhRpg0C8R4glwhRpg0D8Q4glwhA8h0C8yw?whG8wwF8JeAAA
v115@zgB8Rpg0whQ4hlC8Rpg0whR4glD8h0whA8Q4glC8yw?whG8wwF8JeAAA
v115@zgB8ilzhC8glBtR4RpD8wwR4A8RpC8xwBtG8wwF8Je?AAA
v115@zgB8g0RpwhQ4hlC8i0whR4glD8RpwhA8Q4glC8ywwh?G8wwF8JeAAA
v115@zgB8zhilC8ywg0glRpD8R4g0A8RpC8R4h0G8wwF8Je?AAA
v115@zgB8h0AtzhC8g0BtR4RpD8AtR4A8RpC8g0ilG8glF8?JeAAA
v115@zgB8ilzhC8ywh0RpD8wwAtg0A8RpC8glBtg0G8AtF8?JeAAA
v115@zgB8Q4ili0C8R4RpBtg0D8Q4RpA8BtC8zhG8glF8Je?AAA
v115@zgB8Q4ywi0C8R4wwglBtg0D8ilA8BtC8zhG8Q4F8Je?AAA
v115@zgB8Q4ilywC8R4Rpi0D8Q4RpA8wwg0C8zhG8glF8Je?AAA
v115@zgB8Rphli0C8RpAtglywD8BtglA8wwg0C8zhG8AtF8?JeAAA
v115@zgB8glh0zhC8glg0ywRpD8BtwwA8RpC8hlBtG8g0F8?JeAAA
v115@zgB8Q4i0BtglC8zhilD8ywA8BtC8R4wwg0G8Q4F8Je?AAA
v115@zgB8Q4i0ilC8ywAtglRpD8wwBtA8RpC8R4Atg0G8Q4?F8JeAAA
v115@zgB8ywAtQ4hlC8RpBtR4glD8i0A8Q4glC8RpAtg0G8?wwF8JeAAA
```

# MirrorFumen
Mirrors a fumen

Does every page, mirrors the board along with mirrored colors and mirrored piece placements

#  Command
```node mirrorFumen.js fumencode [fumenCode...]```

Example:
```node mirrorFumen.js v115@zgA8IeC8GeD8CeG8DeH8AeC8JeiGJvhEMsBToBBlBG?rBFsB```  
Would output  
```v115@8gA8GeF8CeF8DeG8AeF8JeGGJvhE/qBTkBBnBirBlq?B```

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
```npm install canvas``` - canvas  
```npm install gifencoder``` - gifencoder
