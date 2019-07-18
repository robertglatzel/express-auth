const router = require('express').Router();

//check if user is logged in
const authCheck = (req, res, next) => {
	if (!req.user) {
		// executes if user is not logged in.
		res.redirect('/auth/login');
	} else {
		// means go onto the next piece of middleware.
		next();
	}
};

router.get('/', authCheck, (req, res) => {
	res.render('profile', { user: req.user });
});

module.exports = router;
