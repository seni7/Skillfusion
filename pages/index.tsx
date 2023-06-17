import { useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
// import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { 
  CheckIcon, 
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/solid/'
import Image from 'next/image'
import logohp from '../public/LogoWhite.png'
import logob from '../public/LogoBlack.png'
import logomo from '../public/LogoWhiteCollapsed.png'
import Personalized from '../public/personalized-learning.svg'
import interactive from '../public/interactive.svg'
import data from '../public/Data.svg'
import collab from '../public/collab.svg'
import flex from '../public/Flex.svg'
import {
MenuOutlined,
CloseOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
  // { name: 'Company', href: '#' },
]
const features = [
  // {
  //   name: 'Push to deploy.',
  //   description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
  //   icon: CloudArrowUpIcon,
  // },
  // {
  //   name: 'SSL certificates.',
  //   description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  //   icon: LockClosedIcon,
  // },

  // {
  //   name: 'Advanced security.',
  //   description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
  //   icon: FingerPrintIcon,
  // },

  // {
  //   name: 'Database backups.',
  //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
  //   icon: ServerIcon,
  // },
]
const tiers = [
  // {
  //   name: 'Hobby',
  //   id: 'tier-hobby',
  //   href: '#',
  //   priceMonthly: '$19',
  //   description: "The perfect plan if you're just getting started with our product.",
  //   features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
  //   featured: false,
  // },
  // {
  //   name: 'Enterprise',
  //   id: 'tier-enterprise',
  //   href: '#',
  //   priceMonthly: '$49',
  //   description: 'Dedicated support and infrastructure for your company.',
  //   features: [
  //     'Unlimited products',
  //     'Unlimited subscribers',
  //     'Advanced analytics',
  //     'Dedicated support representative',
  //     'Marketing automations',
  //     'Custom integrations',
  //   ],
  //   featured: true,
  // },
]


const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

  const faqItems = [
    {
      key: '1',
      label: 'Q: How can SkillFusion personalize my learning experience?',
      content: 'A: SkillFusion uses adaptive learning technology to tailor your education based on your needs and interests. It allows you to customize your learning path and explore subjects that interest you the most.',
    },
    {
      key: '2',
      label: 'Q: What interactive content does SkillFusion offer?',
      content: 'A: SkillFusion provides a wide range of interactive learning resources, including multimedia content, simulations, and gamification elements. These engaging materials make studying exciting and help you retain knowledge effectively.',
    },
    {
      key: '3',
      label: 'Q: How does SkillFusion promote collaboration and communication?',
      content: 'A: SkillFusion offers various communication tools such as discussion forums, video conferencing, and messaging features. These tools facilitate collaboration among students, instructors, and even parents, creating a supportive learning community.',
    },
    {
      key: '4',
      label: 'Q: Can I learn at my own pace with SkillFusion?',
      content: 'A: Yes, SkillFusion offers flexibility in learning. Whether you\'re a fast learner or need more time to grasp concepts, the platform adjusts to your unique learning style and preferences, allowing you to learn at a pace that suits you.',
    },
    {
      key: '5',
      label: 'Q: What insights and analytics does SkillFusion provide?',
      content: 'A: SkillFusion provides detailed analytics and reports on your learning progress. You can track your performance, identify areas for improvement, and make data-driven decisions to enhance your learning experience.',
    },
  ];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="../public/LogoWhite.png"
                alt=""
              />
            </a> */}
            
            <div className="sm:hidden">
        <Image 
          src={logomo}
          alt="Mobile image" 
          width={50} 
          height={40} 
          className="h-8"
        />
      </div>
      <div className="hidden sm:block">
        <Image 
          src={logohp} 
          alt="Desktop image" 
          width={200} 
          height={100} 
          className="h-7"
        />
      </div>

          </div>
          <div className="flex pt-4 lg:hidden">
          <Button
  type="button"
  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
  onClick={() => setMobileMenuOpen(true)}
>
  <span className="sr-only">Open main menu</span>
  <MenuOutlined style={{ fontSize: '24px' }} aria-hidden="true" />
</Button>

          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/auth/login"  className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a> */}
              <button
  type="button"
  className="-m-2.5 rounded-md p-2.5 text-gray-700"
  onClick={() => setMobileMenuOpen(false)}
