'use client'

import { IEvent } from "@/lib/database/models/event.model";

type EventFormProps = {
	userId: string;
	type: "Create" | "Update";
	event?: IEvent;
	eventId?: string;
}

const EventForm = (props: EventFormProps) => {
	const { type, event, eventId, userId } = props;

	return (
		<div>
			EventForm
		</div>
	)
}

export default EventForm
