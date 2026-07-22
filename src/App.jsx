const MENU = {
  appetizers: {
    title: "Appetizers",
    items: [
      {
        number: 1,
        name: "Sambusa",
        price: 10.95,
        image: "images/sambusa.jpg",
        desc: "Three spiced pastries filled with your choice of seasoned vegetables or chicken."
      },
      {
        number: 2,
        name: "Ayib B’e Gomen",
        price: 11.95,
        image: "images/ayib-be-gomen.jpg",
        desc: "Fresh collard greens mixed with cottage cheese, berbere spice, and fresh herbs."
      },
      {
        number: 3,
        name: "Dibulbul Tibs",
        price: 10.95,
        image: "images/dibulbul-tibs.jpg",
        desc: "Marinated meatballs cooked with onions, green peppers, fresh herbs, and served with fresh salad."
      },
      {
        number: 4,
        name: "Timatim Salad",
        price: 10.95,
        image: "images/timatim-salad.jpg",
        desc: "Abyssinian-style fresh tomato salad with onions, green peppers, jalapeños, and house dressing."
      },
      {
        number: 5,
        name: "Falafel",
        price: 10.95,
        image: "images/falafel.jpg",
        desc: "Crispy golden-brown seasoned chickpea fritters with herbs, garlic, and fresh salad."
      }
    ]
  },


  vegetarian: {
    title: "Vegetarian Dishes",
    items: [
      {
        number: 6,
        name: "Shiro Wot",
        price: 20.95,
        image: "images/shiro-wot.jpg",
        desc: "Abyssinian ground chickpeas simmered in a rich berbere sauce."
      },
      {
        number: 7,
        name: "Kosta",
        price: 20.95,
        image: "images/kosta.jpg",
        desc: "Sautéed Swiss chard and potatoes slowly cooked with mild Ethiopian spices."
      },
      {
        number: 8,
        name: "Misir Wot",
        price: 18.95,
        image: "images/misir-wot.jpg",
        desc: "Lentils simmered with Ethiopian berbere, onions, and garlic."
      },
      {
        number: 9,
        name: "Alcha Kik Wot",
        price: 18.95,
        image: "images/alcha-kik-wot.jpg",
        desc: "Yellow split peas cooked with a flavorful mild sauce, onions, and garlic."
      },
      {
        number: 10,
        name: "Difin Misir Wot",
        price: 18.95,
        image: "images/difin-misir-wot.jpg",
        desc: "Brown lentils slowly simmered in a mild sauce with onions and garlic."
      },
      {
        number: 11,
        name: "Veggie Combo (4 Items)",
        price: 22.95,
        image: "images/veggie-combo.jpg",
        desc: "A combination of Misir Wot, Alcha Kik Wot, Difin Misir Wot, and cabbage."
      },
      {
        number: 12,
        name: "Special Veggie Combo (6 Items)",
        price: 27.95,
        image: "images/special-veggie-combo.jpg",
        desc: "Choice of six vegetarian dishes including cabbage and Fossolia (Ethiopian-style green beans with carrots)."
      },
      {
        number: 13,
        name: "Abyssinian Special Meat/Veggie Platter (4 Items)",
        price: 32.95,
        image: "images/abyssinian-platter.jpg",
        desc: "Choice of four combinations from our vegetarian and meat selections. Vegetarian options include #6–#10, cabbage, and Fossolia. Meat options include #14 Doro Wot, #19 Alicha Sega Wot, and #20 Key Sega Wot."
      }
    ]
  },

    chicken: {
    title: "Chicken Dishes",
    subtitle: "Served with your choice of two veggie sampler sides: Misir Wot (#8), Alcha Kik Wot (#9), or Difin Misir Wot (#10).",
    items: [
      {
        number: 14,
        name: "Doro Wot",
        price: 22.95,
        image: "images/doro-wot.jpg",
        desc: "Ethiopia's iconic chicken and egg stew, slow-cooked with onions, berbere, niter kibbeh, ginger, and garlic."
      },
      {
        number: 15,
        name: "Doro Tibs",
        price: 20.95,
        image: "images/doro-tibs.jpg",
        desc: "Herb-grilled chicken tossed with garlic, awaze sauce, onions, ginger, green peppers, and jalapeños."
      }
    ]
  },


  fish: {
    title: "Fish",
    subtitle: "Served with your choice of two veggie sampler sides: Misir Wot (#8), Alcha Kik Wot (#9), or Difin Misir Wot (#10).",
    items: [
      {
        number: 16,
        name: "Asa Tibs / Fish",
        price: 21.95,
        image: "images/asa-tibs.jpg",
        desc: "Fresh salmon grilled Ethiopian-style and simmered with berbere, onions, and clarified butter."
      }
    ]
  },


  beef: {
    title: "Beef Dishes",
    subtitle: "Items #17–#20 are served with your choice of two veggie sampler sides: Misir Wot (#8), Alcha Kik Wot (#9), or Difin Misir Wot (#10).",
    items: [
      {
        number: 17,
        name: "Awaze Tibs",
        price: 20.95,
        image: "images/awaze-tibs.jpg",
        desc: "Tender beef cubes marinated and cooked with awaze sauce, fresh herbs, tomatoes, and jalapeños."
      },
      {
        number: 18,
        name: "Derek Tibs",
        price: 22.95,
        image: "images/derek-tibs.jpg",
        desc: "Flavorful Ethiopian stir-fry featuring tender beef pieces seasoned with berbere, cardamom, rosemary, cloves, and traditional spices."
      },
      {
        number: 19,
        name: "Alcha Sega Wot",
        price: 20.95,
        image: "images/alcha-sega-wot.jpg",
        desc: "Tender beef cubes braised with onions, garlic, ginger, turmeric, and niter kibbeh (clarified butter)."
      },
      {
        number: 20,
        name: "Key Sega Wot",
        price: 21.95,
        image: "images/key-sega-wot.jpg",
        desc: "Beef cubes simmered with berbere, Ethiopian spices, tomatoes, fresh ginger, onions, garlic, and niter kibbeh."
      },
      {
        number: 21,
        name: "Gored Gored",
        price: 23.95,
        image: "images/gored-gored.jpg",
        desc: "Lean bottom-round beef seasoned with awaze sauce and niter kibbeh (clarified butter)."
      },
      {
        number: 22,
        name: "Kitfo",
        price: 25.95,
        image: "images/kitfo.jpg",
        desc: "Minced beef marinated with mitmita spice and niter kibbeh, served with two sides of ayib (homemade cottage cheese) and spiced collard greens. Available raw, medium, or well done."
      }
    ]
  },

    lamb: {
    title: "Lamb Dishes",
    items: [
      {
        number: 23,
        name: "Lamb Tibs",
        price: 25.95,
        image: "images/lamb-tibs.jpg",
        desc: "Tender cubed lamb marinated and cooked with herbs, onions, tomatoes, and jalapeños."
      }
    ]
  },


  rice: {
    title: "Rice Dishes",
    items: [
      {
        number: 24,
        name: "Rice with Beef",
        price: 20.95,
        image: "images/rice-with-beef.jpg",
        desc: "Tender beef sautéed with aromatic Ethiopian spices, served over perfectly cooked basmati rice with sautéed vegetables."
      },
      {
        number: 25,
        name: "Rice with Fish",
        price: 21.95,
        image: "images/rice-with-fish.jpg",
        desc: "Fresh flaky salmon seasoned with Ethiopian spices and herbs, served over fragrant basmati rice."
      },
      {
        number: 26,
        name: "Rice with Chicken",
        price: 20.95,
        image: "images/rice-with-chicken.jpg",
        desc: "Juicy Ethiopian-style spiced chicken breast served over flavorful basmati rice with garlic, onions, and sautéed vegetables."
      }
    ]
  },


  extras: {
    title: "Extras",
    items: [
      {
        number: 27,
        name: "Injera",
        price: 3.00,
        image: "images/injera.jpg",
        desc: "Gluten-free Ethiopian flatbread made from teff."
      },
      {
        number: 28,
        name: "Rice",
        price: 3.00,
        image: "images/rice.jpg",
        desc: "Steamed basmati rice."
      }
    ]
  },


  desserts: {
    title: "Desserts",
    items: [
      {
        number: 29,
        name: "Baklava",
        price: 7.95,
        image: "images/baklava.jpg",
        desc: "Flaky pastry layered with nuts and sweet syrup."
      }
    ]
  },


  coffeeTea: {
    title: "Ethiopian Organic Coffee & Shay (Tea)",
    items: [
      {
        number: 30,
        name: "Ethiopian Organic Coffee",
        price: 4.50,
        image: "images/ethiopian-coffee.jpg",
        desc: "Freshly brewed Ethiopian organic coffee."
      },
      {
        number: 31,
        name: "Jebena Coffee Ceremony (Serves 2–4 People)",
        price: 19.95,
        image: "images/jebena-coffee.jpg",
        desc: "Traditional Ethiopian coffee ceremony served in a jebena pot."
      },
      {
        number: 32,
        name: "Ethiopian Organic Addis Tea (Shay)",
        price: 3.50,
        image: "images/addis-tea.jpg",
        desc: "Selection of teas including green tea with mint or lemon, pure rooibos, chamomile mint, red raspberry, ginger tea, black tea, Lipton, and English breakfast tea."
      }
    ]
  },


  beverages: {
    title: "Beverages",
    items: [
      {
        number: 33,
        name: "Soda & Bottled Water",
        price: 3.49,
        image: "images/beverages.jpg",
        desc: "Coca-Cola, Diet Coke, Coke Zero, Pepsi, Diet Pepsi, Sprite, Ginger Ale, Fanta, Arizona Iced Tea, sparkling water, and Pure Leaf Tea (sweet/unsweet)."
      }
    ]
  }
};