>
  <span className="sr-only">Close menu</span>
  <CloseOutlined className="h-6 w-6" aria-hidden="true" />
</button>

            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="/auth/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        <div>
          
        </div>
        <div className="relative overflow-hidden bg-gray-900 pb-16 pt-14  ">
          <img
            src="https://www.cru.org/communities/hs/wp-content/uploads/sites/18/2022/09/Ethiopia-CountryProfile-Edify.jpg"
            alt=""
            className="absolute inset-0 -z-10  object-cover blur-sm sm:hidden"
            
          />
<div className="absolute inset-0 bg-blue-800 bg-opacity-75 mix-blend-overlay"></div>
          
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Unlocking Knowledge, Empowering Minds: Learn, Grow, Succeed!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/auth/login"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Sign in
                  </a>
                  
                </div> */}
              </div>
            </div>

            {/* Logo cloud */}

          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
              <div
                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                
              </div>
            </div>

            <div>
              
            </div>
           
          </div>
        </div>

       

       
        <div>
        

    
        
        <div className="container mx-auto text-center">
  <h1 className="text-5xl font-bold">Discover Our Features</h1>
  {/* Rest of the code */}
</div>
<div className="container mx-auto p-6 md:p-16">
      <section className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
        <div className="w-full md:w-1/2 md:pr-8">
          <div className="ml-8 md:m-2">
            <Image src={Personalized} alt="Personalized Learning" className="w-auto p-16" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text">
            <h2 className="text-2xl font-bold mb-4">Personalized Learning Experiences</h2>
            <p>Achieve your full potential with SkillFusion s personalized learning approach. Our platform adapts to your needs, allowing you to tailor your education and explore subjects that interest you the most.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between mb-12 md:mb-16">
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="text">
            <h2 className="text-2xl font-bold mb-4">Engaging Interactive Content</h2>
            <p>Dive into a world of interactive learning! SkillFusion offers engaging multimedia content, simulations, and gamification elements that make studying exciting and memorable.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="illustration">
            <Image src={interactive} alt="Interactive Content" className="w-auto p-16" />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
        <div className="w-full md:w-1/2 md:pr-8">
          <div className="illustration">
            <Image src={collab} alt="Collaboration" className="w-auto p-16" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text">
            <h2 className="text-2xl font-bold mb-4">Collaboration and Communication</h2>
            <p>Connect and learn together! SkillFusion provides communication tools such as discussion forums, video conferencing, and messaging to foster collaboration between students, instructors, and parents.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between mb-12 md:mb-16">
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="text">
            <h2 className="text-2xl font-bold mb-4">Flexibility in Learning</h2>
            <p>SkillFusion gives you the flexibility to learn at your own pace. Whether youre a fast learner or need more time, our platform adjusts to your unique learning style and preferences.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="illustration">
            <Image src={flex} alt="Flexibility" className="w-auto" />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
        <div className="w-full md:w-1/2 md:pr-8">
          <div className="illustration">
            <Image src={data} alt="Data-Driven Insights" className="w-auto p-16" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text">
            <h2 className="text-2xl font-bold mb-4">Data-Driven Insights</h2>
            <p>Get valuable insights into your learning progress. SkillFusion s analytics tools provide detailed reports and performance tracking, empowering you to identify areas for improvement and achieve better results.</p>
          </div>
        </div>
      </section>
    </div>

    <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              
            </div>  

        </div>

        <div>
        <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
              <div
                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-20">
              <figure className="relative isolate pt-6 sm:pt-12">
                                
                <figcaption className="text-base">
                  <Image src={logohp}/>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        </div>
        <div className="flex items-center justify-center">
  <h1 className='text-3xl font-bold mb-8 mt-32'>Frequently Asked Questions</h1>
</div>

        
        <div className='shadow-lg border border-blue-500 text-blue-800 font-bold rounded h-auto m-16 mt-0 p-8'>
      
      <Collapse defaultActiveKey={['1']} bordered={false}>
        {faqItems.map((item) => (
          <Collapse.Panel key={item.key} header={item.label}>
            <p>{item.content}</p>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 bg-gray-900 sm:mt-56" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image src={logohp} className='w-52 mr-16'/>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}