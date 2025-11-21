import { Service, Sector, InsulationType, Testimonial, BlogPost, FAQ } from '@/types';

export const services: Service[] = [
  {
    id: 'loft-insulation-installation',
    title: 'Loft Insulation Installation',
    description: 'Professional installation of high-quality loft insulation to maximize energy efficiency and reduce heating costs.',
    icon: 'Home',
    href: '/services/loft-insulation-installation'
  },
  {
    id: 'loft-clearance-preparation',
    title: 'Loft Clearance & Preparation',
    description: 'Complete loft clearance and preparation services to ensure optimal insulation installation conditions.',
    icon: 'Trash2',
    href: '/services/loft-clearance-preparation'
  },
  {
    id: 'loft-boarding-storage',
    title: 'Loft Boarding & Storage',
    description: 'Transform your loft into usable storage space with professional boarding solutions.',
    icon: 'Package',
    href: '/services/loft-boarding-storage'
  },
  {
    id: 'roof-rafter-insulation',
    title: 'Roof / Rafter Insulation',
    description: 'Specialized insulation for roof rafters to prevent heat loss and improve thermal performance.',
    icon: 'Shield',
    href: '/services/roof-rafter-insulation'
  },
  {
    id: 'cavity-wall-floor-insulation',
    title: 'Cavity Wall & Floor Insulation',
    description: 'Comprehensive cavity wall and floor insulation services for complete home energy efficiency.',
    icon: 'Layers',
    href: '/services/cavity-wall-floor-insulation'
  },
  {
    id: 'insulation-removal-replacement',
    title: 'Insulation Removal & Replacement',
    description: 'Safe removal of old insulation and installation of modern, efficient alternatives.',
    icon: 'RefreshCw',
    href: '/services/insulation-removal-replacement'
  }
];

export const sectors: Sector[] = [
  {
    id: 'residential-homes',
    title: 'Residential Homes',
    description: 'Professional insulation services for homeowners looking to improve energy efficiency and comfort.',
    icon: 'Home',
    href: '/sectors/residential-homes'
  },
  {
    id: 'commercial-industrial',
    title: 'Commercial & Industrial Buildings',
    description: 'Large-scale insulation solutions for commercial and industrial properties.',
    icon: 'Building',
    href: '/sectors/commercial-industrial'
  },
  {
    id: 'housing-associations',
    title: 'Housing Associations / Builders',
    description: 'Bulk insulation services for housing associations and construction companies.',
    icon: 'Users',
    href: '/sectors/housing-associations'
  },
  {
    id: 'landlords-property-managers',
    title: 'Landlords / Property Managers',
    description: 'Professional insulation services for rental properties and property management companies.',
    icon: 'Key',
    href: '/sectors/landlords-property-managers'
  },
  {
    id: 'public-sector',
    title: 'Public Sector',
    description: 'Specialized insulation solutions for government buildings, schools, hospitals, and public facilities.',
    icon: 'Shield',
    href: '/sectors/public-sector'
  },
  {
    id: 'countries-locations',
    title: 'Countries / Locations',
    description: 'Nationwide coverage across the UK with certified installers in every region.',
    icon: 'MapPin',
    href: '/sectors/countries-locations'
  }
];

