angular.module('dronePass.droneSimulator', [])
.factory('DroneSimulator', function (socketFactory) {

    return socketFactory({
      ioSocket: io.connect('http://10.6.23.224:8080')
    });

})

