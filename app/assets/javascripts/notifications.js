function movieAdded() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-plus',
	message: 'Added movie to your queue',
  },{
	// settings
	element: 'body',
	position: null,
	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function movieRemoved() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Removed movie from your queue',
  },{
	// settings
	element: 'body',
	position: null,
	type: "danger",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function movieFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-ok',
	message: 'Movie marked as watched',
  },{
	// settings
	element: 'body',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function movieNotFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Movie marked as unwatched',
  },{
	// settings
	element: 'body',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function movieAddFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Added movie as finished',
  },{
	// settings
	element: 'body',
	position: null,
	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function albumAdded() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-plus',
	message: 'Added album to your queue',
  },{
	// settings
	element: 'body',
	position: null,
	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function albumRemoved() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Removed album from your queue',
  },{
	// settings
	element: 'body',
	position: null,
	type: "danger",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function albumFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-ok',
	message: 'Album marked as listened',
  },{
	// settings
	element: 'body',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function albumNotFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Album marked as not listened',
  },{
	// settings
	element: 'body',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function albumAddFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Added album as listened',
  },{
	// settings
	element: 'body',
	position: null,
	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function showAdded() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-plus',
	message: 'Added show to your queue',
  },{
	// settings
	element: 'body',
	position: null,
	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function showRemoved() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Removed show from your queue',
  },{
	// settings
	element: 'body',
	position: null,
	type: "danger",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function showFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-ok',
	message: 'Show marked as watched',
  },{
	// settings
	element: 'body',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function showNotFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Show marked as unwatched',
  },{
	// settings
	element: 'body',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}

function showAddFinished() {
  $.notify({
	// options
	icon: 'glyphicon glyphicon-remove',
	message: 'Added show as finished',
  },{
	// settings
	element: 'body',
	position: null,
	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "center"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 1000,
	mouse_over: null,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		// '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
}
