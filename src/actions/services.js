import { createActions } from "redux-actions";

export const { servicesRequest, servicesSuccess, servicesFailure } = createActions(
	"SERVICES_REQUEST",
	"SERVICES_SUCCESS",
	"SERVICES_FAILURE"
);
