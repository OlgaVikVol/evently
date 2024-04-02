import { IEvent } from "@/lib/database/models/event.model"

type CardProps = {
	event: IEvent;
	hasOrderLink?: boolean;
	hidePrice?: boolean;
}

const Card = (props: CardProps) => {
	const { event, hasOrderLink, hidePrice} = props;
	return (
		<div>
			Card
		</div>
	)
}

export default Card

