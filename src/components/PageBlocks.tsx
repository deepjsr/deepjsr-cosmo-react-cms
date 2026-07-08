import type { ComponentType } from 'react';
import Hero, { type HeroProps } from './global/Hero';
import Features, { type FeaturesProps } from './global/Features';
import ImageText, { type ImageTextProps } from './global/ImageText';
import ProductGrid, { type ProductGridProps } from './global/ProductGrid';
import Pricing, { type PricingProps } from './global/Pricing';
import Testimonials, { type TestimonialsProps } from './global/Testimonials';
import Faq, { type FaqProps } from './global/Faq';
import Cta, { type CtaProps } from './global/Cta';
import Team, { type TeamProps } from './global/Team';
import LogoCloud, { type LogoCloudProps } from './global/LogoCloud';

export type ContentBlock = {
  component:
    | 'hero'
    | 'features'
    | 'image_text'
    | 'product_grid'
    | 'pricing'
    | 'testimonials'
    | 'faq'
    | 'cta'
    | 'team'
    | 'logo_cloud';
  [key: string]: unknown;
};

const registry: Record<
  ContentBlock['component'],
  ComponentType<any>
> = {
  hero: Hero as ComponentType<HeroProps>,
  features: Features as ComponentType<FeaturesProps>,
  image_text: ImageText as ComponentType<ImageTextProps>,
  product_grid: ProductGrid as ComponentType<ProductGridProps>,
  pricing: Pricing as ComponentType<PricingProps>,
  testimonials: Testimonials as ComponentType<TestimonialsProps>,
  faq: Faq as ComponentType<FaqProps>,
  cta: Cta as ComponentType<CtaProps>,
  team: Team as ComponentType<TeamProps>,
  logo_cloud: LogoCloud as ComponentType<LogoCloudProps>,
};

export default function PageBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const Component = registry[block.component];
        if (!Component) return null;
        const { component, ...props } = block;
        return (
          <Component key={`${block.component}-${index}`} id={block.component} {...props} />
        );
      })}
    </>
  );
}
