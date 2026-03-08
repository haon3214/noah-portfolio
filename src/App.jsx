export default function NoahHumphreyPortfolio() {
  const projects = [
    {
      title: "Hook Design Optimization",
      subtitle: "SolidWorks FEA · Cost-Constrained Design",
      description:
        "Designed and evaluated a load-bearing hook to support 500 lbf while balancing safety factor, stiffness, and material cost. Compared candidate materials and thicknesses using simulation-driven design decisions.",
      tags: ["SolidWorks", "FEA", "Mechanical Design", "Optimization"],
    },
    {
      title: "Helmholtz Coil Cryopreservation Research",
      subtitle: "Electromagnetic Fields · Experimental Research",
      description:
        "Contributed to a cryopreservation research project exploring electromagnetic field effects on ice formation suppression. Supported design, testing, and technical communication for interdisciplinary research work.",
      tags: ["Research", "Testing", "Electromagnetics", "Data Analysis"],
    },
    {
      title: "Engine Acoustics FFT Analysis",
      subtitle: "MATLAB · Signal Processing",
      description:
        "Analyzed recorded engine acoustics in the time and frequency domains using FFT methods. Interpreted dominant frequencies, harmonics, and tonal characteristics to connect acoustic behavior with mechanical engine processes.",
      tags: ["MATLAB", "FFT", "Acoustics", "Signal Processing"],
    },
    {
      title: "Fluid Mechanics & Lab Analysis",
      subtitle: "Venturi · Bernoulli · Experimental Methods",
      description:
        "Performed engineering lab work involving flow behavior, pressure changes, and experimental validation of fluid mechanics theory. Produced technical reports supported by calculations, plots, and discussion of results.",
      tags: ["Fluid Mechanics", "Lab Reports", "Experimental Analysis", "Technical Writing"],
    },
  ];

  const skills = [
    "SolidWorks",
    "MATLAB",
    "FEA / Simulation",
    "Engineering Analysis",
    "Mechanical Design",
    "Experimental Testing",
    "Technical Reporting",
    "Data Visualization",
  ];

  const militaryExperience = [
    {
      title: "Aircraft Recovery & Lift Coordination",
      image: "/images/aircraft-recovery.jpg",
      description:
        "Coordinated lifting operations using mobile cranes and ground support equipment to safely recover and reposition rotary aircraft during maintenance operations. This work required attention to rigging, communication, equipment limits, and safe execution under real operational constraints.",
    },
    {
      title: "Night Aircraft Maintenance Support",
      image: "/images/night-maintenance.jpg",
      description:
        "Supported aircraft maintenance and recovery operations under night conditions, where precision, communication, and procedural discipline were critical to mission success and personnel safety.",
    },
    {
      title: "Heavy Equipment Logistics and Transport",
      image: "/images/crane-logistics.jpg",
      description:
        "Managed loading and transport operations involving military crane trucks and logistics vehicles in field environments. These operations built practical experience with load handling, equipment coordination, and mechanically demanding support work.",
    },
    {
      title: "Aircraft Lift & Ground Handling",
      image: "/images/aircraft-lift.jpg",
      description:
        "Assisted in aircraft lifting and ground handling operations using specialized aviation support equipment and coordinated ground crews. The work reinforced an engineering mindset centered on systems awareness, safety, and execution.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-200 selection:text-neutral-900">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 md:px-10 lg:px-16">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Portfolio</p>
              <h1 className="mt-2 text-lg font-medium text-neutral-200">Noah Humphrey</h1>
            </div>
            <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#skills" className="transition hover:text-white">Skills</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="grid items-end gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-400">
                Mechanical Engineering Student · USMC Veteran
              </p>
              <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
                Designing practical engineering solutions with analysis, research, and hands-on problem solving.
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
                I am a Mechanical Engineering student at the University of Washington Tacoma with experience in CAD,
                simulation, MATLAB, laboratory testing, and technical reporting. My work focuses on translating
                engineering theory into usable, defensible design decisions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl border border-white/15 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Current Focus</p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-neutral-300">
                <div>
                  <p className="font-medium text-white">Mechanical Design</p>
                  <p>Simulation-backed design with strength, stiffness, and material tradeoff analysis.</p>
                </div>
                <div>
                  <p className="font-medium text-white">Research & Testing</p>
                  <p>Interdisciplinary engineering work involving experimentation, documentation, and analysis.</p>
                </div>
                <div>
                  <p className="font-medium text-white">Technical Communication</p>
                  <p>Clear reporting of engineering results through calculations, visuals, and concise conclusions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/10 py-6 text-sm text-neutral-400 md:grid-cols-3">
            <div>
              <p className="text-neutral-500">University</p>
              <p className="mt-1 text-neutral-200">University of Washington Tacoma</p>
            </div>
            <div>
              <p className="text-neutral-500">Discipline</p>
              <p className="mt-1 text-neutral-200">Mechanical Engineering</p>
            </div>
            <div>
              <p className="text-neutral-500">Strengths</p>
              <p className="mt-1 text-neutral-200">CAD, MATLAB, FEA, Experiments, Reporting</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Featured Work</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected engineering projects</h3>
          <p className="mt-4 text-neutral-400">
            A mix of simulation, analysis, experimentation, and research-focused work that reflects how I approach
            engineering problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Project</p>
              <h4 className="mt-3 text-2xl font-semibold text-white">{project.title}</h4>
              <p className="mt-2 text-sm text-neutral-400">{project.subtitle}</p>
              <p className="mt-5 leading-7 text-neutral-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-10 lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">About</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Background that shapes how I work</h3>
          </div>
          <div className="space-y-6 text-base leading-8 text-neutral-300">
            <p>
              My background combines military service, hands-on work ethic, and engineering education. I approach
              technical problems with a practical mindset: understand the constraints, choose defensible methods,
              and communicate the results clearly.
            </p>
            <p>
              I am especially interested in mechanical systems, design analysis, testing, and engineering projects
              where analytical work connects directly to physical performance. I value work that is disciplined,
              useful, and grounded in real-world application.
            </p>
          </div>
        </div>
      </section>

      <section id="military" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Operational Engineering Experience</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              United States Marine Corps technical operations
            </h3>
            <p className="mt-4 leading-8 text-neutral-300">
              My time in the Marine Corps gave me direct exposure to aircraft recovery, heavy equipment operation,
              maintenance support, and logistics coordination. These experiences strengthened my understanding of
              mechanical systems, safety-critical work, disciplined execution, and real-world operational problem solving.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {militaryExperience.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Field Experience</p>
                  <h4 className="mt-3 text-2xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-5 leading-7 text-neutral-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Capabilities</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Technical skills and working tools</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-neutral-200">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Let’s connect</h3>
            <p className="mt-5 max-w-2xl leading-8 text-neutral-300">
              I am currently building experience through engineering coursework, technical projects, and research.
              For internship opportunities, project discussions, or professional connections, feel free to reach out.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
            <div className="space-y-5 text-sm leading-7 text-neutral-300">
              <div>
                <p className="text-neutral-500">Name</p>
                <p className="text-white">Noah Humphrey</p>
              </div>
              <div>
                <p className="text-neutral-500">Email</p>
                <p className="text-white">your.email@example.com</p>
              </div>
              <div>
                <p className="text-neutral-500">LinkedIn</p>
                <p className="text-white">linkedin.com/in/yourprofile</p>
              </div>
              <div>
                <p className="text-neutral-500">Resume</p>
                <p className="text-white">Attach downloadable PDF link here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
