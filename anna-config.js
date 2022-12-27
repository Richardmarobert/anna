module.exports = function(RED){

function smile(config)	{
		RED.nodes.createNode(this,config);
		
			this.host = config.host;
			this.ip = config.ip; 

        }
		
	RED.nodes.registerType("anna-config", smile);
        }

