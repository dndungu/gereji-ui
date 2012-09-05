core.control.extend('form', function(){
	var _private = {
		html: new Object(),
		record: new Object(),
		name: new String(),
		template: new String(),
		command: new String(),
		activity: {},
		lockflag: false,
		getTemplate: function(){
			var subject = this;
			var url = '/form/' + subject.name;
			core.ajax.get(url, function(){
				subject.activity.getTemplate = arguments[0].readyState;
				if(arguments[0].readyState != 4 || arguments[0].status != 200) return;
				subject.template = arguments[0].responseText;
			});
		},
		initPostProcess: function(){
			var subject = this;
			this.html.unbind('submit').submit(function(){
				event.preventDefault();
				var url = '/form/' + subject.name;
				var data = subject.getPostData();
				core.ajax.post(url, data, function(){
					
				});
			});
		},
		getPostData: function(){
			return this.html.serialize()+'&command='+this.command+'&primarykey='+String(this.primarykey);
		}
	};
	var _public = {
		init: function(){
			_private.source = arguments[0];
			_private.getTemplate();
		},
		setHTML: function(){
			_private.html = arguments[0];
		},
		getHTML: function(){
			return _private.html;
		},
		setRecord: function(){
			_private.record = arguments[0];
		},
		getRecord: function(){
			return _private.record;
		},
		setName: function(){
			_private.name = arguments[0];
		},
		getName: function(){
			return _private.name;
		},
		setTemplate: function(){
			_private.template = arguments[0];
		},
		getTemplate: function(){
			return _private.template;
		},
		setCommand: function(){
			_private.command = arguments[0];
		},
		getCommand: function(){
			return _private.command;
		},
		setLockFlag: function(){
			_private.lockflag = arguments[0];
		},
		getLockFlag: function(){
			return _private.lockflag;
		}
	};
	for(i in _public){
		this[i] = _public[i];
	}
	this.init(arguments[0]);	
});