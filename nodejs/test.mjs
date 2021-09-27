import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';

/**
 * @param {string} region
 * @returns {Promise.<?string>}
 */
export async function invokeLambda(region)
{
	const response = await new LambdaClient({
		endpoint: 'http://aws:4566',
		credentials: { accessKeyId: '', secretAccessKey: '' },
		version: '2017-10-17',
		region,
	}).send(new InvokeCommand({
		FunctionName: `test-aws-sdk-${region}-echo`,
		Payload: Uint8Array.from(Buffer.from('{ "message": "Hello World" }')),
	}));
	if (response.FunctionError) {
		return Promise.reject(new Error(response.FunctionError));
	}
	return response.Payload ? JSON.parse(Buffer.from(response.Payload).toString()) : null;
}
