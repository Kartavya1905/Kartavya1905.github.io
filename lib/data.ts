// All site content lives here, so copy edits never touch component markup.
// Sources: Kartavya_Mandora_Resume (public/) and the notebooks and reports in github.com/Kartavya1905.
// Every metric below comes from a printed notebook result or a final project report.

export const profile = {
  name: "Kartavya Mandora",
  role: "AI/ML & Software Engineer",
  location: "Brooklyn, NY",
  availability: "Open to AI & software engineering roles",
  headline: "I build machine learning pipelines and the software around them, and I like making things run faster.",
  valueProposition:
    "Most of my work starts with a messy problem and a dataset. I look for the simplest approach that holds up, pick the right data structure before reaching for more compute, and write code the next person can read without a guide.",
  photo: { src: "/profile.webp", caption: "MS in AI · LIU Brooklyn" },
  email: "kartavyamandora648@gmail.com",
  github: "https://github.com/Kartavya1905",
  linkedin: "https://www.linkedin.com/in/kartavya648",
  resume: "/Kartavya_Mandora_Resume.pdf",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "3.89", label: "GPA, MS in AI" },
  { value: "3", label: "Internships" },
  { value: "90.75%", label: "Best test accuracy (skin lesion ViT)" },
  { value: "Finalist", label: "USAII Global AI Hackathon 2026" },
];

