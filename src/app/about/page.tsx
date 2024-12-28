// import { Card, CardContent } from '@/components/ui/card'
// import Image from 'next/image'
// import Images from '@/image/logo.JPG'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faTwitter, faFacebook, faInstagram, faGithub, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


// export default function AboutPage() {
//   return (
//     <div className="container space-y-12 px-4 py-8 md:px-6">
//       {/* About Hero */}
//       <section className="grid gap-6 lg:grid-cols-2 lg:gap-12">
//         <div className="space-y-4 animate-fade-in">
//           <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-all duration-500 transform hover:scale-105">
//             About Me
//           </h1>
//           <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
//             I am a solution-driven developer with hands-on experience working with PHP, Golang, Node.js, Python, C programming, and R programming. I have a strong understanding of computer science and statistical fundamentals, clean code, Object-Oriented Design principles, clean architecture, design patterns, programming tools, technical writing, API documentation, and software engineering best practices, all while delivering products using agile methodologies and scrum frameworks.
//           </p>
//           <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
//             I am skilled in designing and developing efficient backend systems, Test-Driven Development (TDD), Event-Driven Architecture, and RESTful APIs, as well as working with both SQL (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis). I have experience with source code versioning systems (Git) and a solid understanding of software infrastructures, engaging in the complete life cycle phases of software from conceptualization to deployment. I'm always eager to learn new things and contribute to teamwork.
//           </p>
//           <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
//             With a proven track record of designing and implementing scalable and functional software systems that optimize efficiency and improve user experience, I excel in identifying and resolving potential bottlenecks through monitoring and testing application performance. I work collaboratively with other developers to implement effective solutions and have a strong background in maintaining software security, implementing backup strategies, and ensuring redundancy to minimize data loss and protect against threats. I am well-versed in industry standards and best practices related to software development and consistently strive to stay updated with the latest advancements in technology.
//           </p>
//           <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
//             My expertise extends to working with frameworks such as Laravel, ExpressJs, NestJs, Django, Flask, and FastAPI, and I am proficient in technologies like microservices, gRPC, REST, and Domain-Driven Design (DDD). Additionally, I have experience with cloud technologies, including AWS, Docker, Kubernetes, EKS, EBS, and EC2, and tools like Jira, Travis CI, Miro, and Jenkins.
//           </p>
//         </div>
//         <Card className="transition-all duration-500 transform hover:scale-105">
//           <CardContent className="p-6">
//             <div className="aspect-square overflow-hidden rounded-lg shadow-xl mb-10">
//               <Image
//                 alt="Profile"
//                 className="object-cover rounded-full transition-all duration-500 transform hover:rotate-6"
//                 height={600}
//                 width={600}
//                 src={Images}
//                 priority
//               />
//             </div>

//               <div className="text-center mb-6">
//                 <h3 className="text-xl font-semibold text-muted-foreground" >Feel free to follow me or message me</h3>
//               </div>
            
//              {/* Social Media Links */}
//              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
//               <div className="flex flex-wrap justify-center gap-6">
//                 <a href="https://www.linkedin.com/in/samueleffiongjacob/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
//                   <FontAwesomeIcon icon={faLinkedin} className="h-15 w-45" />
//                 </a>
//                 <a href="https://twitter.com/samueleffiong_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
//                   <FontAwesomeIcon icon={faTwitter} className="h-15 w-45" />
//                 </a>
//                 <a href="https://www.facebook.com/samueleffiongjacob/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
//                   <FontAwesomeIcon icon={faFacebook} className="h-15 w-45" />
//                 </a>
//                 <a href="https://www.instagram.com/samueleffiong0" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
//                   <FontAwesomeIcon icon={faInstagram} className="h-15 w-45" />
//                 </a>
//                 <a href="https://github.com/samueleffiongjacob" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
//                   <FontAwesomeIcon icon={faGithub} className="h-15 w-45" />
//               </a>
//                 <a href="mailto:samueleffiongjacob@gmail.com" className="text-gray-800 hover:text-gray-600 transition-colors">
//                   <FontAwesomeIcon icon={faEnvelope} className="h-15 w-45" />
//                 </a>
//                 <a href="https://wa.link/506m3b" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors">
//                   <FontAwesomeIcon icon={faWhatsapp} className="h-15 w-45" />
//                 </a>
//                 <a href="https://t.me/Samueleffiong_official" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
//                   <FontAwesomeIcon icon={faTelegram} className="h-15 w-45" />
//                 </a>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </section>

