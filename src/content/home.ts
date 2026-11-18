import { image } from '../lib/asset';
import type {
  GalleryItem,
  ImageAsset,
  InstagramPost,
  LinkItem,
  LogoGroup,
  NewsItem,
  Programme,
  SectionCopy,
  TextBlock,
} from '../types/content';

const ORIGIN = 'https://www.ascenciamalta.edu.mt';

export const hero = {
  eyebrow: 'Think global, Study at Ascencia Malta',
  title: 'Welcome to Ascencia Malta',
  text: 'We are eager to give you the best education at Ascencia Malta',
  actions: [
    { label: 'Apply Now', href: '/contact' },
    { label: 'Explore programmes', href: '/#programmes' },
    { label: 'Talk with a teacher', href: '/contact' },
  ] satisfies LinkItem[],
  background: image('hero/hero_img02.jpg', '', 1920, 790),
};

export const programmesHeading: SectionCopy = { title: 'Explore our programmes' };

export const programmes: Programme[] = [
  {
    name: 'DBA',
    level: 'MQF/EQF : Level 8',
    ects: '180 ECTS',
    mode: 'Blended',
    href: `${ORIGIN}/dba-degrees`,
    image: image(
      'program/dba.webp',
      'Students working on computer during a learning session at Ascencia Malta',
      630,
      470,
    ),
  },
  {
    name: 'MBA',
    level: 'MQF/EQF : Level 7',
    ects: '90 ECTS',
    mode: 'Face-to-Face',
    href: `${ORIGIN}/masters-of-business-administration`,
    image: image('program/mba.webp', 'Students learning at Ascencia Malta', 630, 470),
  },
  {
    name: 'Master',
    level: 'MQF/EQF : Level 7',
    ects: '90 ECTS',
    mode: 'Face-to-Face',
    href: `${ORIGIN}/masters-degrees`,
    image: image(
      'program/masters.webp',
      'Students enjoying their campus life in Ascencia Malta',
      630,
      470,
    ),
  },
  {
    name: 'Postgraduate',
    level: 'MQF/EQF : Level 7',
    ects: '60 ECTS',
    mode: 'Face-to-Face',
    href: `${ORIGIN}/postgraduate-diploma-programmes`,
    image: image('program/postgraduate.webp', 'Students reading books in library', 630, 470),
  },
  {
    name: 'Bachelor',
    level: 'MQF/EQF : Level 6',
    ects: '180 ECTS',
    mode: 'Face-to-Face',
    href: `${ORIGIN}/bachelor-degrees`,
    image: image('program/bachelor.webp', 'Students working on a college project.', 630, 470),
  },
  {
    name: 'Diploma',
    level: 'MQF/EQF : Level 5',
    ects: '60 ECTS',
    mode: 'Face-to-Face',
    href: `${ORIGIN}/diploma-programmes`,
    image: image(
      'program/diploma.webp',
      'Group of students giving a thumbs-up at Ascencia Malta',
      630,
      470,
    ),
  },
  {
    name: 'Award',
    ects: '10 ECTS',
    mode: 'Face-to-Face',
    href: `${ORIGIN}/award-certificates`,
    image: image('program/award.webp', 'Students reading books in library', 630, 470),
  },
];

export const campusNewsHeading: SectionCopy = { title: 'Campus News' };

export const campusNews: { featured: NewsItem; side: NewsItem[] } = {
  featured: {
    title: 'Open Day at Ascencia Malta',
    href: `${ORIGIN}/news/open-day-june-2026-spot-admissions`,
    image: image(
      'blog/Open Day 2 (590 x 558).jpg',
      'Students promoting the Ascencia Malta Open Day event',
      590,
      558,
    ),
    author: 'Ascencia Malta',
  },
  side: [
    {
      title: 'Beyond the Classroom: Our Journey at the ELT Football Tournament',
      href: `${ORIGIN}/news/beyond-the-classroom-elt-football-tournament`,
      image: image(
        'blog/blog-img01.webp',
        'Ascencia Malta football team posing at the ELT Football Tournament',
        330,
        269,
      ),
    },
    {
      title: 'Shaping the Future: Ascencia Malta at the Startup Festival',
      href: `${ORIGIN}/news/shaping-the-future-ascencia-malta-startup-festival`,
      image: image(
        'blog/blog-img02.webp',
        'Ascencia Malta students participating in a Startup Festival event',
        330,
        269,
      ),
    },
    {
      title: 'A Heritage Experience: Visiting the Archdiocese of Malta',
      href: `${ORIGIN}/news/heritage-experience-archdiocese-of-malta-visit`,
      image: image(
        'blog/blog-img04.webp',
        'Ascencia Malta students visiting the Archdiocese of Malta',
        330,
        269,
      ),
    },
    {
      title: 'Marketing in Motion: Inside the Coca-Cola Operations',
      href: `${ORIGIN}/news/marketing-in-motion-coca-cola-operations`,
      image: image(
        'blog/blog-img05.webp',
        'Ascencia Malta students visiting the Coca-Cola facility in Malta',
        330,
        269,
      ),
    },
  ],
};

