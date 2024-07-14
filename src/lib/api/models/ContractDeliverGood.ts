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
 * The details of a delivery contract. Includes the type of good, units needed, and the destination.
 * @export
 * @interface ContractDeliverGood
 */
export interface ContractDeliverGood {
	/**
	 * The symbol of the trade good to deliver.
	 * @type {string}
	 * @memberof ContractDeliverGood
	 */
	tradeSymbol: string;
	/**
	 * The destination where goods need to be delivered.
	 * @type {string}
	 * @memberof ContractDeliverGood
	 */
	destinationSymbol: string;
	/**
	 * The number of units that need to be delivered on this contract.
	 * @type {number}
	 * @memberof ContractDeliverGood
	 */
	unitsRequired: number;
	/**
	 * The number of units fulfilled on this contract.
	 * @type {number}
	 * @memberof ContractDeliverGood
	 */
	unitsFulfilled: number;
}

/**
 * Check if a given object implements the ContractDeliverGood interface.
 */
export function instanceOfContractDeliverGood(value: object): value is ContractDeliverGood {
	if (!('tradeSymbol' in value) || value['tradeSymbol'] === undefined) return false;
	if (!('destinationSymbol' in value) || value['destinationSymbol'] === undefined) return false;
	if (!('unitsRequired' in value) || value['unitsRequired'] === undefined) return false;
	if (!('unitsFulfilled' in value) || value['unitsFulfilled'] === undefined) return false;
	return true;
}

export function ContractDeliverGoodFromJSON(json: any): ContractDeliverGood {
	return ContractDeliverGoodFromJSONTyped(json, false);
}

export function ContractDeliverGoodFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): ContractDeliverGood {
	if (json == null) {
		return json;
	}
	return {
		tradeSymbol: json['tradeSymbol'],
		destinationSymbol: json['destinationSymbol'],
		unitsRequired: json['unitsRequired'],
		unitsFulfilled: json['unitsFulfilled']
	};
}

export function ContractDeliverGoodToJSON(value?: ContractDeliverGood | null): any {
	if (value == null) {
		return value;
	}
	return {
		tradeSymbol: value['tradeSymbol'],
		destinationSymbol: value['destinationSymbol'],
		unitsRequired: value['unitsRequired'],
		unitsFulfilled: value['unitsFulfilled']
	};
}