//       {/* Professional Experience */}
//       <section className="space-y-6 animate-fade-in">
//         <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl transition-all duration-500 hover:text-blue-500">
//           Professional Experience
//         </h2>
//         <div className="grid gap-6 lg:grid-cols-2">
//           <Card className="transition-all duration-300 hover:shadow-xl">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold">Microservice Developer / DevOps Engineer</h3>
//               <p className="text-sm text-muted-foreground">feburary 2024 - Novermber 2024</p>
//               <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
//                 <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Food and Goods Store</h2>
//                 <li>Impact: Enhanced system reliability and deployment efficiency by 70% through microservices architecture and automated CI/CD pipelines.</li>
//                 <li>Relevant Responsibility: Designed and maintained scalable infrastructure using Kubernetes and Docker, ensuring system performance and compliance with security standards.</li>
//               </ul>
//             </CardContent>
//           </Card>
//           <Card className="transition-all duration-300 hover:shadow-xl">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold">Data Analyst / Software Developer</h3>
//               <p className="text-sm text-muted-foreground">Oct 2023 - Jan 2024</p>
//               <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
//                 <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Official Engineering Project Management System</h2>
//                 <li>Impact: Increased project delivery efficiency by 50% through optimized backend components and data-driven decision-making.</li>
//                 <li>Relevant Responsibility: Ensured compliance with regulatory standards and implemented secure data management practices for critical infrastructure projects.</li>
//               </ul>
//             </CardContent>
//           </Card>
//           <Card className="transition-all duration-300 hover:shadow-xl">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold">Back End Developer / Statistician</h3>
//               <p className="text-sm text-muted-foreground">Oct 2023 - Jan 2024</p>
//               <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
//                 <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Learning Portal & Educational Data Analysis</h2>
//                 <li>Impact: Boosted user engagement by 70% and improved program efficiency by 80% through effective API implementation and statistical modeling.</li>
//                 <li>Relevant Responsibility: Integrated new data-driven solutions with existing systems, improving legacy infrastructure performance by 50%.</li>
//               </ul>
//             </CardContent>
//           </Card>
//           <Card className="transition-all duration-300 hover:shadow-xl">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold">Software Engineer / Cloud Engineer</h3>
//               <p className="text-sm text-muted-foreground">Aug 2022 - Oct 2023</p>
//               <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground text-justify">
//                 <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Job Search Portal</h2>
//                 <li>Impact: Increased operational efficiency by 80% and reduced cloud costs by 20% through optimized resource allocation and scaling policies.</li>
//                 <li>Relevant Responsibility: Implemented scalable backend architecture on AWS, ensuring secure handling of user data and compliance with industry standards.</li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Education */}
//       <section className="space-y-6">
//         <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl transition-all duration-500 hover:text-blue-500">
//           Educational Qualifications
//         </h2>
//         <Card className="transition-all duration-300 hover:shadow-xl">
//           <CardContent className="p-6">
//             <div className="space-y-2">
//               <div className="flex justify-start space-x-5 sm:space-x-15 md:space-x-20 lg:space-x-36">
//                 <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">2018 – 2024</span>
//                 <span className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">Federal University of Technology 
//                   <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">[B. Tech Statistics In view]</span>
//                 </span>
//               </div> 
//               <div className="flex justify-start space-x-5 sm:space-x-15 md:space-x-20 lg:space-x-36">
//                 <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">2009 – 2015</span>
//                 <span className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">Federal Government College
//                  <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">[West African Senior Secondary Certificate Examination]</span>
//                 </span>
//               </div>
//               <div className="flex justify-start space-x-5 sm:space-x-15 md:space-x-20 lg:space-x-36">
//                 <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">2001 – 2009</span>
//                 <span className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">Infant Jesus International Nursery and Primary School
//                   <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">[First School Certificate]</span>
//                 </span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </section>

