'use strict';

module.exports = {
	echo(event)
	{
		return Promise.resolve(event);
	},
};
