import type {Meta, StoryFn} from '@storybook/react-webpack5';

import {Link} from '../Link';
import type {LinkProps} from '../Link';
import {LinkShowcase} from '../__stories__/LinkShowcase';

export default {
    title: 'Components/Navigation/Link',
    component: Link,
    parameters: {
        a11y: {
            context: '#storybook-root',
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: false,
                    },
                ],
            },
        },
    },
} as Meta;

// Default story
const DefaultTemplate: StoryFn<LinkProps> = (args) => <Link {...args}>Link</Link>;
export const Default = DefaultTemplate.bind({});

// Showcase story
const ShowcaseTemplate: StoryFn = () => <LinkShowcase />;
export const Showcase = ShowcaseTemplate.bind({});

// View story
const ViewTemplate: StoryFn<LinkProps> = (args) => (
    <div style={{display: 'flex', gap: '1rem'}}>
        <Link {...args} view="normal">
            Normal
        </Link>
        <Link {...args} view="primary">
            Primary
        </Link>
        <Link {...args} view="secondary">
            Secondary
        </Link>
    </div>
);
export const View = ViewTemplate.bind({});