//       {/* Certifications */}
//       <section className="space-y-6 animate-fade-in">
//         <h2 className="text-xl sm:text-2xl font-bold tracking-tight transition-all duration-500 hover:text-blue-500">
//           Certifications
//         </h2>
//         <Card className="transition-all duration-300 hover:shadow-xl">
//           <CardContent className="p-6">
//             <ul className="list-inside list-disc space-y-2 text-sm sm:text-base text-muted-foreground text-justify">
//               <li>Microsoft Certified System Engineering Training</li>
//               <li>Cisco Certified Endpoint Security</li>
//               <li>Software Engineering (ALX Africa)</li>
//               <li>Microsoft System Administrator</li>
//             </ul>
//           </CardContent>
//         </Card>
//       </section>
//     </div>
//   )
// }

import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Images from '@/image/samuel-effiong.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faFacebook, faInstagram, faGithub, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Samuel Effiong, a skilled Software Engineer and DevOps specialist with expertise in Cloud Technologies and Data Science and Analyst.',
}


export default function AboutPage() {
  return (
    <div className="container space-y-12 px-4 py-8 md:px-6">
      {/* About Hero */}
      <section className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-all duration-500 transform hover:scale-105">
            About Me
          </h1>
          <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
            I am a solution-driven developer with hands-on experience working with PHP, Golang, Node.js, Python, C programming, and R programming. I have a strong understanding of computer science and statistical fundamentals, clean code, Object-Oriented Design principles, clean architecture, design patterns, programming tools, technical writing, API documentation, and software engineering best practices, all while delivering products using agile methodologies and scrum frameworks.
          </p>
          <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
            I am skilled in designing and developing efficient backend systems, Test-Driven Development (TDD), Event-Driven Architecture, and RESTful APIs, as well as working with both SQL (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis). I have experience with source code versioning systems (Git) and a solid understanding of software infrastructures, engaging in the complete life cycle phases of software from conceptualization to deployment. I&apos;m always eager to learn new things and contribute to teamwork.
          </p>
          <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
            With a proven track record of designing and implementing scalable and functional software systems that optimize efficiency and improve user experience, I excel in identifying and resolving potential bottlenecks through monitoring and testing application performance. I work collaboratively with other developers to implement effective solutions and have a strong background in maintaining software security, implementing backup strategies, and ensuring redundancy to minimize data loss and protect against threats. I am well-versed in industry standards and best practices related to software development and consistently strive to stay updated with the latest advancements in technology.
          </p>
          <p className="text-muted-foreground md:text-xl transition-all duration-500 hover:text-gray-300">
            My expertise extends to working with frameworks such as Laravel, ExpressJs, NestJs, Django, Flask, and FastAPI, and I am proficient in technologies like microservices, gRPC, REST, and Domain-Driven Design (DDD). Additionally, I have experience with cloud technologies, including AWS, Docker, Kubernetes, EKS, EBS, and EC2, and tools like Jira, Travis CI, Miro, and Jenkins.
          </p>
        </div>
        <Card className="transition-all duration-500 transform hover:scale-105">
          <CardContent className="p-6">
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <Image
                alt="Profile"
                className="object-cover rounded-full transition-all duration-500 transform hover:rotate-6"
                height={600}
                width={600}
                src={Images}
                priority
              />
            </div>

            {/* Social Media Links */}
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://www.linkedin.com/in/samueleffiongjacob/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} className="h-10 w-10" />
                </a>
                <a href="https://x.com/samueleffiong_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <FontAwesomeIcon icon={faTwitter} className="h-10 w-10" />
                </a>
                <a href="https://web.facebook.com/samueleffiongjacob" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <FontAwesomeIcon icon={faFacebook} className="h-10 w-10" />
                </a>
                <a href="https://www.instagram.com/samueleffiong0" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="h-10 w-10" />
                </a>
                <a href="https://github.com/samueleffiongjacob" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <FontAwesomeIcon icon={faGithub} className="h-10 w-10" />
                </a>
                <a href="mailto:samueleffiongjacob@gmail.com" className="text-gray-800 hover:text-gray-600 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="h-10 w-10" />
                </a>
                <a href="https://wa.link/506m3b" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-10 w-10" />
                </a>
                <a href="https://t.me/Samueleffiong_official" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <FontAwesomeIcon icon={faTelegram} className="h-10 w-10" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl transition-all duration-500 hover:text-blue-500">
          Professional Experience
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Microservice Developer / DevOps Engineer</h3>
              <p className="text-sm text-muted-foreground">feburary 2024 - Novermber 2024</p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Food and Goods Store</h2>
                <li>Impact: Enhanced system reliability and deployment efficiency by 70% through microservices architecture and automated CI/CD pipelines.</li>
                <li>Relevant Responsibility: Designed and maintained scalable infrastructure using Kubernetes and Docker, ensuring system performance and compliance with security standards.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Data Analyst / Software Developer</h3>
              <p className="text-sm text-muted-foreground">Oct 2023 - Jan 2024</p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Official Engineering Project Management System</h2>
                <li>Impact: Increased project delivery efficiency by 50% through optimized backend components and data-driven decision-making.</li>
                <li>Relevant Responsibility: Ensured compliance with regulatory standards and implemented secure data management practices for critical infrastructure projects.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Back End Developer / Statistician</h3>
              <p className="text-sm text-muted-foreground">Oct 2023 - Jan 2024</p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Learning Portal &amp; Educational Data Analysis</h2>
                <li>Impact: Boosted user engagement by 70% and improved program efficiency by 80% through effective API implementation and statistical modeling.</li>
                <li>Relevant Responsibility: Integrated new data-driven solutions with existing systems, improving legacy infrastructure performance by 50%.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Software Engineer / Cloud Engineer</h3>
              <p className="text-sm text-muted-foreground">Aug 2022 - Oct 2023</p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground text-justify">
                <h2 className="text-xl sm:text-2xl text-blue-600 tracking-tight border-b-2 pb-2">Project: Job Search Portal</h2>
                <li>Impact: Increased operational efficiency by 80% and reduced cloud costs by 20% through optimized resource allocation and scaling policies.</li>
                <li>Relevant Responsibility: Implemented scalable backend architecture on AWS, ensuring secure handling of user data and compliance with industry standards.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl transition-all duration-500 hover:text-blue-500">
          Educational Qualifications
        </h2>
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="flex justify-start space-x-5 sm:space-x-15 md:space-x-20 lg:space-x-36">
                <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">2018 – 2024</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">Federal University of Technology 
                  <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">[B. Tech Statistics In view]</span>
                </span>
              </div> 
              <div className="flex justify-start space-x-5 sm:space-x-15 md:space-x-20 lg:space-x-36">
                <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">2009 – 2015</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">Federal Government College
                 <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">[West African Senior Secondary Certificate Examination]</span>
                </span>
              </div>
              <div className="flex justify-start space-x-5 sm:space-x-15 md:space-x-20 lg:space-x-36">
                <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">2001 – 2009</span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">Infant Jesus International Nursery and Primary School
                  <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">[First School Certificate]</span>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Certifications */}
      <section className="space-y-6 animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight transition-all duration-500 hover:text-blue-500">
          Certifications
        </h2>
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <ul className="list-inside list-disc space-y-2 text-sm sm:text-base text-muted-foreground text-justify">
              <li>Microsoft Certified System Engineering Training</li>
              <li>Cisco Certified Endpoint Security</li>
              <li>Software Engineering (ALX Africa)</li>
              <li>Microsoft System Administrator</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

