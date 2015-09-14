var Content = React.createClass({
				render: function() {
					return (
						<div id="content">
					        <div id="topHeight"></div>					      					        
							<div id="lockScreenWait" className="lockScreenWait" align="center" hidden="true">
							    <img src="https://develop.therapbd.net/ma/images/wait_icon.gif" alt="Wait" border="none" align="absmiddle" />
							    <span>Working... Please wait</span>
							    <span id="timerView"></span>
							</div>
							<Sections />
							<div id="bottomHeight"></div>
						</div>
					);
				}
			});