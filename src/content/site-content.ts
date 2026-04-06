export const siteContent = {
  name: "Chimezie Onuchukwu",
  title: "AI & Data Science Researcher",
  heroTagline: "Building intelligent systems with rigour, curiosity, and care.",
  heroDescription:
    "I work at the intersection of artificial intelligence, data science, and applied research. My focus is on building models and analyses that are not just technically sound but genuinely useful, grounded in real problems, evaluated honestly, and designed to support better decisions.",

  about: `I am a data scientist and AI practitioner with a background in applied machine learning, statistical analysis, and data-driven decision making. My work spans deep learning for computer vision, supervised and unsupervised learning for behavioural prediction, and demographic data analysis for policy guidance.

What drives me is the space between a method working in theory and working in practice. I am drawn to problems where getting the modelling right has real consequences, whether that means a reliable damage classification for an insurance claim, a fair demographic analysis that informs public investment, or a churn prediction model that actually identifies the customers most at risk.

I approach every project with the same set of principles: start simple, compare fairly, document thoroughly, and be honest about what the data does and does not support. I believe that the most valuable skill in data science is not knowing the most techniques but knowing when and why to use each one.

I am currently preparing for doctoral research, with interests in applied AI systems, model reliability, and the intersection of machine learning with real-world decision making.`,

  researchInterests: [
    {
      title: "Applied Computer Vision",
      description:
        "Image classification and object detection for practical domains like insurance, healthcare, and infrastructure monitoring. Interested in how models generalise beyond benchmark datasets.",
    },
    {
      title: "Model Reliability & Evaluation",
      description:
        "How do we know when a model is trustworthy? Rigorous evaluation frameworks, uncertainty quantification, and the gap between validation metrics and real-world performance.",
    },
    {
      title: "Data-Driven Policy & Decision Support",
      description:
        "Using statistical analysis and machine learning to inform decisions that affect people. Demographic modelling, resource allocation, and the responsibility that comes with turning data into recommendations.",
    },
    {
      title: "Customer Behaviour Modelling",
      description:
        "Predicting and understanding human behaviour through data. Churn prediction, spending patterns, and customer segmentation using both supervised and unsupervised approaches.",
    },
    {
      title: "Responsible & Interpretable AI",
      description:
        "Making AI systems that can be understood, audited, and trusted. Interested in interpretability methods, fairness in automated decision-making, and the social implications of deploying ML in high-stakes settings.",
    },
  ],

  skills: {
    "Machine Learning": [
      "Supervised Learning (Regression, Classification)",
      "Unsupervised Learning (Clustering, Dimensionality Reduction)",
      "Neural Networks & Deep Learning",
      "Model Evaluation & Selection",
      "Hyperparameter Tuning",
      "Feature Engineering",
    ],
    "Deep Learning": [
      "Convolutional Neural Networks (CNNs)",
      "Transfer Learning",
      "Image Classification",
      "Data Augmentation",
      "Regularisation Techniques",
    ],
    "Data Science & Analytics": [
      "Exploratory Data Analysis",
      "Statistical Testing & Inference",
      "Data Cleaning & Preprocessing",
      "Demographic Analysis",
      "Data Visualisation",
    ],
    "Programming & Tools": [
      "Python (NumPy, Pandas, scikit-learn)",
      "TensorFlow / Keras",
      "Matplotlib / Seaborn",
      "Jupyter Notebooks",
      "SQL",
      "Git & Version Control",
    ],
  },

  caseStudies: [
    {
      slug: "vehicle-damage-cnn",
      title: "Vehicle Damage Classification with CNNs",
      summary:
        "Designed and trained a convolutional neural network to classify six types of vehicle damage from photographs, with systematic regularisation experiments and hyperparameter tuning.",
      tags: ["Deep Learning", "Computer Vision", "CNN", "TensorFlow"],
      featured: true,
      github: "https://github.com/prolifiq1/vehicle-damage-cnn",
    },
    {
      slug: "streaming-customer-analysis",
      title: "Streaming Service Customer Behaviour Analysis",
      summary:
        "Built a comparative machine learning pipeline spanning regression, classification, and clustering to predict spending, churn, and customer segments in a 5,000-user streaming dataset.",
      tags: ["Machine Learning", "Classification", "Clustering", "scikit-learn"],
      featured: true,
      github: "https://github.com/prolifiq1/streaming-customer-analysis",
    },
    {
      slug: "census-demographic-analysis",
      title: "Census Demographic Analysis for Policy Recommendations",
      summary:
        "Cleaned and analysed 8,175 census records using household-aware methodology, then produced statistically grounded policy recommendations for town development.",
      tags: ["Data Science", "Statistical Analysis", "EDA", "Policy"],
      featured: true,
      github: "https://github.com/prolifiq1/census-demographic-analysis",
    },
    {
      slug: "ai-portfolio-synthesis",
      title: "Connecting Deep Learning, Classical ML, and Applied Data Science",
      summary:
        "A reflective synthesis of working across computer vision, supervised learning, unsupervised learning, and demographic analysis within a single academic portfolio.",
      tags: ["AI", "Reflection", "Research", "Methodology"],
      featured: false,
      github: "https://github.com/prolifiq1/ai-portfolio-synthesis",
    },
  ],

  profileStatement: `Chimezie Onuchukwu is a data scientist and AI practitioner whose work spans deep learning, classical machine learning, and applied statistical analysis. His projects demonstrate a consistent emphasis on rigorous evaluation, principled methodology, and the translation of quantitative findings into practical decisions. He approaches technical problems with the curiosity of a researcher and the discipline of an engineer, combining strong computational skills with the judgment to know when a simpler method is the better choice.`,

  positioningSummary: `Chimezie's work reveals a practitioner who is ready for the demands of doctoral research. Across projects in computer vision, customer behaviour prediction, and demographic policy analysis, he has demonstrated the ability to frame problems precisely, select and compare methods fairly, manage uncertainty honestly, and communicate findings clearly. His technical range is matched by a consistent analytical disposition: he prioritises understanding over performance metrics, documents his reasoning thoroughly, and treats model evaluation as seriously as model building. These are the habits that distinguish effective researchers from effective coders.`,

  strengths: [
    "Systematic experimental methodology with controlled comparisons",
    "Honest evaluation that prioritises reliability over headline metrics",
    "Domain-informed data preparation that goes beyond mechanical preprocessing",
    "Clear technical communication with well-documented reasoning",
    "Comfort across deep learning, classical ML, and statistical analysis",
    "Ability to connect quantitative findings to real-world decisions",
  ],
};
