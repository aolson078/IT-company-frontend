const highlights = [
  {
    label: "Cloud & Infrastructure",
    detail: "Hybrid migration, Kubernetes operations, and resilient uptime."
  },
  {
    label: "Product Engineering",
    detail: "Design systems, full-stack delivery, and QA automation."
  },
  {
    label: "AI & Data",
    detail: "Modern analytics, MLOps enablement, and decision dashboards."
  }
];

const portfolio = [
  {
    title: "Helios Logistics",
    metric: "34% faster dispatch",
    summary:
      "Replatformed a legacy ERP into a real-time operations cockpit with predictive routing."
  },
  {
    title: "Asteria Health",
    metric: "HIPAA-ready data lake",
    summary:
      "Unified 12 data sources into a compliant analytics backbone and self-serve BI."
  },
  {
    title: "Lumen Retail",
    metric: "$1.8M revenue lift",
    summary:
      "Built an omnichannel personalization engine with zero-downtime releases."
  }
];

const products = [
  {
    name: "PulseOps",
    description: "AI-assisted incident response with live service health and playbooks."
  },
  {
    name: "Orbit Studio",
    description: "Modular design system and component factory for rapid product launches."
  },
  {
    name: "SignalGrid",
    description: "Secure customer data hub with governance, lineage, and compliance tooling."
  }
];

const deliverySteps = [
  {
    title: "Discover",
    detail: "Immersion workshops, technical audits, and KPI alignment."
  },
  {
    title: "Design",
    detail: "Experience blueprints, system architecture, and security planning."
  },
  {
    title: "Deliver",
    detail: "Agile release trains, observability, and continuous optimization."
  }
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">NovaGrid</div>
          <div className="nav-links">
            <a href="#synopsis">Synopsis</a>
            <a href="#work">Work</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="primary-btn" type="button">
            Schedule a Call
          </button>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">IT Company · Customer Success Focused</p>
            <h1>
              We design, secure, and scale the digital backbone for ambitious
              businesses.
            </h1>
            <p className="subhead">
              NovaGrid is a premium IT partner for forward-thinking brands. We
              blend cloud engineering, product design, and data intelligence to
              deliver customer experiences that feel effortless.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" type="button">
                Explore Our Work
              </button>
              <button className="ghost-btn" type="button">
                View Capabilities
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <h3>120+</h3>
                <p>Enterprise launches</p>
              </div>
              <div>
                <h3>24/7</h3>
                <p>Security operations</p>
              </div>
              <div>
                <h3>98%</h3>
                <p>Client retention</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-header">
              <span>Trusted by</span>
              <strong>Growth teams</strong>
            </div>
            <div className="hero-card-body">
              <div className="pill">FinTech</div>
              <div className="pill">Healthcare</div>
              <div className="pill">Retail</div>
              <div className="pill">Logistics</div>
              <div className="pill">SaaS</div>
            </div>
            <div className="hero-card-footer">
              <p>“NovaGrid helped us cut release cycles from months to days.”</p>
              <span>— VP Engineering, Lumen Retail</span>
            </div>
          </div>
        </div>
        <div className="trusted-strip">
          <span>Trusted by forward-thinking teams</span>
          <div className="trusted-logos">
            <div>Northwind</div>
            <div>VertexPay</div>
            <div>Brightlane</div>
            <div>Sequoia Health</div>
            <div>Atlas Retail</div>
          </div>
        </div>
      </header>

      <section id="synopsis" className="section synopsis">
        <div className="section-header">
          <p className="eyebrow">Synopsis</p>
          <h2>IT strategy built for clarity, confidence, and measurable impact.</h2>
          <p>
            We align technology with business outcomes. Our squads partner with
            your teams to modernize infrastructure, elevate digital products, and
            operationalize data so every customer interaction is seamless.
          </p>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <div key={item.label} className="highlight-card">
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section delivery">
        <div className="section-header">
          <p className="eyebrow">Delivery Model</p>
          <h2>Structured execution that keeps stakeholders aligned.</h2>
          <p>
            Our delivery pods combine strategy, engineering, and design to keep
            teams focused on outcomes while we handle the technical lift.
          </p>
        </div>
        <div className="delivery-grid">
          {deliverySteps.map((step, index) => (
            <div key={step.title} className="delivery-card">
              <div className="step-count">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-header">
          <p className="eyebrow">Case Studies</p>
          <h2>Proven results across industries.</h2>
        </div>
        <div className="work-grid">
          {portfolio.map((project) => (
            <article key={project.title} className="work-card">
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="work-metric">{project.metric}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section products">
        <div className="section-header">
          <p className="eyebrow">Products</p>
          <h2>Accelerators designed to compound your growth.</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="ghost-btn" type="button">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build your next digital advantage.</h2>
            <p>
              Share your goals and we will craft a tailored roadmap for your
              business. Our response time is under 24 hours.
            </p>
            <div className="contact-details">
              <div>
                <span>Email</span>
                <strong>hello@novagrid.io</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>+1 (212) 555-0198</strong>
              </div>
              <div>
                <span>Locations</span>
                <strong>New York · Austin · London</strong>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <label>
              Full name
              <input type="text" placeholder="Jane Cooper" />
            </label>
            <label>
              Work email
              <input type="email" placeholder="jane@company.com" />
            </label>
            <label>
              Project goals
              <textarea placeholder="Tell us about the initiative"></textarea>
            </label>
            <button className="primary-btn" type="button">
              Send message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">NovaGrid</div>
          <p>Customer-first IT services for ambitious organizations.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Services</span>
            <a href="#synopsis">Cloud Modernization</a>
            <a href="#synopsis">Product Engineering</a>
            <a href="#synopsis">Data & AI</a>
          </div>
          <div>
            <span>Company</span>
            <a href="#work">Case Studies</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <span>Insights</span>
            <a href="#">Security briefing</a>
            <a href="#">Product playbooks</a>
            <a href="#">Success stories</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