export type SkillGroup = {
  category: string;
  icon: "code" | "binary" | "brain" | "sparkles" | "search" | "eye" | "wrench" | "network";
  items: string[];
  // Knowledge from coursework and study rather than shipped projects.
  theory?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: "code",
    items: ["Python", "C++", "Java", "SQL"],
  },
  {
    category: "CS Fundamentals",
    icon: "binary",
    items: [
      "Data Structures & Algorithms",
      "LeetCode (Python & C++)",
      "Computer Networks",
      "System Design",
      "Ethical Hacking",
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "CNN", "Vision Transformers (ViT)", "LSTM", "BiLSTM"],
  },
  {
    category: "Generative AI & LLMs",
    icon: "sparkles",
    items: ["Stable Diffusion", "ControlNet", "Sentence Transformers"],
  },
  {
    category: "Information Retrieval",
    icon: "search",
    items: ["FAISS", "Semantic Search", "Vector Embeddings", "RAG Pipelines", "PDF Processing"],
  },
  {
    category: "Computer Vision & Audio",
    icon: "eye",
    items: ["OpenCV", "Albumentations", "Image Preprocessing", "Audio Signal Processing"],
  },
  {
    category: "Frameworks & Tools",
    icon: "wrench",
    items: ["Flask", "Streamlit", "Gradio", "Git", "Docker", "Jupyter Notebook", "Google Colab"],
  },
  {
    category: "Scale-Out Systems",
    icon: "network",
    theory: true,
    items: [
      "RoCEv2",
      "RDMA",
      "AllReduce",
      "AllGather",
      "Data Parallelism",
      "Pipeline Parallelism",
      "Tensor Parallelism",
      "PFC",
      "ECN",
      "DCQCN",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  href: string;
  status?: string;
  highlight: Stat;
  // One-line teaser shown on the home page.
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
};

// Detailed cards: problem, solution and measurable impact.
export const featuredProjects: Project[] = [
  {
    title: "Research Paper Recommender",
    category: "Retrieval · NLP",
    // No public repo yet: points at the GitHub profile until one exists.
    href: "https://github.com/Kartavya1905",
    highlight: { value: "Finalist", label: "USAII Global AI Hackathon 2026" },
    summary:
      "Give it a paper and it finds the related work for you. When it isn't sure about a match, it asks a person to check.",
    problem:
      "Finding related work usually means skimming dozens of papers to keep a handful. Keyword search doesn't help much when two papers share an idea but describe it in different words.",
    solution:
      "We pull the text out of each PDF section by section, embed it with Sentence-BERT and search it with FAISS. Any match below a confidence threshold goes to a person for review, and their feedback is saved along with a ready-to-use citation.",
    impact:
      "My teammate and I made the graduate-level finals of the USAII Global AI Hackathon 2026. We tested every step on real papers and measured match quality against papers whose related work we already knew.",
    stack: ["Python", "Sentence-BERT", "FAISS", "PDF Processing", "Human-in-the-loop"],
  },
  {
    title: "DNA Splice Site Classification",
    category: "Genomics · Deep Learning",
    href: "https://github.com/Kartavya1905/DNA-Sequence-Classification",
    highlight: { value: "90.5%", label: "accuracy on 4,562 held-out sequences" },
    summary:
      "A CNN-BiLSTM that spots splice sites in DNA and beats SVM by 11 points and Random Forest by 17.",
    problem:
      "Splice sites mark where a gene gets cut and rejoined during RNA processing. Finding them from raw sequence is hard because a model has to notice short motifs and the wider context around them at the same time.",
    solution:
      "We paired a CNN, which picks up the short motifs, with a bidirectional LSTM that reads each sequence in both directions. It trains on 45,619 one-hot encoded sequences with stratified splits and class balancing, and the whole model is only about 134K parameters.",
    impact:
      "It reached 90.5% accuracy and 0.90 F1 on the test set, with ROC-AUC between 0.975 and 0.989 for each class. On the same split, SVM managed 79.2% and Random Forest 73.7%.",
    stack: ["Python", "TensorFlow", "CNN", "BiLSTM", "Scikit-learn"],
  },
  {
    title: "Sketch2Style",
    category: "Generative AI · Fashion",
    href: "https://github.com/Kartavya1905/Sketch-2-Style",
    highlight: { value: "2–3 s", label: "to turn a sketch into a finished design" },
    summary:
      "Draw a rough outline, add a short prompt, and get back a realistic design that keeps the shape you drew.",
    problem:
      "Text-to-image models can make a nice red dress, but they ignore the neckline or silhouette a designer actually drew. Designers need the output to follow their sketch.",
    solution:
      "We fine-tuned Stable Diffusion v1.5 with a Canny-edge ControlNet, unfreezing all 1.43 billion parameters with a separate learning rate for each part. It trained on 9,600 dress and sneaker images for about 14,400 steps, and a Gradio app lets you try it live.",
    impact:
      "Over the project, SSIM rose from -0.002 to 0.22 and CLIP score from 0.185 to 0.202, and each design takes 2 to 3 seconds. It still produced recognizable designs from noisy, blurred and simple hand-drawn sketches.",
    stack: ["Python", "Stable Diffusion", "ControlNet", "Gradio"],
  },
];

export type CompactProject = {
  title: string;
  category: string;
  href: string;
  status?: string;
  highlight?: Stat;
  summary: string;
  stack: string[];
};

// Compact cards: one paragraph each.
export const moreProjects: CompactProject[] = [
  {
    title: "Skin Cancer Classification with Vision Transformers",
    category: "Computer Vision",
    href: "https://github.com/Kartavya1905/Skin-Lesion-Classification",
    highlight: { value: "90.75%", label: "test accuracy across 7 lesion types" },
    summary:
      "My first CNN baseline hit 87% accuracy but only 0.70 F1 on malignant lesions, because benign images dominate HAM10000. Moving to a Vision Transformer fixed that: it sorts all seven lesion types with 90.75% accuracy and 0.85 macro F1 on 1,503 test images.",
    stack: ["PyTorch", "Vision Transformer", "Albumentations", "Transfer Learning"],
  },
  {
    title: "Robust Neural Decoding",
    category: "Brain-Computer Interfaces",
    href: "https://github.com/Kartavya1905/Robust-Neural-Decoding",
    highlight: { value: "R² 0.59", label: "average over 3 subjects, vs 0.05 for a Wiener filter" },
    summary:
      "Can you predict finger movements from brain signals? On BCI Competition IV recordings from three people, my neural network averaged R² 0.59 (up to 0.68) while the classic Wiener filter stayed near 0.05. With 30% of the channels knocked out, the network still held 0.10 to 0.26.",
    stack: ["Python", "Neural Networks", "Wiener Filter", "Signal Processing"],
  },
  {
    title: "Elderly Voice Recognition",
    category: "Speech · Deep Learning",
    href: "https://github.com/Kartavya1905/Elderly-Voice-command",
    highlight: { value: "87.78%", label: "test accuracy in English and Spanish" },
    summary:
      "A voice command recognizer for older users that understands ten simple words like yes, no, stop and go, in English and Spanish. We normalized the audio, added speed and timing shifts to mimic how speech changes with age, and trained a CNN on mel spectrograms. It scored 86.0% on English alone and 87.78% once Spanish was added.",
    stack: ["Python", "PyTorch", "CNN", "Mel Spectrograms", "Audio Augmentation"],
  },
  {
    title: "Neural Network from Scratch",
    category: "Pure Python",
    // No public repo yet: points at the GitHub profile until one exists.
    href: "https://github.com/Kartavya1905",
    status: "In progress",
    highlight: { value: "~13", label: "decimal places matched against Python's math library" },
    summary:
      "I wanted to see what really happens under the hood, so I'm writing a neural network in plain Python with zero imports. My exp, log, sqrt and sigmoid, built from Taylor series, match Python's math library to about 13 decimal places. The XOR forward pass works, and backpropagation is next.",
    stack: ["Pure Python", "Taylor Series", "No Libraries"],
  },
  {
    title: "ML Foundations",
    category: "Coursework Collection",
    href: "https://github.com/Kartavya1905/My_projects",
    summary:
      "The core algorithms I wrote while learning the fundamentals: linear and logistic regression with gradient descent, Bayesian networks, decision trees, and neural networks for regression and classification, all the way up to a CNN for image classification.",
    stack: ["Python", "PyTorch", "Gradient Descent", "Bayesian Networks", "Decision Trees"],
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  location?: string;
  summary: string;
  tags?: string[];
  kind: "work" | "education";
};

export const timeline: TimelineEntry[] = [
  {
    period: "2025 — Present",
    title: "Master of Science in Artificial Intelligence",
    org: "Long Island University Brooklyn",
    location: "Brooklyn, NY",
    summary:
      "I'm holding a 3.89 GPA while building applied ML projects in generative AI, retrieval, computer vision and deep learning. On the side, I've been studying how large models train across many GPUs, from collective communication to RDMA networking.",
    tags: ["Generative AI", "Retrieval", "Computer Vision", "Deep Learning"],
    kind: "education",
  },
  {
    period: "Jan 2024 — Apr 2024",
    title: "Industrial Intern, Pavement Design & Traffic",
    org: "Infinite Civil Solutions Pvt. Ltd.",
    location: "Ahmedabad, India",
    summary:
      "I worked with national highway traffic and pavement data. I built regression models that forecast traffic growth from GDP and NSDP figures, and back-calculated pavement layer properties from FWD deflection readings to design both flexible and rigid pavements.",
    tags: [
      "Regression Analysis",
      "Traffic Data Analysis",
      "Pavement Design",
      "IITPAVE",
      "KGPBACK",
      "LCMS RoadInspect",
      "Dynatest Explorer",
      "MS Excel",
    ],
    kind: "work",
  },
  {
    period: "May 2023 — Jul 2023",
    title: "Research Intern",
    org: "SVNIT Surat, Water Resources Department",
    location: "Surat, India",
    summary:
      "I mapped land use and land cover across the Tapi Basin in ArcGIS from sampled training areas. Then I modeled flood risk on the Mahi River with a 1D steady-flow HEC-RAS simulation covering 100 km of river cross sections.",
    tags: [
      "Python",
      "HEC-RAS",
      "ArcGIS",
      "ArcHydro",
      "Flood Analysis",
      "Hydraulic Modeling",
      "LULC Classification",
      "Drainage Density Analysis",
    ],
    kind: "work",
  },
  {
    period: "Mar 2023 — May 2023",
    title: "Android App Development Intern",
    org: "Acmegrade",
    summary:
      "After hands-on training in Android Studio, I built two apps in Java: a shopping interface that lists a store's products, and a quiz app that asks for your name and scores your answers.",
    tags: ["Android Studio", "Java", "Android Emulator", "App Interface Design"],
    kind: "work",
  },
  {
    period: "2020 — 2024",
    title: "Bachelor of Technology, Engineering",
    org: "SVNIT Surat",
    location: "Surat, India",
    summary:
      "I graduated with a 7.92/10 GPA. Getting in meant scoring in the 96.27 percentile in JEE Main, India's national engineering entrance exam.",
    kind: "education",
  },
];

export type Achievement = {
  title: string;
  detail: string;
  icon: "trophy" | "award";
};

export const achievements: Achievement[] = [
  {
    title: "Finalist, USAII Global AI Hackathon 2026",
    detail: "My teammate and I reached the graduate-level finals with the Research Paper Recommender.",
    icon: "trophy",
  },
  {
    title: "96.27 percentile, JEE Main",
    detail: "India's national entrance exam for engineering programs.",
    icon: "award",
  },
];