export const insulationTypes: InsulationType[] = [
  {
    id: 'batts-rolls',
    title: 'Batts & Rolls',
    description: 'Traditional fiberglass or mineral wool insulation in pre-cut batts or continuous rolls.',
    pros: ['Easy to install', 'Cost-effective', 'Good thermal performance', 'Widely available'],
    cons: ['Can settle over time', 'May irritate skin', 'Requires careful installation'],
    icon: 'Layers'
  },
  {
    id: 'loose-fill',
    title: 'Loose-Fill Insulation',
    description: 'Blown-in insulation that fills irregular spaces and provides excellent coverage.',
    pros: ['Fills gaps completely', 'No cutting required', 'Good for retrofits', 'Excellent coverage'],
    cons: ['Requires special equipment', 'Can settle', 'May need topping up'],
    icon: 'Wind'
  },
  {
    id: 'spray-foam',
    title: 'Spray Foam Insulation',
    description: 'Expanding foam that creates an airtight seal and provides superior insulation.',
    pros: ['Airtight seal', 'High R-value', 'Moisture resistant', 'Long-lasting'],
    cons: ['Higher cost', 'Professional installation required', 'Can off-gas initially'],
    icon: 'Droplets'
  },
  {
    id: 'rigid-foam-board',
    title: 'Rigid Foam Board',
    description: 'Rigid panels made from polystyrene, polyisocyanurate, or polyurethane.',
    pros: ['High R-value per inch', 'Moisture resistant', 'Easy to cut', 'Good for walls'],
    cons: ['More expensive', 'Requires careful sealing', 'Can be damaged by UV'],
    icon: 'Square'
  },
  {
    id: 'radiant-barrier',
    title: 'Radiant Barrier',
    description: 'Reflective material that blocks radiant heat transfer, especially effective in hot climates.',
    pros: ['Reflects radiant heat', 'Thin profile', 'No settling', 'Good for attics'],
    cons: ['Limited effectiveness in cold climates', 'Requires air space', 'Can be damaged'],
    icon: 'Sun'
  },
  {
    id: 'multifoil',
    title: 'Multifoil',
    description: 'Multi-layer reflective insulation combining different materials for optimal performance.',
    pros: ['Thin and lightweight', 'Good thermal performance', 'Easy to handle', 'Versatile'],
    cons: ['Higher cost', 'Requires proper installation', 'Limited availability'],
    icon: 'Layers'
  },
  {
    id: 'natural-materials',
    title: 'Natural Materials',
    description: 'Eco-friendly insulation made from wool, cotton, hemp, or other natural fibers.',
    pros: ['Eco-friendly', 'Non-toxic', 'Good moisture handling', 'Sustainable'],
    cons: ['Higher cost', 'May attract pests', 'Limited availability', 'Requires treatment'],
    icon: 'Leaf'
  },
  {
    id: 'foam-in-place',
    title: 'Foam-in-Place Injection',
    description: 'Liquid foam injected into wall cavities that expands and hardens in place.',
    pros: ['Fills all gaps', 'Airtight seal', 'Good for existing walls', 'Long-lasting'],
    cons: ['Professional installation only', 'Higher cost', 'Can be messy', 'Difficult to remove'],
    icon: 'Syringe'
  },
  {
    id: 'insulating-concrete-forms',
    title: 'Insulating Concrete Forms (ICFs)',
    description: 'Hollow foam blocks that are stacked and filled with concrete for walls.',
    pros: ['Excellent insulation', 'Strong structure', 'Airtight', 'Good soundproofing'],
    cons: ['High cost', 'Complex installation', 'Requires planning', 'Limited to new construction'],
    icon: 'Box'
  },
  {
    id: 'structural-insulated-panels',
    title: 'Structural Insulated Panels (SIPs)',
    description: 'Prefabricated panels with foam core between structural facings.',
    pros: ['High R-value', 'Fast construction', 'Airtight', 'Strong'],
    cons: ['High cost', 'Requires planning', 'Limited to new construction', 'Transportation challenges'],
    icon: 'Package'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Manchester',
    rating: 5,
    content: 'Excellent service from start to finish. Our energy bills have reduced by 30% since the insulation was installed. Highly recommend!',
    image: '/images/testimonials/sarah.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'London',
    rating: 5,
    content: 'Professional team, clean work, and great results. The loft is now properly insulated and our home is much warmer.',
    image: '/images/testimonials/michael.jpg'
  },
  {
    id: '3',
    name: 'Emma Williams',
    location: 'Birmingham',
    rating: 5,
    content: 'Outstanding quality and customer service. The installation was completed on time and the results exceeded our expectations.',
    image: '/images/testimonials/emma.jpg'
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Leeds',
    rating: 5,
    content: 'Great value for money. The team was knowledgeable and helped us choose the right insulation for our needs.',
    image: '/images/testimonials/david.jpg'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Free Loft Insulation in London – How to Qualify & Apply',
    excerpt: 'Learn how to qualify for free loft insulation in London. Government grants, eligibility criteria, and application process explained.',
    date: '2024-01-20',
    author: 'LIS UK',
    href: '/blog/free-loft-insulation-london',
    image: '/images/blog/free-loft-insulation-london.jpg'
  },
  // {
  //   id: '2',
  //   title: 'Loft Insulation Types Guide – Choose the Best Option for Your Home',
  //   excerpt: 'Explore different types of loft insulation materials. Compare their benefits, costs, and suitability for your home.',
  //   date: '2024-01-18',
  //   author: 'LIS UK',
  //   href: '/blog/loft-insulation-types-guide',
  //   image: '/images/blog/loft-insulation-types-guide.jpg'
  // },
  // {
  //   id: '3',
  //   title: 'Loft Insulation Energy Savings – How Much Can You Save?',
  //   excerpt: 'Learn how loft insulation can reduce your energy bills. Understand the potential savings and benefits of proper insulation.',
  //   date: '2024-01-16',
  //   author: 'LIS UK',
  //   href: '/blog/loft-insulation-energy-savings',
  //   image: '/images/blog/loft-insulation-energy-savings.jpg'
  // },
  {
    id: '4',
    title: 'How to Choose the Best Loft Insulation for Your UK Home',
    excerpt: 'Practical guidance on comparing loft insulation materials, meeting UK standards, and planning a compliant installation.',
    date: '2025-02-01',
    author: 'LIS UK',
    href: '/blog/how-to-choose-the-best-loft-insulation-for-your-uk-home',
    image: '/images/blog/how-to-choose-the-best-loft-insulation.jpg'
  },
  {
    id: '5',
    title: 'Top Cost Savings with Loft Insulation in the UK',
    excerpt: 'Breakdown of real-world heating bill reductions, ROI timelines, and payback periods when insulating UK homes.',
    date: '2025-02-05',
    author: 'LIS UK',
    href: '/blog/top-cost-savings-with-loft-insulation-in-the-uk',
    image: '/images/blog/top-cost-savings-loft-insulation.jpg'
  },
  {
    id: '6',
    title: 'Key Building Regulations for Loft Insulation & Loft Conversions in England',
    excerpt: 'Compliance checklist for English loft insulation projects, including Part L requirements and loft conversion considerations.',
    date: '2025-02-08',
    author: 'LIS UK',
    href: '/blog/key-building-regulations-for-loft-insulation-and-loft-conversions-in-england',
    image: '/images/blog/loft-insulation-building-regulations.jpg'
  },
  {
    id: '7',
    title: 'Eco-Friendly Loft Insulation Options for UK Homes',
    excerpt: 'Sustainable insulation choices including sheep’s wool, recycled fibres, hemp and other low embodied-carbon materials for UK properties.',
    date: '2025-02-12',
    author: 'LIS UK',
    href: '/blog/eco-friendly-loft-insulation-options-for-uk-homes',
    image: '/images/blog/eco-friendly-loft-insulation.jpg'
  },
  {
    id: '8',
    title: 'How Thick Should Your Loft Insulation Be? UK Guide',
    excerpt: 'Step-by-step advice on recommended insulation depths, thermal targets and upgrade planning for UK lofts.',
    date: '2025-02-15',
    author: 'LIS UK',
    href: '/blog/how-thick-should-your-loft-insulation-be-uk-guide',
    image: '/images/blog/loft-insulation-thickness.jpg'
  },
  {
    id: '9',
    title: 'What Are the Best Times of Year to Install Loft Insulation in the UK?',
    excerpt: 'Seasonal planning advice that helps homeowners and professionals choose the optimal installation window.',
    date: '2025-02-18',
    author: 'LIS UK',
    href: '/blog/what-are-the-best-times-of-year-to-install-loft-insulation-in-the-uk',
    image: '/images/blog/best-time-loft-insulation.jpg'
  },
  {
    id: '10',
    title: 'Signs Your Loft Needs Insulation or an Insulation Upgrade',
    excerpt: 'Professional checklist covering comfort complaints, heat loss indicators and moisture warnings that signal it’s time to insulate.',
    date: '2025-02-21',
    author: 'LIS UK',
    href: '/blog/signs-your-loft-needs-insulation-or-an-insulation-upgrade',
    image: '/images/blog/loft-insulation-upgrade-signs.jpg'
  },
  {
    id: '11',
    title: 'Frequently Asked Questions About Loft Insulation in UK Homes',
    excerpt: 'Clear answers to the most common loft insulation queries covering installation, maintenance and performance expectations.',
    date: '2025-02-24',
    author: 'LIS UK',
    href: '/blog/frequently-asked-questions-about-loft-insulation-in-uk-homes',
    image: '/images/blog/loft-insulation-faq.jpg'
  },
  {
    id: '12',
    title: 'What Are the Grants & Government Schemes for Loft Insulation in the UK?',
    excerpt: 'Overview of current UK funding routes, eligibility checks and application tips for loft insulation projects.',
    date: '2025-02-27',
    author: 'LIS UK',
    href: '/blog/what-are-the-grants-and-government-schemes-for-loft-insulation-in-the-uk',
    image: '/images/blog/loft-insulation-grants.jpg'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How much can I save on energy bills with loft insulation?',
    answer: 'On average, homeowners can save 15-25% on their heating bills with proper loft insulation. The exact savings depend on your current insulation levels, home size, and heating system.'
  },
  {
    id: '2',
    question: 'How long does loft insulation installation take?',
    answer: 'Most loft insulation installations can be completed in 1-2 days, depending on the size of your loft and the type of insulation being installed.'
  },
  {
    id: '3',
    question: 'Do I need to clear my loft before insulation installation?',
    answer: 'Yes, the loft needs to be cleared of stored items to allow proper installation. We offer loft clearance services as part of our comprehensive package.'
  },
  {
    id: '4',
    question: 'What type of insulation is best for my home?',
    answer: 'The best insulation type depends on your specific needs, budget, and home structure. Our experts can assess your property and recommend the most suitable option.'
  },
  {
    id: '5',
    question: 'Is loft insulation covered by any government grants?',
    answer: 'Yes, there are various government schemes and grants available for home insulation. We can help you identify and apply for applicable programs.'
  },
  {
    id: '6',
    question: 'How long does loft insulation last?',
    answer: 'Quality loft insulation can last 40+ years with proper installation. Most materials maintain their effectiveness for the lifetime of your home.'
  }
];
