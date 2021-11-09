case "ACS":
var checkoutCompletionPromise = null;

var threeDSMethodNotificationURL = $scope._deviceInfoAPI + "/" + $scope._M + "/" + getUrlParameter("key").replace(/ /g, "");
var threeDSServerTransID = resolveMessage['3ds_trxid'];

var threedsMethodData = { "threeDSMethodNotificationURL":threeDSMethodNotificationURL, "threeDSServerTransID":threeDSServerTransID };
var encodedMethodData = btoa(JSON.stringify(threedsMethodData));

// nca3DSWebSDK.createIframeAndInit3DSMethod(threeDSMethodUrl, threeDSMethodData, frameName, rootContainer, callbackWhenLoaded);
nca3DSWebSDK.createIframeAndInit3DSMethod(resolveMessage['3ds_method'],
	encodedMethodData,
	'threeDSMethodIFrameContainer',
	$('#frameContainer').get(0),null);

checkoutCompletionPromise = $scope.checkoutCompletion($scope._M, threeDSServerTransID, encodedMethodData, resolveMessage['3ds_method']);
checkoutCompletionPromise.then(function(resolveMessage) {
	$scope.handleResolveMessage(resolveMessage)
}, function(rejectMessage) {
	$scope.handleRejectMessage(rejectMessage)
});

break;