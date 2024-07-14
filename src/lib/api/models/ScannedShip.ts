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
import type { ShipRegistration } from './ShipRegistration';
import {
	ShipRegistrationFromJSON,
	ShipRegistrationFromJSONTyped,
	ShipRegistrationToJSON
} from './ShipRegistration';
import type { ScannedShipFrame } from './ScannedShipFrame';
import {
	ScannedShipFrameFromJSON,
	ScannedShipFrameFromJSONTyped,
	ScannedShipFrameToJSON
} from './ScannedShipFrame';
import type { ScannedShipEngine } from './ScannedShipEngine';
import {
	ScannedShipEngineFromJSON,
	ScannedShipEngineFromJSONTyped,
	ScannedShipEngineToJSON
} from './ScannedShipEngine';
import type { ScannedShipReactor } from './ScannedShipReactor';
import {
	ScannedShipReactorFromJSON,
	ScannedShipReactorFromJSONTyped,
	ScannedShipReactorToJSON
} from './ScannedShipReactor';
import type { ScannedShipMountsInner } from './ScannedShipMountsInner';
import {
	ScannedShipMountsInnerFromJSON,
	ScannedShipMountsInnerFromJSONTyped,
	ScannedShipMountsInnerToJSON
} from './ScannedShipMountsInner';
import type { ShipNav } from './ShipNav';
import { ShipNavFromJSON, ShipNavFromJSONTyped, ShipNavToJSON } from './ShipNav';

/**
 * The ship that was scanned. Details include information about the ship that could be detected by the scanner.
 * @export
 * @interface ScannedShip
 */
export interface ScannedShip {
	/**
	 * The globally unique identifier of the ship.
	 * @type {string}
	 * @memberof ScannedShip
	 */
	symbol: string;
	/**
	 *
	 * @type {ShipRegistration}
	 * @memberof ScannedShip
	 */
	registration: ShipRegistration;
	/**
	 *
	 * @type {ShipNav}
	 * @memberof ScannedShip
	 */
	nav: ShipNav;
	/**
	 *
	 * @type {ScannedShipFrame}
	 * @memberof ScannedShip
	 */
	frame?: ScannedShipFrame;
	/**
	 *
	 * @type {ScannedShipReactor}
	 * @memberof ScannedShip
	 */
	reactor?: ScannedShipReactor;
	/**
	 *
	 * @type {ScannedShipEngine}
	 * @memberof ScannedShip
	 */
	engine: ScannedShipEngine;
	/**
	 * List of mounts installed in the ship.
	 * @type {Array<ScannedShipMountsInner>}
	 * @memberof ScannedShip
	 */
	mounts?: Array<ScannedShipMountsInner>;
}

/**
 * Check if a given object implements the ScannedShip interface.
 */
export function instanceOfScannedShip(value: object): value is ScannedShip {
	if (!('symbol' in value) || value['symbol'] === undefined) return false;
	if (!('registration' in value) || value['registration'] === undefined) return false;
	if (!('nav' in value) || value['nav'] === undefined) return false;
	if (!('engine' in value) || value['engine'] === undefined) return false;
	return true;
}

export function ScannedShipFromJSON(json: any): ScannedShip {
	return ScannedShipFromJSONTyped(json, false);
}

export function ScannedShipFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScannedShip {
	if (json == null) {
		return json;
	}
	return {
		symbol: json['symbol'],
		registration: ShipRegistrationFromJSON(json['registration']),
		nav: ShipNavFromJSON(json['nav']),
		frame: json['frame'] == null ? undefined : ScannedShipFrameFromJSON(json['frame']),
		reactor: json['reactor'] == null ? undefined : ScannedShipReactorFromJSON(json['reactor']),
		engine: ScannedShipEngineFromJSON(json['engine']),
		mounts:
			json['mounts'] == null
				? undefined
				: (json['mounts'] as Array<any>).map(ScannedShipMountsInnerFromJSON)
	};
}

export function ScannedShipToJSON(value?: ScannedShip | null): any {
	if (value == null) {
		return value;
	}
	return {
		symbol: value['symbol'],
		registration: ShipRegistrationToJSON(value['registration']),
		nav: ShipNavToJSON(value['nav']),
		frame: ScannedShipFrameToJSON(value['frame']),
		reactor: ScannedShipReactorToJSON(value['reactor']),
		engine: ScannedShipEngineToJSON(value['engine']),
		mounts:
			value['mounts'] == null
				? undefined
				: (value['mounts'] as Array<any>).map(ScannedShipMountsInnerToJSON)
	};
}
