var db = require("../model/db");

module.exports = {
	getData: function (req, res) {

		/* Соритрровака */
		if (req.query.orderby) { orderby_var = req.query.orderby } else { orderby_var = "ID"; }
		if (req.query.orderbyad) { orderbyad_var = req.query.orderbyad } else { orderbyad_var = "DESC"; }

		/* Получение данных */
		
		db.Orders.findAndCountAll({
			offset: parseInt(req.query.skip),
			limit: parseInt(req.query.take),
			order: [
				[orderby_var, orderbyad_var]
			],
		}).then(data => res.json({
			"skip": req.query.skip,
			"take": req.query.take,
			"orderby_var": orderby_var,
			"orderbyad_var": orderbyad_var,
			"totalCount": data.count,
			"items": data.rows

		}));
	},


	removeData: function (req, res) {
		db.Orders.findById(req.params.userId)
			.then((user) =>
				user.destroy())
			.then(() =>
				res.json({}));
	},

	addData: function (req, res) {
		db.Orders.create(req.body).then((obj) =>
			res.json({ id: obj.id }));
	},
	updateData: function (req, res) {
		var name = req.body;
		console.log(name)
		db.Orders.findById(req.params.userId)
			.then((user) =>
				user.update(req.body))
			.then(() =>
				res.json({}));
	}
};