const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "R", level: 70 },
    ],
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      { name: "TensorFlow / Keras", level: 90 },
      { name: "scikit-learn", level: 95 },
      { name: "Pandas / NumPy", level: 95 },
      { name: "Matplotlib / Seaborn", level: 90 },
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      { name: "Data Cleaning & EDA", level: 95 },
      { name: "Statistical Testing", level: 90 },
      { name: "Data Visualisation", level: 90 },
      { name: "Jupyter Notebooks", level: 95 },
    ],
  },
  {
    title: "Methods & Techniques",
    skills: [
      { name: "Deep Learning / CNNs", level: 85 },
      { name: "Regression & Classification", level: 95 },
      { name: "Clustering", level: 90 },
      { name: "Git & Version Control", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="gradient-text mb-4 text-center text-4xl font-bold sm:text-5xl">
          Tech Stack
        </h2>
        <p className="mx-auto mb-16 text-center text-text-secondary">
          Technologies and tools I use to build intelligent systems
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card p-6">
              <h3 className="mb-6 text-center text-lg font-semibold text-text-primary">
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <span className="text-sm font-medium text-accent-pink">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
