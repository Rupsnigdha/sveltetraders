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
/**
 *
 * @export
 * @interface DeliverContractRequest
 */
export interface DeliverContractRequest {
	/**
	 * Symbol of a ship located in the destination to deliver a contract and that has a good to deliver in its cargo.
	 * @type {string}
	 * @memberof DeliverContractRequest
	 */
	shipSymbol: string;
	/**
	 * The symbol of the good to deliver.
	 * @type {string}
	 * @memberof DeliverContractRequest
	 */
	tradeSymbol: string;
	/**
	 * Amount of units to deliver.
	 * @type {number}
	 * @memberof DeliverContractRequest
	 */
	units: number;
}

/**
 * Check if a given object implements the DeliverContractRequest interface.
 */
export function instanceOfDeliverContractRequest(value: object): value is DeliverContractRequest {
	if (!('shipSymbol' in value) || value['shipSymbol'] === undefined) return false;
	if (!('tradeSymbol' in value) || value['tradeSymbol'] === undefined) return false;
	if (!('units' in value) || value['units'] === undefined) return false;
	return true;
}

export function DeliverContractRequestFromJSON(json: any): DeliverContractRequest {
	return DeliverContractRequestFromJSONTyped(json, false);
}

export function DeliverContractRequestFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): DeliverContractRequest {
	if (json == null) {
		return json;
	}
	return {
		shipSymbol: json['shipSymbol'],
		tradeSymbol: json['tradeSymbol'],
		units: json['units']
	};
}

export function DeliverContractRequestToJSON(value?: DeliverContractRequest | null): any {
	if (value == null) {
		return value;
	}
	return {
		shipSymbol: value['shipSymbol'],
		tradeSymbol: value['tradeSymbol'],
		units: value['units']
	};
}