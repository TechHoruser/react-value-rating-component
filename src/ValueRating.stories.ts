import type { Meta, StoryObj } from "@storybook/react";

import { ValueRating } from "./ValueRating";

const meta = {
	title: "ValueRating",
	component: ValueRating,
	argTypes: {
		value: { control: { type: 'number' } },
		endBad: { control: { type: 'number' } },
		startGood: { control: { type: 'number' } },
	},
} satisfies Meta<typeof ValueRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 0,
		endBad: 0.5,
		startGood: 0.5,
	},
};
