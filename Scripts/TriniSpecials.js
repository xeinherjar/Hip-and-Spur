Response
200 (OK)
Content-Type: application/json
{
    "post_id": 13,
    "title": "Acorn Finished Pork",
    "post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
Special
Get Today's Special
GET
/menu/special
Add Comment
Example Debugger Comments Try It
Show code sample  
Request
GET /menu/special HTTP/1.1
Response
200 (OK)
Content-Type: application/json
{
    "id": 1,
    "menu_item_id": 25
}
Menu Items
Get Menu
GET
/menu
Add Comment
Example Debugger Comments Try It
Show code sample  
Request
GET /menu HTTP/1.1
Response
200 (OK)
Content-Type: application/json
{
    "appetizers": [
        {
            "id": 15,
            "item": "90 Minute Holiday Turkey Soup",
            "price": 8,
            "description": "A fine simmer of apple cider infused organic roasted turkey stock, 90-minute dogfish head i.p.a., roasted organic pennsylvania farmed turkey meat, bacon, green apples shavings, carrot, onion, celery, red potato, sweet corn, gorgonzola cheese & fried pecan sour cherry stuffing fritter installed to order.",
            "allergies": 0,
            "favorite": 0,
            "spicy": 0,
            "vegan": 0
        }, {
            "id": 18,
            "item": "True American Seafood Bisque",
            "price": 12,
            "description": "That's right no corner cutting here! 1st we fabricate a stock from maine lobster bodies & shrimp shells, next we grind, we strain & we sieve, next we add hand chopped meat of scallops, tiger shrimp tails, crayfish tails & blue crab meat, next infused w/ sherry, tarragon, cream, a few other retro bisque spices & finally paired w/ baked pretzel bun.",
            "allergies": 1,
            "favorite": 1,
            "spicy": 1,
            "vegan": 0
        }, {
            "id": 19,
            "item": "Signature Salad",
            "price": 7,
            "description": "An assembly of baby heirloom spinach leaves, spanish heirloom kumato, english cucumber, roasted portabella, artichoke heart, stemmed caper berries, poached garlic cloves, kalamata olives, fresh mozzarella, sunflower seed kernels, shaved asiago & emulsified lemon garlic parmesan.",
            "allergies": 0,
            "favorite": 0,
            "spicy": 0,
            "vegan": 1
        }, {
            "id": 22,
            "item": "Pretzel Tofu Squares",
            "price": 9,
            "description": "Almond milk marinated firm tofu squares embedded w/ panko sour dough pretzel fragments, pan seared & displayed proudly over moroccan spiced seedless cucumber planks anchored onto a sriracha laced raspberry lambic beer sauce & finally garnished w/ fried cellophane rice noodle.",
            "allergies": 0,
            "favorite": 1,
            "spicy": 0,
            "vegan": 1
        }
    ],
    "entrees": [
        {
            "id": 24,
            "item": "12oz Prime Japanese Kurobuta black Hog Chop",
            "price": 26,
            "description": "Perfectly marbled english heritage berkshire pork raised in japan.",
            "allergies": 0,
            "favorite": 1,
            "spicy": 0,
            "vegan": 0
        }, {
            "id": 25,
            "item": "12oz Atlantic Sea Scallops",
            "price": 28,
            "description": "All natural colossal ocean pillows of love, 95% harvested are unnaturally pumped to plump, we are the 5%.",
            "allergies": 1,
            "favorite": 0,
            "spicy": 0,
            "vegan": 0
        }, {
            "id": 28,
            "item": "8oz Pennsylvania Farmed Ostrich Filet Mignon",
            "price": 38,
            "description": "Tender health conscious red meat, less than 4g of total fat, 0% saturated fat & sweet flavor.",
            "allergies": 0,
            "favorite": 1,
            "spicy": 0,
            "vegan": 0
        }, {
            "id": 33,
            "item": "24oz 3-wk Dry Aged Premium Gold Angus Cowboy Cut Rib Eye",
            "price": 54,
            "description": "By far! the best quality aged steak found anywhere locally, flavor next to none.",
            "allergies": 0,
            "favorite": 1,
            "spicy": 0,
            "vegan": 0
        }
    ],
    "sides": [
        {
            "id": 4,
            "item": "Mashed Red Potato Poached Garlic & Parmesan",
            "price": 5,
            "description": "",
            "allergies": 0,
            "favorite": 0,
            "spicy": 0,
            "vegan": 0
        }, {
            "id": 9,
            "item": "Bacon Smoked Gouda Macaroni & Cheese",
            "price": 7,
            "description": "",
            "allergies": 0,
            "favorite": 0,
            "spicy": 0,
            "vegan": 0
        }, {
            "id": 3,
            "item": "Duck Fat Skillet Fried Fingerlings",
            "price": 6,
            "description": "",
            "allergies": 0,
            "favorite": 0,
            "spicy": 0,
            "vegan": 0
        }, {
            "id": 6,
            "item": "Pan Fried Sweet Pea Orzo & Scrambled Egg",
            "price": 5,
            "description": "",
            "allergies": 0,
            "favorite": 0,
            "spicy": 0,
            "vegan": 0
        }
    ]
}