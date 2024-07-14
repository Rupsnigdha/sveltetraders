/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Waypoint } from './Waypoint';
import { WaypointFromJSON, WaypointFromJSONTyped, WaypointToJSON } from './Waypoint';

/**
 *
 * @export
 * @interface GetWaypoint200Response
 */
export interface GetWaypoint200Response {
	/**
	 *
	 * @type {Waypoint}
	 * @memberof GetWaypoint200Response
	 */
	data: Waypoint;
}

/**
 * Check if a given object implements the GetWaypoint200Response interface.
 */
export function instanceOfGetWaypoint200Response(value: object): value is GetWaypoint200Response {
	if (!('data' in value) || value['data'] === undefined) return false;
	return true;
}

export function GetWaypoint200ResponseFromJSON(json: any): GetWaypoint200Response {
	return GetWaypoint200ResponseFromJSONTyped(json, false);
}

export function GetWaypoint200ResponseFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetWaypoint200Response {
	if (json == null) {
		return json;
	}
	return {
		data: WaypointFromJSON(json['data'])
	};
}

export function GetWaypoint200ResponseToJSON(value?: GetWaypoint200Response | null): any {
	if (value == null) {
		return value;
	}
	return {
		data: WaypointToJSON(value['data'])
	};
}
