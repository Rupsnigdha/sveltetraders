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
import type { Agent } from './Agent';
import { AgentFromJSON, AgentFromJSONTyped, AgentToJSON } from './Agent';
import type { Ship } from './Ship';
import { ShipFromJSON, ShipFromJSONTyped, ShipToJSON } from './Ship';
import type { ShipyardTransaction } from './ShipyardTransaction';
import {
	ShipyardTransactionFromJSON,
	ShipyardTransactionFromJSONTyped,
	ShipyardTransactionToJSON
} from './ShipyardTransaction';

/**
 *
 * @export
 * @interface PurchaseShip201ResponseData
 */
export interface PurchaseShip201ResponseData {
	/**
	 *
	 * @type {Agent}
	 * @memberof PurchaseShip201ResponseData
	 */
	agent: Agent;
	/**
	 *
	 * @type {Ship}
	 * @memberof PurchaseShip201ResponseData
	 */
	ship: Ship;
	/**
	 *
	 * @type {ShipyardTransaction}
	 * @memberof PurchaseShip201ResponseData
	 */
	transaction: ShipyardTransaction;
}

/**
 * Check if a given object implements the PurchaseShip201ResponseData interface.
 */
export function instanceOfPurchaseShip201ResponseData(
	value: object
): value is PurchaseShip201ResponseData {
	if (!('agent' in value) || value['agent'] === undefined) return false;
	if (!('ship' in value) || value['ship'] === undefined) return false;
	if (!('transaction' in value) || value['transaction'] === undefined) return false;
	return true;
}

export function PurchaseShip201ResponseDataFromJSON(json: any): PurchaseShip201ResponseData {
	return PurchaseShip201ResponseDataFromJSONTyped(json, false);
}

export function PurchaseShip201ResponseDataFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): PurchaseShip201ResponseData {
	if (json == null) {
		return json;
	}
	return {
		agent: AgentFromJSON(json['agent']),
		ship: ShipFromJSON(json['ship']),
		transaction: ShipyardTransactionFromJSON(json['transaction'])
	};
}

export function PurchaseShip201ResponseDataToJSON(value?: PurchaseShip201ResponseData | null): any {
	if (value == null) {
		return value;
	}
	return {
		agent: AgentToJSON(value['agent']),
		ship: ShipToJSON(value['ship']),
		transaction: ShipyardTransactionToJSON(value['transaction'])
	};
}
