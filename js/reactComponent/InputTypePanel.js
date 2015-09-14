var InputTypePanel = React.createClass({
				render: function() {

					var inputTypePanel_Style = {
						padding: 0,
						width: 120						
					};

					return (
						<td id="inputTypePanel" style={inputTypePanel_Style}>
	                        <div tabIndex="1" className="inputTypeTabSelected" id="typeNewDiv">
	                            <div className="attFloatLeft">New</div>
	                            <div className="selectedArrow attFloatRight">&nbsp;</div>
	                        </div>
	                        <div tabIndex="2" className="inputTypeTab" id="typeInCompleteDiv">
	                            <div className="attFloatLeft">Incomplete</div>
	                            <div className="selectedArrow attFloatRight">&nbsp;</div>
	                        </div>
	                    </td>
					);
				}
			});