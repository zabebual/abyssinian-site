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
    { name: "Sambusa (Veg or Chicken)", price: 9.95, desc: "Three crispy pastries filled with spiced vegetables or chicken." },
    { name: "Key Sir Salad", price: 9.95, desc: "Ethiopian beetroot & potato salad with red onion and garlic." },
    { name: "Ayib Be’ Gomen", price: 9.95, desc: "Homemade cottage cheese with berbere, collards & herbs." },
    { name: "Dibulbul Tibs", price: 9.95, desc: "Marinated meatballs sautéed with onion, green pepper & herbs." },
    { name: "Timatim Salad", price: 9.95, desc: "Tomatoes, onion & jalapeños tossed in herbed dressing." },
    { name: "Falafel", price: 9.95, desc: "Golden‑brown chickpea fritters with fresh herb salad." }
  ],
  vegetarian: [
    { name: "Shiro Wot", price: 18.95, desc: "Ground chickpeas simmered in berbere sauce." },
    { name: "Kosta", price: 18.95, desc: "Spinach & potatoes cooked in a mild spice blend." },
    { name: "Misir Wot", price: 18.95, desc: "Red lentils stewed in berbere." },
    { name: "Alcha Kik Wot", price: 18.95, desc: "Yellow split‑peas in a mild garlic & olive‑oil sauce." },
    { name: "Dinch Wot", price: 18.95, desc: "Potatoes stewed with berbere, garlic & ginger." },
    { name: "Defen Misir Wot", price: 18.95, desc: "Brown lentils in a lightly spiced sauce." },
    { name: "Veggie Be’yaynetu (Six‑Item Combo)", price: 21.95, desc: "Sampler platter: Shiro, Misir, Alcha Kik, Cabbage, Fossolia & Brown lentils." }
  ],
  beef: [
    { name: "Yesiga Wot Be‑Denish", price: 15.95, desc: "Beef & potatoes in rich red‑pepper sauce with garlic & cardamom." },
    { name: "A‑Yesega Wot", price: 16.95, desc: "Tender beef simmered with ginger, garlic, onions & green pepper." },
    { name: "B‑Yesega Alicha Be‑Dinish", price: 15.95, desc: "Beef & potatoes in mild alicha sauce with carrots & garlic." },
    { name: "Kitfo (Fri & Sat)", price: 16.95, desc: "Ethiopian steak tartar seasoned with herb butter & mitmita." },
    { name: "Yebere Tibs", price: 16.95, desc: "Sautéed beef strips with onion, garlic & jalapeño." },
    { name: "Bozena Shiro", price: 15.95, desc: "Spiced minced beef blended with chickpea stew, served bubbling hot." }
  ],
  chicken: [
    { name: "Yedoro Wot", price: 16.95, desc: "Chicken on‑the‑bone slow‑simmered in berbere with boiled egg & cottage cheese." },
    { name: "Doro Tibs", price: 14.95, desc: "Grilled chicken tossed with awaze, garlic & green pepper." }
  ],
  lamb: [
    { name: "Yebeg Tibs", price: 17.95, desc: "Lamb sautéed with onion, tomato, peppers & aromatics." }
  ],
  desserts: [
    { name: "Tea Cake", price: 5.5, desc: "Light, fragrant sponge – perfect with coffee." },
    { name: "Marble Cake", price: 6, desc: "Classic vanilla‑chocolate swirl." },
    { name: "Tuxedo Cake", price: 6.5, desc: "Layers of dark chocolate & vanilla cream." }
  ],
  beverages: [
    { name: "Ethiopian Organic Coffee (Jebena)", price: 4.5, desc: "Freshly roasted & brewed in traditional clay pot." },
    { name: "Macchiato", price: 4, desc: "Ethiopian espresso with a dash of steamed milk." },
    { name: "Black Tea / Green Tea", price: 3.5, desc: "Loose‑leaf, served hot." },
    { name: "Herbal & Ginger Teas", price: 3.5, desc: "Caffeine‑free infusions to soothe & revive." }
  ]
};

const Hero = () => (
  <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage:'url(https://images.unsplash.com/photo-1582268611952-7a2b837446d5?auto=format&fit=crop&w=1280&q=80)'}}>
    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 drop-shadow-lg">{RESTAURANT.name}</h1>
      <p className="max-w-xl mx-auto text-lg md:text-xl mb-6">Authentic flavors of Ethiopia – vibrant stews, heirloom coffee & communal hospitality.</p>
      <div className="space-x-4">
        <a href="https://order.online/business/abyssinian-ethiopian-restaurant-589644" target="_blank" rel="noopener noreferrer">
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

const MenuCategory = ({title, items}) => (
  <div className="mb-12">
    <h3 className="text-2xl font-medium text-amber-600 mb-4">{title}</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item,i)=>(
        <Card key={i} className="hover:shadow-xl transition">
          <CardContent className="p-4 flex justify-between gap-4">
            <div>
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
            </div>
            <span className="text-amber-700 font-bold whitespace-nowrap">${item.price.toFixed(2)}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

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
          <a href="#" className="text-xl font-bold text-amber-700">Abyssinian</a>
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
