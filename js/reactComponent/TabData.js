var TabData = React.createClass({
				render: function() {
					return (
						<div id="tabData">
							<div className="divCell" id="inputPanelDiv">
			                    <table cellPadding="0" cellSpacing="0">
			                        <tbody>
			                        	<tr>
			                        		<InputTypePanel />
			                        		<BasicInput />
			                        		<AttFloatNone />
			                        	</tr>
			                        </tbody>
			                    </table>
			                </div>
			                <div className="dataPanelDiv">

			                </div>
						</div>
					);
				}
			});
