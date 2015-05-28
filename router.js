Router.configure({
layoutTemplate: 'layout',
notFoundTemplate: 'notFound',
loadingTemplate: 'loading',
});

AccountsTemplates.configureRoute('signIn', {
    name: 'userlogin',
    path: '/login', 
    redirect: '/',
});

Router.route('/', {name: 'home'});
Router.route('/projekte', {name: 'AllProjects'});
Router.route('/meineprojekte', {name: 'MyProjects'});
Router.route('/meinedrafts', {name: 'MyDrafts'});
Router.route('/projectSubmit', {name: 'projectSubmit'});


Router.route('/projekte/:jobnummer', {
name: 'projectDetail',
data: function() { return Projekte.findOne({jobnummer: this.params.jobnummer});
}
});


//Router.route('/project/:jobNumber', {
//name: 'singleproject',
//data: function() { return ProjectList.findOne({jobNumber: this.params.jobNumber});
//}
//});

//var requireLogin = function() {
//if (! Meteor.user()) {
//if (Meteor.loggingIn()) {
//this.render(this.loadingTemplate);
//} else {
//this.render('signup');
//}
//} else {
//this.next();
//}
//}

//Router.onBeforeAction(requireLogin, {only: ['project', 'singleproject', 'overview']});