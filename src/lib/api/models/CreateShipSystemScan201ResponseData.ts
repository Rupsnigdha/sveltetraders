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
import type { Cooldown } from './Cooldown';
import { CooldownFromJSON, CooldownFromJSONTyped, CooldownToJSON } from './Cooldown';
import type { ScannedSystem } from './ScannedSystem';
import {
	ScannedSystemFromJSON,
	ScannedSystemFromJSONTyped,
	ScannedSystemToJSON
} from './ScannedSystem';

/**
 *
 * @export
 * @interface CreateShipSystemScan201ResponseData
 */
export interface CreateShipSystemScan201ResponseData {
	/**
	 *
	 * @type {Cooldown}
	 * @memberof CreateShipSystemScan201ResponseData
	 */
	cooldown: Cooldown;
	/**
	 * List of scanned systems.
	 * @type {Array<ScannedSystem>}
	 * @memberof CreateShipSystemScan201ResponseData
	 */
	systems: Array<ScannedSystem>;
}

/**
 * Check if a given object implements the CreateShipSystemScan201ResponseData interface.
 */
export function instanceOfCreateShipSystemScan201ResponseData(
	value: object
): value is CreateShipSystemScan201ResponseData {
	if (!('cooldown' in value) || value['cooldown'] === undefined) return false;
	if (!('systems' in value) || value['systems'] === undefined) return false;
	return true;
}

export function CreateShipSystemScan201ResponseDataFromJSON(
	json: any
): CreateShipSystemScan201ResponseData {
	return CreateShipSystemScan201ResponseDataFromJSONTyped(json, false);
}

export function CreateShipSystemScan201ResponseDataFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): CreateShipSystemScan201ResponseData {
	if (json == null) {
		return json;
	}
	return {
		cooldown: CooldownFromJSON(json['cooldown']),
		systems: (json['systems'] as Array<any>).map(ScannedSystemFromJSON)
	};
}

export function CreateShipSystemScan201ResponseDataToJSON(
	value?: CreateShipSystemScan201ResponseData | null
): any {
	if (value == null) {
		return value;
	}
	return {
		cooldown: CooldownToJSON(value['cooldown']),
		systems: (value['systems'] as Array<any>).map(ScannedSystemToJSON)
	};
}
