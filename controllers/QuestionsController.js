experts.controller("QuestionsCtrl", function QuestionsCtrl($scope, QuestionsFactory, UtilitiesFactory){
	$scope.questions = QuestionsFactory.questions;
	$scope.QuestionsFactory = QuestionsFactory;
});