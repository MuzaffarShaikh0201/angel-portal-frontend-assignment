import { image } from '../lib/asset';
import type { ImageAsset, SectionCopy, TextBlock } from '../types/content';

/** About page content. Verbatim visible copy (and original alt text) from ascenciamalta.edu.mt/ascencia-malta. */

export const aboutBanner: SectionCopy = {
  title: 'About us',
  intro: 'We are eager to give you the best education',
};

/** The two facts shown under the banner. */
export const aboutFacts: TextBlock[] = [
  {
    title: 'LOCATION',
    paragraphs: ['Main Campus: 23, Vincenzo Dimech Street, Floriana FRN 1502 Malta.'],
  },
  { title: 'FOUNDED', paragraphs: ['Ascencia Malta', 'Founded in 2020'] },
];

export const aboutIntro = {
  eyebrow: 'ABOUT',
  title: 'A participative and innovative pedagogy',
  paragraphs: [
    'Ascencia’s ambition is to realize your potential of ascension. Through an individualised follow-up of the students, our teams are at your service for your future: come and present us your projects, and we will do our best to help you realize them.',
    'Our training courses are based on a participative and innovative pedagogy based on the value of the example and the constant exchange between learners and experienced professionals. The realities of corporate life are at the heart of the personalised learning methods we use. They are intended to identify potentials and to hatch vocations of managers and business developers. Our campus is also open to all international candidates who wish to study management in Malta.',
  ],
  image: image(
    'about/about-img03.webp',
    'Group of Ascencia Malta students and staff smiling together at the campus, celebrating community, diversity, and student life',
    512,
    512,
  ),
};

export const aboutMission: TextBlock = {
  title: 'MISSION',
  paragraphs: [
    'At Ascencia Malta, we empower students through a student-centered approach that fosters critical thinking, creativity, and lifelong learning. We deliver high-quality education that meets rigorous standards and prepares graduates for success in a dynamic world. Together with our partnered stakeholders, we are dedicated to developing socially responsible leaders who champion diversity, inclusion, and equity, creating meaningful impact within our diverse community.',
  ],
};

export const coreValuesHeading: SectionCopy = {
  title: 'Our Core Value',
  intro: "Ascencia Malta's commitment to Quality Education is rooted in Diversity",
};

export const coreValues: TextBlock[] = [
  {
    title: 'Course diversity:',
    paragraphs: [
      'We offer a diverse range of accredited courses, making us one of the leading schools in the sector.',
    ],
  },
  {
    title: 'Student diversity:',
    paragraphs: [
      'Our broad course portfolio attracts students from all over the world, bringing together people from many different backgrounds and walks of life.',
    ],
  },
  {
    title: 'Team diversity:',
    paragraphs: [
      'Our team is wonderfully multicultural, helping us better understand and support our student body.',
    ],
  },
  {
    title: 'Diverse educational approach:',
    paragraphs: [
      'We believe learning happens in many different ways, from engaging classroom discussions to hands-on experience and in-company visits, creating a rich and rewarding educational experience.',
    ],
  },
];

export const lecturers = {
  title: 'Our Lecturers',
  intro:
    'At Ascencia Malta, you’ll experience a friendly and welcoming student-centred learning environment',
  paragraphs: [
    'Our lecturers, many entrepreneurs themselves, provide learners with the opportunity to build their professional and academic qualifications through a career path that meets their interests and aspirations in their chosen career.',
    'Ascencia Malta lecturers support, mentor and guide you through the skills, knowledge and practical work experience to achieve your goals.',
  ],
  image: image(
    'bg/video_img.webp',
    'Graduate in cap and gown smiling during a graduation ceremony at Ascencia Malta.',
    1290,
    520,
  ),
};

export const partnersHeading: SectionCopy = {
  title: 'Partner Institutions',
  intro: 'We are proud to be partnered with the following institutions!',
};

/** Shown as a logo wall, as on the original; institution names exist only in the alt text. */
export const partners: ImageAsset[] = [
  image('team/team_01.webp', 'Amity University Logo', 400, 400),
  image('team/team_02.webp', 'Jaipuria Institute of Management Logo', 400, 400),
  image('team/team_03.webp', 'Poddar Group of Institutions Logo', 400, 400),
  image('team/team_04.webp', 'Rajagiri Centre for Business Studies Logo', 400, 400),
  image('team/team_05.webp', 'Nirmala College of Arts & Science', 400, 400),
  image('team/team_06.webp', 'Graphic Era Deemed to be University Logo', 400, 400),
  image('team/team_07.webp', 'Auro University Logo', 400, 400),
  image('team/team_08.webp', 'Parul University Logo', 400, 400),
];
