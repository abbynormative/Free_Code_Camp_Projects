
angular.module('calculator', [])
    .controller('controller', ['$scope', function($scope) {
      
      $scope.inputNumber='';
      
      $scope.calculate = function(){
        if(eval($scope.inputNumber).toString().length>12){
          $scope.inputNumber = eval($scope.inputNumber).toFixed(10);
          console.log($scope.inputNumber + ' this should trigger when length > 12');
           }
        else{$scope.inputNumber = eval($scope.inputNumber);
        console.log($scope.inputNumber + ' this is result inside calculate');
            }
      }

      $scope.reset = function() {
        $scope.inputNumber='';
        
        };
      
      var passNumber = '';
      
      numberPressed = function(){
         
             $scope.inputNumber = $scope.inputNumber + passNumber;
          
      }
      $scope.seven = function(){
         passNumber = '7';
         numberPressed();
         }
      $scope.eight = function(){
         passNumber = '8';
         numberPressed();
         }
      $scope.nine = function(){
         passNumber = '9';
         numberPressed();
         }
      $scope.four = function(){
         passNumber = '4';
         numberPressed();
         }
      $scope.five = function(){
         passNumber = '5';
         numberPressed();
         }
      $scope.six = function(){
        passNumber = '6';
         numberPressed();
         }
      $scope.one = function(){
         passNumber = '1';
         numberPressed();
         }
      $scope.two = function(){
         passNumber = '2';
         numberPressed();
         }
      $scope.three = function(){
         passNumber = '3';
         numberPressed();
      }
      $scope.zero = function(){
         passNumber = '0';
         numberPressed();
         }
      $scope.decimal = function(){
         passNumber = '.';
         numberPressed();
      }
      $scope.add = function(){
        passNumber = '+';
        numberPressed();
      }
      $scope.subtract = function(){
        passNumber = '-';
        numberPressed();
      }
      $scope.divide = function(){
        passNumber = '/';
        numberPressed();
      }
      $scope.multiply = function(){
        passNumber = '*';
        numberPressed();
      }
      
      
    }]);
