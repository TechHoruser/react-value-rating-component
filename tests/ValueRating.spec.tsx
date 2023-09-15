import { render } from '@testing-library/react';
import { ValueRating } from '../src';

describe('ValueRating component', () => {
	it('renders with default props', () => {
		const { container } = render(<ValueRating value={50} />);
		expect(container).toMatchSnapshot();
	});

	it('renders with custom props', () => {
		const { container } = render(<ValueRating value={30} endBad={20} startGood={70} />);
		expect(container).toMatchSnapshot();
	});

	it('changes status when value changes', () => {
		const { container, rerender } = render(<ValueRating value={30} endBad={20} startGood={70} />);

		// Initial snapshot
		expect(container).toMatchSnapshot();

		// Update the value prop
		rerender(<ValueRating value={80} endBad={20} startGood={70} />);

		// Updated snapshot
		expect(container).toMatchSnapshot();
	});

	it('changes status to "mid-neutral" and then updates to new status', async () => {
		const { container, rerender } = render(<ValueRating value={30} endBad={20} startGood={70} />);

		// Initial snapshot
		expect(container).toMatchSnapshot();

		// Update the value to trigger "mid-neutral"
		jest.useFakeTimers();
		rerender(<ValueRating value={45} endBad={20} startGood={70} />);
		jest.runAllTimers();
		jest.useRealTimers();

		// Snapshot after "mid-neutral"
		expect(container).toMatchSnapshot();

		// Update the value to new status
		rerender(<ValueRating value={90} endBad={20} startGood={70} />);

		// Updated snapshot
		expect(container).toMatchSnapshot();
	});
});