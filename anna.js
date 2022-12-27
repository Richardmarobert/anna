module.exports = function(RED){

	function anna(config){
	
		RED.nodes.createNode(this,config);
		
		 this.smile = RED.nodes.getNode(config.smile);
		 	
		 	
		 
 		if (this.smile) {
            // Do something with:
            //  this.server.host
            //  this.server.port
        } else {
            // No config node configured
        }
    }
RED.nodes.registerType("anna", anna);
}
