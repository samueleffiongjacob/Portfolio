import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { GitBranch, Cloud, BarChart, Terminal, Database, Network, Code, Layers, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Samuel Effiong\'s portfolio. Explore my skills in DevOps, cloud technologies, software engineering, Statistics and data analyst & Science.',
}


export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 pt-20 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-text-gradient pb-6">
                SOFTWARE ENGINEER | DevOps Engineer | Statistician
              </h1>
            </div>
          </div>
           

            {/* Short Text for Small Screens */}
            <div className="text-opacity-90 sm:text-xl pb-8">
              <p className="text-2xl leading-relaxed break-words block md:hidden">
                Experienced software engineer and certified AI data annotator with a strong background in Statistics. Proficient in developing secure, scalable pipelines for processing complex data efficiently while ensuring compliance with industry regulations. Expertise includes PHP, Golang, Node.js, Python, AWS, Kubernetes, RESTful APIs, and SQL/NoSQL databases. Skilled in handling sensitive data, optimizing performance, and integrating modern systems with legacy infrastructure to deliver robust, scalable, and secure solutions.
              </p>

              {/* Original Text for Larger Screens */}
              <p className="text-2xl  leading-relaxed break-words hidden md:block">
                Experienced software engineer and certified AI data annotator with a strong background in Statistics. Proficient in developing secure, scalable pipelines for processing complex data efficiently while ensuring compliance with industry regulations. Expertise includes PHP, Golang, Node.js, Python, AWS, Kubernetes, RESTful APIs, and SQL/NoSQL databases. Skilled in handling sensitive data, optimizing performance, and integrating modern systems with legacy infrastructure to deliver robust, scalable, and secure solutions.
              </p>
            </div>
         
          <div className="space-x-4 text-center">
            <Button asChild className="hover:animate-pulse">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 hover:animate-pulse">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>





      {/* Skills Section */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <GitBranch className="h-12 w-12 text-blue-600 animate-bounce" />
              <h3 className="text-xl font-bold text-blue-700">Version Control</h3>
              <p className="text-center text-muted-foreground">
                Git, GitHub Actions, GitLab CI/CD
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Cloud className="h-12 w-12 text-green-500 animate-spin-slow" />
              <h3 className="text-xl font-bold text-green-600">Cloud Infrastructure</h3>
              <p className="text-center text-muted-foreground">
                AWS, Azure, Google Cloud Platform
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <BarChart className="h-12 w-12 text-orange-400 animate-pulse" />
              <h3 className="text-xl font-bold text-orange-500">Data Analysis</h3>
              <p className="text-center text-muted-foreground">
                Python, R, Statistical Modeling
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Terminal className="h-12 w-12 text-purple-600 animate-pulse" />
              <h3 className="text-xl font-bold text-purple-700">DevOps</h3>
              <p className="text-center text-muted-foreground">
                Docker, Kubernetes, Jenkins
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Database className="h-12 w-12 text-red-600 animate-bounce" />
              <h3 className="text-xl font-bold text-red-700">Databases</h3>
              <p className="text-center text-muted-foreground">
                PostgreSQL, MongoDB, Redis, MySQL
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Network className="h-12 w-12 text-yellow-500 animate-spin-slow" />
              <h3 className="text-xl font-bold text-yellow-600">Networking</h3>
              <p className="text-center text-muted-foreground">
                TCP/IP, DNS, Load Balancing, Nginx
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Code className="h-12 w-12 text-indigo-500 animate-pulse" />
              <h3 className="text-xl font-bold text-indigo-600">Programming Languages</h3>
              <p className="text-center text-muted-foreground">
                Node.js, Python, PHP, Golang, R, C
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Layers className="h-12 w-12 text-pink-500 animate-spin" />
              <h3 className="text-xl font-bold text-pink-600">Frameworks</h3>
              <p className="text-center text-muted-foreground">
                Express.js, Nest.js, Django, Flask, FastAPI, Laravel
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Activity className="h-12 w-12 text-teal-500 animate-bounce" />
              <h3 className="text-xl font-bold text-teal-600">Infrastructure & CI/CD</h3>
              <p className="text-center text-muted-foreground">
                Terraform, Ansible, Jenkins, GitLab CI, AWS CodePipeline
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
