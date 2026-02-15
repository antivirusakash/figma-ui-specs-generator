import {
  ArrowDown,
  ArrowUpRight,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type BlogPost = {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  imageSrc: string;
  avatarSrc: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    imageSrc: "/blog/Image.jpg",
    avatarSrc: "/blog/avatars/olivia-rhye.jpg",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    imageSrc: "/blog/Image-1.jpg",
    avatarSrc: "/blog/avatars/phoenix-baker.jpg",
  },
  {
    category: "Software Engineering",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    imageSrc: "/blog/Image-2.jpg",
    avatarSrc: "/blog/avatars/lana-steiner.jpg",
  },
  {
    category: "Management",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Alec Whitten",
    date: "17 Jan 2022",
    imageSrc: "/blog/Image-3.jpg",
    avatarSrc: "/blog/avatars/alec-whitten.jpg",
  },
  {
    category: "Product",
    title: "PM mental models",
    description: "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi Wilkinson",
    date: "16 Jan 2022",
    imageSrc: "/blog/Image-4.jpg",
    avatarSrc: "/blog/avatars/demi-wilkinson.jpg",
  },
  {
    category: "Design",
    title: "What is Wireframing?",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    date: "15 Jan 2022",
    imageSrc: "/blog/Image-5.jpg",
    avatarSrc: "/blog/avatars/candice-wu.jpg",
  },
  {
    category: "Design",
    title: "How collaboration makes us better designers",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    date: "14 Jan 2022",
    imageSrc: "/blog/Image-6.jpg",
    avatarSrc: "/blog/avatars/natali-craig.jpg",
  },
  {
    category: "Product",
    title: "Our top 10 Javascript frameworks to use",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Drew Cano",
    date: "13 Jan 2022",
    imageSrc: "/blog/Image-7.jpg",
    avatarSrc: "/blog/avatars/drew-cano.jpg",
  },
  {
    category: "Customer Success",
    title: "Podcast: Creating a better CX Community",
    description: "Starting a community doesn't need to be complicated, but how do you get started?",
    author: "Orlando Diggs",
    date: "12 Jan 2022",
    imageSrc: "/blog/Image-8.jpg",
    avatarSrc: "/blog/avatars/orlando-diggs.jpg",
  },
];

