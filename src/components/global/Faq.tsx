import { Editable } from './Editable';
import { Container, Eyebrow, Section } from './ui';

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: FaqItem[];
};

export default function Faq({
  id = 'faq',
  eyebrow,
  heading,
  subheading,
  items = [],
}: FaqProps) {
  return (
    <Section id={id}>
      <Container className="max-w-3xl">
        {eyebrow && (
          <Editable id={`${id}-eyebrow`}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Editable>
        )}
        <Editable id={`${id}-heading`}>
          <h2 className="mt-3 text-center font-display text-3xl text-ink sm:text-4xl">
            {heading}
          </h2>
        </Editable>
        {subheading && (
          <Editable id={`${id}-subheading`}>
            <p className="mt-3 text-center text-muted">{subheading}</p>
          </Editable>
        )}
        <div className="mt-10 divide-y divide-primary/10 border-y border-primary/10">
          {items.map((item, i) => (
            <Editable key={i} id={`${id}-item-${i}`}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
                  {item.question}
                  <span
                    aria-hidden
                    className="text-accent transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
              </details>
            </Editable>
          ))}
        </div>
      </Container>
    </Section>
  );
}
