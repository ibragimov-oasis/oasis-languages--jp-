import { Link } from '@/i18n/routing';
import Banner from '@/components/reusable/Menu/Banner';
import clsx from 'clsx';

const Academy = () => {
  const japaneseLinks = [
    {
      title: 'Hiragana 101',
      href: '/academy/hiragana-101',
      description:
        'Learn the basics of Hiragana, the first of the three Japanese scripts.',
    },
    {
      title: 'Katakana 101',
      href: '/academy/katakana-101',
      description:
        'Learn the basics of Katakana, the second of the three Japanese scripts.',
    },
    {
      title: 'Kanji 101',
      href: '/academy/kanji-101',
      description:
        'Learn the basics of Kanji, the third of the three Japanese scripts.',
    },
    {
      title: 'Grammar 101',
      href: '/academy/grammar-101',
      description:
        'Learn the basics of Japanese grammar, including particles and verb conjugation.',
    },
  ];

  const englishLinks = [
    {
      title: 'Advanced English Grammar',
      href: '/academy/advanced-english-grammar',
      description:
        'Master C1-C2 level grammar structures for IELTS 9 and TOEFL 110+.',
    },
    {
      title: 'Advanced English Vocabulary',
      href: '/academy/advanced-english-vocabulary',
      description:
        'Build sophisticated vocabulary for academic and professional contexts.',
    },
    {
      title: 'IELTS & TOEFL Test Prep',
      href: '/academy/advanced-english-test-prep',
      description:
        'Comprehensive strategies for achieving IELTS 9 and TOEFL 110+ scores.',
    },
  ];

  return (
    <div className="flex flex-col gap-8 min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 xl:px-66  pb-20">
      <Banner />
      {/* Japanese Language Section */}
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-[var(--main-color)]">Japanese Language</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {japaneseLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
            >
              <button
                className={clsx(
                  'w-full h-full text-2xl font-semibold border-2 py-6 rounded-2xl transform transition duration-200 hover:scale-y-108 hover:scale-x-102 hover:cursor-pointer items-center justify-center bg-[var(--card-color)] border-[var(--border-color)]',
                  'flex flex-col'
                )}
              >
                <h4 lang="en">{link.title}</h4>
                <p className="text-base font-normal">{link.description}</p>
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* English Language Section */}
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-[var(--main-color)]">English Language (Advanced - C1/C2)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {englishLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
            >
              <button
                className={clsx(
                  'w-full h-full text-2xl font-semibold border-2 py-6 rounded-2xl transform transition duration-200 hover:scale-y-108 hover:scale-x-102 hover:cursor-pointer items-center justify-center bg-[var(--card-color)] border-[var(--border-color)]',
                  'flex flex-col'
                )}
              >
                <h4 lang="en">{link.title}</h4>
                <p className="text-base font-normal">{link.description}</p>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academy;