export const moreCampusNews: LinkItem = { label: 'More Campus News', href: `${ORIGIN}/news` };

export const welcome = {
  title: 'Welcome to Ascencia Malta',
  paragraphs: [
    'As School Director, it is both an honour and a pleasure to welcome you to our dynamic institution, offering Higher Education, English Language programmes, and a Digital Campus in the heart of the Mediterranean.',
    'Ascencia Malta is built on a strong foundation of academic integrity, excellence, and a genuine commitment to learning, teaching, and innovation. Each of our departments is fully accredited by its respective regulatory body. Our Business School programmes are accredited by the Malta Further and Higher Education Authority (MQF/EQF Levels 5–8), our English School is accredited by the ELT Council, and as a recognised ATHE centre, our Digital Campus delivers programmes accredited by Ofqual (RQF Levels 6–7).',
    'What truly defines us, however, is our people.',
    'Our dedicated academic teams mentor some of the brightest minds of this generation. Watching our students grow into trailblazers—achieving success both professionally and personally—continues to inspire our commitment to delivering practical, business-relevant education. Our goal is simple: to ensure that every student who studies with us is fully prepared to step confidently into the world of work and excel.',
    'We believe that education is a powerful tool for discovering one’s path. Whether you are looking to improve your English, embark on a higher education programme, or study through our digital platform, I warmly invite you to join us and begin your journey of growth and self-discovery with Ascencia Malta.',
  ],
  signOff: 'Your career starts here.',
};

export const leaders: ImageAsset[] = [
  image(
    'team/tess.jpg',
    'Portrait of Tess Giordmaina, School Director at Ascencia Malta',
    361,
    445,
  ),
  image(
    'team/Gianluca.jpg',
    'Portrait of Gianluca Abela, Head of Academics at Ascencia Malta Higher Education',
    361,
    445,
  ),
  image(
    'team/pauline.jpg',
    'Portrait of Pauline Fenech, Director of Studies at Ascencia Malta English Language School',
    361,
    445,
  ),
  image(
    'team/dariush.jpg',
    'Portrait of Dariush Rahiminia, Academic Manager at Ascencia Malta Digital Campus',
    361,
    445,
  ),
];

export const missionVisionHeading: SectionCopy = { title: 'Our mission and vision' };

export const missionVision: TextBlock[] = [
  {
    title: 'Our Mission',
    paragraphs: [
      'At Ascencia Malta, we empower students through a student-centered approach that fosters critical thinking, creativity, and lifelong learning. We deliver high-quality education that meets rigorous standards and prepares graduates for success in a dynamic world. Together with our partnered stakeholders, we are dedicated to developing socially responsible leaders who champion diversity, inclusion, and equity, creating meaningful impact within our diverse community.',
    ],
  },
  {
    title: 'Our Vision',
    paragraphs: [
      'The primary purpose of Ascencia Malta is to offer MQF levels 5 – 8 qualifications to EU and International students at affordable rates. These qualifications are accredited by the Malta Further and Higher Education Authority (MFHEA). An MFHEA accreditation ensures that qualifications undergo a thorough evaluation, aligning with the Malta and European Qualifications Frameworks. This recognition guarantees that the Ascencia Malta programmes meet quality standards and are recognised by employers worldwide, thus enhancing our students’ career prospects both locally and internationally. This would allow a wider, professional, and work base horizon to these students. It will also further support the country’s economy by attracting EU and International students and will further develop the education industry in Malta.',
    ],
  },
];

export const campusLifeHeading: SectionCopy = { title: 'Our Campus Life' };

