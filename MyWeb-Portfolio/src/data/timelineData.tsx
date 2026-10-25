// Timeline data with JSX content for the portfolio website
export const timelineData = [
  {
    title: "Cloud Engineer Intern – AIS",
    content: (
      <div>
        <p className="text-sm font-normal text-amber-600 md:text-xl dark:text-amber-400">
          Intern, Cloud Governance and Analytics Team – Advanced Info Service (AIS)
        </p>
        <p className="mb-8 text-sm font-normal text-white md:text-lg dark:text-neutral-200">
          2026 · 9-week internship
        </p>
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            SecOps – Vulnerability Remediation Workflow:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Cloud Infrastructure</strong> - Designed the cloud architecture and provisioned the environment with Terraform
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Risk Analysis</strong> - Ingested security findings with Python for vulnerability analysis and risk-level classification, turning them into prioritized, actionable fixes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Zero-Downtime Remediation</strong> - Found several vulnerabilities fixable by a single patch; checked affected modules and disabled unused components before patching
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Change Management</strong> - Prepared deployment documentation and followed the change-management process before rollout
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            FinOps – Cloud Cost Insights:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Anomaly Detection</strong> - Built baseline models to separate unusual cost changes from normal spending patterns
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Root-Cause Analysis</strong> - Investigated the accounts and services driving cost anomalies
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Top-Down Dashboard</strong> - Delivered a dashboard drilling from the overall cloud portfolio down to account and service level
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            Beyond the Deliverables:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Design Thinking</strong> - Learned to understand the problem before jumping to a solution
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Pitching & Presenting</strong> - Communicated why a solution matters through presentations and mentor feedback
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Cross-Team Collaboration</strong> - Exchanged perspectives with interns from other teams
              </span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img
            src="/experiences/AIS-4.jpeg"
            alt="With the Cloud Governance and Analytics team"
            width={1877}
            height={1408}
            className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <div className="grid grid-cols-3 gap-4">
            <img
              src="/experiences/AIS-1.jpeg"
              alt="Pitching a project to the AIS panel"
              width={2048}
              height={946}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experiences/AIS-2.jpeg"
              alt="Design thinking board with persona and sticky notes"
              width={1152}
              height={1536}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experiences/AIS-3.jpeg"
              alt="Fellow AIS interns after a design thinking session"
              width={1473}
              height={1110}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Research Assistant – CBME-iPDM (Wannoi)",
    content: (
      <div>
        <p className="text-sm font-normal text-amber-600 md:text-xl dark:text-amber-400">
          Research Assistant & Software Developer – Wannoi, Precision Diabetes Management Platform
        </p>
        <p className="mb-8 text-sm font-normal text-white md:text-lg dark:text-neutral-200">
          December 2025 – Present
        </p>
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            Key Contributions:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Production Reliability</strong> - Resolved critical production bugs across the Go backend and Next.js frontend
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Secure CI/CD</strong> - Hardened the pipeline with automated security gates, improving deployment safety for a 4-hospital collaboration
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Clinical UX</strong> - Enhanced patient management dashboards and improved lab data entry accuracy, reducing friction for clinical staff in daily operations
              </span>
            </li>
          </ul>
        </div>
        <a
          href="https://wannoi.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Visit wannoi.org"
        >
          <img
            src="/experiences/wannoi.png"
            alt="Wannoi patient dashboard on desktop, laptop, and mobile"
            width={1630}
            height={1310}
            className="w-full h-auto rounded-lg bg-white transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </a>
        <a
          href="https://wannoi.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-amber-500 hover:text-amber-300 md:text-base"
        >
          Visit wannoi.org →
        </a>
      </div>
    ),
  },
  {
    title: "Software Engineer – Information System Development",
    content: (
      <div>
        <p className="text-sm font-normal text-amber-600 md:text-xl dark:text-amber-400">
          Software Engineer – Information System Development of Chulalongkorn University (ISD), SGCU
        </p>
        <p className="mb-8 text-sm font-normal text-white md:text-lg dark:text-neutral-200">
          July 2025 – Present
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/experiences/isd.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full col-span-2 rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/experiences/fd.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/experiences/rpkm.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          
        </div>
      </div>
    ),
  },{
    title: "Technical Core Team Member",
    content: (
      <div>
        <p className="text-sm font-normal text-amber-600 md:text-xl dark:text-amber-400">
          Core Team of Google Developer Group on Campus Chulalongkorn University: Technical Team
        </p>
        <p className="mb-8 text-sm font-normal text-white md:text-lg dark:text-neutral-200">
          September 2025 – Present
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/experiences/gdg.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full col-span-2 rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
        <div className="mt-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            Key Responsibilities:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                Supported Content and Event teams by building tools and systems used in teaching sessions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                Assisted in running workshops and sessions based on technical strengths
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                Provided technical support to participants during events and resolved live issues
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                Shared knowledge in the community by answering questions and mentoring peers
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Master of Ceremony",
    content: (
      <div>
        <p className="text-sm font-normal text-amber-600 md:text-xl dark:text-amber-400">
          Master of Ceremony & Event Coordinator
        </p>
        <p className="mb-8 text-sm font-normal text-white md:text-lg dark:text-neutral-200">
          2023 – Present
        </p>
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            Leadership & Event Management:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>MC & Head of Activities</strong> - CU Freshman & Lan Gear Camps: Led group engagement and activity design
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Core Team</strong> - "Baan Rub Puen": Coordinated large-scale student onboarding events
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>MC</strong> - Computer Engineering Relations Event "Com SAMPAN": Hosted inter-university gathering of 5 universities
              </span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/experiences/mc1.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/experiences/mc2.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/experiences/mc3.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/experiences/mc4.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Assistant Speaker - AI for Education",
    content: (
      <div>
        <p className="text-sm font-normal text-amber-600 md:text-xl dark:text-amber-400">
          Assistant Speaker for AI for Education Workshops
        </p>
        <p className="mb-8 text-sm font-normal text-white md:text-lg dark:text-neutral-200">
          2025
        </p>
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            Teaching & Workshop Facilitation:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                Provided supporting lectures on AI applications in educational contexts
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                Facilitated hands-on Q&A sessions for workshop participants
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                Helped bridge technical concepts with practical educational implementation
              </span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img
            src="/experiences/ta1.png"
            alt="AI Education Workshop"
            width={500}
            height={500}
            className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/experiences/ta2.png"
              alt="Teaching Assistant"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experiences/ta3.png"
              alt="Workshop Facilitation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Co-Speaker - Open the World of AI",
    content: (
      <div>
        <p className="text-sm font-normal text-amber-600 md:text-xl dark:text-amber-400">
          Co-Speaker at Mahavajiravudh Changwat Songkhla School
        </p>
        <p className="mb-8 text-sm font-normal text-white md:text-lg dark:text-neutral-200">
          August 2026
        </p>
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600 md:text-lg dark:text-amber-400 mb-4">
            "Open the World of AI: Building Projects with AI" Workshop:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Get to Know AI</strong> - Introduced AI fundamentals to Grade 10 students in the SMTE, SMA-PM, and SMA programs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Using AI to Create Innovation</strong> - Guided students in turning ideas into AI-powered projects
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Using AI Effectively</strong> - Taught practical techniques for getting reliable, useful results from AI tools
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">•</span>
              <span className="text-sm font-normal text-white md:text-base dark:text-neutral-200">
                <strong>Design Thinking Process</strong> - Walked students through empathize, define, ideate, prototype, and test to shape their projects
              </span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img
            src="/experiences/SMA-AI-3.jpeg"
            alt="Students and speakers after the AI workshop"
            width={1477}
            height={1108}
            className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-48 lg:h-64"
          />
          <div className="grid grid-cols-3 gap-4">
            <img
              src="/experiences/SMA-AI-1.jpeg"
              alt="Speaking with a student during the workshop"
              width={1477}
              height={1108}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experiences/SMA-AI-2.jpeg"
              alt="Students testing their AI project"
              width={1477}
              height={1108}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experiences/SMA-AI-4.jpeg"
              alt="School newsletter featuring the AI workshop"
              width={1133}
              height={1602}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      </div>
    ),
  }

  
  
];
