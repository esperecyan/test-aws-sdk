1. `npm install`
1. `npm run dev`
1.
	- (Successful) http://localhost:8081/us-east-1
	- (Failed) http://localhost:8081/ap-northeast-1
	- (Successful) `aws lambda invoke --function-name test-aws-sdk-us-east-1-echo --payload eyAibWVzc2FnZSI6ICJIZWxsbyBXb3JsZCIgfQ== --region us-east-1 --endpoint http://localhost:4566 output.txt`
	- (Successful) `aws lambda invoke --function-name test-aws-sdk-ap-northeast-1-echo --payload eyAibWVzc2FnZSI6ICJIZWxsbyBXb3JsZCIgfQ== --region ap-northeast-1 --endpoint http://localhost:4566 output.txt`
