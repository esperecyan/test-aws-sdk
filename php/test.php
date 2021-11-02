<?php
declare(strict_types=1);

require_once '../vendor/autoload.php';

use Aws\Lambda\LambdaClient;

ini_set('html_errors', '0');

header('content-type: text/plain');

if (empty($_SERVER['PATH_INFO'])
    || preg_match('#^/(us-east-1|ap-northeast-1)$#u', $_SERVER['PATH_INFO'], $matches) !== 1) {
    http_response_code(404);
    exit;
}
$region = $matches[1];

$result = (new LambdaClient([
    'endpoint' => 'http://aws:4566',
    'credentials' => false,
    'version' => '2015-03-31',
    'region' => $region,
]))->invoke([ 'FunctionName' => "test-aws-sdk-$region-echo", 'Payload' => '{ "message": "Hello World" }' ]);
if ($result['FunctionError']) {
    throw new Exception($result['FunctionError']);
}

header('content-type: application/json');
echo $result['Payload'];
