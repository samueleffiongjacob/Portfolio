import { Person, WithContext } from 'schema-dts'

export const StructuredData = () => {
  const personData: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Samuel Effiong',
    jobTitle: 'Software Engineer, DevOps Specialist & Data Scientist',
    description: 'Experienced software engineer, DevOps specialist, and data scientist with a strong foundation in cloud technologies, microservices architecture, and data analysis. Proficient in designing secure, scalable systems and optimizing performance for modern applications.',
    url: 'www.effiongsamuel.tech',
    sameAs: [
      'https://www.linkedin.com/in/samueleffiongjacob/',
      'https://github.com/samueleffiongjacob',
      'https://x.com/samueleffiong_',
      'https://web.facebook.com/samueleffiongjacob',
      'https://wa.link/506m3b',
      'https://t.me/Samueleffiong_official',
      'https://www.instagram.com/samueleffiong0'
    ],
    image: 'https://www.effiongsamuel.tech/samuel-effiong.jpg',
    email: 'mailto:samueleffiongjacob@gmail.com.com',
    telephone: '+234 9047721072',
    address: {
      '@type': '901101',
      addressLocality: 'Kubwa Abuja',
      addressRegion: 'Federal Capital Teritory(F.C.T',
      addressCountry: 'Nigeria'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Federal University of Technology'
    },
    knowsAbout: ['Software Engineering', 'DevOps', 'Cloud Technologies', 'Data Analysis', 'Microservices']
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  )
}

