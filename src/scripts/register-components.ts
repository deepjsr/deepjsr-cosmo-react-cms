// Component registry for CloudCannon's editable regions.
//
// The `EditableRegion` component from `@cloudcannon/editable-regions/astro`
// uses this map to resolve a block's `_name` (e.g. "global/hero") to the
// correct Astro component at edit time. The live site renders blocks through
// `src/components/global/ContentBlocks.astro`, which uses the same mapping.

import Hero from '../components/global/hero/hero.astro';
import HeroCentered from '../components/global/hero-centered/hero-centered.astro';
import SectionHeader from '../components/global/section-header/section-header.astro';
import FeaturesGrid from '../components/global/features-grid/features-grid.astro';
import FeaturesAlternating from '../components/global/features-alternating/features-alternating.astro';
import ImageText from '../components/global/image-text/image-text.astro';
import LogoCloud from '../components/global/logo-cloud/logo-cloud.astro';
import Testimonials from '../components/global/testimonials/testimonials.astro';
import Faq from '../components/global/faq/faq.astro';
import Cta from '../components/global/cta/cta.astro';
import CtaSplit from '../components/global/cta-split/cta-split.astro';
import PricingTable from '../components/global/pricing-table/pricing-table.astro';
import TeamGrid from '../components/global/team-grid/team-grid.astro';
import Stats from '../components/global/stats/stats.astro';
import Countdown from '../components/global/countdown/countdown.astro';
import Curriculum from '../components/global/curriculum/curriculum.astro';
import Instructor from '../components/global/instructor/instructor.astro';
import DocsGrid from '../components/global/docs-grid/docs-grid.astro';
import Form from '../components/global/form/form.astro';
import VideoEmbed from '../components/global/video-embed/video-embed.astro';
import ContentBlock from '../components/global/content-block/content-block.astro';

export const components = {
  'global/hero': Hero,
  'global/hero-centered': HeroCentered,
  'global/section-header': SectionHeader,
  'global/features-grid': FeaturesGrid,
  'global/features-alternating': FeaturesAlternating,
  'global/image-text': ImageText,
  'global/logo-cloud': LogoCloud,
  'global/testimonials': Testimonials,
  'global/faq': Faq,
  'global/cta': Cta,
  'global/cta-split': CtaSplit,
  'global/pricing-table': PricingTable,
  'global/team-grid': TeamGrid,
  'global/stats': Stats,
  'global/countdown': Countdown,
  'global/curriculum': Curriculum,
  'global/instructor': Instructor,
  'global/docs-grid': DocsGrid,
  'global/form': Form,
  'global/video-embed': VideoEmbed,
  'global/content-block': ContentBlock,
};

export default components;
