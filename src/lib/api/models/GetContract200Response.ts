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
import type { Contract } from './Contract';
import { ContractFromJSON, ContractFromJSONTyped, ContractToJSON } from './Contract';

/**
 *
 * @export
 * @interface GetContract200Response
 */
export interface GetContract200Response {
	/**
	 *
	 * @type {Contract}
	 * @memberof GetContract200Response
	 */
	data: Contract;
}

/**
 * Check if a given object implements the GetContract200Response interface.
 */
export function instanceOfGetContract200Response(value: object): value is GetContract200Response {
	if (!('data' in value) || value['data'] === undefined) return false;
	return true;
}

export function GetContract200ResponseFromJSON(json: any): GetContract200Response {
	return GetContract200ResponseFromJSONTyped(json, false);
}

export function GetContract200ResponseFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetContract200Response {
	if (json == null) {
		return json;
	}
	return {
		data: ContractFromJSON(json['data'])
	};
}

export function GetContract200ResponseToJSON(value?: GetContract200Response | null): any {
	if (value == null) {
		return value;
	}
	return {
		data: ContractToJSON(value['data'])
	};
}