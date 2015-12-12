var experts = angular.module('experts', ['ui.router']);

experts.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('questions', {
		url: "",
		templateUrl: "partials/questions.html",
		controller: "QuestionsCtrl"
	});
	
	$stateProvider.state('question', {
		url: "/:questionId",
		templateUrl: "partials/answerForm.html",
		controller: "AnswersCtrl"
	});
});