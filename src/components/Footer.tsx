import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Cookies Policy', href: '/cookies-policy' },
  ];

  const services = [
    { name: 'Loft Insulation Installation', href: '/services/loft-insulation-installation' },
    { name: 'Loft Clearance & Preparation', href: '/services/loft-clearance-preparation' },
    { name: 'Loft Boarding & Storage', href: '/services/loft-boarding-storage' },
    { name: 'Roof / Rafter Insulation', href: '/services/roof-rafter-insulation' },
    { name: 'Cavity Wall & Floor Insulation', href: '/services/cavity-wall-floor-insulation' },
    { name: 'Insulation Removal & Replacement', href: '/services/insulation-removal-replacement' },
  ];

  const importantLinks = [
    { name: 'Free Loft Insulation UK', href: '/free-loft-insulation-uk' },
    { name: 'Loft Insulation London', href: '/uk/lon/loft-insulation-london' },
    { name: 'Loft Insulation Leads', href: '/loft-insulation-leads' },
    { name: 'Loft Insulation Near Me', href: '/loft-insulation-near-me' },
  ];

  const topUKCities = [
    { name: 'Croydon', href: '/uk/cro/loft-insulation-croydon' },
    { name: 'Barking', href: '/uk/bar/loft-insulation-barking' },
    { name: 'Enfield', href: '/uk/enf/loft-insulation-enfield' },
    { name: 'Manchester', href: '/uk/man/loft-insulation-manchester' },
    { name: 'Birmingham', href: '/uk/bir/loft-insulation-birmingham' },
    { name: 'Leeds', href: '/uk/lee/loft-insulation-leeds' },
    { name: 'Liverpool', href: '/uk/liv/loft-insulation-liverpool' },
    { name: 'Sheffield', href: '/uk/she/loft-insulation-sheffield' },
    { name: 'Nottingham', href: '/uk/not/loft-insulation-nottingham' },
    { name: 'Bristol', href: '/uk/bri/loft-insulation-bristol' },
    { name: 'Newcastle upon Tyne', href: '/uk/new/loft-insulation-newcastle-upon-tyne' },
    { name: 'Bradford', href: '/uk/bra/loft-insulation-bradford' },
    { name: 'Aberdeen', href: '/uk/abe/loft-insulation-aberdeen' },
    { name: 'Bangor', href: '/uk/ban/loft-insulation-bangor' },
    { name: 'Belfast', href: '/uk/bel/loft-insulation-belfast' },
    { name: 'Belfast West', href: '/uk/bel/loft-insulation-belfast-west' },
    { name: 'Birmingham Hodge Hill', href: '/uk/bir/loft-insulation-birmingham-hodge-hill' },
    { name: 'Brighton', href: '/uk/bri/loft-insulation-brighton' },
    { name: 'Burnley', href: '/uk/bur/loft-insulation-burnley' },
    { name: 'Cardiff', href: '/uk/car/loft-insulation-cardiff' },
    { name: 'Cornwall', href: '/uk/cor/loft-insulation-cornwall' },
    { name: 'County Durham', href: '/uk/cou/loft-insulation-county-durham' },
    { name: 'Craigavon', href: '/uk/cra/loft-insulation-craigavon' },
    { name: 'Cumbria', href: '/uk/cum/loft-insulation-cumbria' },
    { name: 'Derry', href: '/uk/der/loft-insulation-derry' },
    { name: 'Dundee', href: '/uk/dun/loft-insulation-dundee' },
    { name: 'Edinburgh', href: '/uk/edi/loft-insulation-edinburgh' },
    { name: 'Glasgow', href: '/uk/gla/loft-insulation-glasgow' },
    { name: 'Hartlepool', href: '/uk/har/loft-insulation-hartlepool' },
    { name: 'Horncastle', href: '/uk/hor/loft-insulation-horncastle' },
    { name: 'Inverness', href: '/uk/inv/loft-insulation-inverness' },
    { name: 'Kent', href: '/uk/ken/loft-insulation-kent' },
    { name: 'Lancashire', href: '/uk/lan/loft-insulation-lancashire' },
    { name: 'Lincolnshire', href: '/uk/lin/loft-insulation-lincolnshire' },
    { name: 'Lisburn', href: '/uk/lis/loft-insulation-lisburn' },
    { name: 'Londonderry', href: '/uk/lon/loft-insulation-londonderry' },
    { name: 'Louth', href: '/uk/lou/loft-insulation-louth' },
    { name: 'Middlesbrough', href: '/uk/mid/loft-insulation-middlesbrough' },
    { name: 'Na h-Eileanan an Iar', href: '/uk/nah/loft-insulation-na-h-eileanan-an-iar' },
    { name: 'Newcastle', href: '/uk/new/loft-insulation-newcastle' },
    { name: 'Newport', href: '/uk/new/loft-insulation-newport' },
    { name: 'Newry', href: '/uk/new/loft-insulation-newry' },
    { name: 'North East Coastal', href: '/uk/nor/loft-insulation-north-east-coastal' },
    { name: 'North Yorkshire', href: '/uk/nor/loft-insulation-north-yorkshire' },
    { name: 'Northern Ireland', href: '/uk/nor/loft-insulation-northern-ireland' },
    { name: 'Norwich', href: '/uk/nor/loft-insulation-norwich' },
    { name: 'Outer Hebrides', href: '/uk/out/loft-insulation-outer-hebrides' },
    { name: 'Pendle', href: '/uk/pen/loft-insulation-pendle' },
    { name: 'Plymouth', href: '/uk/ply/loft-insulation-plymouth' },
    { name: 'Rhondda', href: '/uk/rho/loft-insulation-rhondda' },
    { name: 'Sandwell', href: '/uk/san/loft-insulation-sandwell' },
    { name: 'Scarborough', href: '/uk/sca/loft-insulation-scarborough' },
    { name: 'Scotland', href: '/uk/sco/loft-insulation-scotland' },
    { name: 'Swansea', href: '/uk/swa/loft-insulation-swansea' },
    { name: 'Wales', href: '/uk/wal/loft-insulation-wales' },
    { name: 'Walsall', href: '/uk/wal/loft-insulation-walsall' },
    { name: 'Warwickshire', href: '/uk/war/loft-insulation-warwickshire' },
    { name: 'West Midlands', href: '/uk/wes/loft-insulation-west-midlands' },
    { name: 'Whitby', href: '/uk/whi/loft-insulation-whitby' },
    { name: 'Wolverhampton', href: '/uk/wol/loft-insulation-wolverhampton' },
    { name: 'Wrexham', href: '/uk/wre/loft-insulation-wrexham' },
    { name: 'Yorkshire Villages', href: '/uk/yor/loft-insulation-yorkshire-villages' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top UK Cities Section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Top UK Cities</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {topUKCities.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm px-3 py-1 rounded-md hover:bg-gray-700"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-auto">
                <Image
                  src="/image.png"
                  alt="Loft Insulation Services"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for professional loft insulation services across the UK. 
              We connect you with certified installers for energy-efficient, cost-effective solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Business Street<br />
                    London, UK SW1A 1AA
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-blue flex-shrink-0" />
                <a
                  href="tel:+44123456789"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +44 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary-blue flex-shrink-0" />
                <a
                  href="mailto:info@loftinsulationservices.co.uk"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@loftinsulationservices.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Loft Insulation Services. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {policies.map((policy) => (
                <Link
                  key={policy.name}
                  href={policy.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
