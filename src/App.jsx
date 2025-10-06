import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const RESTAURANT = {
  name: "Abyssinian Ethiopian Restaurant",
  address: "100 D Main St, Middletown, CT 06457",
  phone: "(860) 794-1960",
  hours: [
    { days: "Tue – Sun", time: "12:00 am – 9:00 pm" },
    { days: "Monday", time: "Closed" }
  ]
};

const MENU = {
  appetizers: [
    { number: 1, name: "Sambusa", price: 9.95, desc: "3 spiced pastries filled with a choice of vegetable or chicken." },
    { number: 2, name: "Key Sir Selata", price: 9.95, desc: "Ethiopian beetroot & potato with red onion, jalapeño, and cilantro." },
    { number: 3, name: "Ayib B’e Gomen", price: 9.95, desc: "Fresh collards with cottage cheese, berbere spice & herbs." },
    { number: 4, name: "Di bulbul Tibs", price: 9.95, desc: "Marinated meatballs with onions, green peppers & fresh salad." },
    { number: 5, name: "Timatim Salad", price: 9.95, desc: "Abyssinian style fresh tomatoes, onions, green peppers, jalapenos with house dressing." },
    { number: 6, name: "Falafel", price: 9.95, desc: "Crispy, golden-brown seasoned ground chickpeas, fresh herbs and garlic with fresh salad." }
  ],
  vegetarian: [
    { number: 7, name: "Shiro Wot", price: 18.95, desc: "Ground chickpeas simmered with berbere sauce." },
    { number: 8, name: "Kosta", price: 18.95, desc: "Sauteed Swiss chard & potatoes slowly cooked in a blend of mild spices." },
    { number: 9, name: "Misir Wot", price: 18.95, desc: "Lentils simmered in spicy Ethiopian berbere, vegetable oil onions and garlic." },
    { number: 10, name: "Alcha Kik Wot", price: 18.95, desc: "Yellow split peas cooked with flavored mild sauce, vegetable oil and garlic." },
    { number: 11, name: "Difin Misir Wot", price: 18.95, desc: "Brown lentils simmered in a flavored mild sauce, olive oil and garlic." },
    { number: 12, name: "Dinch Wot", price: 18.95, desc: "Stew potatoes spiced with berbere. Garlic, onion and ginger." },
    { number: 13, name: "Veggie Combo (5 items)", price: 22.95, desc: "5 Veggie consists of Misir Wot, Alcha Kik Wot, Difin Misir Wot, Cabbage, and Fossolia (Ethiopian style green bean with carrot)." },
    { number: 14, name: "Special Veggie Combo (8 items)", price: 27.95, desc: "8 All Vegetarian Option included Cabbage and Fossolia (Ethiopian style green bean with carrot)." },
    { number: 15, name: "Abyssinian Special Meat/Veggie Platter", price: 29.95, desc: "Choice of Five different dishes from our all vegetarian options and Select Meat options: Doro Wot stew with egg, Alicha Sega Wot, Key Sega Wot." }
  ],
  chicken: [
    { number: 16, name: "Doro Wot", price: 21.95, desc: "Richly spiced, fragrant, delicious chicken drumstick and egg stew slowly cooked onions, berbere, kibbe (spiced clarified butter), ginger, and garlic." },
    { number: 17, name: "Doro Tibs", price: 19.95, desc: "Herb grilled chicken tossed with Garlic, awaze sauce, onions, ginger & green pepper." }
  ],
  beef: [
    { number: 18, name: "Awaze Tibs", price: 19.95, desc: "Tender cube beef marinated & cooked with awaze sauce, herbs, tomatoes & jalapeno." },
    { number: 19, name: "Derek Tibs", price: 21.95, desc: "Flavorful Ethiopian stir fry featuring chunks or strips of beef, berbere, cardamon, olive oil, traditional spices, rosemary and cloves." },
    { number: 20, name: "Alcha Sega Wot", price: 19.95, desc: "Tender beef cubes braised with onion, garlic, ginger, turmeric, and kibe (clarified butter)." },
    { number: 21, name: "Key Sega Wot", price: 21.95, desc: "Beef cubes stew seasoned with berbere, potato, olive oil, Ethiopian spices, tomatoes, fresh ginger, onions, Garlic and kibbe (clarified butter)." },
    { number: 22, name: "Gored Gored", price: 22.95, desc: "Lean bottom round beef seasoned with awaze sauce, kibe (clarified butter)." },
    { number: 23, name: "Kitfo", price: 24.95, desc: "Minced Beef That’s Marinated in Spices (Mitmita) And Kibbe (Clarified Butter), Two sides of Ayib. (homemade cottage cheese) and spiced collard greens. Can be ordered; raw/medium &   well done." },
    { number: 24, name: "Bozena Shiro", price: 19.95, desc: "Stew seasoned mild chickpea powder cooked with onion, garlic, tomatoes and beef." }
  ],
  lamb: [
    { number: 25, name: "Lamb Tibs", price: 24.95, desc: "Tender Cubed Lamb Marinated & Cooked with Herbs, Onion, Tomatoes, Jalapeno." }
  ],
  fish: [
    { number: 26, name: "Asa Tibs", price: 21.95, desc: "Salmon grilled Abyssinian style simmered in red sauce & clarified butter, berbere, onion." }
  ],
  rice: [
    { number: 27, name: "Rice with Beef", price: 19.95, desc: "Tender beef sauteed with aromatic spice, served over perfectly cooked rice and accompanied by sauteed vegetables." },
    { number: 28, name: "Rice with Fish", price: 21.95, desc: "Fresh, flaky salmon seasoned with Ethiopian spiced and herbs, olive oil served over a bed of fragrant basmati rice." },
    { number: 29, name: "Rice with Chicken", price: 19.95, desc: "Juicy, spiced Ethiopian style chicken breast cooked to perfection and served over flavorful basmati rice, garlic, and onion with sauteed vegetables." }
  ],
 extras: [
    { number: 30, name: "Injera", price: 3.00, desc: "Gluten-free Ethiopian flatbread made from teff." },
    { number: 31, name: "Rice", price: 3.00, desc: "Steamed basmati rice." }
  ],
  desserts: [
    { number: 32, name: "Baklava", price: 7.95, desc: "Flaky pastry layered with nuts and sweet syrup." }
  ],
  beverages: [
    { number: 33, name: "Soda", price: 3.49, desc: "Coke, Diet Coke, Sprite, Ginger Ale, Arizona Iced Tea, Sparkling Water." },
    { number: 34, name: "Ethiopian Organic Coffee", price: 4.25, desc: "Freshly brewed Ethiopian coffee." },
    { number: 35, name: "Jebena Coffee with Ceremony", price: 19.95, desc: "Traditional Ethiopian Organic coffee served in jebena pot for 2-4 person." },
    { number: 36, name: "Shahi", price: 3.25, desc: "Green Tea Mint | Lemon, Pure Rooibos (Red Tea), (Herbal Tea) Chamomile Mint, Red Raspberry, & Ginger Tea, Black Tea, (Lipton)." }
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
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 drop-shadow-lg">
        {RESTAURANT.name}
      </h1>
      <p className="max-w-xl mx-auto text-lg md:text-xl mb-6">
        Authentic flavors of Ethiopia – vibrant stews, heirloom coffee & communal hospitality.
      </p>
      <div className="space-x-4 mb-6">
        <Button variant="secondary" size="lg" className="text-lg" onClick={() => document.getElementById("reserveModal").click()}>
          Reserve a Table
        </Button>
      </div>

      {/* QR code ordering options */}
      <div className="flex flex-wrap justify-center gap-6 items-center">
        {/* DoorDash */}
        <a
          href="https://order.online/business/abyssinian-ethiopian-restaurant-589644"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/doordash_logo.png"
            alt="Order on DoorDash"
            className="h-12 w-auto"
          />
        </a>

        {/* QR Code for new provider */}
        <div className="flex flex-col items-center">
          <img
            src="/img/qrcode.jpg"
            alt="Order via QR Code"
            className="h-24 w-24 rounded shadow-md"
          />
          <span className="text-sm mt-1 text-white">Scan to Order</span>
        </div>

        {/* Dine Online */}
        <a
          href="https://abyssiniaethiopianrestaurant.dine.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/dine_online_logo.png"
            alt="Order on Dine.Online"
            className="h-12 w-auto"
          />
        </a>
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
    vegetarian: "(#7 – #12 Served with two sides of your choice from (#9, #10, #11) Cabbage, Fossolia with Injera)",
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
