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

/**
 * Type of ship
 * @export
 * @enum {string}
 */
export enum ShipType {
	Probe = 'SHIP_PROBE',
	MiningDrone = 'SHIP_MINING_DRONE',
	SiphonDrone = 'SHIP_SIPHON_DRONE',
	Interceptor = 'SHIP_INTERCEPTOR',
	LightHauler = 'SHIP_LIGHT_HAULER',
	CommandFrigate = 'SHIP_COMMAND_FRIGATE',
	Explorer = 'SHIP_EXPLORER',
	HeavyFreighter = 'SHIP_HEAVY_FREIGHTER',
	LightShuttle = 'SHIP_LIGHT_SHUTTLE',
	OreHound = 'SHIP_ORE_HOUND',
	RefiningFreighter = 'SHIP_REFINING_FREIGHTER',
	Surveyor = 'SHIP_SURVEYOR'
}

export function instanceOfShipType(value: any): boolean {
	for (const key in ShipType) {
		if (Object.prototype.hasOwnProperty.call(ShipType, key)) {
			if ((ShipType as Record<string, ShipType>)[key] === value) {
				return true;
			}
		}
	}
	return false;
}

export function ShipTypeFromJSON(json: any): ShipType {
	return ShipTypeFromJSONTyped(json, false);
}

export function ShipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipType {
	return json as ShipType;
}

export function ShipTypeToJSON(value?: ShipType | null): any {
	return value as any;
}
