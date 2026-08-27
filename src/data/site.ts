import type {
  JourneyStep,
  NavLink,
  Philosophy,
  Product,
  Project,
  Stat,
  Testimonial } from
'../types/portfolio';

export const maker = {
  name: 'Jeyanthi Samraj',
  brand: 'Jeyanthi',
  role: 'Artisan • Designer • Entrepreneur',
  tagline: 'Handcrafted with nature, tradition & creativity.',
  email: 'Jeyanthini1990@gmail.com',
  phone: '+94 77 325 2217',
  whatsapp: 'https://wa.me/94773252217',
  location: 'Jaffna, Sri Lanka'
};

export const navLinks: NavLink[] = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Projects', href: '#projects' },
{ label: 'Products', href: '#products' },
{ label: 'Journey', href: '#journey' },
{ label: 'Contact', href: '#contact' }];


export const stats: Stat[] = [
{ value: '5+', label: 'Years of craft experience' },
{ value: '100+', label: 'Handmade creations' },
{ value: '50+', label: 'Happy customers' },
{ value: '10+', label: 'Featured collections' }];


export const philosophies: Philosophy[] = [
{
  title: 'Nature',
  description:
  'Working with natural materials while respecting their unique character.',
  icon: 'leaf'
},
{
  title: 'Tradition',
  description:
  'Preserving traditional techniques and cultural craftsmanship.',
  icon: 'loom'
},
{
  title: 'Creativity',
  description:
  'Giving timeless materials a fresh and contemporary expression.',
  icon: 'spark'
},
{
  title: 'Purpose',
  description: 'Creating products that are beautiful, useful, and meaningful.',
  icon: 'purpose'
}];


export const products: Product[] = [
{
  id: 'market-basket',
  name: 'Palmyrah Market Basket',
  description:
  'A deep, softly rounded basket woven in a single continuous coil — made for markets, mornings and everyday carrying.',
  material: 'Palmyrah leaf, undyed',
  image: "/9294087a-4f4c-46a3-bdc6-2b6c4a66d84d.jpg",

  span: 'lg:col-span-7',
  aspect: 'aspect-[4/3]'
},
{
  id: 'shoulder-tote',
  name: 'Woven Shoulder Tote',
  description:
  'A structured everyday bag with a tight diagonal weave and soft leather-toned handles.',
  material: 'Palmyrah fibre, tanned trim',
  image: "/62e09233-479a-4cde-8b45-8269610e9516.jpg",

  span: 'lg:col-span-5',
  aspect: 'aspect-[4/3]'
},
{
  id: 'wall-disc',
  name: 'Sunburst Wall Disc',
  description:
  'A large coiled wall piece with hand-placed pigment motifs, drawn from northern weaving patterns.',
  material: 'Palmyrah, natural pigment',
  image: "/fd79933e-17f6-40c3-ab5c-3cdc770cff32.jpg",

  span: 'lg:col-span-5',
  aspect: 'aspect-[4/3]'
},
{
  id: 'serving-trays',
  name: 'Serving Tray Pair',
  description:
  'Two flat woven trays with a muted green border — light in the hand, made to be used daily.',
  material: 'Palmyrah, plant-dyed edge',
  image: "/dda59cd1-47dc-4d27-bc4a-6f0c311ec894.jpg",

  span: 'lg:col-span-7',
  aspect: 'aspect-[4/3]'
},
{
  id: 'pendant-shade',
  name: 'Woven Pendant Shade',
  description:
  'An open-weave shade that scatters warm light across a room in fine woven shadows.',
  material: 'Palmyrah, brass fitting',
  image: "/6fde2e68-58ee-467e-893a-98f9b4681afe.jpg",

  span: 'lg:col-span-6',
  aspect: 'aspect-[4/3]'
},
{
  id: 'coaster-set',
  name: 'Table Coaster Set',
  description:
  'A set of six coasters in alternating cream and kithul brown, finished with a hidden stitch.',
  material: 'Palmyrah, kithul fibre',
  image: "/d32ac71f-ce2f-479b-86ee-32b7fb68bccd.jpg",

  span: 'lg:col-span-6',
  aspect: 'aspect-[4/3]'
}];


