import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const RESTAURANT = {
  name: "Abyssinian Ethiopian Restaurant",
  address: "100 Main St, Middletown, CT 06457",
  phone: "(860) 794-1960",
  hours: [
    { days: "Tue – Fri", time: "11:00 am – 9:00 pm" },
    { days: "Sat & Sun", time: "12:00 pm – 9:00 pm" },
    { days: "Monday", time: "Closed" }
  ]
};

const MENU = {
  appetizers: [
    { number: 1, name: "Sambusa", price: 9.95, desc: "3 spiced pastries filled with a choice of vegetable or chicken." },
    { number: 2, name: "Key Sir Selata", price: 9.95, desc: "Ethiopian beetroot & potato with red onion, jalapeño, and cilantro." },
    { number: 3, name: "Ayib B’e Gomen", price: 9.95, desc: "Fresh collards with cottage cheese, berbere spice & herbs." },
    { number: 4, name: "Dibulbul Tibs", price: 9.95, desc: "Marinated meatballs with onions, green peppers & fresh salad." },
    { number: 5, name: "Timatim Salad", price: 9.95, desc: "Fresh tomatoes, onions, green peppers, jalapeños in house dressing." },
    { number: 6, name: "Falafel", price: 9.95, desc: "Crispy chickpea fritters with herbs, garlic & fresh salad." }
  ],
  vegetarian: [
    { number: 7, name: "Shiro Wot", price: 18.95, desc: "Ground chickpeas simmered with berbere sauce." },
    { number: 8, name: "Kosta", price: 18.95, desc: "Swiss chard & potatoes cooked in mild spices." },
    { number: 9, name: "Timtimo Wot", price: 18.95, desc: "Lentils in spicy berbere, onions & garlic." },
    { number: 10, name: "Alcha Kik Wot", price: 18.95, desc: "Yellow split peas in a mild garlic sauce." },
    { number: 11, name: "Dinch Wot", price: 18.95, desc: "Potatoes stewed with berbere, garlic & ginger." },
    { number: 12, name: "Difin Misir Wot", price: 18.95, desc: "Brown lentils in a mild garlic & olive oil sauce." },
    { number: 13, name: "Veggie Combo (5 items)", price: 21.95, desc: "Timtimo, Alcha Kik, Difin Misir, cabbage, and fossolia." },
    { number: 14, name: "Special Veggie Combo (8 items)", price: 26.95, desc: "Shiro, Kosta, Timtimo, Alcha Kik, Dinch, Difin Misir, cabbage & fossolia." }
  ],
  chicken: [
    { number: 15, name: "Doro Wot", price: 19.95, desc: "Spiced chicken & egg stew with berbere, onions, ginger, garlic & kibbe." },
    { number: 16, name: "Doro Tibs", price: 19.95, desc: "Grilled chicken with garlic, awaze, onions, ginger & green pepper." }
  ],
  beef: [
    { number: 17, name: "Awaze Tibs", price: 19.95, desc: "Beef with awaze sauce, herbs, tomatoes & jalapeño." },
    { number: 18, name: "Derek Tibs", price: 21.95, desc: "Beef stir fry with berbere, cardamom, cloves, rosemary & olive oil." },
    { number: 19, name: "Alcha Sega Wot", price: 19.95, desc: "Beef braised in turmeric, garlic, ginger & clarified butter." },
    { number: 20, name: "Key Sega Wot", price: 21.95, desc: "Beef stew with berbere, potatoes, garlic, tomato, ginger & kibbe." },
    { number: 21, name: "Gored Gored", price: 22.95, desc: "Raw beef cubes with awaze & kibbe." },
    { number: 22, name: "Kitfo", price: 23.95, desc: "Minced beef with mitmita & kibbe. Served raw/medium/well-done with ayib & gomen." },
    { number: 23, name: "Bozena Shiro", price: 19.95, desc: "Chickpea stew with beef, onions, garlic & tomato." }
  ],
  lamb: [
    { number: 24, name: "Lamb Tibs", price: 24.95, desc: "Lamb with herbs, onion, tomatoes & jalapeño." }
  ],
  fish: [
    { number: 25, name: "Asa Tibs", price: 21.95, desc: "Grilled salmon in red sauce with berbere, onions & clarified butter." },
    { number: 26, name: "Rice with Fish", price: 21.95, desc: "Flaky salmon on seasoned basmati rice with sautéed vegetables." }
  ],
  rice: [
    { number: 27, name: "Rice with Beef", price: 19.95, desc: "Beef sautéed with spices, served over basmati rice & vegetables." },
    { number: 28, name: "Rice with Chicken", price: 19.95, desc: "Spiced chicken breast over basmati rice, garlic, onion & veggies." }
  ],
  desserts: [
    { number: 29, name: "Baklava", price: 7.95, desc: "Flaky pastry with nuts & syrup." }
  ],
  beverages: [
    { number: 30, name: "Ethiopian Organic Coffee", price: 3.95, desc: "Freshly brewed Ethiopian coffee." },
    { number: 31, name: "Jebena Coffee Ceremony", price: 19.95, desc: "Traditional coffee served in jebena pot." },
    { number: 32, name: "Shahi Green/Red/Herbal/Ginger/Black Tea", price: 2.95, desc: "Selection of teas including mint, lemon & Lipton." },
    { number: 33, name: "Soda & Sparkling Water", price: 2.75, desc: "Coke, Diet Coke, Sprite, Ginger Ale, Arizona Iced Tea, Sparkling Water." }
  ],
  extras: [
    { number: 34, name: "Injera", price: 2.95, desc: "Gluten-free Ethiopian flatbread made from teff." },
    { number: 35, name: "Rice", price: 2.95, desc: "Steamed basmati rice." }
  ]
};

