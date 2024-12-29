import BackToTopButton from "@/components/back-to-top-button";
import OpenToWorkDot from "@/components/dot-animation";
import { ModeToggle } from "@/components/mode-toggle";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowUpRight, AtSign, Award, Code, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { projectData } from "./projectData";

export default function Home() {
  const email = "example@example.com";
  const subject = "Subject Text";
  const body = "Body of the email";

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <main className="w-full md:w-[40rem] mx-auto py-16 md:py-24 md:px-8 px-4">
      {/* Profile image */}
      <div className="pb-12">
        <div className="flex flex-row justify-between items-center ">
          <Avatar className="border-2 border-neutral-500">
            <AvatarImage
              src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-1/356622500_1281214139421083_2424158620353500974_n.jpg?stp=c9.44.179.179a_dst-jpg_p200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGdjTfOyLlpoVGds3Cbq4rL1kNW3KaTtgbWQ1bcppO2Bhw_yBmpisEJ0FytsLN1jLGpp_zjhTKf6tGafeK5wFNb&_nc_ohc=hp1qjCMQkj8Q7kNvgEZ_HJQ&_nc_zt=24&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=ASix4WBSuwPNLRwmOSWWfY7&oh=00_AYBueuBg0-PDVsUhNmssxeJY_Hfkgure4Fb9iHvMx8ojOw&oe=6765EA1A"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-3">
            <OpenToWorkDot />
            <span>Open to Work</span>
          </div>
        </div>
      </div>

      {/* Profile info */}
      <div>
        <h1 className="font-semibold">Mikko Lumpot</h1>
        <h2 className="text-neutral-500 dark:text-neutral-400">
          Full-stack developer & Elementor Developer
        </h2>
        <h2 className="text-neutral-500 dark:text-neutral-400">
          Surigao, Philippines
        </h2>

        <div className="pt-16 ">
          <h1 className="font-semibold mb-4">From Design to Implementation</h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Specializing in frontend development with{" "}
            <b className="dark:text-neutral-300">React Js</b> and{" "}
            <b className="dark:text-neutral-300">Next.js</b>. I have a strong
            passion for creating dynamic and responsive web applications. In
            addition to my frontend skills, I have experience in WordPress
            development using <b className="dark:text-neutral-300">Elementor</b>{" "}
            and backend development using{" "}
            <b className="dark:text-neutral-300">
              (MERN) MongoDB Express React,{" "}
            </b>{" "}
            and <b className="dark:text-neutral-300">Node</b>.
          </p>
          <div className="pt-8 flex justify-between">
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/mikko-lumpot/"
                target="_blank"
              >
                <Button className="text-white dark:bg-transparent dark:border dark:border-neutral-900 dark:hover:bg-neutral-900">
                  <FaLinkedin className="w-4 h-4 mr-2" /> Connect with me
                </Button>
              </Link>
              <Link href="https://github.com/noxxxd01" target="_blank">
                <Button size="icon" variant="outline">
                  <FaGithub className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href="https://www.facebook.com/qwertyboyzzz"
                target="_blank"
              >
                <Button size="icon" variant="outline">
                  <FaFacebookF className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={mailToLink} className="hidden md:inline-block">
                <Button size="icon" variant="outline">
                  <AtSign className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div>
              <Button size="icon" variant="outline">
                <ModeToggle />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="py-16">
        <div className="flex items-center gap-2 pb-4  text-neutral-500 dark:text-neutral-400 text-sm">
          <h1>PROJECTS</h1>
          <Code className="w-4 h-4" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projectData.map((project) => (
            <Card
              key={project.id}
              className="cursor-pointer dark:hover:border-neutral-600 transition-all group hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              <CardHeader className="p-3">
                <AspectRatio ratio={16 / 9}>
                  <Link href={project.imageSrc} target="_blank">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="h-full w-full rounded-md object-cover"
                    />
                  </Link>
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <h1 className="font-semibold mb-4">{project.title}</h1>
                <p className="text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between p-3">
                <div className="flex gap-2">
                  {project.badges.map((badge, index) => (
                    <Link key={index} href="#">
                      <Badge variant="secondary">{badge}</Badge>
                    </Link>
                  ))}
                </div>
                <div className="flex gap-3 ">
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank">
                      <FaGithub className="w-5 h-5" />
                    </Link>
                  )}
                  {project.projectLink && (
                    <Link href={project.projectLink} target="_blank">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Stacks */}
      <div className="pb-16">
        <div className="flex items-center gap-2 pb-4  text-neutral-500 dark:text-neutral-400 text-sm">
          <h1>STACKS</h1>
          <Layers className="w-4 h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Link href="https://nextjs.org/" target="_blank">
            <Card className="group dark:hover:bg-neutral-900 hover:bg-neutral-50 cursor-pointer transition-all">
              <CardContent className="py-3 flex flex-col gap-2">
                <h1>Next.js</h1>
                <div className="flex items-center justify-between">
                  <CardDescription>
                    The React Framework for the Web
                  </CardDescription>
                  <Link href="#">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="https://nodejs.org/en" target="_blank">
            <Card className="group dark:hover:bg-neutral-900 hover:bg-neutral-50 cursor-pointer transition-all">
              <CardContent className="py-3 flex flex-col gap-2">
                <h1>Node.js</h1>
                <div className="flex items-center justify-between">
                  <CardDescription>Run JavaScript Everywhere</CardDescription>
                  <Link href="#">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
            <Link href="https://ui.shadcn.com/" target="_blank">
              <Card className="group dark:hover:bg-neutral-900 hover:bg-neutral-50 cursor-pointer transition-all w-full">
                <CardContent className="py-3 flex flex-col gap-2">
                  <h1>ShadCN</h1>
                  <div className="flex items-center justify-between">
                    <CardDescription>
                      Build your component library
                    </CardDescription>
                    <Link href="#">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://tailwindcss.com/" target="_blank">
              <Card className="group dark:hover:bg-neutral-900 hover:bg-neutral-50 cursor-pointer transition-all w-full">
                <CardContent className="py-3 flex flex-col gap-2">
                  <h1>Tailwindcss</h1>
                  <div className="flex items-center justify-between">
                    <CardDescription>
                      Rapidly build modern websites.
                    </CardDescription>
                    <Link href="#">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          <Link href="https://elementor.com/" target="_blank">
            <Card className="group dark:hover:bg-neutral-900 hover:bg-neutral-50 cursor-pointer transition-all">
              <CardContent className="py-3 flex flex-col gap-2">
                <h1>Elementor</h1>
                <div className="flex items-center justify-between">
                  <CardDescription>
                    Build a Website Create Your Future
                  </CardDescription>
                  <Link href="#">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Experience */}
      <div className="pb-16">
        <h1 className="flex items-center text-sm gap-2 pb-4 text-neutral-500 dark:text-neutral-400">
          EXPERIENCE
        </h1>
        <div className="justify-between gap-4 pb-4">
          <div>
            <h6 className="pb-3 text-sm text-neutral-500 dark:text-neutral-400">
              October, 2024 - December, 2024
            </h6>
          </div>
          <div className="w-full">
            <h1>ArkDesign B.V. | Elementor Developer</h1>
            <p className="text-neutral-500 dark:text-neutral-400 pt-1">
              <ul>
                <li>
                  Experienced in front-end customization, responsive design, and
                  web performance optimization
                </li>
                <li>
                  Collaborated with cross-functional teams (UI/UX Designers,
                  Product Managers, QA) for delivering product updates.
                </li>
                <li>
                  Ensured scalability for sites handling 100,000+ monthly users
                  with API integrations, custom plugin development, and
                  adherence to SEO best practices.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div>
        <h1 className="flex items-center text-sm gap-2 pb-4 text-neutral-500 dark:text-neutral-400">
          CERTIFICATES <Award className="w-4 h-4" />
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardContent className="p-2">
              <AspectRatio ratio={16 / 9}>
                <Link
                  href="https://res.cloudinary.com/djysyqqyx/image/upload/v1734942721/cozii/dtwm8nliwtpujirnwwe0.png"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/djysyqqyx/image/upload/v1734942721/cozii/dtwm8nliwtpujirnwwe0.png"
                    alt=""
                    fill
                    className="h-full w-full rounded-md object-cover"
                  />
                </Link>
              </AspectRatio>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-2">
              <AspectRatio ratio={16 / 9}>
                <Link
                  href="https://learn.opswatacademy.com/certificate/oKOYtb1Waw"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/djysyqqyx/image/upload/v1735432326/cozii/b8la5j8t95srbztc4z99.png"
                    alt=""
                    fill
                    className="h-full w-full rounded-md object-cover"
                  />
                </Link>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-28">
        <div className="text-center flex flex-col justify-center gap-1.5 dark:text-neutral-400">
          <CardDescription>
            <h6>
              © 2024 | Template inspired by Saud Alshehri & Praveen Shinde |
              Coded By Mikko
            </h6>
          </CardDescription>
          <CardDescription>
            <h6>All Rights Reserved</h6>
          </CardDescription>
        </div>
      </div>

      {/* Back to top button */}
      <BackToTopButton />
    </main>
  );
}