const FOOTER_COLUMNS = [
  { title: "Product", links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"] },
  { title: "Company", links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"] },
  { title: "Resources", links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"] },
  { title: "Use cases", links: ["Startups", "Enterprise", "Government", "SaaS", "Marketplaces", "Ecommerce"] },
  { title: "Social", links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"] },
];

export default function BlogPagePreview() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#101828]">
      <header className="border-b border-[#F2F4F7] bg-[#F9F5FF]">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/blog/Logomark.png"
              alt="Untitled UI logo"
              width={32}
              height={32}
              className="h-8 w-8"
              unoptimized
              loading="eager"
            />
            <span className="text-sm font-semibold text-[#101828]">Untitled UI</span>
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            <a className="text-base font-semibold text-[#667085]">Home</a>
            <a className="inline-flex items-center gap-1 text-base font-semibold text-[#667085]">
              Products <CaretDown size={16} />
            </a>
            <a className="inline-flex items-center gap-1 text-base font-semibold text-[#667085]">
              Resources <CaretDown size={16} />
            </a>
            <a className="text-base font-semibold text-[#667085]">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-lg px-3 py-2 text-sm font-semibold text-[#667085]">Log in</button>
            <button className="rounded-lg bg-[#7F56D9] px-3 py-2 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#F9F5FF] px-4 pt-16 pb-16 sm:px-8 lg:pt-24 lg:pb-24">
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10">
          <div className="flex max-w-[1024px] flex-col items-center gap-6 text-center">
            <span className="rounded-2xl bg-[#F9F5FF] px-3 py-1 text-sm font-medium text-[#6941C6]">
              Our blog
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl leading-[1.1] font-semibold text-[#42307D] sm:text-5xl">
                Resources and insights
              </h1>
              <p className="text-lg text-[#6941C6] sm:text-xl">
                The latest industry news, interviews, technologies, and resources.
              </p>
            </div>
          </div>
          <label className="flex h-12 w-full max-w-[320px] items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-3 text-base text-[#667085] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <MagnifyingGlass size={20} />
            <input
              className="w-full bg-transparent text-base text-[#667085] outline-none placeholder:text-[#667085]"
              placeholder="Search"
            />
          </label>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24">
          <div className="absolute right-[-200px] bottom-[-22px] h-20 w-[680px] -skew-y-6 bg-[#E9D7FE]" />
          <div className="absolute right-[-40px] bottom-[8px] h-14 w-[467px] -skew-y-6 bg-[#D6BBFB]" />
          <div className="absolute left-[-20px] bottom-[-10px] h-14 w-[467px] skew-y-6 bg-[#D6BBFB]" />
          <div className="absolute left-[-190px] bottom-[8px] h-14 w-[467px] skew-y-6 bg-[#F4EBFF]" />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:py-14">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {BLOG_POSTS.map((post, index) => (
              <article
                key={`${post.title}-${index}`}
                className="h-[580px] rounded-none border border-[#EAECF0] bg-white p-6 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03)]"
              >
                <div className="flex h-full flex-col gap-8">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    width={336}
                    height={240}
                    className="h-[240px] w-full object-cover"
                    unoptimized
                    loading="eager"
                  />
                  <div className="flex h-full flex-col justify-between gap-8">
                    <div className="space-y-3">
                      <p className="text-sm leading-5 font-semibold text-[#6941C6]">{post.category}</p>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h2 className="text-2xl leading-8 font-semibold text-[#101828]">{post.title}</h2>
                          <ArrowUpRight size={20} className="mt-1 min-w-5 text-[#101828]" />
                        </div>
                        <p className="text-base leading-6 text-[#667085]">{post.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.avatarSrc}
                        alt={post.author}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                        unoptimized
                        loading="eager"
                      />
                      <div>
                        <p className="text-sm leading-5 font-semibold text-[#101828]">{post.author}</p>
                        <p className="text-sm leading-5 text-[#667085]">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#F9F5FF] bg-[#F9F5FF] px-4 py-3 text-base font-semibold text-[#6941C6] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
              <ArrowDown size={20} />
              Load more
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <div className="h-px w-full bg-[#EAECF0]" />
      </div>

      <section className="px-4 py-16 sm:px-8 lg:py-12">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-14">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="space-y-5">
              <h2 className="text-3xl leading-[1.2] font-semibold text-[#101828] sm:text-4xl">
                Start your 30-day free trial
              </h2>
              <p className="text-lg text-[#667085] sm:text-xl">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="h-12 rounded-lg border border-[#D0D5DD] bg-white px-5 text-base font-semibold text-[#344054] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                Learn more
              </button>
              <button className="h-12 rounded-lg bg-[#7F56D9] px-5 text-base font-semibold text-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                Get started
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#EAECF0] bg-white">
            <Image
              src="/blog/screen-mockup.png"
              alt="Screen mockup"
              width={1304}
              height={420}
              className="h-auto w-full"
              unoptimized
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5FF] px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl leading-[1.2] font-semibold text-[#42307D] sm:text-4xl">
              Start your free trial
            </h2>
            <p className="text-lg text-[#6941C6] sm:text-xl">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="h-12 rounded-lg border border-[#D0D5DD] bg-white px-5 text-base font-semibold text-[#344054] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
              Learn more
            </button>
            <button className="h-12 rounded-lg bg-[#7F56D9] px-5 text-base font-semibold text-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
              Get started
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white px-4 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div className="max-w-[773px] space-y-2">
              <h3 className="text-xl font-medium text-[#101828]">Join our newsletter</h3>
              <p className="text-base text-[#667085]">We&apos;ll send you a nice letter once per week. No spam.</p>
            </div>
            <div className="flex w-full max-w-[411px] gap-4">
              <input
                className="h-11 w-full rounded-lg border border-[#D0D5DD] px-3 text-base text-[#667085] shadow-[0_1px_2px_rgba(16,24,40,0.05)] outline-none placeholder:text-[#667085]"
                placeholder="Enter your email"
              />
              <button className="h-11 rounded-lg bg-[#7F56D9] px-5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                Subscribe
              </button>
            </div>
          </div>

          <div className="h-px w-full bg-[#EAECF0]" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="space-y-4">
                <h4 className="text-sm leading-5 font-semibold text-[#98A2B3]">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="inline-flex items-center gap-2 text-base leading-6 text-[#667085]">
                        {link}
                        {column.title === "Product" && link === "Solutions" ? (
                          <span className="rounded-2xl bg-[#ECFDF3] px-2 py-0.5 text-xs font-medium text-[#027A48]">
                            New
                          </span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-[#EAECF0]" />

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/blog/Logomark.png"
                alt="Untitled UI logo"
                width={32}
                height={32}
                className="h-8 w-8"
                unoptimized
                loading="eager"
              />
              <span className="text-sm font-semibold text-[#101828]">Untitled UI</span>
            </div>
            <p className="text-base text-[#98A2B3]">© 2077 Untitled UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
