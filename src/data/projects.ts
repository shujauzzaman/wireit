// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'City Report AI',
    description:
      'A smart AI monitoring platform for urban environments, helping citizens report and resolve environmental issues.',
    tags: ['AI', 'Civic Tech'],
    link: 'https://github.com/shujauzzaman/city-report-ai',
  },
  {
    title: 'Network Monitoring',
    description:
      'A tool for tracking devices across a network in real time, built for visibility into connected systems.',
    tags: ['JavaScript', 'Networking'],
    link: 'https://github.com/shujauzzaman/network-monitoring',
  },
  {
    title: 'Appreciation Portal — Haidri Beverages',
    description:
      'An internal portal built for Haidri Beverages to recognize and celebrate employee contributions.',
    tags: ['Next.js', 'Firebase'],
    link: 'https://github.com/shujauzzaman/appreciation-portal',
  },
  {
    title: 'Requirements Ambiguity Detection',
    description:
      'An AI-powered web app that scans user-written requirements and flags ambiguous or unclear language before it becomes a problem.',
    tags: ['React', 'AI', 'Supabase'],
    link: 'https://github.com/shujauzzaman/requirements-ambiguity-detection',
  },
  {
    title: 'BirdsGen',
    description:
      'An AI tool that generates realistic bird images directly from text prompts.',
    tags: ['React', 'TypeScript', 'AI'],
    link: 'https://github.com/shujauzzaman/birds-gen',
  },
  {
    title: 'RSA Encryption Overview',
    description:
      'A complete written breakdown of RSA encryption, covering the math and logic behind the algorithm.',
    tags: ['Cryptography', 'Documentation'],
    link: 'https://github.com/shujauzzaman/Complete-Overview-of-RSA-encryption',
  },
  {
    title: 'IoT Greenhouse Control',
    description:
      'A mathematical modeling and simulation project for automated humidity control in a greenhouse using IoT principles.',
    tags: ['IoT', 'Mathematical Modeling'],
    link: 'https://github.com/shujauzzaman/IoT-based-humidity-control-system-for-Greenhouse---Simulation-and-Modleing',
  },
];