const Hero = () => (
  <section className="relative h-[80vh] overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/img/splash_compressed.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 drop-shadow-lg">{RESTAURANT.name}</h1>
      <p className="max-w-xl mx-auto text-lg md:text-xl mb-6">Authentic flavors of Ethiopia – vibrant stews, heirloom coffee & communal hospitality.</p>
      <div className="space-x-4">
        <a href="https://www.order.store/store/abyssinian-ethiopian-restaurant-100-main-street-middletown/fP4XdguOVWGjyLWtAwQeGw" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="text-lg">Order Online</Button>
        </a>
        <Button variant="secondary" size="lg" className="text-lg" onClick={() => document.getElementById("reserveModal").click()}>Reserve a Table</Button>
      </div>
    </div>
  </section>
);



const SectionTitle = ({children}) => (
  <h2 className="text-3xl font-semibold text-amber-700 mb-6 text-center tracking-wide">{children}</h2>
);

const MenuCategory = ({ title, items }) => {
  // Optional notes for selected categories
  const NOTES = {
    vegetarian: "(#7 – #12 Served with 3 Veggie sides of your choice from #13, with Injera)",
    chicken: "(Served with 3 Veggie sides of your choice from #13, with Injera)",
    beef: "(Served with 3 Veggie sides of your choice from #13, with Injera)",
    lamb: "(Served with 3 Veggie sides of your choice from #13, with Injera)",
    fish: "(Served with 3 Veggie sides of your choice from #13, with Injera)",
  };

  const note = NOTES[title.toLowerCase()];

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-medium text-amber-600 mb-2">{title}</h3>
      {note && (
        <p className="text-sm text-amber-700 italic mb-4">{note}</p>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => {
          const baseFile = item.name.toLowerCase().replace(/[^a-z0-9]/g, "_");
          return (
            <Card key={i} className="overflow-hidden border-none shadow hover:shadow-lg transition">
              <div className="flex">
                <img
                  src={`/img/${baseFile}.jpg`}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-l-md hidden sm:block"
                  onError={(e) => {
                    const fallback = `/img/${baseFile}.png`;
                    if (!e.target.dataset.fallbackTried) {
                      e.target.src = fallback;
                      e.target.dataset.fallbackTried = true;
                    } else {
                      e.target.style.display = 'none';
                    }
                  }}
                />
                <CardContent className="p-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{item.number}. {item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-700 font-bold whitespace-nowrap ml-4">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const MenuSection = () => (
  <section id="menu" className="container mx-auto px-4 py-20">
    <SectionTitle>Our Menu</SectionTitle>
    <Accordion type="multiple" defaultValue={["app","veg"]} className="space-y-6">
      {Object.entries(MENU).map(([catKey, items]) => (
        <AccordionItem key={catKey} value={catKey}>
          <AccordionTrigger className="text-xl capitalize">{catKey}</AccordionTrigger>
          <AccordionContent>
            <MenuCategory title={catKey.replace(/^[a-z]/,c=>c.toUpperCase())} items={items} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

const AboutSection = () => (
  <section id="about" className="bg-amber-50 py-20 px-4">
    <SectionTitle>Ethiopian Super Food & Hospitality</SectionTitle>
    <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
      <p>Ethiopian cuisine is built on <strong>superfoods</strong> like teff (the gluten‑free grain used for our fluffy injera), protein‑rich lentils, antioxidant‑packed spices and slow‑simmered stews. Each dish is crafted to nourish body & soul.</p>
      <p>At Abyssinian, we celebrate <em>gursha</em> – the act of sharing food from a common platter – symbolizing community and friendship. Our coffee ceremony, performed tableside on request, roasts heirloom beans to fill the room with an unforgettable aroma.</p>
      <p>Join us for a journey through history, spice and warmth – right here in Middletown.</p>
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="py-20 px-4 container mx-auto">
    <SectionTitle>Gallery</SectionTitle>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "/img/gallary1.jpg",
        "/img/gallary2.jpg",
        "/img/gallary3.jpg",
        "/img/gallary4.jpg",
        "/img/gallary5.jpg",
        "/img/gallary6.jpg"
      ].map((src,i)=>(
        <img
          key={i}
          src={src}
          alt={`Gallery ${i + 1}`}
          className="w-full h-60 object-cover rounded-xl shadow-md"
        />
      ))}
    </div>
  </section>
);


const ContactSection = () => (
  <section id="contact" className="bg-gray-900 text-gray-100 py-12 px-4">
    <div className="container mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
        <p>{RESTAURANT.address}</p>
        <p className="mt-2 font-medium">{RESTAURANT.phone}</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Hours</h3>
        {RESTAURANT.hours.map((h,i)=>(<p key={i}>{h.days}: {h.time}</p>))}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
        <p>Follow us on Instagram & Facebook @AbyssinianFood</p>
        <Button variant="secondary" className="mt-4">Join Email List</Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 text-center py-6 text-sm">
    <p>&copy; {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.</p>
  </footer>
);

export default function App() {
  const [navOpen,setNavOpen]=useState(false);
  return (
    <div className="font-sans">
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow z-40">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center">
          <img src="/img/abyssinian_logo.jpg" alt="Abyssinian Logo" className="h-12 w-auto object-contain" />
        </a>

          <button className="md:hidden" onClick={()=>setNavOpen(o=>!o)}>
            <span className="sr-only">Toggle Menu</span>☰
          </button>
          <nav className={`space-x-6 md:flex ${navOpen?"block mt-4":"hidden md:block"}`}>
            {["Home","Menu","About","Gallery","Contact"].map(label =>
              <a key={label} href={`#${label.toLowerCase()}`} className="text-gray-700 hover:text-amber-700 font-medium block md:inline">{label}</a>
            )}
            <a href="https://order.online/business/abyssinian-ethiopian-restaurant-589644" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="hidden md:inline">Order</Button>
            </a>
          </nav>
        </div>
      </header>
      <main className="pt-16">
        <Hero/>
        <MenuSection/>
        <AboutSection/>
        <GallerySection/>
        <ContactSection/>
      </main>
      <Footer/>
      <Dialog>
        <DialogTrigger asChild>
          <button id="reserveModal" className="hidden" />
        </DialogTrigger>
        <DialogContent>
          <h3 className="text-xl font-semibold mb-4">Reserve a Table</h3>
          <p>Reservation integration coming soon. Call us at {RESTAURANT.phone}.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
