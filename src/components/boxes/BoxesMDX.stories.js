import { Canvas, Meta, Story } from "@storybook/addon-docs";
import Boxes from "./Boxes";

<Meta title="MDX/Boxes" component={Boxes} />

export const Template = (args) => <Boxes {...args} />;


<Canvas>
    <Story name="MDXStory">{Template.bind({})} </Story>
</Canvas>