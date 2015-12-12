experts.controller("AnswersCtrl", function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory){
	$scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
	$scope.addAnswer = function(){
		$scope.question.answers.push({answer: $scope.answer, position: 0});
		$scope.answer = null;
	}
});