export const projects: Project[] = [
{
  id: 'palmyrah-home',
  title: 'Palmyrah Home Collection',
  year: '2026',
  category: 'Home Décor',
  description:
  'A collection of handcrafted decorative pieces created using traditional palmyrah weaving techniques.',
  image: "/3cb01f3b-b66c-4e4c-87bc-86a8da26b77c.jpg"

},
{
  id: 'basket-collection',
  title: 'Custom Woven Basket Collection',
  year: '2025',
  category: 'Custom Craft',
  description:
  'Designed and handcrafted a collection of natural woven baskets for a boutique interior project.',
  image: "/fa784c1c-8211-4c37-8b24-7c4071ae61aa.jpg"

},
{
  id: 'craft-revival',
  title: 'Traditional Craft Revival',
  year: '2025',
  category: 'Cultural Craft',
  description:
  'A project focused on reimagining traditional craft techniques through contemporary product design.',
  image: "/38526808-9107-473f-a570-1ca794006733.jpg"

},
{
  id: 'artisan-market',
  title: 'Artisan Market Series',
  year: '2024',
  category: 'Brand & Retail',
  description:
  'A travelling market presentation of handmade bags and accessories, styled around natural linen and light.',
  image: "/07448426-3300-4742-ab42-5b00b306045c.jpg"

},
{
  id: 'woven-light',
  title: 'Woven Light Study',
  year: '2024',
  category: 'Material Research',
  description:
  'An exploration of how varying weave density shapes the way warm light falls through palmyrah fibre.',
  image: "/6fde2e68-58ee-467e-893a-98f9b4681afe.jpg"

}];


export const journey: JourneyStep[] = [
{
  year: '2021',
  title: 'Discovering Craft',
  description:
  'Started exploring traditional handmade techniques and natural materials alongside weavers in her village.'
},
{
  year: '2022',
  title: 'First Collection',
  description:
  'Created her first small collection of handmade products, sold through local markets and word of mouth.'
},
{
  year: '2024',
  title: 'Growing the Brand',
  description:
  'Expanded her product range and began working with customers on commissioned and custom orders.'
},
{
  year: '2026',
  title: 'Building a Creative Business',
  description:
  'Developing a recognisable craft brand and bringing locally inspired handmade products to a wider audience.'
}];


export const skills: string[] = [
'Hand Weaving',
'Natural Material Craft',
'Product Design',
'Handmade Home Décor',
'Custom Crafting',
'Traditional Craft Techniques',
'Product Styling',
'Small Business Entrepreneurship'];


export const testimonials: Testimonial[] = [
{
  quote:
  'The craftsmanship and attention to detail were incredible. Every piece felt unique and personal.',
  name: 'Anjali Perera',
  location: 'Colombo, Sri Lanka',
  avatar: "/ac4546a5-7dbb-4d1e-832c-b0e2d1150a35.jpg"

},
{
  quote:
  'She understood the mood of our space immediately and wove pieces that felt like they had always belonged there.',
  name: 'Marta Lindqvist',
  location: 'Copenhagen, Denmark',
  avatar: "/6df0aae8-a587-4490-a9c5-31e954c74f9a.jpg"

},
{
  quote:
  'Working with her on a custom order was easy and warm. The finished baskets are still the first thing guests notice.',
  name: 'Ruwan Fernando',
  location: 'Kandy, Sri Lanka',
  avatar: "/216b426e-c0e2-4368-abf5-515b41069c67.jpg"

}];


export const heroImage = "/96f9fcb8-e965-4fa2-8f84-05ec8af6f496.jpg";


export const aboutImage = "/8e804d41-e256-472e-8c32-f0c309397f84.jpg";