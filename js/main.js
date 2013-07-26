function HelloCtrl($scope) {
    $scope.name = 'World';
    $scope.AddGoogleTagEvent = function(){
        alert('hi ' + $scope.name);
        window.dataLayer.push({
            'event': 'pageview',
            'virtualUrl' : window.location.host + '/' + $scope.name
        })
    }
}