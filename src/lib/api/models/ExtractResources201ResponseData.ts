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
import type { ShipCargo } from './ShipCargo';
import { ShipCargoFromJSON, ShipCargoFromJSONTyped, ShipCargoToJSON } from './ShipCargo';
import type { Cooldown } from './Cooldown';
import { CooldownFromJSON, CooldownFromJSONTyped, CooldownToJSON } from './Cooldown';
import type { Extraction } from './Extraction';
import { ExtractionFromJSON, ExtractionFromJSONTyped, ExtractionToJSON } from './Extraction';
import type { ExtractResources201ResponseDataEventsInner } from './ExtractResources201ResponseDataEventsInner';
import {
	ExtractResources201ResponseDataEventsInnerFromJSON,
	ExtractResources201ResponseDataEventsInnerFromJSONTyped,
	ExtractResources201ResponseDataEventsInnerToJSON
} from './ExtractResources201ResponseDataEventsInner';

/**
 *
 * @export
 * @interface ExtractResources201ResponseData
 */
export interface ExtractResources201ResponseData {
	/**
	 *
	 * @type {Cooldown}
	 * @memberof ExtractResources201ResponseData
	 */
	cooldown: Cooldown;
	/**
	 *
	 * @type {Extraction}
	 * @memberof ExtractResources201ResponseData
	 */
	extraction: Extraction;
	/**
	 *
	 * @type {ShipCargo}
	 * @memberof ExtractResources201ResponseData
	 */
	cargo: ShipCargo;
	/**
	 *
	 * @type {Array<ExtractResources201ResponseDataEventsInner>}
	 * @memberof ExtractResources201ResponseData
	 */
	events: Array<ExtractResources201ResponseDataEventsInner>;
}

/**
 * Check if a given object implements the ExtractResources201ResponseData interface.
 */
export function instanceOfExtractResources201ResponseData(
	value: object
): value is ExtractResources201ResponseData {
	if (!('cooldown' in value) || value['cooldown'] === undefined) return false;
	if (!('extraction' in value) || value['extraction'] === undefined) return false;
	if (!('cargo' in value) || value['cargo'] === undefined) return false;
	if (!('events' in value) || value['events'] === undefined) return false;
	return true;
}

export function ExtractResources201ResponseDataFromJSON(
	json: any
): ExtractResources201ResponseData {
	return ExtractResources201ResponseDataFromJSONTyped(json, false);
}

export function ExtractResources201ResponseDataFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): ExtractResources201ResponseData {
	if (json == null) {
		return json;
	}
	return {
		cooldown: CooldownFromJSON(json['cooldown']),
		extraction: ExtractionFromJSON(json['extraction']),
		cargo: ShipCargoFromJSON(json['cargo']),
		events: (json['events'] as Array<any>).map(ExtractResources201ResponseDataEventsInnerFromJSON)
	};
}

export function ExtractResources201ResponseDataToJSON(
	value?: ExtractResources201ResponseData | null
): any {
	if (value == null) {
		return value;
	}
	return {
		cooldown: CooldownToJSON(value['cooldown']),
		extraction: ExtractionToJSON(value['extraction']),
		cargo: ShipCargoToJSON(value['cargo']),
		events: (value['events'] as Array<any>).map(ExtractResources201ResponseDataEventsInnerToJSON)
	};
}
