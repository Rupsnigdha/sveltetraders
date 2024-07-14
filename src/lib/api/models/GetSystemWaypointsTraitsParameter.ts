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

// import type { Array<WaypointTraitSymbol> } from './Array&lt;WaypointTraitSymbol&gt;';
// import {
//     instanceOfArray<WaypointTraitSymbol>,
//     Array<WaypointTraitSymbol>FromJSON,
//     Array<WaypointTraitSymbol>FromJSONTyped,
//     Array<WaypointTraitSymbol>ToJSON,
// } from './Array&lt;WaypointTraitSymbol&gt;';
import type { WaypointTraitSymbol } from './WaypointTraitSymbol';
import {
	instanceOfWaypointTraitSymbol,
	WaypointTraitSymbolFromJSON,
	WaypointTraitSymbolFromJSONTyped,
	WaypointTraitSymbolToJSON
} from './WaypointTraitSymbol';

/**
 * @type GetSystemWaypointsTraitsParameter
 *
 * @export
 */
export type GetSystemWaypointsTraitsParameter = Array<WaypointTraitSymbol> | WaypointTraitSymbol;

export function GetSystemWaypointsTraitsParameterFromJSON(
	json: any
): GetSystemWaypointsTraitsParameter {
	return GetSystemWaypointsTraitsParameterFromJSONTyped(json, false);
}

export function GetSystemWaypointsTraitsParameterFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetSystemWaypointsTraitsParameter {
	if (json == null) {
		return json;
	}
	if (instanceOfArray<WaypointTraitSymbol>(json)) {
		return Array < WaypointTraitSymbol > FromJSONTyped(json, true);
	}
	if (instanceOfWaypointTraitSymbol(json)) {
		return WaypointTraitSymbolFromJSONTyped(json, true);
	}
}

export function GetSystemWaypointsTraitsParameterToJSON(
	value?: GetSystemWaypointsTraitsParameter | null
): any {
	if (value == null) {
		return value;
	}

	if (instanceOfArray<WaypointTraitSymbol>(value)) {
		return Array < WaypointTraitSymbol > ToJSON(value as Array<WaypointTraitSymbol>);
	}
	if (instanceOfWaypointTraitSymbol(value)) {
		return WaypointTraitSymbolToJSON(value as WaypointTraitSymbol);
	}

	return {};
}