const campusLifeAlts: [number, string][] = [
  [1, 'Ascencia Malta students collaborating during a study session with laptops'],
  [2, 'Campus2'],
  [3, 'Ascencia Malta students learning during an educational visit to a company facility'],
  [4, 'Ascencia Malta students celebrating the festive season with Christmas-themed props'],
  [5, 'Students attending a classroom lecture at Ascencia Malta'],
  [6, 'Lecturer delivering a classroom session to students at Ascencia Malta'],
  [7, 'Ascencia Malta staff and guests posing together at a formal awards event'],
  [
    8,
    'Ascencia Malta students and staff posing in front of a Christmas tree during a festive outing',
  ],
  [9, 'Ascencia Malta staff participating in a November awareness campaign'],
  [10, 'Ascencia Malta staff participating in a Pink October awareness campaign'],
  [12, 'Students attending a guest lecture at Ascencia Malta'],
  [13, 'Ascencia Malta students on an educational tour of an industrial facility'],
  [14, 'Ascencia Malta students participating in the Startup Festival'],
  [15, 'Ascencia Malta football team posing at the AVC ELT Cup tournament'],
  [16, 'Presenter delivering an information session to students at Ascencia Malta'],
  [17, 'Presenter explaining Business School programmes at Ascencia Malta'],
];

export const campusLife: GalleryItem[] = campusLifeAlts.map(([n, alt]) => ({
  caption: 'Cultural Experiences',
  image: image(`campus/campus-img${String(n).padStart(2, '0')}.webp`, alt, 648, 487),
}));

export const successStoriesHeading: SectionCopy = {
  eyebrow: 'Student Voices',
  title: 'Success Stories',
  intro: 'Real students. Real transformations.',
};

export const successStories: InstagramPost[] = [
  { permalink: 'https://www.instagram.com/reel/DGi2oTgIBP6/' },
  { permalink: 'https://www.instagram.com/reel/DHBvrBcorX-/' },
  { permalink: 'https://www.instagram.com/reel/DRPnUL_DGtr/' },
  { permalink: 'https://www.instagram.com/reel/DL1_E-3IZfI/' },
  { permalink: 'https://www.instagram.com/reel/DTh5uPWlPUR/' },
  { permalink: 'https://www.instagram.com/reel/DFC2xujoVO9/' },
];

export const accreditationsHeading: SectionCopy = {
  title: 'Accreditations, Recognition and Memberships',
  intro:
    '"Ascencia Malta is fully recognised within the Maltese and European education systems. Our programmes and schools are accredited by the relevant national authorities, placed on the Malta Qualifications Framework (MQF) and European Qualifications Framework (EQF), and supported by membership in respected international bodies."',
};

export const accreditationGroups: LogoGroup[] = [
  {
    title: 'Accreditation and Licensing',
    logos: [
      image(
        'fanfact/mfhea.png',
        'Malta Further and Higher Education Authority (MFHEA) logo',
        410,
        250,
      ),
      image('fanfact/elt.png', 'ELT Council logo', 410, 250),
      image('fanfact/athe.png', 'ATHE (Awards for Training and Higher Education) logo', 410, 250),
    ],
  },
  {
    title: 'Qualifications Frameworks',
    logos: [
      image('fanfact/mqf.png', 'Malta Qualifications Framework (MQF) logo', 410, 250),
      image('fanfact/eqf.png', 'European Qualifications Framework (EQF) logo', 410, 250),
    ],
  },
  {
    title: 'Global and Professional Memberships',
    logos: [
      image('fanfact/aacsb.png', 'AACSB Business Education Alliance Member logo', 410, 250),
      image('fanfact/efmd.png', 'EFMD Global Member logo', 410, 250),
      image('fanfact/bga.png', 'Business Graduates Association (BGA) Member logo', 410, 250),
      image('fanfact/amte.png', 'AMTE Member certification logo', 410, 250),
      image(
        'fanfact/EFTR.jpg',
        'European Fairy Tale Route – Cultural Route of the Council of Europe logo',
        533,
        119,
      ),
    ],
  },
  {
    title: 'Funding and Mobility Opportunities',
    logos: [
      image('fanfact/get-qualified.png', 'Get Qualified logo', 410, 250),
      image('fanfact/erasmus.png', 'Erasmus+ programme logo', 410, 250),
    ],
  },
];
