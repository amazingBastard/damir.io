AccountsTemplates.configure({
	// Behaviour
	confirmPassword: false,
	enablePasswordChange: false,
	forbidClientAccountCreation: true,
	overrideLoginErrors: true,
	sendVerificationEmail: false,

	// Appearance
	showAddRemoveServices: false,
	showForgotPasswordLink: false,
	showLabels: false,
	showPlaceholders: true,

	// Client-side Validation
	continuousValidation: true,
	negativeFeedback: false,
	negativeValidation: true,
	positiveValidation: true,
	positiveFeedback: true,
	showValidating: true,

	// Redirects
	homeRoutePath: '/',
	redirectTimeout: 1000,

	// Texts
	texts: {
		button: {
			signIn: 'Login'
		},
		title: {
			signIn: 'Admin Entry'
		},
	}
});
