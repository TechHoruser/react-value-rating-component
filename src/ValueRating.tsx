import { useEffect, useState } from "react";
import "./ValueRating.scss";

type StatusOption = 'bad' | 'good' | 'neutral' | 'mid-neutral';

interface ValueRatingProps {
	value: number,
	endBad?: number,
	startGood?: number,
}

const getNewStatus = (value: number, endBad: number, startGood: number) => {
	const newStatus: StatusOption = (value < endBad
		? 'bad'
		: (value > startGood
			? 'good'
			: 'neutral')
	);

	return newStatus;
}

export function ValueRating({
	value,
	endBad = 0,
	startGood = 0,
}: ValueRatingProps) {
	const [status, setStatus] = useState<StatusOption>(getNewStatus(value, endBad, startGood))

	useEffect(
		() => {
			const changeStatusWithCalcs = () => {
				let newStatus: StatusOption = getNewStatus(value, endBad, startGood);

				if (status === 'mid-neutral') {
					setTimeout(() => setStatus(newStatus), 300);
					return;
				}

				if (
					(status === 'neutral' && ['good', 'bad'].includes(newStatus))
					|| (newStatus === 'neutral' && ['good', 'bad'].includes(status))
				) {
					newStatus = 'mid-neutral';
				}

				setStatus(newStatus);
			}

			changeStatusWithCalcs();
		},
		[value, endBad, startGood, status]
	)

	return (
		<div className="valueRating">
			<div className="icon">
				<div className={`triangle shape1 ${status}`}>
					<span className="front"></span>
					<span className="back"></span>
					<span className="floor"></span>
				</div>
				<div className={`triangle shape2 ${status}`}>
					<span className="front"></span>
					<span className="back"></span>
					<span className="floor"></span>
				</div>
			</div>
		</div>
	);
}
