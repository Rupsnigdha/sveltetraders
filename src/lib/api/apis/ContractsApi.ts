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

import * as runtime from '../runtime';
import type {
	AcceptContract200Response,
	DeliverContract200Response,
	DeliverContractRequest,
	FulfillContract200Response,
	GetContract200Response,
	GetContracts200Response
} from '../models/index';
import {
	AcceptContract200ResponseFromJSON,
	AcceptContract200ResponseToJSON,
	DeliverContract200ResponseFromJSON,
	DeliverContract200ResponseToJSON,
	DeliverContractRequestFromJSON,
	DeliverContractRequestToJSON,
	FulfillContract200ResponseFromJSON,
	FulfillContract200ResponseToJSON,
	GetContract200ResponseFromJSON,
	GetContract200ResponseToJSON,
	GetContracts200ResponseFromJSON,
	GetContracts200ResponseToJSON
} from '../models/index';

export interface AcceptContractRequest {
	contractId: string;
}

export interface DeliverContractOperationRequest {
	contractId: string;
	deliverContractRequest?: DeliverContractRequest;
}

export interface FulfillContractRequest {
	contractId: string;
}

export interface GetContractRequest {
	contractId: string;
}

export interface GetContractsRequest {
	page?: number;
	limit?: number;
}

/**
 *
 */
export class ContractsApi extends runtime.BaseAPI {
	/**
	 * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
	 * Accept Contract
	 */
	async acceptContractRaw(
		requestParameters: AcceptContractRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<AcceptContract200Response>> {
		if (requestParameters['contractId'] == null) {
			throw new runtime.RequiredError(
				'contractId',
				'Required parameter "contractId" was null or undefined when calling acceptContract().'
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		if (this.configuration && this.configuration.accessToken) {
			const token = this.configuration.accessToken;
			const tokenString = await token('AgentToken', []);

			if (tokenString) {
				headerParameters['Authorization'] = `Bearer ${tokenString}`;
			}
		}
		const response = await this.request(
			{
				path: `/my/contracts/{contractId}/accept`.replace(
					`{${'contractId'}}`,
					encodeURIComponent(String(requestParameters['contractId']))
				),
				method: 'POST',
				headers: headerParameters,
				query: queryParameters
			},
			initOverrides
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			AcceptContract200ResponseFromJSON(jsonValue)
		);
	}

	/**
	 * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
	 * Accept Contract
	 */
	async acceptContract(
		requestParameters: AcceptContractRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<AcceptContract200Response> {
		const response = await this.acceptContractRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	 * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
	 * Deliver Cargo to Contract
	 */
	async deliverContractRaw(
		requestParameters: DeliverContractOperationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<DeliverContract200Response>> {
		if (requestParameters['contractId'] == null) {
			throw new runtime.RequiredError(
				'contractId',
				'Required parameter "contractId" was null or undefined when calling deliverContract().'
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		if (this.configuration && this.configuration.accessToken) {
			const token = this.configuration.accessToken;
			const tokenString = await token('AgentToken', []);

			if (tokenString) {
				headerParameters['Authorization'] = `Bearer ${tokenString}`;
			}
		}
		const response = await this.request(
			{
				path: `/my/contracts/{contractId}/deliver`.replace(
					`{${'contractId'}}`,
					encodeURIComponent(String(requestParameters['contractId']))
				),
				method: 'POST',
				headers: headerParameters,
				query: queryParameters,
				body: DeliverContractRequestToJSON(requestParameters['deliverContractRequest'])
			},
			initOverrides
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			DeliverContract200ResponseFromJSON(jsonValue)
		);
	}

	/**
	 * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
	 * Deliver Cargo to Contract
	 */
	async deliverContract(
		requestParameters: DeliverContractOperationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<DeliverContract200Response> {
		const response = await this.deliverContractRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	 * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
	 * Fulfill Contract
	 */
	async fulfillContractRaw(
		requestParameters: FulfillContractRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<FulfillContract200Response>> {
		if (requestParameters['contractId'] == null) {
			throw new runtime.RequiredError(
				'contractId',
				'Required parameter "contractId" was null or undefined when calling fulfillContract().'
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		if (this.configuration && this.configuration.accessToken) {
			const token = this.configuration.accessToken;
			const tokenString = await token('AgentToken', []);

			if (tokenString) {
				headerParameters['Authorization'] = `Bearer ${tokenString}`;
			}
		}
		const response = await this.request(
			{
				path: `/my/contracts/{contractId}/fulfill`.replace(
					`{${'contractId'}}`,
					encodeURIComponent(String(requestParameters['contractId']))
				),
				method: 'POST',
				headers: headerParameters,
				query: queryParameters
			},
			initOverrides
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			FulfillContract200ResponseFromJSON(jsonValue)
		);
	}

	/**
	 * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
	 * Fulfill Contract
	 */
	async fulfillContract(
		requestParameters: FulfillContractRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<FulfillContract200Response> {
		const response = await this.fulfillContractRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	 * Get the details of a contract by ID.
	 * Get Contract
	 */
	async getContractRaw(
		requestParameters: GetContractRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<GetContract200Response>> {
		if (requestParameters['contractId'] == null) {
			throw new runtime.RequiredError(
				'contractId',
				'Required parameter "contractId" was null or undefined when calling getContract().'
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		if (this.configuration && this.configuration.accessToken) {
			const token = this.configuration.accessToken;
			const tokenString = await token('AgentToken', []);

			if (tokenString) {
				headerParameters['Authorization'] = `Bearer ${tokenString}`;
			}
		}
		const response = await this.request(
			{
				path: `/my/contracts/{contractId}`.replace(
					`{${'contractId'}}`,
					encodeURIComponent(String(requestParameters['contractId']))
				),
				method: 'GET',
				headers: headerParameters,
				query: queryParameters
			},
			initOverrides
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			GetContract200ResponseFromJSON(jsonValue)
		);
	}

	/**
	 * Get the details of a contract by ID.
	 * Get Contract
	 */
	async getContract(
		requestParameters: GetContractRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<GetContract200Response> {
		const response = await this.getContractRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	 * Return a paginated list of all your contracts.
	 * List Contracts
	 */
	async getContractsRaw(
		requestParameters: GetContractsRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<runtime.ApiResponse<GetContracts200Response>> {
		const queryParameters: any = {};

		if (requestParameters['page'] != null) {
			queryParameters['page'] = requestParameters['page'];
		}

		if (requestParameters['limit'] != null) {
			queryParameters['limit'] = requestParameters['limit'];
		}

		const headerParameters: runtime.HTTPHeaders = {};

		if (this.configuration && this.configuration.accessToken) {
			const token = this.configuration.accessToken;
			const tokenString = await token('AgentToken', []);

			if (tokenString) {
				headerParameters['Authorization'] = `Bearer ${tokenString}`;
			}
		}
		const response = await this.request(
			{
				path: `/my/contracts`,
				method: 'GET',
				headers: headerParameters,
				query: queryParameters
			},
			initOverrides
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			GetContracts200ResponseFromJSON(jsonValue)
		);
	}

	/**
	 * Return a paginated list of all your contracts.
	 * List Contracts
	 */
	async getContracts(
		requestParameters: GetContractsRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction
	): Promise<GetContracts200Response> {
		const response = await this.getContractsRaw(requestParameters, initOverrides);
		return await response.value();
	}
}
